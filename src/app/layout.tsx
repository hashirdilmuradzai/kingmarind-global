import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/common/LanguageContext";
import { RfqProvider } from "@/components/common/RfqContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/products/QuoteModal";
import { COMPANY } from "@/data/company";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kingmarind.com"),
  title: "Kingmarind Co., Ltd. | Thai Tamarind & Processed Tamarind Exporter",
  description:
    "Kingmarind Co., Ltd. supplies Thai tamarind, seedless tamarind, dried tamarind and processed tamarind products for wholesale, distribution and international markets.",
  keywords: [
    "Thai tamarind",
    "Thai tamarind exporter",
    "tamarind supplier Thailand",
    "sweet tamarind Thailand",
    "seedless tamarind",
    "dried tamarind",
    "processed tamarind",
    "Phetchabun tamarind",
    "Thai food exporter",
    "tamarind wholesale",
    "tamarind supplier",
  ],
  authors: [{ name: "Kingmarind Co., Ltd." }],
  openGraph: {
    title: "Kingmarind Co., Ltd. | Thai Tamarind & Processed Tamarind Exporter",
    description:
      "Premium Thai Tamarind, Seedless Tamarind, and Processed Fruit Products from Phetchabun, Thailand for Global B2B Markets.",
    url: "https://kingmarind.com",
    siteName: "Kingmarind Co., Ltd.",
    images: [
      {
        url: "/images/hero_orchard.jpg",
        width: 1200,
        height: 630,
        alt: "Kingmarind Thai Tamarind Export",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Structured Data JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: "https://kingmarind.com",
    logo: "https://kingmarind.com/images/sweet_tamarind.jpg",
    description:
      "International exporter of Thai sweet tamarind, dried pitted tamarind, and processed fruit products based in Phetchabun, Thailand.",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.location.address,
      addressLocality: COMPANY.location.district,
      addressRegion: COMPANY.location.province,
      postalCode: COMPANY.location.postalCode,
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.contact.phone,
      contactType: "sales and export inquiries",
      email: COMPANY.contact.email,
      availableLanguage: ["English", "Thai"],
    },
    taxID: COMPANY.taxId,
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased bg-[#FCFBF7] text-[#1E241F] flex flex-col min-h-screen">
        <LanguageProvider>
          <RfqProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <QuoteModal />
          </RfqProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
