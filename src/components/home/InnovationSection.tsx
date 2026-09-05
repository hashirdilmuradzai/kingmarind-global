"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/components/common/LanguageContext";
import { Zap, Waves, ThermometerSun, CheckCircle, ShieldCheck } from "lucide-react";

export function InnovationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#F7F3E8] relative overflow-hidden border-b border-[#315C38]/10">
      <Container>
        <div className="bg-[#FCFBF7] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#315C38]/15 shadow-md relative overflow-hidden">
          {/* Subtle gold botanical ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A24A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Narrative & Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="gold" size="md">
                  <Zap className="w-3.5 h-3.5 text-[#8F6A1A]" />
                  Process Innovation
                </Badge>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E241F] tracking-tight leading-[1.15]">
                {t(
                  "Exploring Better Ways to Preserve Thai Tamarind",
                  "นวัตกรรมการอบแห้งเพื่อรักษาคุณภาพมะขามไทย"
                )}
              </h2>

              <p className="text-base sm:text-lg text-[#315C38] leading-relaxed font-medium">
                {t(
                  "Kingmarind has been associated with innovative processing approaches for sweet seedless tamarind, including MID Infrared drying technology developed for wholesale applications.",
                  "คิงมารินด์ให้ความสำคัญกับการพัฒนาเทคนิคการแปรรูปสำหรับมะขามหวานไร้เมล็ด รวมถึงการประยุกต์ใช้เทคโนโลยีการอบแห้งด้วยคลื่นอินฟราเรดย่านกลาง (MID Infrared Drying) เพื่อการค้าส่ง"
                )}
              </p>

              <p className="text-sm sm:text-base text-[#547A3F] leading-relaxed">
                {t(
                  "The process uses controlled infrared wavelengths and carefully managed temperature and airflow to help reduce moisture and heat accumulation on the tamarind surface, supporting more consistent product appearance after drying.",
                  "กระบวนการนี้ใช้คลื่นความยาวอินฟราเรดที่มีการควบคุมอย่างแม่นยำ ผสานกับการจัดการอุณหภูมิและการหมุนเวียนของอากาศ ช่วยลดการสะสมความร้อนส่วนเกินบนผิวมะขาม ส่งผลให้สีสันและเนื้อสัมผัสมีความสม่ำเสมอและคงความสดใหม่ได้ยาวนานยิ่งขึ้น"
                )}
              </p>

              {/* Three key pillars of the MID Infrared process */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#315C38]/15">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E241F]">
                    <Waves className="w-4 h-4 text-[#C9A24A]" />
                    <span>Targeted Moisture</span>
                  </div>
                  <p className="text-[11px] text-[#547A3F]">
                    Even core dehydration without burning outer sugars.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E241F]">
                    <ThermometerSun className="w-4 h-4 text-[#C9A24A]" />
                    <span>Managed Thermal</span>
                  </div>
                  <p className="text-[11px] text-[#547A3F]">
                    Prevents excessive heat stress on delicate fruit pulp.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E241F]">
                    <CheckCircle className="w-4 h-4 text-[#C9A24A]" />
                    <span>Color Integrity</span>
                  </div>
                  <p className="text-[11px] text-[#547A3F]">
                    Retains natural golden-amber luster across batches.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-[#315C38]/20 bg-[#1E241F]">
                <Image
                  src="/images/seedless_tamarind.jpg"
                  alt="MID Infrared dried seedless tamarind"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A24A]/20 border border-[#C9A24A]/40 text-[#C9A24A] text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Consistent Export Standard
                  </div>
                  <h4 className="text-lg font-bold text-white leading-snug">
                    MID Infrared Seedless Tamarind
                  </h4>
                  <p className="text-xs text-[#A9C39B] leading-relaxed">
                    Designed for overseas shipping longevity and uniform pulp quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
