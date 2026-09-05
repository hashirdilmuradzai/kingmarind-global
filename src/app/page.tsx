import React from "react";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { CompanyAtGlance } from "@/components/home/CompanyAtGlance";
import { ProductCategories } from "@/components/home/ProductCategories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PhetchabunStory } from "@/components/home/PhetchabunStory";
import { ProcessSection } from "@/components/home/ProcessSection";
import { InnovationSection } from "@/components/home/InnovationSection";
import { ExportSection } from "@/components/home/ExportSection";
import { WhyKingmarind } from "@/components/home/WhyKingmarind";
import { BuyerCTA } from "@/components/home/BuyerCTA";
import { ContactPreview } from "@/components/home/ContactPreview";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Company Introduction */}
      <IntroSection />

      {/* 4. Company at a Glance */}
      <CompanyAtGlance />

      {/* 5. Product Categories */}
      <ProductCategories />

      {/* 6. Featured Products */}
      <FeaturedProducts />

      {/* 7. Thai Origin / Phetchabun Story */}
      <PhetchabunStory />

      {/* 8. Quality & Processing */}
      <ProcessSection />

      {/* 9. Processing Innovation */}
      <InnovationSection />

      {/* 10. Export / Global Business */}
      <ExportSection />

      {/* 11. Why Kingmarind */}
      <WhyKingmarind />

      {/* 12. Business Buyer CTA */}
      <BuyerCTA />

      {/* 13. Contact Preview */}
      <ContactPreview />
    </>
  );
}
