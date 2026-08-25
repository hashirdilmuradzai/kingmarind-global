"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/common/LanguageContext";
import { Award, Layers, Box, Truck, MapPin, Globe } from "lucide-react";

export function WhyKingmarind() {
  const { t } = useLanguage();

  const reasons = [
    {
      title: t("Thai Tamarind Expertise", "ความเชี่ยวชาญด้านมะขามไทย"),
      description: t(
        "Focused product knowledge across sweet and processed tamarind.",
        "ความรู้และความเข้าใจอย่างลึกซึ้งในสายพันธุ์มะขามหวานและการแปรรูปผลผลิต"
      ),
      icon: Award,
    },
    {
      title: t("Diverse Product Range", "ความหลากหลายของผลิตภัณฑ์"),
      description: t(
        "From dried and seedless tamarind to seasoned snacks and value-added products.",
        "ครอบคลุมทั้งมะขามอบแห้ง มะขามไร้เมล็ด ขนมขบเคี้ยว และผลิตภัณฑ์มะขามกวน"
      ),
      icon: Layers,
    },
    {
      title: t("Flexible Formats", "ความยืดหยุ่นของขนาดและบรรจุภัณฑ์"),
      description: t(
        "Multiple weights, packaging formats and product grades.",
        "มีให้เลือกหลากหลายน้ำหนัก รูปแบบซอง/โหล และเกรดสินค้าตามงบประมาณ"
      ),
      icon: Box,
    },
    {
      title: t("Wholesale Focus", "โครงสร้างสำหรับธุรกิจค้าส่ง"),
      description: t(
        "Products presented for distributors, wholesalers and commercial buyers.",
        "ออกแบบกระบวนการผลิตและการจัดส่งเพื่อรองรับผู้ค้าส่งและห้างร้านโดยเฉพาะ"
      ),
      icon: Truck,
    },
    {
      title: t("Thai Origin", "แหล่งกำเนิดแท้จากประเทศไทย"),
      description: t(
        "Based in Phetchabun, Thailand.",
        "ดำเนินงานและคัดสรรวัตถุดิบโดยตรง ณ จังหวัดเพชรบูรณ์ แหล่งปลูกมะขามที่ดีที่สุด"
      ),
      icon: MapPin,
    },
    {
      title: t("Export Mindset", "มุ่งมั่นสู่มาตรฐานการส่งออก"),
      description: t(
        "Built to connect Thai agricultural products with international buyers.",
        "พร้อมเชื่อมโยงผลผลิตทางการเกษตรไทยสู่ผู้ซื้อและพันธมิตรทางธุรกิจทั่วโลก"
      ),
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FCFBF7] relative overflow-hidden border-b border-[#315C38]/10">
      <Container>
        <SectionHeading
          label={t("Partnership Strengths", "จุดเด่นและความพร้อม")}
          title={t("Why Partner with Kingmarind?", "ทำไมต้องเลือกเป็นคู่ค้ากับ คิงมารินด์?")}
          subtitle={t(
            "We combine authentic Thai agricultural heritage with professional export handling to deliver dependable tamarind supply worldwide.",
            "เราผสานมรดกทางเกษตรกรรมของไทยเข้ากับการดำเนินงานส่งออกอย่างมืออาชีพ เพื่อสร้างความมั่นใจในการเป็นคู่ค้าระยะยาว"
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="group bg-[#F7F3E8] rounded-2xl p-7 border border-[#315C38]/15 hover:border-[#315C38]/40 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#315C38] text-[#C9A24A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#1E241F] group-hover:text-[#315C38] transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#547A3F] leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
