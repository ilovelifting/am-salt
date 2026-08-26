import { siteUrl } from "@/lib/site";
import { MONTHLY_PRICE } from "@/lib/pricing";
import { panel } from "@/lib/content";

export function ProductSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AM Salt",
    description:
      "Sodium, potassium, magnesium, water — before your coffee, not instead of it. No proprietary formula, no blend, no added sugar.",
    brand: { "@type": "Brand", name: "AM Salt" },
    additionalProperty: panel.map((ingredient) => ({
      "@type": "PropertyValue",
      name: ingredient.name,
      value: ingredient.amount,
    })),
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/#preorder`,
      priceCurrency: "USD",
      price: String(MONTHLY_PRICE),
      // Accurate to the current state of the product: this is a preorder,
      // not a live sale, so schema.org/PreOrder is the honest value here.
      availability: "https://schema.org/PreOrder",
    },
  };

  return (
    <script
      type="application/ld+json"
      // Static, developer-authored JSON — not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
