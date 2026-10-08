# Spine InnovLabs — Corporate Website

Source for the **Spine InnovLabs** company website, including the company story, technology, solutions, resources and the Spine Workspace product relationship.

- **Production:** https://spineinnovlabs.spineworkspace.com/
- **Repository:** `SpineInnovLabs/spinemarketing`
- **Deployment:** CircleCI → Cloudflare Workers Static Assets
- **Worker:** `spineinnovlabs-marketing`
- **Framework:** Next.js 16 static export (`output: 'export'`), React 19, TypeScript
- **Content:** Sanity at build time (with an explicit legacy-content fallback)
- **Product site:** https://spineworkspace.com/

Vercel/v0 is **not** the production deployment path. `vercel.json` has Git-based Vercel deployments disabled.

## Local development

Requires Node.js 22 and npm. **npm is the only supported package manager for this repository.** `package-lock.json` is the single lockfile.

```bash
npm ci
npm run dev
```

Local development normally runs at http://localhost:5010.

## Release verification without CircleCI credits

```bash
npm ci
npm run lint          # Fast offline release preflight
npm run audit:site    # All route sources, primary links, brand and trust checks
npm run check:ci      # CircleCI YAML and release-gate validation
npm run typecheck     # TypeScript
npm run build         # Full static export, including the Sanity-backed blog
npm start             # Preview generated ./out using local Cloudflare Wrangler
```

The `lint` task is the repository-specific static preflight, not ESLint. Run `npm run check` for all checks except the full production build.

**Note:** The preflight and TypeScript checks alone do not establish a successful deploy. The production release requires a successful CircleCI build, Cloudflare deployment, and smoke test for the live corporate hero.

## Deployment

CircleCI uses `.circleci/config.yml`. A push to `main` builds the static export, attaches the `out/` artifact to `deploy-production`, deploys via Wrangler with `CLOUDFLARE_API_TOKEN`, and checks that the expected banner is visible on the public hostname. Other supported release branches are `dev` and `test`.

The pipeline caches **npm download tarballs**, never a stale `node_modules` directory. This reduces repeated package downloads while retaining a deterministic `npm ci` installation. The Cloudflare API token is a CircleCI secret and must never be committed.

If CircleCI is out of credits, GitHub status may remain pending. After credits are restored, verify that `main` push triggers are enabled, the required secrets exist, and all build/deploy/hostname gates pass. **Do not infer build success from a merged pull request.**

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for exact environment variables, runbook, and troubleshooting, and [docs/CONTENT.md](docs/CONTENT.md) for the CMS contract.

## Structure

- `app/` — marketing pages and static metadata routes
- `components/` — shared layouts, navigation and visual content
- `lib/` — branding, routing, data/content sources
- `content/` — legacy local content fallback
- `public/` — static brand assets and marketing images
- `scripts/` — release checks, CMS migration, RSS generation
- `worker/`, `wrangler.jsonc` — Cloudflare Worker and hosting config
- `.circleci/` — authoritative production CI/CD configuration

Do not replace the corporate homepage with the Spine Workspace product homepage. Spine InnovLabs builds Spine Workspace; the product's website and application are independently deployed.
