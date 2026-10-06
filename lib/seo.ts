export const siteConfig = {
  name: "Solvanta Energy Systems",
  shortName: "Solvanta",
  description: "Premium solar and energy systems for homes and businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/images/poster.jpg",
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
  };
}
