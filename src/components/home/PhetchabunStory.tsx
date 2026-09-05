"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/components/common/LanguageContext";
import { MapPin, SunMedium, Mountain, Droplets, Award } from "lucide-react";

export function PhetchabunStory() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#FCFBF7] relative overflow-hidden border-b border-[#315C38]/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Multiple Editorial Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-96 sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-[#315C38]/15">
              <Image
                src="/images/hero_orchard.jpg"
                alt="Phetchabun Tamarind Valley Terraced Orchards"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A24A] font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" /> Phetchabun Valley, Thailand
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Thailand&apos;s Revered Sweet Tamarind Capital
                </h3>
              </div>
            </div>

            {/* Inset floating card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#FCFBF7] p-5 rounded-2xl shadow-xl border border-[#C9A24A]/40 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#315C38] text-white flex items-center justify-center shrink-0">
                  <Mountain className="w-5 h-5 text-[#C9A24A]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1E241F]">Optimal Microclimate</div>
                  <div className="text-[11px] text-[#547A3F]">Fertile alluvial soils & mountain elevation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Origin Narrative & Terroir Factors */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
                {t("Regional Terroir", "แหล่งกำเนิดและภูมิอากาศ")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E241F] tracking-tight leading-[1.16]">
              {t(
                "Why Phetchabun Tamarind Sets the Global Benchmark",
                "ทำไมมะขามหวานเพชรบูรณ์จึงเป็นที่ยอมรับระดับสากล"
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#315C38] leading-relaxed">
              {t(
                "Nestled among the forested mountain ranges of northern-central Thailand, Phetchabun possesses a distinctive microclimate with wide diurnal temperature variations, rich limestone-fed soil, and crisp dry harvest seasons.",
                "ด้วยลักษณะภูมิประเทศที่โอบล้อมด้วยแนวทิวเขาและดินตะกอนที่อุดมสมบูรณ์ จังหวัดเพชรบูรณ์จึงมีสภาพแวดล้อมเฉพาะตัวที่ทำให้มะขามมีรสหวานกลมกล่อมและเนื้อสัมผัสที่แน่นสวยงาม"
              )}
            </p>

            <p className="text-sm sm:text-base text-[#547A3F] leading-relaxed">
              {t(
                "This unique terroir produces tamarind pods with exceptionally plump pulp, vibrant golden-brown color, and naturally concentrated sweetness. At Kingmarind, we bridge this centuries-old agricultural legacy with modern grading and hygienic export preparation.",
                "คิงมารินด์เชื่อมโยงมรดกทางเกษตรกรรมของเพชรบูรณ์เข้ากับมาตรฐานการคัดเกรด การแปรรูป และการบรรจุสำหรับการค้าระหว่างประเทศ"
              )}
            </p>

            {/* Terroir Factors Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#315C38]/15">
              <div className="flex items-start gap-3">
                <SunMedium className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#1E241F]">Sun-Cured Maturity</div>
                  <div className="text-[11px] text-[#547A3F]">Natural canopy ripening on the branch</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Droplets className="w-5 h-5 text-[#C9A24A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#1E241F]">Balanced Acidity</div>
                  <div className="text-[11px] text-[#547A3F]">Harmonious sweet-to-tart Brix balance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
