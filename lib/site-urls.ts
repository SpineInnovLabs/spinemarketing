import { loadPublicSitesConfig } from "./public-sites-config";
import { resolvedPublicSites } from "./resolve-public-site-urls";

const activeEnv = process.env.SPINE_PUBLIC_SITES_ENV ?? "prod";
const resolved = resolvedPublicSites(loadPublicSitesConfig(), activeEnv);

/** Parent company marketing site (resolved from config.yaml url_rules). */
export const SPINE_INNOVLABS_SITE = resolved.resolved.spine_innovlabs_site;

/** Post-cutover apex — Worker redirects when CANONICAL_REDIRECTS_ENABLED=true. */
export const SPINE_INNOVLABS_CANONICAL_URL = resolved.spine_innovlabs.canonical_url;

/** Spine Workspace product — apex landing and lens doors only. */
export const SPINE_WORKSPACE_APEX = resolved.resolved.spine_workspace_apex;

export const SPINE_WORKSPACE_APP = resolved.resolved.spine_workspace_app;

export const AUTH_ORIGIN = resolved.resolved.spine_workspace_auth;
