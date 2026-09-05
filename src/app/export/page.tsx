import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Building2, Globe2, Store, UtensilsCrossed, Ship, Package, CheckCircle2, ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Export & Global Trade | Kingmarind Co., Ltd. Thailand",
  description:
    "International B2B sourcing of Thai sweet tamarind, dried pitted tamarind, and processed fruit products for importers, distributors, wholesalers, and private-label buyers worldwide.",
};

export default function ExportPage() {
  const segments = [
    {
      title: "Wholesale Supply",
      subtitle: "For distributors and bulk buyers.",
      detail:
        "Structured for master carton supply, multi-pallet orders, and ongoing contract commitments with reliable harvest allocations from Phetchabun.",
      icon: Building2,
    },
    {
      title: "Import & Distribution",
      subtitle: "For international food importers.",
      detail:
        "Complete export documentation support, container loading consolidation, and phytosanitary coordination for smooth customs clearance.",
      icon: Globe2,
    },
    {
      title: "Retail & Private Label",
      subtitle: "For businesses looking for differentiated Thai products.",
      detail:
        "Ready-to-sell consumer packages (pouches, clear jars, gift boxes) with custom language labeling and OEM branding capabilities.",
      icon: Store,
    },
    {
      title: "Food Service & Ingredients",
      subtitle: "For commercial food applications.",
      detail:
        "Pure tamarind paste, concentrated edible pastes, and bulk pitted tamarind blocks suited for commercial kitchens, sauces, and industrial manufacturing.",
      icon: UtensilsCrossed,
    },
  ];

  const logisticsFeatures = [
    {
      title: "Full Container Load (FCL)",
      desc: "20ft and 40ft High Cube ocean freight containers palletized and moisture-sealed for maximum voyage stability.",
    },
    {
      title: "Less than Container Load (LCL)",
      desc: "Palletized consolidated shipments for trial orders, regional distributors, and specialty retail chains.",
    },
    {
      title: "Incoterms Flexibility",
      desc: "FOB Bangkok / Laem Chabang, CIF destination port, or CFR arrangements based on buyer logistics preference.",
    },
    {
      title: "Moisture-Barrier Packaging",
      desc: "High-grade barrier foil pouches and sealed cartons engineered to withstand maritime temperature and humidity shifts.",
    },
  ];

  return (
    <div className="bg-[#FCFBF7] min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="bg-[#1E241F] text-[#FCFBF7] py-20 sm:py-28 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C9A24A] text-xs font-bold uppercase tracking-wider">
              International B2B Procurement Desk
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]">
              Thai Tamarind,{" "}
              <span className="text-[#C9A24A] font-serif italic block mt-1">
                Ready for Global Business.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A9C39B] leading-relaxed max-w-2xl font-light">
              Whether you are a distributor, importer, wholesaler, retailer or food-service business, Kingmarind offers a diverse portfolio of tamarind products for international sourcing.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" href="/quote">
                <FileText className="w-4 h-4 text-[#1E241F]" />
                <span>Submit Sourcing Inquiry</span>
              </Button>
              <Button variant="outline-white" size="lg" href="/products">
                <span>Browse Export Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Buyer Segments */}
      <section className="py-16 sm:py-24 border-b border-[#315C38]/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
              Tailored Commercial Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E241F]">
              How We Serve International Food Buyers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {segments.map((seg, idx) => {
              const Icon = seg.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F3E8] rounded-2xl p-7 border border-[#315C38]/15 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#315C38]/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#315C38] text-[#C9A24A] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E241F]">
                      {seg.title}
                    </h3>
                    <div className="text-xs font-bold text-[#547A3F]">
                      {seg.subtitle}
                    </div>
                    <p className="text-xs text-[#547A3F] leading-relaxed">
                      {seg.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Logistics & Packaging Specifications */}
      <section className="py-16 sm:py-24 bg-[#F7F3E8] border-b border-[#315C38]/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
                  Logistics & Cargo Integrity
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E241F] tracking-tight leading-tight">
                Engineered for Long-Distance Maritime Freight
              </h2>

              <p className="text-sm sm:text-base text-[#547A3F] leading-relaxed">
                Transporting fruit products across oceans requires strict moisture management and durable outer casing. Kingmarind prepares goods in corrugated multi-wall cartons with inner barrier sealing to ensure freshness upon arrival at your port.
              </p>

              <div className="space-y-3 pt-2">
                {logisticsFeatures.map((f, idx) => (
                  <div key={idx} className="p-3.5 bg-[#FCFBF7] rounded-xl border border-[#315C38]/12">
                    <div className="text-xs font-bold text-[#1E241F] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#315C38]" />
                      {f.title}
                    </div>
                    <p className="text-[11px] text-[#547A3F] mt-1 pl-6">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FCFBF7] p-8 sm:p-10 rounded-3xl border border-[#315C38]/15 shadow-md space-y-6">
              <h3 className="text-2xl font-bold text-[#1E241F] flex items-center gap-2.5">
                <Ship className="w-6 h-6 text-[#315C38]" />
                Export Process Checklist
              </h3>

              <div className="space-y-4 text-xs text-[#547A3F]">
                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-xs bg-[#F7F3E8] px-2 py-0.5 rounded text-[#315C38]">01</span>
                  <div>
                    <strong className="text-[#1E241F] block">Product & Quantity Specification</strong>
                    Identify product varieties, target packaging sizes, and volume expectations.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-xs bg-[#F7F3E8] px-2 py-0.5 rounded text-[#315C38]">02</span>
                  <div>
                    <strong className="text-[#1E241F] block">Proforma Quotation & Lead Time</strong>
                    Receive itemized FOB/CIF quotation with harvest scheduling and delivery timelines.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-xs bg-[#F7F3E8] px-2 py-0.5 rounded text-[#315C38]">03</span>
                  <div>
                    <strong className="text-[#1E241F] block">Packaging & OEM Label Alignment</strong>
                    Coordinate language requirements, nutritional panels, barcode specs, and master carton labels.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-xs bg-[#F7F3E8] px-2 py-0.5 rounded text-[#315C38]">04</span>
                  <div>
                    <strong className="text-[#1E241F] block">Production & Freight Dispatch</strong>
                    Goods packed under moisture control and staged for container loading from Thailand.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="gold" href="/quote" className="w-full">
                  <span>Start Export Sourcing Discussion</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
