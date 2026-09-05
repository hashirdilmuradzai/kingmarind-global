"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/common/LanguageContext";
import { CheckCircle2, ArrowRight, Sparkles, Filter, Scissors, Layers, Package, Ship } from "lucide-react";

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      title: t("Selection", "การคัดสรร"),
      subtitle: t("Selected tamarind sourced from Thailand.", "คัดสรรวัตถุดิบมะขามคุณภาพสูงจากแหล่งเพาะปลูกในไทย"),
      detail: "Manual sorting for pod size, maturity level, and pulp density.",
      icon: Filter,
    },
    {
      step: "02",
      title: t("Preparation", "การเตรียมวัตถุดิบ"),
      subtitle: t("Careful preparation according to product format.", "การจัดเตรียมอย่างพิถีพิถันตามรูปแบบผลิตภัณฑ์"),
      detail: "De-shelling, deseeding, and meticulous inspection.",
      icon: Scissors,
    },
    {
      step: "03",
      title: t("Processing", "การแปรรูป"),
      subtitle: t("Processing into dried, seasoned and value-added products.", "แปรรูปเป็นมะขามอบแห้ง ปรุงรส และผลิตภัณฑ์เพิ่มมูลค่า"),
      detail: "Controlled moisture drying, natural flavor infusion, and candied processing.",
      icon: Layers,
    },
    {
      step: "04",
      title: t("Packing", "การบรรจุ"),
      subtitle: t("Products prepared in practical retail and wholesale formats.", "บรรจุในรูปแบบที่เหมาะสมสำหรับการค้าปลีกและค้าส่ง"),
      detail: "Sealed barrier pouches, airtight jars, and heavy-duty master export cartons.",
      icon: Package,
    },
    {
      step: "05",
      title: t("Distribution", "การกระจายสินค้า"),
      subtitle: t("Prepared for domestic and international trade.", "พร้อมสำหรับการกระจายสินค้าทั้งในประเทศและการค้าระหว่างประเทศ"),
      detail: "FOB/CIF logistics management, container consolidation, and palletization.",
      icon: Ship,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FCFBF7] relative overflow-hidden border-b border-[#315C38]/10">
      <Container>
        <SectionHeading
          label={t("Quality & Processing", "คุณภาพและกรรมวิธี")}
          title={t("Traditional Tamarind. Carefully Prepared.", "มะขามไทยดั้งเดิม ผ่านการเตรียมอย่างพิถีพิถัน")}
          subtitle={t(
            "Kingmarind focuses on tamarind and processed tamarind products prepared for wholesale markets. Product formats range from fresh and dried tamarind to seasoned snacks and processed varieties.",
            "คิงมารินด์มุ่งเน้นการจัดเตรียมผลิตภัณฑ์มะขามสำหรับการค้าส่ง ครอบคลุมตั้งแต่มะขามฝัก มะขามอบแห้ง ไปจนถึงขนมขบเคี้ยวและผลิตภัณฑ์แปรรูปคุณภาพสูง"
          )}
        />

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="group relative bg-[#F7F3E8] rounded-2xl p-6 border border-[#315C38]/15 hover:border-[#315C38]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Step Number Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#C9A24A] bg-[#FCFBF7] px-2.5 py-1 rounded-md border border-[#315C38]/10">
                    Step {s.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#315C38]/10 text-[#315C38] flex items-center justify-center group-hover:bg-[#315C38] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#1E241F] group-hover:text-[#315C38] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#547A3F] leading-snug">
                    {s.subtitle}
                  </p>
                  <p className="text-[11px] text-[#547A3F]/80 leading-relaxed pt-1">
                    {s.detail}
                  </p>
                </div>

                {/* Subtle bottom connector accent */}
                <div className="mt-4 pt-3 border-t border-[#315C38]/10 flex items-center gap-1.5 text-[10px] text-[#315C38] font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3 text-[#C9A24A]" />
                  <span>Standard Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" href="/quality" className="group">
            <span>{t("Explore Complete Quality & Processing Guide", "อ่านขั้นตอนการผลิตและควบคุมคุณภาพทั้งหมด")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
