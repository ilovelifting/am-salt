import { siteUrl, supportEmail } from "@/lib/site";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AM Salt",
    url: siteUrl,
    email: supportEmail,
    logo: `${siteUrl}/icon`,
  };

  return (
    <script
      type="application/ld+json"
      // Static, developer-authored JSON — not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
