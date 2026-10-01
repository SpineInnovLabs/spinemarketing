import { MetadataRoute } from "next"
import fs from "fs"
import path from "path"
import { posts } from "@/content/blog"

export const dynamic = "force-static"

const BASE_URL = "https://spineworkspace.com"

const PRIORITY_MAP: Record<string, number> = {
  "/": 1.0,
  "/spineworkspace": 0.95,
  "/twin": 0.9,
  "/business-context": 0.9,
  "/proof": 0.9,
  "/solutions": 0.92,
  "/use-cases": 0.85,
  "/platform": 0.85,
  "/developers": 0.85,
  "/pricing": 0.8,
}

const CHANGE_FREQ_MAP: Record<string, "weekly" | "monthly" | "yearly"> = {
  "/": "weekly",
  "/pricing": "weekly",
  "/blog": "weekly",
  "/changelog": "weekly",
  "/privacy": "yearly",
  "/terms": "yearly",
}

function discoverRoutes(dir: string, basePath: string = ""): string[] {
  const routes: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name.startsWith("_") || entry.name.startsWith("[") || entry.name.startsWith(".")) continue

    const fullPath = path.join(dir, entry.name)
    const routePath = `${basePath}/${entry.name}`

    const hasPage = fs.existsSync(path.join(fullPath, "page.tsx")) || fs.existsSync(path.join(fullPath, "page.ts"))
    if (hasPage) {
      routes.push(routePath)
    }

    routes.push(...discoverRoutes(fullPath, routePath))
  }

  return routes
}

function getPriority(route: string): number {
  if (PRIORITY_MAP[route] !== undefined) return PRIORITY_MAP[route]
  const depth = route.split("/").filter(Boolean).length
  if (depth === 1) return 0.8
  if (depth === 2) return 0.7
  return 0.5
}

function getChangeFrequency(route: string): "weekly" | "monthly" | "yearly" {
  return CHANGE_FREQ_MAP[route] || "monthly"
}

function getLastModified(filePath: string): string {
  try {
    const stats = fs.statSync(filePath)
    return stats.mtime.toISOString()
  } catch {
    return new Date().toISOString()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app")

  const hasRootPage = fs.existsSync(path.join(appDir, "page.tsx")) || fs.existsSync(path.join(appDir, "page.ts"))
  const discoveredRoutes = discoverRoutes(appDir)
  if (hasRootPage) {
    discoveredRoutes.unshift("/")
  }

  const staticEntries = discoveredRoutes.map((route) => {
    const routeDir = route === "/"
      ? appDir
      : path.join(appDir, ...route.split("/").filter(Boolean))
    const pageFile = fs.existsSync(path.join(routeDir, "page.tsx"))
      ? path.join(routeDir, "page.tsx")
      : path.join(routeDir, "page.ts")

    return {
      url: `${BASE_URL}${route}`,
      lastModified: getLastModified(pageFile),
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    }
  })

  const blogEntries = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
