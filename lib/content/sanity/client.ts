import { createClient, type SanityClient } from "@sanity/client"

export function getSanityConfig() {
  const projectId = process.env.SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET ?? "production"
  const token = process.env.SANITY_API_READ_TOKEN
  const apiVersion = process.env.SANITY_API_VERSION ?? "2024-10-01"

  if (!projectId) {
    return null
  }

  return { projectId, dataset, token, apiVersion }
}

export function createSanityClient(): SanityClient | null {
  const config = getSanityConfig()
  if (!config) return null

  return createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    apiVersion: config.apiVersion,
    token: config.token,
    useCdn: false,
  })
}

export function isSanityConfigured(): boolean {
  return Boolean(process.env.SANITY_PROJECT_ID)
}
