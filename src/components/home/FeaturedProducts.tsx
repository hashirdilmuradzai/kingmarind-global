"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { useLanguage } from "@/components/common/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export function FeaturedProducts() {
  const { t } = useLanguage();
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-[#F7F3E8] relative overflow-hidden border-b border-[#315C38]/10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
                {t("Curated Selection", "รายการสินค้าแนะนำ")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E241F] tracking-tight leading-[1.18]">
              {t("Featured Products", "ผลิตภัณฑ์เด่น")}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#547A3F]">
              {t(
                "Selected products from the Kingmarind range.",
                "สินค้าคัดสรรพิเศษจากคลังผลิตภัณฑ์ของคิงมารินด์ พร้อมรองรับการสั่งซื้อระดับค้าส่งและการส่งออก"
              )}
            </p>
          </div>

          <Button variant="outline" href="/products" className="shrink-0 group">
            <span>{t("View Full Catalog (32 Items)", "ดูสินค้าทั้งหมด 32 รายการ")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center p-6 bg-[#FCFBF7] rounded-2xl border border-[#315C38]/15 max-w-2xl mx-auto shadow-xs">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#315C38] mb-1">
            <Sparkles className="w-4 h-4 text-[#C9A24A]" />
            {t("Custom Packaging & Private Label Inquiries", "รับผลิตตามข้อกำหนดและแบรนด์ของลูกค้า")}
          </div>
          <p className="text-xs text-[#547A3F] leading-relaxed max-w-lg mx-auto">
            {t(
              "Need custom net weights, pouch branding, vacuum tray packaging, or master shipping specifications? Our export desk accommodates custom B2B packaging.",
              "รองรับการปรับแต่งขนาดบรรจุภัณฑ์ ฉลากภาษาต่างประเทศ และรูปแบบการบรรจุหีบห่อตามมาตรฐานตลาดปลายทาง"
            )}
          </p>
        </div>
      </Container>
    </section>
  );
}
