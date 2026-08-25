import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/data/company";
import { MapPin, Building, UserCheck, FileCheck2, Phone, Mail, ArrowRight, Sprout, Globe, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Kingmarind Co., Ltd. | Thai Tamarind Exporter & Processor",
  description:
    "Rooted in Thai Tamarind. Focused on Global Markets. Learn about Kingmarind Co., Ltd., based in Phetchabun, Thailand, specializing in sweet and processed tamarind for international wholesale trade.",
};

export default function AboutPage() {
  const pillars = [
    {
      label: "Origin",
      title: "Phetchabun, Thailand",
      description:
        "Headquartered and operating directly within Thailand's most renowned tamarind agricultural belt.",
      icon: MapPin,
    },
    {
      label: "Focus",
      title: "Tamarind & Processed Agricultural Products",
      description:
        "Specialized in whole pods, seedless tamarind, dried grades, and value-added fruit confections.",
      icon: Sprout,
    },
    {
      label: "Business",
      title: "Wholesale & International Trade",
      description:
        "Engineered to supply distributors, importers, retailers, and food service companies with stable volume.",
      icon: Globe,
    },
  ];

  return (
    <div className="bg-[#FCFBF7] min-h-screen pt-24 pb-20">
      {/* Editorial Hero */}
      <section className="bg-[#1E241F] text-[#FCFBF7] py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero_orchard.jpg"
            alt="Phetchabun Tamarind Orchard"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E241F] via-[#1E241F]/80 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C9A24A] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              Phetchabun, Thailand
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]">
              Rooted in Thai Tamarind.{" "}
              <span className="text-[#C9A24A] font-serif italic block mt-1">
                Focused on Global Markets.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A9C39B] leading-relaxed max-w-2xl font-light">
              Kingmarind Co., Ltd. is a Thailand-based company specializing in tamarind pods, processed tamarind and agricultural products for wholesale and international trade.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Narrative Split */}
      <section className="py-16 sm:py-24 border-b border-[#315C38]/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-[#315C38]/15">
                <Image
                  src="/images/sweet_tamarind.jpg"
                  alt="Authentic Thai Sweet Tamarind"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Company Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
                  Corporate Heritage & Identity
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E241F] tracking-tight leading-tight">
                Authentic Thai Agricultural Sourcing with Professional Export Handling
              </h2>

              <p className="text-base sm:text-lg text-[#315C38] leading-relaxed">
                Located in Phetchabun, an important region for Thai sweet tamarind, Kingmarind develops and supplies a wide range of tamarind formats designed for different consumer and business needs.
              </p>

              <p className="text-sm sm:text-base text-[#547A3F] leading-relaxed">
                Our product development balances the rich, natural sweetness of Thai harvest cultivars with the practical demands of overseas distribution: moisture stability, uniform grading, and reliable master carton packaging.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="p-4 rounded-xl bg-[#F7F3E8] border border-[#315C38]/12 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#315C38]" />
                  <span className="text-xs font-bold text-[#1E241F]">Phetchabun Cultivar Selection</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F3E8] border border-[#315C38]/12 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#315C38]" />
                  <span className="text-xs font-bold text-[#1E241F]">Wholesale B2B Order Focus</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 Informational Pillars (No invented timeline) */}
      <section className="py-16 sm:py-20 bg-[#F7F3E8] border-b border-[#315C38]/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F] mb-2">
              Core Strategic Foundations
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E241F]">
              How Kingmarind is Structured
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FCFBF7] rounded-2xl p-7 border border-[#315C38]/15 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#C9A24A] bg-[#F7F3E8] px-2.5 py-1 rounded-md">
                        {p.label}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#315C38]/10 text-[#315C38] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1E241F]">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#547A3F] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Verified Corporate Credentials & Leadership */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto bg-[#FCFBF7] rounded-3xl p-8 sm:p-12 border border-[#315C38]/15 shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
                Verified Commercial Identity
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1E241F]">
                {COMPANY.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#315C38]/12 text-sm text-[#1E241F]">
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-[#547A3F] uppercase tracking-wider block font-bold">Registered Office</span>
                  <span className="font-semibold">{COMPANY.location.fullAddress}</span>
                </div>
                <div>
                  <span className="text-xs text-[#547A3F] uppercase tracking-wider block font-bold">Tax Registration Number</span>
                  <span className="font-mono font-bold text-[#315C38]">{COMPANY.taxId}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-xs text-[#547A3F] uppercase tracking-wider block font-bold">Managing Director</span>
                  <span className="font-bold">{COMPANY.managingDirector.name} ({COMPANY.managingDirector.shortName})</span>
                </div>
                <div>
                  <span className="text-xs text-[#547A3F] uppercase tracking-wider block font-bold">Business Email</span>
                  <a href={`mailto:${COMPANY.contact.email}`} className="text-[#315C38] font-semibold hover:underline">
                    {COMPANY.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#315C38]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#547A3F]">
                Interested in partnership opportunities or distributor inquiries?
              </div>
              <Button variant="primary" href="/contact" size="md">
                <span>Contact Management</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
