import type { Metadata } from "next";
import FormSection from "@/components/contact/FormSection";
import PageHead from "@/components/contact/PageHead";
import { siteConfig } from "@/lib/seo";

const title = "Get a Quote";
const description =
  "Tell us about your property and how you use power. We will recommend a system and send you a clear quote.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/contact",
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
  },
};

export default function ContactPage() {
  return (
    <main id="top">
      <PageHead />
      <FormSection />
    </main>
  );
}
