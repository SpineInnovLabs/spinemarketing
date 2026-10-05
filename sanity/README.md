# Sanity Studio (Spine InnovLabs marketing)

Schema lives in `sanity/schemaTypes/`. Config: [`sanity.config.ts`](../sanity.config.ts).

## Create project (one time)

1. [sanity.io/manage](https://www.sanity.io/manage) → Create project → note **Project ID**.
2. Create dataset `production` (default).
3. Add to local env and CircleCI:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET=production`
   - `SANITY_API_READ_TOKEN` (read published)
4. Deploy schema: `SANITY_PROJECT_ID=xxx npx sanity schema deploy`
5. Migrate legacy posts: `SANITY_API_WRITE_TOKEN=xxx npm run content:migrate`
6. Host Studio: `npm run sanity:deploy` (optional; sets `SANITY_STUDIO_HOST`)

## Local Studio

```bash
export SANITY_PROJECT_ID=your_project_id
export SANITY_DATASET=production
npm run sanity:dev
```
