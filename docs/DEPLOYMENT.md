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

### Fallback hostname

If `spineworkspace.com` is unavailable, attach a fallback in `wrangler.jsonc` under `env.prod.routes` (for example `spineinnovlabs.integratewise.xyz`). Do **not** rename the worker.

## CI/CD (CircleCI + Datadog)

Primary pipeline: [`.circleci/config.yml`](../.circleci/config.yml).

**GitHub:** `SpineInnovLabs/spinemarketing` (org repo; required for CircleCI GitHub App on Spine InnovLabs).

**CircleCI project:** `spinemarketing` under org **Spine InnovLabs** (`circleci/BjAMH4EEyfd6462okS8HdH/...`, linked in `.circleci/info.yml`).

| Trigger | Jobs |
| --- | --- |
| All branches | `build` (lint + static export) |
| `main` | `deploy-production` → `wrangler deploy --env prod` |
| `dev` | `deploy-dev` → `--env dev` |
| `test` | `deploy-test` → `--env test` |
| Other branches (e.g. PR branches) | `preview` → `wrangler versions upload` |

Build uses `NEXT_PUBLIC_SITE_URL=https://spineinnovlabs.spineworkspace.com`.

### CircleCI project environment variables

| Variable | Purpose |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Account API token (Workers Scripts Edit) |
| `CLOUDFLARE_ACCOUNT_ID` | `a1bbbb12a32cdbb68dd170b09fe8b5f3` |
| `DD_API_KEY` | Datadog API key for CI Visibility + DORA |
| `DD_SITE` | Datadog site (e.g. `datadoghq.com`, `datadoghq.eu`) |

If `DD_API_KEY` is unset, builds and deploys still run; Datadog steps are skipped.

Datadog: build/deploy steps are wrapped with `datadog-ci trace`; production/dev/test deploys emit **DORA deployment** events for service `spineinnovlabs-marketing`. Connect the CircleCI integration in Datadog (**Software Delivery → CI Visibility**) to view pipelines.

Cloudflare token must be a **Cloudflare Account API Token** (not an OAuth `cfut_` user token).

### GitHub Actions

Optional **PR-only** lint/build (`.github/workflows/ci.yml`). Deployments run in CircleCI only.

```text
feature branch → CircleCI build → preview upload
dev / test / main → CircleCI build → Cloudflare deploy (dev / test / prod)
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
