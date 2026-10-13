/**
 * Production acceptance from an ordinary visitor's perspective.
 * No cache-busting parameter and no no-cache request headers: those can mask
 * stale content that Cloudflare still serves at the canonical URL.
 */
const origin = "https://spineinnovtech.spineworkspace.com";
const retries = Number(process.env.SPINE_DEPLOY_VERIFY_ATTEMPTS || 8);
const checks = [
  {
    path: "/",
    verify: (body) => body.includes("Building the intelligence behind") && body.includes("Spine InnovTech") && !body.includes("Good morning, Operator"),
  },
  {
    path: "/contact",
    verify: (body) => body.includes("Common questions") && body.includes("How do I get pricing?") && body.includes("Do I need to replace my current tools?"),
  },
  {
    path: "/docs",
    verify: (body) => body.includes("Spine InnovTech Documentation") && !body.includes("Spine Innov Labs"),
  },
  {
    path: "/llms.txt",
    verify: (body) => body.includes("# Spine InnovTech") && body.includes("Canonical Domain: " + origin),
  },
  {
    path: "/sitemap.xml",
    verify: (body) => body.includes(origin) && !body.includes("spineinnovlabs.spineworkspace.com"),
  },
];

async function inspect() {
  const failures = [];
  for (const { path, verify } of checks) {
    try {
      const response = await fetch(origin + path, {
        redirect: "follow",
        signal: AbortSignal.timeout(20000),
      });
      const body = await response.text();
      if (!response.ok || new URL(response.url).hostname !== new URL(origin).hostname || !verify(body)) {
        failures.push(path + ": HTTP " + response.status + "; latest content not verified");
      }
    } catch (error) {
      failures.push(path + ": " + error.message);
    }
  }
  try {
    const legacy = await fetch("https://spineinnovlabs.spineworkspace.com/pricing?release_check=1", {
      redirect: "manual",
      signal: AbortSignal.timeout(20000),
    });
    if (legacy.status !== 301 || legacy.headers.get("location") !== origin + "/pricing?release_check=1") {
      failures.push("/pricing legacy redirect: HTTP " + legacy.status + ", unexpected Location");
    }
  } catch (error) {
    failures.push("/pricing legacy redirect: " + error.message);
  }
  return failures;
}

let failures = [];
for (let attempt = 1; attempt <= retries; attempt++) {
  failures = await inspect();
  if (!failures.length) {
    console.log("Cloudflare marketing release verified at ordinary visitor URLs (5 pages + legacy redirect): " + origin);
    process.exit(0);
  }
  if (attempt < retries) await new Promise((resolve) => setTimeout(resolve, 7000));
}
console.error("Marketing deploy completed, but normal visitor release verification failed:");
for (const failure of failures) console.error(" - " + failure);
process.exitCode = 1;
