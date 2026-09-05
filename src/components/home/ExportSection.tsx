"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/common/LanguageContext";
import { useRfq } from "@/components/common/RfqContext";
import { Building2, Globe2, Store, UtensilsCrossed, ArrowRight, FileText } from "lucide-react";

export function ExportSection() {
  const { t } = useLanguage();
  const { openModal } = useRfq();

  const businessCards = [
    {
      title: t("Wholesale Supply", "การจำหน่ายค้าส่ง"),
      subtitle: t("For distributors and bulk buyers.", "สำหรับผู้กระจายสินค้าและผู้สั่งซื้อล็อตใหญ่"),
      description: t(
        "Master carton packaging, multi-grade bulk bags, and steady supply schedules for established commercial food networks.",
        "การบรรจุกล่องมาตรฐาน การคัดเกรดตามปริมาณ และการจัดส่งที่ต่อเนื่องสม่ำเสมอ"
      ),
      icon: Building2,
    },
    {
      title: t("Import & Distribution", "การนำเข้าและกระจายสินค้า"),
      subtitle: t("For international food importers.", "สำหรับผู้นำเข้าอาหารและสินค้าเกษตรในต่างประเทศ"),
      description: t(
        "Export documentation readiness, freight container consolidation, and moisture-stable barrier packaging.",
        "เอกสารประกอบการส่งออก บรรจุภัณฑ์ทนทานต่อการขนส่งทางทะเล และการจัดระเบียบตู้คอนเทนเนอร์"
      ),
      icon: Globe2,
    },
    {
      title: t("Retail & Private Label", "การค้าปลีกและแบรนด์สินค้า"),
      subtitle: t("For businesses looking for differentiated Thai products.", "สำหรับธุรกิจที่ต้องการผลิตภัณฑ์มะขามไทยคุณภาพโดดเด่น"),
      description: t(
        "Supermarket-ready stand-up pouches, clear display jars, and flexible OEM packaging specifications.",
        "ซองตั้งพร้อมจำหน่าย โหลบรรจุสวยงาม และการผลิตภายใต้แบรนด์ของลูกค้า (OEM/Private Label)"
      ),
      icon: Store,
    },
    {
      title: t("Food Service & Ingredients", "ธุรกิจบริการอาหารและวัตถุดิบ"),
      subtitle: t("For commercial food applications.", "สำหรับร้านอาหาร ภัตตาคาร และอุตสาหกรรมแปรรูปอาหาร"),
      description: t(
        "Pure tamarind paste, concentrated edible pastes, and deseeded pulp blocks for culinary manufacturing.",
        "มะขามเปียก มะขามกวน และเนื้อผลไม้ไร้เมล็ดเพื่อนำไปใช้เป็นวัตถุดิบปรุงอาหารและเบเกอรี่"
      ),
      icon: UtensilsCrossed,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#1E241F] text-[#FCFBF7] relative overflow-hidden border-b border-[#C9A24A]/20">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#315C38]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A24A]/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9A24A]">
              {t("Global Business Sourcing", "ศูนย์บริการส่งออกระดับสากล")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.14]">
            {t("Thai Tamarind,", "มะขามไทยคุณภาพสูง")}{" "}
            <span className="text-[#C9A24A] font-serif italic block mt-1">
              {t("Ready for Global Business.", "พร้อมรองรับการค้าระหว่างประเทศ")}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A9C39B] leading-relaxed max-w-2xl">
            {t(
              "Whether you are a distributor, importer, wholesaler, retailer or food-service business, Kingmarind offers a diverse portfolio of tamarind products for international sourcing.",
              "ไม่ว่าคุณจะเป็นผู้นำเข้า ผู้จัดจำหน่าย ค้าส่ง ห้างสรรพสินค้า หรือธุรกิจบริการอาหาร บริษัท คิงมารินด์ จำกัด พร้อมส่งมอบผลิตภัณฑ์มะขามมาตรฐานสากลเพื่อการค้าระยะยาว"
            )}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {businessCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group bg-[#2D362F]/80 backdrop-blur-md rounded-2xl p-7 border border-[#C9A24A]/25 hover:border-[#C9A24A] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#315C38] text-[#C9A24A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-[#C9A24A]/30">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#C9A24A] transition-colors">
                    {card.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#C9A24A] mb-3">
                    {card.subtitle}
                  </div>

                  <p className="text-xs text-[#A9C39B] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-1 text-xs text-white/80 group-hover:text-[#C9A24A] font-semibold">
                  <span>Explore formats</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="gold"
            size="lg"
            onClick={() => openModal()}
            className="shadow-xl"
          >
            <FileText className="w-4 h-4 text-[#1E241F]" />
            <span>{t("Talk to Our Export Team", "ติดต่อทีมงานฝ่ายส่งออก")}</span>
          </Button>

          <Button
            variant="outline-white"
            size="lg"
            href="/export"
          >
            <span>{t("View Sourcing & Packaging Guide", "ดูคู่มือการสั่งซื้อและบรรจุภัณฑ์")}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
