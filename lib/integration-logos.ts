/**
 * Integration logo registry. Each catalog name maps to one Iconify CDN logo.
 */

export type IntegrationLogo = {
  id: string;
  name: string;
  src: string;
};

function localSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Exact brand marks from the logos CDN (gilbarbara/logos on jsDelivr).
 * App-icon files are used where the default asset is a wide wordmark.
 * Microsoft Teams, Outlook, and OneDrive are their own marks, not the Microsoft logo.
 * Brands with no CDN file are omitted so a different company's mark is never shown.
 */
const BRAND_CDN = "https://cdn.jsdelivr.net/gh/gilbarbara/logos@master/logos";

function brandLogo(file: string): string {
  return `${BRAND_CDN}/${file}.svg`;
}

/** Official Simple Icons glyph in that brand's color, when the logos pack has no file. */
function glyphLogo(slug: string, hex: string): string {
  return `https://cdn.simpleicons.org/${slug}/${hex}`;
}

const LOGO_FILE: Record<string, string> = {
  Salesforce: brandLogo("salesforce"),
  HubSpot: brandLogo("hubspot"),
  Pipedrive: brandLogo("pipedrive"),
  "Zoho CRM": brandLogo("zoho"),
  Close: brandLogo("close"),
  Zendesk: brandLogo("zendesk"),
  Intercom: brandLogo("intercom"),
  Front: brandLogo("frontapp"),
  "Help Scout": brandLogo("helpscout"),
  Kustomer: brandLogo("kustomer"),
  "WhatsApp Business": brandLogo("whatsapp"),
  Twilio: brandLogo("twilio"),
  Stripe: brandLogo("stripe"),
  Chargebee: brandLogo("chargebee"),
  Paddle: glyphLogo("paddle", "FDDD35"),
  QuickBooks: glyphLogo("quickbooks", "2CA01C"),
  Xero: brandLogo("xero"),
  "HubSpot Marketing": brandLogo("hubspot"),
  Mailchimp: brandLogo("mailchimp"),
  Marketo: glyphLogo("marketo", "5C4C9F"),
  Braze: brandLogo("braze"),
  Segment: brandLogo("segment"),
  SendGrid: brandLogo("sendgrid"),
  "Customer.io": brandLogo("customerio"),
  ActiveCampaign: brandLogo("active-campaign"),
  "Google Analytics": brandLogo("google-analytics"),
  Mixpanel: brandLogo("mixpanel"),
  Amplitude: brandLogo("amplitude"),
  Heap: brandLogo("heap"),
  Tableau: brandLogo("tableau"),
  Metabase: brandLogo("metabase"),
  Gmail: brandLogo("google-gmail"),
  Outlook: glyphLogo("microsoftoutlook", "0078D4"),
  Slack: brandLogo("slack-icon"),
  "Microsoft Teams": brandLogo("microsoft-teams"),
  Discord: brandLogo("discord-icon"),
  Zoom: brandLogo("zoom-icon"),
  "Google Calendar": brandLogo("google-calendar"),
  Notion: brandLogo("notion-icon"),
  "Google Drive": brandLogo("google-drive"),
  Dropbox: brandLogo("dropbox"),
  OneDrive: brandLogo("microsoft-onedrive"),
  Airtable: brandLogo("airtable"),
  Calendly: glyphLogo("calendly", "006BFF"),
  Confluence: brandLogo("confluence"),
  Jira: brandLogo("jira"),
  Asana: brandLogo("asana-icon"),
  Linear: brandLogo("linear-icon"),
  "Monday.com": brandLogo("monday-icon"),
  ClickUp: brandLogo("clickup-icon"),
  Trello: brandLogo("trello"),
  GitHub: brandLogo("github-icon"),
  GitLab: brandLogo("gitlab-icon"),
  Bitbucket: brandLogo("bitbucket"),
  Shopify: brandLogo("shopify"),
  WooCommerce: brandLogo("woocommerce-icon"),
  BigCommerce: glyphLogo("bigcommerce", "121118"),
  OpenAI: brandLogo("openai-icon"),
  Claude: brandLogo("claude-icon"),
  ChatGPT: brandLogo("openai-icon"),
  Razorpay: glyphLogo("razorpay", "0C2451"),
  PhonePe: glyphLogo("phonepe", "5F259F"),
  "Zoho Books": brandLogo("zoho"),
};

export function integrationLogoSrc(name: string): string {
  return LOGO_FILE[name] ?? "";
}

export function integrationLogo(name: string): IntegrationLogo {
  const id = localSlug(name);
  return { id, name, src: integrationLogoSrc(name) };
}

/** Stable key so the same brand mark is listed once (HubSpot and HubSpot Marketing share a mark). */
export function integrationMarkKey(name: string): string {
  return LOGO_FILE[name] ?? name;
}

/** True only when this name has its own CDN logo. */
export function hasKnownIntegrationMark(name: string): boolean {
  return Boolean(LOGO_FILE[name]);
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
