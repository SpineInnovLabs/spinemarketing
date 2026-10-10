import { SPINE_WORKSPACE_APP } from "./site-urls";

// Entry hints select a requested view; apps/web resolves identity, membership,
// and projection permission. A marketing link never grants workspace access.
const solutionDomains: Readonly<Record<string, string>> = {
  "customer-success": "account-success",
  "customer-support": "support",
  "product-engineering": "productengineering",
  "human-resources": "humanresources",
  memoryandknowledge: "knowledge-management",
  individual: "personal",
  founders: "founderops",
  "finance-leaders": "finance",
  sales: "sales", marketing: "marketing", content: "content",
  finance: "finance", legal: "legal", operations: "operations", revops: "revops",
};

export function workspaceEntryLinks(pathname = "") {
  const slug = /^\/solutions\/([^/]+)\/?$/.exec(pathname)?.[1];
  const domain = slug && Object.hasOwn(solutionDomains, slug) ? solutionDomains[slug] : undefined;
  // Founder Operations starts at company-overview; it has no dashboard view.
  const homeView = domain === "founderops" ? "company-overview" : "dashboard";
  const next = domain ? `/workspace/work/${domain}/${homeView}` : "/workspace/my-work";
  function href(path: "signup" | "login") {
    const url = new URL(`/${path}`, SPINE_WORKSPACE_APP);
    url.searchParams.set("next", next);
    if (domain) url.searchParams.set("entry_domain", domain);
    return url.toString();
  }
  return { signup: href("signup"), login: href("login") };
}
