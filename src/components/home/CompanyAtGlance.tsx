"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/components/common/LanguageContext";
import { MapPin, PackageCheck, Truck, Users2 } from "lucide-react";

export function CompanyAtGlance() {
  const { t } = useLanguage();

  const cards = [
    {
      number: "01",
      title: t("Thai Origin", "แหล่งกำเนิดในไทย"),
      highlight: "Phetchabun, Thailand",
      description: t(
        "Cultivated and sourced in Thailand's most renowned tamarind agricultural valley.",
        "เพาะปลูกและคัดสรรจากแหล่งปลูกมะขามที่ดีที่สุดในจังหวัดเพชรบูรณ์"
      ),
      icon: MapPin,
    },
    {
      number: "02",
      title: t("Product Focus", "จุดเน้นผลิตภัณฑ์"),
      highlight: "Tamarind & Processed Tamarind",
      description: t(
        "Whole sweet pods, seedless pitted segments, dried varieties, and value-added snacks.",
        "มะขามฝักหวาน มะขามไร้เมล็ด มะขามแห้ง และผลิตภัณฑ์แปรรูปหลากหลายรายการ"
      ),
      icon: PackageCheck,
    },
    {
      number: "03",
      title: t("Business Model", "รูปแบบธุรกิจ"),
      highlight: "Wholesale & Export",
      description: t(
        "Structured for master carton supply, container loading, and tailored bulk packaging.",
        "มุ่งเน้นการจัดจำหน่ายระดับค้าส่ง การส่งออก และการผลิตบรรจุภัณฑ์ตามสั่ง"
      ),
      icon: Truck,
    },
    {
      number: "04",
      title: t("Market Focus", "กลุ่มเป้าหมาย"),
      highlight: "International Food Buyers",
      description: t(
        "Serving importers, distributors, supermarket chains, and food-service enterprises.",
        "ตอบโจทย์ผู้นำเข้า ผู้กระจายสินค้า ห้างค้าปลีก และผู้ประกอบการอาหารทั่วโลก"
      ),
      icon: Users2,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F7F3E8] relative overflow-hidden border-b border-[#315C38]/10">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F] mb-2">
            {t("Institutional Profile", "ข้อมูลสรุปองค์กร")}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1E241F]">
            {t("Kingmarind at a Glance", "ภาพรวม บริษัท คิงมารินด์ จำกัด")}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative bg-[#FCFBF7] rounded-2xl p-6 sm:p-7 border border-[#315C38]/12 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-[#C9A24A]/30 group-hover:bg-[#C9A24A] transition-colors" />

                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-4 pt-1">
                  <span className="text-xs font-mono font-bold text-[#C9A24A] tracking-wider px-2 py-0.5 rounded bg-[#F7F3E8]">
                    {card.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#315C38]/10 text-[#315C38] flex items-center justify-center group-hover:bg-[#315C38] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs uppercase tracking-wider font-bold text-[#547A3F] mb-1">
                  {card.title}
                </div>

                <h4 className="text-lg font-bold text-[#1E241F] mb-2 leading-snug">
                  {card.highlight}
                </h4>

                <p className="text-xs text-[#547A3F]/90 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
