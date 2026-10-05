/**
 * Edge wrapper for spineinnovlabs-marketing static assets.
 * Domain cutover: enable CANONICAL_REDIRECT_HOST + CANONICAL_SITE_URL vars on prod
 * to 301 legacy hostnames to the apex (see docs/DEPLOYMENT.md).
 */

export interface Env {
  ASSETS: Fetcher;
  /** When "true", hostnames listed in LEGACY_REDIRECT_HOSTS redirect to CANONICAL_SITE_URL */
  CANONICAL_REDIRECTS_ENABLED?: string;
  CANONICAL_SITE_URL?: string;
  /** Comma-separated hostnames (e.g. spineinnovlabs.spineworkspace.com,www.spineinnovlabs.com) */
  LEGACY_REDIRECT_HOSTS?: string;
}

const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
  "X-Frame-Options": "DENY",
};

function parseLegacyHosts(raw: string | undefined): Set<string> {
  if (!raw?.trim()) return new Set();
  return new Set(
    raw
      .split(",")
      .map((h) => h.trim().toLowerCase())
      .filter(Boolean),
  );
}

function maybeCanonicalRedirect(request: Request, env: Env): Response | null {
  if (env.CANONICAL_REDIRECTS_ENABLED !== "true") return null;
  const canonicalBase = env.CANONICAL_SITE_URL?.replace(/\/+$/, "");
  if (!canonicalBase) return null;

  const url = new URL(request.url);
  const legacyHosts = parseLegacyHosts(env.LEGACY_REDIRECT_HOSTS);
  if (!legacyHosts.has(url.hostname.toLowerCase())) return null;

  const target = new URL(url.pathname + url.search, canonicalBase);
  return Response.redirect(target.toString(), 301);
}

function withSecurityHeaders(response: Response, request: Request): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(key)) headers.set(key, value);
  }

  const url = new URL(request.url);
  if (url.protocol === "https:" && !headers.has("Strict-Transport-Security")) {
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }

  const contentType = headers.get("content-type") ?? "";
  if (contentType.includes("text/html") && !headers.has("Cache-Control")) {
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const redirect = maybeCanonicalRedirect(request, env);
    if (redirect) return redirect;

    const response = await env.ASSETS.fetch(request);
    return withSecurityHeaders(response, request);
  },
};
