/**
 * Integration logo registry. CDN marks with local /public/logos fallback.
 */

export type IntegrationLogo = {
  id: string;
  name: string;
  src: string;
};

function localSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Square app icons in /public/logos. Names stay available on hover. */
const LOGO_CDN: Record<string, string> = {
  Salesforce: "/logos/salesforce.svg",
  HubSpot: "/logos/hubspot.svg",
  Pipedrive: "",
  "Zoho CRM": "/logos/zoho.svg",
  Close: "/logos/brand-close.svg",
  Freshsales: "/logos/freshworks.svg",
  Freshdesk: "/logos/freshdesk.svg",
  "Freshworks CRM": "/logos/freshworks.svg",
  FreshBooks: "/logos/freshbooks.svg",
  BambooHR: "",
  Zendesk: "/logos/zendesk.svg",
  Intercom: "/logos/intercom.svg",
  Front: "/logos/front.svg",
  "Help Scout": "/logos/helpscout.svg",
  Kustomer: "/logos/kustomer.svg",
  "WhatsApp Business": "/logos/whatsapp.svg",
  Twilio: "/logos/twilio.svg",
  Stripe: "/logos/stripe.svg",
  Chargebee: "/logos/chargebee.svg",
  Paddle: "/logos/paddle.svg",
  QuickBooks: "/logos/quickbooks.svg",
  Xero: "/logos/xero.svg",
  "HubSpot Marketing": "/logos/hubspot.svg",
  Mailchimp: "/logos/mailchimp.svg",
  Marketo: "/logos/marketo.svg",
  Braze: "/logos/braze.svg",
  Segment: "/logos/segment.svg",
  SendGrid: "/logos/sendgrid.svg",
  "Customer.io": "/logos/customerio.svg",
  ActiveCampaign: "/logos/activecampaign.svg",
  "Google Analytics": "/logos/googleanalytics.svg",
  Mixpanel: "/logos/mixpanel.svg",
  Amplitude: "/logos/amplitude.svg",
  Heap: "/logos/heap.svg",
  Tableau: "/logos/tableau.svg",
  Metabase: "/logos/metabase.svg",
  Gmail: "/logos/gmail.svg",
  Outlook: "/logos/microsoftoutlook.svg",
  Slack: "/logos/slack.svg",
  "Microsoft Teams": "/logos/microsoftteams.svg",
  Discord: "/logos/discord.svg",
  Zoom: "/logos/zoom.svg",
  "Google Calendar": "/logos/googlecalendar.svg",
  Notion: "/logos/notion.svg",
  "Google Drive": "/logos/googledrive.svg",
  Dropbox: "/logos/dropbox.svg",
  OneDrive: "/logos/microsoftonedrive.svg",
  Airtable: "/logos/airtable.svg",
  Calendly: "/logos/calendly.svg",
  Confluence: "/logos/confluence.svg",
  Jira: "/logos/jira.svg",
  Asana: "/logos/asana.svg",
  Linear: "/logos/linear.svg",
  "Monday.com": "/logos/monday.svg",
  ClickUp: "/logos/clickup.svg",
  Trello: "/logos/trello.svg",
  GitHub: "/logos/github.svg",
  GitLab: "/logos/gitlab.svg",
  Bitbucket: "/logos/bitbucket.svg",
  Shopify: "/logos/shopify.svg",
  WooCommerce: "/logos/woocommerce.svg",
  BigCommerce: "/logos/bigcommerce.svg",
  OpenAI: "/logos/openai.svg",
  Claude: "/logos/claude.svg",
  ChatGPT: "/logos/chatgpt.svg",
  Razorpay: "/logos/razorpay.svg",
  PhonePe: "/logos/phonepe.svg",
  "Zoho Books": "/logos/zoho.svg",
  Tally: "/logos/tally.svg",
  Vyapar: "/logos/vyapar.png",
  Shiprocket: "/logos/shiprocket.svg",
  "Noon Seller": "/logos/noon.svg",
  "Network International": "/logos/networkinternational.png",
};

