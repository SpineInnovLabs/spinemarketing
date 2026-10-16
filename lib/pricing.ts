export interface SubscriptionStartingPrice {
  readonly name: string;
  readonly amount: number;
  readonly currency: "USD";
  readonly displayPrice: string;
  readonly unit: "user";
  readonly interval: "month";
  readonly billing: string;
  readonly contactHref: string;
}

export const STARTER_PRICING = {
  name: "Starter",
  amount: 49,
  currency: "USD",
  displayPrice: "US$49",
  unit: "user",
  interval: "month",
  billing: "Billed monthly",
  contactHref: "/contact?intent=pricing",
} as const satisfies SubscriptionStartingPrice;

export const PRICING_SCOPE_NOTE = "AI/provider usage and custom setup are scoped separately.";
