/**
 * Integration logo registry — local SVGs in /public/logos with Simple Icons CDN fallback.
 */

export type IntegrationLogo = {
  id: string;
  name: string;
  src: string;
};

const LOCAL_LOGOS = new Set([
  "airtable",
  "asana",
  "chatgpt",
  "claude",
  "dropbox",
  "github",
  "gmail",
  "googledrive",
  "grok",
  "hubspot",
  "intercom",
  "jira",
  "microsoft",
  "notion",
  "postgres",
  "quickbooks",
  "salesforce",
  "shopify",
  "slack",
  "stripe",
  "twilio",
  "zapier",
  "zendesk",
]);

/** Connector display name → Simple Icons slug (when no local asset exists). */
const SIMPLE_ICON_SLUG: Record<string, string> = {
  Pipedrive: "pipedrive",
  "Zoho CRM": "zoho",
  Freshsales: "freshworks",
  Close: "close",
  Freshdesk: "freshdesk",
  Front: "front",
  "Help Scout": "helpscout",
  Kustomer: "kustomer",
  "Freshworks CRM": "freshworks",
  "WhatsApp Business": "whatsapp",
  Chargebee: "chargebee",
  Paddle: "paddle",
  Xero: "xero",
  FreshBooks: "freshbooks",
  "HubSpot Marketing": "hubspot",
  Mailchimp: "mailchimp",
  Marketo: "marketo",
  Braze: "braze",
  Segment: "segment",
  SendGrid: "sendgrid",
  "Customer.io": "customerio",
  ActiveCampaign: "activecampaign",
  "Google Analytics": "googleanalytics",
  Mixpanel: "mixpanel",
  Amplitude: "amplitude",
  Heap: "heap",
  Tableau: "tableau",
  Metabase: "metabase",
  Outlook: "microsoftoutlook",
  "Microsoft Teams": "microsoftteams",
  Discord: "discord",
  Zoom: "zoom",
  "Google Calendar": "googlecalendar",
  OneDrive: "microsoftonedrive",
  Calendly: "calendly",
  Confluence: "confluence",
  Linear: "linear",
  "Monday.com": "monday",
  ClickUp: "clickup",
  Trello: "trello",
  GitLab: "gitlab",
  Bitbucket: "bitbucket",
  WooCommerce: "woocommerce",
  BigCommerce: "bigcommerce",
  OpenAI: "openai",
  BambooHR: "bamboohr",
  Tally: "tally",
  Razorpay: "razorpay",
};

function localSlug(name: string): string {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (normalized === "googledrive" || normalized === "googledisk") return "googledrive";
  if (normalized === "microsoftteams") return "microsoft";
  if (normalized === "microsoftoutlook") return "microsoft";
  if (normalized === "microsoftonedrive") return "microsoft";
  return normalized;
}

export function integrationLogoSrc(name: string): string {
  const slug = localSlug(name);
  if (LOCAL_LOGOS.has(slug)) {
    return `/logos/${slug}.svg`;
  }
  const iconSlug = SIMPLE_ICON_SLUG[name] ?? slug;
  return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconSlug}.svg`;
}

export function integrationLogo(name: string): IntegrationLogo {
  const id = localSlug(name);
  return { id, name, src: integrationLogoSrc(name) };
}

/** Curated logos for homepage / trust strips — recognizable stack coverage. */
export const FEATURED_INTEGRATION_LOGOS: IntegrationLogo[] = [
  "Salesforce",
  "HubSpot",
  "Stripe",
  "Slack",
  "Jira",
  "Zendesk",
  "Gmail",
  "Notion",
  "Shopify",
  "GitHub",
  "Asana",
  "Intercom",
  "QuickBooks",
  "Google Drive",
  "Microsoft Teams",
  "Linear",
].map(integrationLogo);

export const INTEGRATION_CATALOG: { category: string; connectors: string[] }[] = [
  { category: "CRM", connectors: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Freshsales", "Close"] },
  {
    category: "Support",
    connectors: ["Zendesk", "Freshdesk", "Intercom", "Front", "Help Scout", "Kustomer", "Freshworks CRM", "WhatsApp Business", "Twilio"],
  },
  { category: "Billing", connectors: ["Stripe", "Chargebee", "Paddle", "QuickBooks", "Xero", "FreshBooks"] },
  {
    category: "Marketing",
    connectors: ["HubSpot Marketing", "Mailchimp", "Marketo", "Braze", "Segment", "SendGrid", "Customer.io", "ActiveCampaign"],
  },
  { category: "Analytics", connectors: ["Google Analytics", "Mixpanel", "Amplitude", "Heap", "Tableau", "Metabase"] },
  {
    category: "Communication",
    connectors: ["Gmail", "Outlook", "Slack", "Microsoft Teams", "Discord", "Zoom", "Google Calendar"],
  },
  {
    category: "Productivity",
    connectors: ["Notion", "Google Drive", "Dropbox", "OneDrive", "Airtable", "Calendly", "Confluence"],
  },
  {
    category: "Project Management",
    connectors: ["Jira", "Asana", "Linear", "Monday.com", "ClickUp", "Trello"],
  },
  { category: "Engineering", connectors: ["GitHub", "GitLab", "Bitbucket"] },
  { category: "Commerce", connectors: ["Shopify", "WooCommerce", "BigCommerce"] },
  { category: "AI", connectors: ["OpenAI", "Claude", "ChatGPT"] },
  { category: "HR", connectors: ["BambooHR"] },
];

export const TOTAL_CONNECTORS = INTEGRATION_CATALOG.reduce((sum, c) => sum + c.connectors.length, 0);
