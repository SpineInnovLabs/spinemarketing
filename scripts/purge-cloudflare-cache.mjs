/**
 * Invalidate only the corporate marketing hostnames after a successful deploy.
 * The product, Workbench, auth and API hosts share this Cloudflare zone;
 * never use purge_everything here. A failed purge fails the release gate.
 */
import { execSync } from "node:child_process";

const ZONE_ID = "e400477f3fc2b13a70dd3d63407ce21b";
const MARKETING_HOSTS = ["spineinnovtech.spineworkspace.com", "spineinnovlabs.spineworkspace.com"];

function readToken() {
  const processToken = process.env.CLOUDFLARE_API_TOKEN?.trim();
  if (processToken) return processToken;

  // Keep supporting the existing Infisical-backed deployment environment.
  try {
    const envOut = execSync(
      "infisical export --projectId=6b21acb7-79c9-48bf-82e7-bf1a4dc9c031 --env=prod --format=dotenv",
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    );
    const line = envOut.split("\n").find((item) => item.trim().startsWith("CLOUDFLARE_API_TOKEN="));
    return line?.trim().slice("CLOUDFLARE_API_TOKEN=".length).replace(/^["'\s]+|["'\s]+$/g, "") ?? "";
  } catch {
    return "";
  }
}

const token = readToken();
if (!token) {
  console.error("Marketing cache purge blocked: CLOUDFLARE_API_TOKEN unavailable. Release not verified.");
  process.exit(1);
}

try {
  const response = await fetch("https://api.cloudflare.com/client/v4/zones/" + ZONE_ID + "/purge_cache", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ hosts: MARKETING_HOSTS }),
    signal: AbortSignal.timeout(20000),
  });
  const result = await response.json();
  if (!response.ok || result?.success !== true) {
    throw new Error("HTTP " + response.status + ": " + JSON.stringify(result?.errors ?? []).slice(0, 750));
  }
  console.log("Cloudflare accepted cache invalidation for marketing hosts: " + MARKETING_HOSTS.join(", "));
} catch (error) {
  console.error("Marketing-only cache purge failed; release verification must fail:", error.message);
  process.exitCode = 1;
}
