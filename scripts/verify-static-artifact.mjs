/**
 * Prevent a blank, stale or product-workbench page from being deployed as the
 * Spine InnovTech corporate site.
 */
import { readFileSync, statSync } from "node:fs";
const text = readFileSync("out/index.html", "utf8");
const sitemap = readFileSync("out/sitemap.xml", "utf8");
const product = readFileSync("out/product.html", "utf8");
const redirects = readFileSync("out/_redirects", "utf8")
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(line => line && !line.startsWith("#"))
  .map(line => line.split(/\s+/));
if (!product.includes("Explore the features") || !product.includes("Governed next steps")) {
  throw new Error("Static export missing local Spine Workspace product features.");
}
if (redirects.some(([source]) => source.replace(/\/$/, "") === "/product")) {
  throw new Error("Cloudflare asset redirects must not override the local /product page.");
}
const productAlias = redirects.find(([source]) => source === "/spineworkspace");
if (!productAlias || productAlias[1] !== "/product" || productAlias[2] !== "301") {
  throw new Error("Legacy /spineworkspace entry must redirect internally to /product.");
}
if (!text.includes("Building the intelligence behind") || !text.includes("Spine InnovTech")) {
  throw new Error("Static export missing company-led corporate hero/company identity.");
}
const header = text.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
for (const category of ["Company", "Technology", "Solutions", "Insights", "Developers"]) {
  if (!header.includes(category)) throw new Error(`Corporate navigation category missing: ${category}`);
}
if (text.includes("Good morning, Operator") || text.includes("Customer Zero")) {
  throw new Error("Authenticated/demo workspace content must not become public corporate homepage.");
}
if (!sitemap.includes("spineinnovlabs.spineworkspace.com")) {
  throw new Error("Sitemap is missing current production corporate origin.");
}
if (statSync("out/index.html").size < 1024) {
  throw new Error("Suspiciously small production HTML.");
}
console.log("Corporate HTML, product routing, and sitemap artifact verified.");
