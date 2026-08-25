"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CATEGORIES } from "@/data/categories";
import { useLanguage } from "@/components/common/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export function ProductCategories() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#FCFBF7] relative overflow-hidden border-b border-[#315C38]/10">
      <Container>
        <SectionHeading
          label={t("Export Portfolio", "หมวดหมู่สินค้า")}
          title={t("Our Tamarind Collection", "คอลเลกชันผลิตภัณฑ์มะขาม")}
          subtitle={t(
            "From naturally dried tamarind to sweet, sour and seasoned varieties, explore a diverse range of Thai tamarind products.",
            "ตั้งแต่มะขามหวานธรรมชาติ มะขามอบแห้งไร้เมล็ด ไปจนถึงขนมขบเคี้ยวและผลิตภัณฑ์แปรรูปหลากหลายรายการ"
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group relative bg-[#FCFBF7] rounded-2xl overflow-hidden border border-[#315C38]/15 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Category Image */}
              <div className="relative h-56 w-full overflow-hidden bg-[#F7F3E8]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Number Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/20 text-[#C9A24A] font-mono text-xs font-bold">
                  {cat.number}
                </div>

                {/* Product Count Pill */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-white/90 text-[#315C38] text-xs font-bold shadow-xs">
                  {cat.productCount} {t("Products", "รายการ")}
                </div>

                {/* Title Overlay at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#C9A24A] transition-colors">
                    {cat.title}
                  </h3>
                  {cat.titleTh && (
                    <div className="text-xs text-[#A9C39B] font-medium">
                      {cat.titleTh}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-[#547A3F] leading-relaxed">
                  {cat.shortDescription}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.highlightFeatures.slice(0, 3).map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#F7F3E8] text-[#315C38] font-medium border border-[#315C38]/10"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-3 border-t border-[#315C38]/10">
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#315C38] group-hover:text-[#C9A24A] transition-colors"
                  >
                    <span>{t("View Products", "ดูสินค้าหมวดนี้")}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
