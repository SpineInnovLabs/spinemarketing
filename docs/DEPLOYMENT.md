# Spine InnovLabs marketing — Cloudflare deployment

## Architecture

| Layer | Identity |
| --- | --- |
| Worker (production) | `spineinnovlabs-marketing` |
| Runtime | Cloudflare Workers + Static Assets (`./out` from Next.js static export) |
| Temporary production hostname | `spineinnovlabs.spineworkspace.com` |
| Future canonical hostname | `spineinnovlabs.com` (and `www` → apex redirect) |

Domains are routing configuration on a **stable** worker. The application does not embed the temporary hostname.

## Build

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://spineinnovlabs.spineworkspace.com npm run build
```

`NEXT_PUBLIC_SITE_URL` (or `PUBLIC_SITE_URL`) drives canonical URLs, sitemap, robots, RSS, Open Graph base, and JSON-LD.

Blog and feed URLs are populated at **build time** from Sanity via `getContentRepository()` (see [CONTENT.md](./CONTENT.md)). Static export does not call Sanity at runtime on Cloudflare.

Output directory: `out/` (Next.js `output: 'export'`).

## Wrangler environments

| Environment | Worker name | Hostname |
| --- | --- | --- |
| `dev` | `spineinnovlabs-marketing-dev` | `*.workers.dev` |
| `test` | `spineinnovlabs-marketing-test` | `*.workers.dev` |
| `prod` | `spineinnovlabs-marketing` | `spineinnovlabs.spineworkspace.com` |

```bash
npm run deploy:dev
npm run deploy:test
npm run deploy:prod   # requires built ./out
```

Local development may use Wrangler OAuth. **CircleCI deploys must use a scoped Cloudflare API token**, since interactive OAuth is unsuitable for long-lived non-interactive deployment automation.

```bash
# Local only
npm run wrangler:login
npm run wrangler:whoami
```

For CI, set `CLOUDFLARE_API_TOKEN` in CircleCI project environment variables. An optional `CLOUDFLARE_ACCOUNT_ID` must match `account_id` in `wrangler.jsonc`. Do not commit secrets or reuse personal OAuth refresh tokens in CircleCI.

### Fallback hostname

If `spineworkspace.com` is unavailable, attach a fallback in `wrangler.jsonc` under `env.prod.routes` (for example `spineinnovlabs.integratewise.xyz`). Do **not** rename the worker.

## CI/CD (CircleCI + Datadog)

Primary pipeline: [`.circleci/config.yml`](../.circleci/config.yml).

**GitHub:** `SpineInnovLabs/spinemarketing` (org repo; required for CircleCI GitHub App on Spine InnovLabs).

**CircleCI project:** `spinemarketing` under org **Spine InnovLabs** (`circleci/BjAMH4EEyfd6462okS8HdH/...`, linked in `.circleci/info.yml`).

| Trigger | Jobs |
| --- | --- |
| Every branch | `build` (locked install, Next.js static export, HTML/sitemap validation) |
| `main` | `deploy-production` → `wrangler deploy --env prod` → live-domain smoke test |
| `dev` | `deploy-dev` → `wrangler deploy --env dev` |
| `test` | `deploy-test` → `wrangler deploy --env test` |
| Feature branches | `build` only (no access to deployment credentials needed) |

The production job requires the exact `out/` artifact from the successful build. The post-deploy smoke test checks the public hostname for the **new Spine InnovLabs corporate hero** and fails the job when an old or missing page is returned.

### CircleCI project environment variables

| Variable | Purpose |
| --- | --- |
| Variable | Purpose |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | **Required secret:** scoped Cloudflare token with Workers deploy permission for this account and domain |
| `CLOUDFLARE_ACCOUNT_ID` | Optional identifier; also supplied by `wrangler.jsonc` |
| `DD_API_KEY` | Optional Datadog reporting (never gates deployment) |
| `DD_SITE` | Datadog region if reporting is enabled |
| `SANITY_PROJECT_ID` | Sanity project for blog content at build time |
| `SANITY_DATASET` | Usually `production` |
| `SANITY_API_READ_TOKEN` | CMS read token for private datasets; use a secret, never client-side |
 
If Sanity variables are unset, the content repository may fall back to legacy content. Production should be configured to use the intended CMS source. Datadog is informational and cannot turn a successful Cloudflare deployment into a failed deployment.

**CircleCI project setup (required outside the repository):**

1. Open CircleCI → **spinemarketing** → Project Settings → **Environment Variables**. Create `CLOUDFLARE_API_TOKEN` with minimum necessary Workers permissions. `WRANGLER_OAUTH_TOKEN` and `WRANGLER_REFRESH_TOKEN` are no longer used.
2. Open **Project Setup** and confirm the GitHub App has `SpineInnovLabs/spinemarketing` as the config and checkout source, with config file `.circleci/config.yml`.
3. Open **Triggers** and ensure pushes to `main` trigger this pipeline. Without a configured trigger, GitHub can show a pending CircleCI status while no deployment occurs.
4. Trigger a fresh `main` pipeline after adding the API token. Only mark the release complete when **build**, **deploy-production**, and the hostname smoke test are green.

**Failure interpretation:**

- No CircleCI workflow for the commit: verify GitHub App installation, pipeline definition, and push triggers in CircleCI Project Setup.
- `CLOUDFLARE_API_TOKEN is missing`: provide the project secret; do not put it in GitHub.
- Wrangler auth rejected: reissue a scoped Cloudflare API token and confirm account permissions.
- `out/index.html` or hero missing: static build or branch/content mismatch; deployment is blocked.
- Live hostname shows old banner: deployment smoke test fails. Verify DNS/Worker route, CDN caching, and that the expected Worker `spineinnovlabs-marketing` owns the host.

### GitHub Actions

Optional **PR-only** lint/build (`.github/workflows/ci.yml`). Deployments run in CircleCI only.

```text
feature branch → CircleCI build + artifact checks
main → CircleCI build → Cloudflare deploy → live-host verification
dev / test → CircleCI build → Cloudflare deploy
```

### Custom domain DNS

After `deploy --env prod`, Cloudflare provisions TLS for the worker custom domain. The `spineworkspace.com` zone must be on the same account; Wrangler `custom_domain: true` creates the DNS record when the zone is present.

## Security and caching

- Static asset headers: `public/_headers` (immutable cache for hashed `_next/static`, short TTL / revalidate for HTML)
- Edge headers: `worker/index.ts` (HSTS on HTTPS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`)
- Preview / `workers.dev` URLs: `X-Robots-Tag: noindex` via `_headers`

