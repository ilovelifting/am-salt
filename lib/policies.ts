export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type PolicyPage = {
  slug: string;
  title: string;
  dek: string;
  updatedAt: string; // ISO date
  body: PolicyBlock[];
};

export const policyPages: PolicyPage[] = [
  {
    slug: "shipping-returns",
    title: "Shipping & returns",
    dek: "The short version: your card isn't charged until your box ships, and if it's not for you, tell us and we'll refund it.",
    updatedAt: "2026-08-26",
    body: [
      { type: "h2", text: "Preorders" },
      {
        type: "p",
        text: "Reserving a box now doesn't charge your card. We collect your email (and flavor preference, if you have one) so we know demand exists before we manufacture anything at scale. You'll get an email when your box is ready to ship, and your card is only charged at that point — not before.",
      },
      { type: "h2", text: "Shipping" },
      {
        type: "p",
        text: "Once billing opens, boxes ship from the continental US. Standard shipping runs 3–5 business days after your order is charged; you'll get a tracking link by email the moment it leaves our hands. We don't currently ship outside the US — if that changes, preorder holders hear first.",
      },
      { type: "h2", text: "Returns & refunds" },
      {
        type: "p",
        text: "If a box doesn't work for you — wrong flavor, changed your mind, anything — email support and we'll refund the full charge within 30 days of delivery. No unopened-box requirement, no restocking fee. We'd just ask you tell us why, since that's the only way a product this early actually improves.",
      },
      {
        type: "p",
        text: "Refunds post to the original payment method and typically show up within 5–10 business days, depending on your bank.",
      },
      { type: "h2", text: "Damaged or missing boxes" },
      {
        type: "p",
        text: "If a box arrives damaged or never arrives, email support with your order confirmation — we'll replace it or refund it, whichever you'd rather, no questions asked.",
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy policy",
    dek: "What we collect, why, and the short list of things we don't do with it.",
    updatedAt: "2026-08-26",
    body: [
      { type: "h2", text: "What we collect" },
      {
        type: "p",
        text: "Reserving a box gives us your email address and, optionally, a flavor preference. That's the entire preorder form — we don't ask for a name, address, or payment details until billing actually opens, and we'll be explicit at that point about what's being collected and why.",
      },
      { type: "h2", text: "What we use it for" },
      {
        type: "list",
        items: [
          "Emailing you when your box is ready to ship, and about anything material that changes before then (pricing, timeline, availability).",
          "Counting how many people are actually interested, so we know whether to make this at all — the running total on the homepage comes from this list.",
          "Nothing else. We don't build ad-targeting profiles, and this list isn't used for anything beyond the preorder itself.",
        ],
      },
      { type: "h2", text: "What we don't do" },
      {
        type: "list",
        items: [
          "We don't sell or rent your email to anyone.",
          "We don't share it with third-party marketers.",
          "We don't send anything you didn't sign up for beyond preorder-related updates.",
        ],
      },
      { type: "h2", text: "How it's stored" },
      {
        type: "p",
        text: "Preorder submissions are stored on our servers for as long as it takes to fulfill the preorder or until you ask us to delete them, whichever comes first. Email support at any time and we'll remove your information — no form, no friction.",
      },
      { type: "h2", text: "Cookies & analytics" },
      {
        type: "p",
        text: "This site doesn't run third-party ad trackers. If we add analytics later to understand traffic, this page will say so before it happens, not after.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of service",
    dek: "The plain-language version of the fine print.",
    updatedAt: "2026-08-26",
    body: [
      { type: "h2", text: "What a preorder is" },
      {
        type: "p",
        text: "Reserving a box on this site is a non-binding signal of interest, not a purchase. Your payment method is not charged when you reserve — it's charged only once billing opens ahead of shipping, and you'll be emailed before that happens. You can back out at any point before then by emailing support.",
      },
      { type: "h2", text: "Pricing" },
      {
        type: "p",
        text: "The price shown at the time you reserve is the price you'll be offered at launch, not a guarantee against later changes for new preorders. If pricing changes materially before your box ships, we'll tell you and honor whatever price was in effect when you reserved.",
      },
      { type: "h2", text: "Not medical advice" },
      {
        type: "p",
        text: "Nothing on this site is medical advice, and AM Salt isn't intended to diagnose, treat, cure, or prevent any disease. It's an electrolyte drink. If you have a medical condition, are pregnant or nursing, or take medication affecting sodium or potassium levels, talk to a doctor before making this a daily habit — see the FAQ for specifics.",
      },
      { type: "h2", text: "Age" },
      {
        type: "p",
        text: "You need to be 18 or older to reserve a box or submit payment information on this site.",
      },
      { type: "h2", text: "Changes" },
      {
        type: "p",
        text: "We may update these terms as the product moves from preorder to a real, shipping store. Material changes will be reflected here with an updated date at the top of this page.",
      },
    ],
  },
];

export function getPolicyPage(slug: string): PolicyPage | undefined {
  return policyPages.find((p) => p.slug === slug);
}
