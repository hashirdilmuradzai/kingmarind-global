"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/components/common/LanguageContext";
import { MapPin, CheckCircle2, Sprout, Compass } from "lucide-react";

export function IntroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#FCFBF7] relative overflow-hidden border-b border-[#315C38]/10">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7F3E8] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Origin Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#315C38]/10 text-[#315C38] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
              Phetchabun, Thailand
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E241F] tracking-tight leading-[1.16]">
              {t(
                "From Thailand's Tamarind Heartland to the World.",
                "จากแหล่งกำเนิดมะขามหวาน สู่ตลาดการค้าสากล"
              )}
            </h2>

            <div className="w-16 h-1 bg-[#C9A24A] rounded-full" />

            {/* Visual preview card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#315C38]/15 h-64 sm:h-72 mt-8">
              <Image
                src="/images/sweet_tamarind.jpg"
                alt="Thai Sweet Tamarind from Phetchabun"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs uppercase tracking-widest text-[#C9A24A] font-bold">
                    Agricultural Heritage
                  </div>
                  <div className="text-lg font-bold">
                    Phetchabun Sweet Tamarind Cultivars
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Paragraphs & Value Statements */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <p className="text-lg sm:text-xl text-[#315C38] font-medium leading-relaxed">
              {t(
                "Kingmarind Co., Ltd. specializes in tamarind pods, sweet tamarind and a wide range of processed tamarind products. Based in Phetchabun, Thailand, the company serves the wholesale market with products designed for different tastes, formats and business requirements.",
                "บริษัท คิงมารินด์ จำกัด เชี่ยวชาญด้านมะขามฝักสด มะขามหวาน และผลิตภัณฑ์แปรรูปจากมะขามหลากหลายรูปแบบ มีฐานการดำเนินงาน ณ จังหวัดเพชรบูรณ์ พร้อมส่งมอบสินค้าคุณภาพสูงเพื่อตอบสนองความต้องการของผู้ซื้อระดับค้าส่งและอุตสาหกรรมอาหาร"
              )}
            </p>

            <p className="text-base sm:text-lg text-[#547A3F] leading-relaxed">
              {t(
                "Our product range combines traditional Thai tamarind flavors with practical formats for wholesale and international trade. We prepare each batch with close attention to moisture control, grading precision, and shelf-stable packaging.",
                "สายผลิตภัณฑ์ของเรารวมรสชาติต้นตำรับมะขามไทยเข้ากับรูปแบบบรรจุภัณฑ์ที่สะดวกต่อการขนส่งและการค้าปลีก-ค้าส่ง พร้อมการควบคุมความชื้นและการคัดเกรดอย่างเป็นระบบ"
              )}
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#315C38]/15">
              <div className="p-4 rounded-xl bg-[#F7F3E8] border border-[#315C38]/10 space-y-1">
                <div className="flex items-center gap-2 text-[#315C38] font-bold text-sm">
                  <Sprout className="w-4 h-4 text-[#C9A24A]" />
                  Direct Regional Origin
                </div>
                <p className="text-xs text-[#547A3F] leading-normal">
                  Sourced directly from Phetchabun&apos;s renowned tamarind belt.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F3E8] border border-[#315C38]/10 space-y-1">
                <div className="flex items-center gap-2 text-[#315C38] font-bold text-sm">
                  <Compass className="w-4 h-4 text-[#C9A24A]" />
                  B2B Trade Readiness
                </div>
                <p className="text-xs text-[#547A3F] leading-normal">
                  Prepared for international logistics, freight stability, and bulk supply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
