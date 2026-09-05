import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Filter, Scissors, Layers, Package, Ship, Waves, ThermometerSun, CheckCircle2, ArrowRight, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Processing | Kingmarind Co., Ltd. Thai Tamarind",
  description:
    "Explore Kingmarind's comprehensive 5-step preparation process and innovative MID Infrared drying technology for premium Thai sweet tamarind and seedless tamarind products.",
};

export default function QualityPage() {
  const steps = [
    {
      num: "01",
      title: "Selection",
      subtitle: "Selected tamarind sourced from Thailand.",
      detail:
        "Every batch begins with raw pod evaluation in Phetchabun orchards. Pods are hand-inspected for outer shell integrity, size classification, and pulp ripeness to ensure optimal sugar-acid balance before sorting.",
      icon: Filter,
    },
    {
      num: "02",
      title: "Preparation",
      subtitle: "Careful preparation according to product format.",
      detail:
        "Depending on the target product line, pods undergo mechanical or manual de-shelling, precision deseeding, fiber strand removal, and sanitization to deliver clean, ready-to-process pulp.",
      icon: Scissors,
    },
    {
      num: "03",
      title: "Processing",
      subtitle: "Processing into dried, seasoned and value-added products.",
      detail:
        "Pulp is directed to specialized processing streams: MID Infrared drying for sweet seedless varieties, gentle cane sugar crystallization for candied snacks, or plum powder infusion for seasoned specialties.",
      icon: Layers,
    },
    {
      num: "04",
      title: "Packing",
      subtitle: "Products prepared in practical retail and wholesale formats.",
      detail:
        "Packaging is executed under strict moisture-controlled environments into multi-layer foil pouches, food-grade PET jars, vacuum-sealed retail trays, or heavy-duty corrugated export cartons.",
      icon: Package,
    },
    {
      num: "05",
      title: "Distribution",
      subtitle: "Prepared for domestic and international trade.",
      detail:
        "Finished goods are palletized, moisture-shielded, and staged for domestic transport or ocean container loading (FCL / LCL) from Port of Bangkok / Laem Chabang to global buyer destinations.",
      icon: Ship,
    },
  ];

  return (
    <div className="bg-[#FCFBF7] min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="bg-[#1E241F] text-[#FCFBF7] py-20 sm:py-28 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C9A24A] text-xs font-bold uppercase tracking-wider">
              Standardized Handling
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]">
              Traditional Tamarind.{" "}
              <span className="text-[#C9A24A] font-serif italic block mt-1">
                Carefully Prepared.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A9C39B] leading-relaxed max-w-2xl font-light">
              Kingmarind focuses on tamarind and processed tamarind products prepared for wholesale markets. Product formats range from fresh and dried tamarind to seasoned snacks and processed varieties.
            </p>
          </div>
        </Container>
      </section>

      {/* 5-Step Process Breakdown */}
      <section className="py-16 sm:py-24 border-b border-[#315C38]/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
              Step-by-Step Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E241F]">
              From Harvest to Export Packing
            </h2>
            <p className="text-sm text-[#547A3F]">
              A consistent, disciplined preparation sequence that preserves the natural flavor integrity of Phetchabun tamarind.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="bg-[#F7F3E8] rounded-3xl p-8 sm:p-10 border border-[#315C38]/15 shadow-xs flex flex-col md:flex-row items-start gap-6 lg:gap-10 hover:border-[#315C38]/40 transition-colors"
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="w-14 h-14 rounded-2xl bg-[#315C38] text-white flex items-center justify-center font-mono text-xl font-bold shadow-md">
                      {s.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#FCFBF7] text-[#315C38] flex items-center justify-center border border-[#315C38]/15">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-[#1E241F]">
                        {s.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#547A3F] px-2.5 py-0.5 rounded-full bg-[#FCFBF7] border border-[#315C38]/10">
                        {s.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-[#547A3F] leading-relaxed pt-1">
                      {s.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process Innovation Deep Dive */}
      <section className="py-16 sm:py-24 bg-[#F7F3E8] border-b border-[#315C38]/10">
        <Container>
          <div className="bg-[#FCFBF7] rounded-3xl p-8 sm:p-14 border border-[#315C38]/15 shadow-md space-y-8">
            <div className="flex items-center gap-2">
              <Badge variant="gold" size="md">
                Process Innovation
              </Badge>
            </div>

            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E241F]">
                Exploring Better Ways to Preserve Thai Tamarind
              </h2>
              <p className="text-base sm:text-lg text-[#315C38] font-medium leading-relaxed">
                Kingmarind has been associated with innovative processing approaches for sweet seedless tamarind, including MID Infrared drying technology developed for wholesale applications.
              </p>
              <p className="text-sm sm:text-base text-[#547A3F] leading-relaxed">
                The process uses controlled infrared wavelengths and carefully managed temperature and airflow to help reduce moisture and heat accumulation on the tamarind surface, supporting more consistent product appearance after drying.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#315C38]/15">
              <div className="p-5 rounded-2xl bg-[#F7F3E8] border border-[#315C38]/10 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#1E241F]">
                  <Waves className="w-4 h-4 text-[#C9A24A]" />
                  Controlled Infrared Energy
                </div>
                <p className="text-xs text-[#547A3F] leading-relaxed">
                  Penetrates evenly to activate water molecules inside the pulp without caramelizing exterior natural sugars.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F3E8] border border-[#315C38]/10 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#1E241F]">
                  <ThermometerSun className="w-4 h-4 text-[#C9A24A]" />
                  Airflow & Heat Management
                </div>
                <p className="text-xs text-[#547A3F] leading-relaxed">
                  Continuous ambient exhaustion prevents localized thermal hotspots, preserving delicate fruit vitamins and aroma.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F3E8] border border-[#315C38]/10 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#1E241F]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A24A]" />
                  Consistent Shelf Appearance
                </div>
                <p className="text-xs text-[#547A3F] leading-relaxed">
                  Yields clean, amber-hued deseeded tamarind with reduced stickiness and superior overseas shipping resilience.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sourcing CTA */}
      <section className="py-16 sm:py-20 text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-[#1E241F]">
              Have Specific Processing Requirements?
            </h3>
            <p className="text-sm text-[#547A3F]">
              Our export management accommodates custom grading, moisture percentage thresholds, and specialized wholesale packing.
            </p>
            <div className="pt-2">
              <Button variant="primary" href="/contact" size="lg">
                <span>Inquire About Processing Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
