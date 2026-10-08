// Validate the config as YAML and assert the production release contract.
// Run after npm ci. The package already depends on "yaml".
import { readFileSync } from "node:fs";
import YAML from "yaml";

const file = readFileSync(".circleci/config.yml", "utf8");
const config = YAML.parse(file, { uniqueKeys: true, prettyErrors: true });

function requireCondition(condition, message) {
  if (!condition) throw new Error(`CircleCI config check failed: ${message}`);
}

requireCondition(config?.version === 2.1, "expected CircleCI 2.1");
requireCondition(config?.jobs?.build, "build job is required");
requireCondition(config?.jobs?.deploy, "deploy job is required");
requireCondition(config.jobs?.build?.steps?.some((step) =>
  typeof step === "object" && step?.persist_to_workspace?.paths?.includes("out")
), "build must persist out/ to the workspace");

const workflowJobs = config?.workflows?.["build-test-deploy"]?.jobs;
requireCondition(Array.isArray(workflowJobs), "build-test-deploy workflow is required");
const production = workflowJobs.find((job) => typeof job === "object" && job.deploy?.name === "deploy-production")?.deploy;
requireCondition(production, "production job is required");
requireCondition(production.wrangler_env === "prod", "production must target Wrangler prod");
requireCondition(production.requires?.includes("build"), "production must depend on build");
requireCondition(production.filters?.branches?.only === "main", "production must only run from main");
requireCondition(file.includes("CLOUDFLARE_API_TOKEN"), "API token must be used for CI");
requireCondition(!file.includes("WRANGLER_OAUTH_TOKEN:-"), "CI must not fall back to expiring OAuth");
requireCondition(file.includes("Verify production hostname shows new hero"), "deployment must verify the public homepage");

console.log("CircleCI YAML and gated-deployment contract are valid.");
