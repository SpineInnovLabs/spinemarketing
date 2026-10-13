/**
 * Purges the entire Cloudflare Edge Cache for spineworkspace.com zone
 * so normal visitors instantly receive fresh production releases.
 */
import { execSync } from "node:child_process";

const ZONE_ID = "e400477f3fc2b13a70dd3d63407ce21b";

let apiToken = "";

// 1. Try extracting active production Cloudflare token from Infisical vault
try {
  const envOut = execSync(
    "infisical export --projectId=6b21acb7-79c9-48bf-82e7-bf1a4dc9c031 --env=prod --format=dotenv",
    { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
  );
  for (const line of envOut.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("CLOUDFLARE_API_TOKEN=")) {
      apiToken = trimmed.slice("CLOUDFLARE_API_TOKEN=".length).replace(/^["'\s]+|["'\s]+$/g, "");
      break;
    }
  }
} catch {
  // Infisical not available
}

// 2. Fall back to process.env if Infisical did not provide a token
if (!apiToken) {
  apiToken = (process.env.CLOUDFLARE_API_TOKEN || "").replace(/^["'\s]+|["'\s]+$/g, "");
}

if (!apiToken) {
  console.warn("⚠️ Warning: CLOUDFLARE_API_TOKEN not found. Skipping cache purge step.");
  process.exit(0);
}

try {
  const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ purge_everything: true }),
  });

  const data = await res.json();
  if (data.success) {
    console.log("✓ Cloudflare edge cache purged successfully (purge_everything: true).");
  } else {
    console.warn("⚠️ Warning: Cloudflare cache purge failed:", data.errors);
  }
} catch (err) {
  console.warn("⚠️ Warning: Cloudflare cache purge request failed:", err.message);
}