Redirects from `public/_redirects` are served by Workers Static Assets.

## Future cutover to `spineinnovlabs.com`

No hosting migration. Same worker and artifact pipeline.

1. Add custom domains in Cloudflare: `spineinnovlabs.com` and `www.spineinnovlabs.com` on worker `spineinnovlabs-marketing`.
2. Configure `www.spineinnovlabs.com` → `https://spineinnovlabs.com` (Cloudflare redirect rule or worker).
3. Set build env `NEXT_PUBLIC_SITE_URL=https://spineinnovlabs.com` and redeploy (metadata/sitemap/robots/RSS).
4. On prod worker, set vars (or `wrangler.jsonc`):
   - `CANONICAL_REDIRECTS_ENABLED=true`
   - `CANONICAL_SITE_URL=https://spineinnovlabs.com`
   - `LEGACY_REDIRECT_HOSTS=spineinnovlabs.spineworkspace.com,spineinnovlabs.nirmalprince.com,www.spineinnovlabs.com`
5. Verify TLS, sitemap, robots, canonical tags, and Search Console / analytics (outside repo).

After cutover, legacy hostnames 301 to apex with path and query preserved (`worker/index.ts`).

## Local preview of static output

```bash
npx wrangler dev --env prod --local
```

Requires `out/` from a production build.
