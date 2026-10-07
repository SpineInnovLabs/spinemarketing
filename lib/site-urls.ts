import { readFileSync } from "node:fs";
import path from "node:path";
import { parse } from "yaml";

type PublicSitesEnvironment = {
  spine_innovlabs: {
    public_url: string;
    canonical_url: string;
    legacy_redirect_hosts?: string[];
  };
  spine_workspace: {
    apex: string;
    app: string;
    auth: string;
    domain_root: string;
  };
};

type SiteConfig = {
  environments: Record<string, PublicSitesEnvironment>;
};

function loadSiteConfig(): SiteConfig {
  const configPath = path.join(process.cwd(), "config.yaml");
  const raw = readFileSync(configPath, "utf8");
  return parse(raw) as SiteConfig;
}

function envName(): string {
  return process.env.SPINE_PUBLIC_SITES_ENV ?? "prod";
}

const activeSites: PublicSitesEnvironment = (() => {
  const slice = loadSiteConfig().environments[envName()];
  if (!slice) {
    throw new Error(`config.yaml: missing environments.${envName()}`);
  }
  return slice;
})();

/** Parent company marketing site (product catalog, company, blog). */
export const SPINE_INNOVLABS_SITE = activeSites.spine_innovlabs.public_url;

/** Post-cutover apex — Worker redirects when CANONICAL_REDIRECTS_ENABLED=true. */
export const SPINE_INNOVLABS_CANONICAL_URL = activeSites.spine_innovlabs.canonical_url;

/** Spine Workspace product — apex landing and lens doors only. */
export const SPINE_WORKSPACE_APEX = activeSites.spine_workspace.apex;

export const SPINE_WORKSPACE_APP = activeSites.spine_workspace.app;

export const AUTH_ORIGIN = activeSites.spine_workspace.auth;