/** Vendored fallbacks in /public/logos when the CDN mark fails to load. */
const LOGO_LOCAL: Record<string, string> = {
  Freshsales: "/logos/freshworks.svg",
  Freshdesk: "/logos/freshdesk.svg",
  "Freshworks CRM": "/logos/freshworks.svg",
  FreshBooks: "/logos/freshbooks.svg",
  BambooHR: "",
  Salesforce: "/logos/salesforce.svg",
  HubSpot: "/logos/hubspot.svg",
  Pipedrive: "",
  "Zoho CRM": "/logos/zoho.svg",
  Close: "/logos/brand-close.svg",
  Zendesk: "/logos/zendesk.svg",
  Intercom: "/logos/intercom.svg",
  Front: "/logos/front.svg",
  "Help Scout": "/logos/helpscout.svg",
  Kustomer: "/logos/kustomer.svg",
  "WhatsApp Business": "/logos/whatsapp.svg",
  Twilio: "/logos/twilio.svg",
  Stripe: "/logos/stripe.svg",
  Chargebee: "/logos/chargebee.svg",
  Paddle: "/logos/paddle.svg",
  QuickBooks: "/logos/quickbooks.svg",
  Xero: "/logos/xero.svg",
  "HubSpot Marketing": "/logos/hubspot.svg",
  Mailchimp: "/logos/mailchimp.svg",
  Marketo: "/logos/marketo.svg",
  Braze: "/logos/braze.svg",
  Segment: "/logos/segment.svg",
  SendGrid: "/logos/sendgrid.svg",
  "Customer.io": "/logos/customerio.svg",
  "Google Analytics": "/logos/googleanalytics.svg",
  Mixpanel: "/logos/mixpanel.svg",
  Amplitude: "/logos/amplitude.svg",
  Heap: "/logos/heap.svg",
  Tableau: "/logos/tableau.svg",
  Metabase: "/logos/metabase.svg",
  Gmail: "/logos/gmail.svg",
  Outlook: "/logos/microsoftoutlook.svg",
  Slack: "/logos/slack.svg",
  "Microsoft Teams": "/logos/microsoftteams.svg",
  Discord: "/logos/discord.svg",
  Zoom: "/logos/zoom.svg",
  "Google Calendar": "/logos/googlecalendar.svg",
  Notion: "/logos/notion.svg",
  "Google Drive": "/logos/googledrive.svg",
  Dropbox: "/logos/dropbox.svg",
  OneDrive: "/logos/microsoftonedrive.svg",
  Airtable: "/logos/airtable.svg",
  Calendly: "/logos/calendly.svg",
  Confluence: "/logos/confluence.svg",
  Jira: "/logos/jira.svg",
  Asana: "/logos/asana.svg",
  Linear: "/logos/linear.svg",
  "Monday.com": "/logos/monday.svg",
  ClickUp: "/logos/clickup.svg",
  Trello: "/logos/trello.svg",
  GitHub: "/logos/github.svg",
  GitLab: "/logos/gitlab.svg",
  Bitbucket: "/logos/bitbucket.svg",
  Shopify: "/logos/shopify.svg",
  WooCommerce: "/logos/woocommerce.svg",
  BigCommerce: "/logos/bigcommerce.svg",
  OpenAI: "/logos/openai.svg",
  Claude: "/logos/claude.svg",
  ChatGPT: "/logos/chatgpt.svg",
  Razorpay: "/logos/razorpay.svg",
  PhonePe: "/logos/phonepe.svg",
  "Zoho Books": "/logos/zoho.svg",
  Tally: "/logos/tally.svg",
  Vyapar: "/logos/vyapar.png",
  Shiprocket: "/logos/shiprocket.svg",
  "Noon Seller": "/logos/noon.svg",
  "Network International": "/logos/networkinternational.png",
};

export function integrationLogoSrc(name: string): string {
  return LOGO_CDN[name] ?? "";
}

export function integrationLogoFallbackSrc(name: string): string {
  const local = LOGO_LOCAL[name];
  if (!local) return "";
  const cdn = LOGO_CDN[name];
  return local !== cdn ? local : "";
}

/** CDN first, then local vendored file when it differs. */
export function integrationLogoCandidates(name: string): string[] {
  const primary = integrationLogoSrc(name);
  const fallback = integrationLogoFallbackSrc(name);
  return [primary, fallback].filter((src, index, list) => Boolean(src) && list.indexOf(src) === index);
}

export function integrationLogo(name: string): IntegrationLogo {
  const id = localSlug(name);
  return { id, name, src: integrationLogoSrc(name) };
}

export function integrationMarkKey(name: string): string {
  return LOGO_CDN[name] ?? name;
}

export function hasKnownIntegrationMark(name: string): boolean {
  return Boolean(LOGO_CDN[name]);
}

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

const ALL_CATALOG_CONNECTORS = INTEGRATION_CATALOG.flatMap((group) => group.connectors);

export const TOTAL_CONNECTORS = ALL_CATALOG_CONNECTORS.length;

export const CONNECTORS_WITH_MARKS = ALL_CATALOG_CONNECTORS.filter(hasKnownIntegrationMark).length;

export const CONNECTORS_NAME_ONLY = TOTAL_CONNECTORS - CONNECTORS_WITH_MARKS;
