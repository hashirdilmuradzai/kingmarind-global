import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Sun,
  CloudRain,
  Wind,
  Landmark,
  Users,
  Coins,
  Globe2,
  Ship,
  Leaf,
  UtensilsCrossed,
  ShieldCheck,
  Mountain,
  Trees,
  ArrowRight,
  Quote,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Thailand | Kingmarind Co., Ltd.",
  description:
    "Discover Thailand — the kingdom behind Kingmarind's tamarind. Geography, climate, culture and the agricultural heritage that makes Thai tamarind the global benchmark.",
};

// ---------------------------------------------------------------------------
// Static content
// ---------------------------------------------------------------------------

const fastFacts = [
  { label: "Capital", value: "Bangkok", icon: Landmark },
  { label: "Population", value: "~71.6 million", icon: Users },
  { label: "Official language", value: "Thai", icon: Globe2 },
  { label: "Currency", value: "Thai Baht (THB)", icon: Coins },
  { label: "Government", value: "Constitutional Monarchy", icon: ShieldCheck },
  { label: "Time zone", value: "Indochina Time (UTC+7)", icon: Sun },
];

const regions = [
  {
    name: "Central Plains",
    icon: Leaf,
    description:
      "Thailand's agricultural core, fed by the Chao Phraya River basin. Fertile alluvial soil supports rice, fruit orchards and the country's largest processing and export infrastructure.",
  },
  {
    name: "Northern Highlands",
    icon: Mountain,
    description:
      "Cooler elevations and forested valleys around Chiang Mai and Chiang Rai, known for highland fruit, coffee and centuries-old farming traditions.",
  },
  {
    name: "Isaan Plateau",
    icon: Trees,
    description:
      "The northeast — home to Phetchabun's tamarind orchards. Distinct dry-season heat and mineral-rich soil give Isaan-grown tamarind its concentrated sweetness.",
  },
  {
    name: "Southern Peninsula",
    icon: Ship,
    description:
      "A narrow stretch between the Andaman Sea and Gulf of Thailand, anchoring rubber, palm oil production and key maritime export routes.",
  },
];

const seasons = [
  {
    name: "Hot season",
    months: "March – June",
    image: "/images/Hotseason.jpg",
    icon: Sun,
    description:
      "Temperatures climb above 35°C. Tamarind pods mature and begin to ripen under long, intense sunlight — the period that builds sugar content in the fruit.",
  },
  {
    name: "Rainy season",
    months: "July – October",
    image: "/images/Rainyseason.jpg",
    icon: CloudRain,
    description:
      "Monsoon rains from the southwest replenish orchard soils. Rainfall is carefully monitored, as excess moisture late in the season can affect pod quality.",
  },
  {
    name: "Cool season",
    months: "November – February",
    image: "/images/Coolseason.jpg",
    icon: Wind,
    description:
      "Dry, mild weather ideal for harvest. Most of Thailand's tamarind is picked, sorted and processed during these months for peak flavor and shelf life.",
  },
];

const cuisineNotes = [
  {
    title: "A pillar of Thai flavor",
    icon: UtensilsCrossed,
    text: "Tamarind's balance of sourness and sweetness anchors staples such as pad thai, tom yum and gaeng som, giving Thai cuisine its signature depth.",
  },
  {
    title: "Rooted in daily life",
    icon: Leaf,
    text: "Beyond the kitchen, tamarind appears in traditional remedies, roadside snacks and festival sweets, woven into everyday Thai culture for generations.",
  },
  {
    title: "A source of regional pride",
    icon: Award,
    text: "Phetchabun hosts an annual Sweet Tamarind Festival celebrating the harvest — a tradition that reflects how central the fruit is to local identity.",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AboutThailandPage() {
  return (
    <main className="bg-[#FCFBF7] text-[#1E241F] pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1E241F]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(201,162,74,0.2), transparent 45%), radial-gradient(circle at 80% 70%, rgba(84,122,63,0.28), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <nav className="mb-8 flex items-center gap-2 text-xs text-[#C9A24A]/80">
            <Link href="/" className="hover:text-[#C9A24A]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#FCFBF7]">About Thailand</span>
          </nav>

          <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#C9A24A]">
            <MapPin className="h-3.5 w-3.5" />
            <span>SOUTHEAST ASIA</span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#FCFBF7] sm:text-5xl md:text-6xl">
            The Kingdom of Thailand,
            <br />
            <span className="font-serif-luxury italic text-[#C9A24A]">
              home to Kingmarind.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#A9C39B]">
            Every product Kingmarind exports begins with the land, climate and
            people of Thailand. Before the tamarind reaches your table, it grows
            in the orchards of Phetchabun — shaped by a country with a deep
            agricultural heritage and a global reputation for quality.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#547A3F]">
              COUNTRY OVERVIEW
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-snug text-[#1E241F] sm:text-4xl">
              A country built on agriculture,
              <span className="font-serif-luxury italic text-[#C9A24A]">
                {" "}
                hospitality and trade.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#547A3F]">
              <p>
                Thailand sits at the heart of Southeast Asia, bordered by
                Myanmar, Laos, Cambodia and Malaysia, with coastlines on both
                the Andaman Sea and the Gulf of Thailand. Its geography spans
                fertile river plains, forested highlands and a tropical
                peninsula — a diversity of terrain that supports one of the
                region&apos;s most productive agricultural sectors.
              </p>
              <p>
                Known internationally as the &quot;Land of Smiles,&quot;
                Thailand combines a long Buddhist heritage with a modern,
                export-driven economy. Agriculture remains central to national
                life, employing a significant share of the workforce and placing
                Thailand among the world&apos;s leading exporters of rice,
                rubber and processed fruit products.
              </p>
              <p>
                It is this combination — favorable climate, generations of
                farming knowledge and reliable export infrastructure — that
                allows companies like Kingmarind to bring Thai tamarind to
                wholesale and food-service partners around the world.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#315C38]/15 bg-[#F7F3E8] p-8 shadow-sm">
            <p className="text-xs font-bold tracking-[0.2em] text-[#547A3F]">
              FAST FACTS
            </p>
            <div className="mt-5 space-y-5">
              {fastFacts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#315C38]/10 text-[#315C38]">
                    <fact.icon className="h-4 w-4" strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#547A3F]">{fact.label}</p>
                    <p className="text-[15px] font-semibold text-[#1E241F]">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-[#1E241F] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#C9A24A]">
              GEOGRAPHY
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#FCFBF7] sm:text-4xl">
              Four regions, one agricultural nation.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#A9C39B]">
              Thailand&apos;s regions each bring something different to its
              agricultural output. Tamarind&apos;s story runs through the Isaan
              plateau, but the country&apos;s broader strength as a supplier
              comes from how these regions work together.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {regions.map((region) => (
              <div
                key={region.name}
                className="rounded-2xl border border-[#547A3F]/40 bg-[#2D362F] p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A24A]/15 text-[#C9A24A]">
                  <region.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#FCFBF7]">
                  {region.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A9C39B]">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate & Seasons */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#547A3F]">
            CLIMATE &amp; GROWING CYCLE
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1E241F] sm:text-4xl">
            A tropical monsoon climate, tuned to tamarind.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#547A3F]">
            Thailand&apos;s three-season climate gives tamarind trees exactly
            what they need across the year — intense sun to build sugar, monsoon
            rain to sustain growth, and a long dry harvest window to protect
            quality.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {seasons.map((season) => (
            <div
              key={season.name}
              className="group overflow-hidden rounded-2xl border border-[#315C38]/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={season.image}
                  alt={`${season.name} in Thailand`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E241F]/65 via-transparent to-transparent" />
                
                <span className="absolute bottom-4 right-3 rounded-md bg-[#FCFBF7]/95 px-2.5 py-1 text-xs font-semibold text-[#315C38] shadow-sm">
                  {season.months}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1E241F]">
                  {season.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#547A3F]">
                  {season.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture & Cuisine */}
      <section className="bg-[#F7F3E8] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#547A3F]">
                CULTURE
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-snug text-[#1E241F] sm:text-4xl">
                Tamarind is not just a crop here —
                <span className="font-serif-luxury italic text-[#C9A24A]">
                  {" "}
                  it&apos;s a tradition.
                </span>
              </h2>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#315C38]/15 bg-[#FCFBF7] p-5 shadow-sm">
                <Quote className="mt-0.5 h-4 w-4 shrink-0 text-[#315C38]" />
                <p className="text-sm italic leading-relaxed text-[#547A3F]">
                  In Phetchabun, the sweet tamarind harvest is marked with its
                  own annual festival — a sign of how deeply the fruit is tied
                  to local identity, not only export volume.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-1">
              {cuisineNotes.map((note) => (
                <div
                  key={note.title}
                  className="flex items-start gap-4 border-b border-[#315C38]/15 pb-5 last:border-none"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#315C38]/10 text-[#315C38]">
                    <note.icon className="h-4 w-4" strokeWidth={2.1} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#1E241F]">
                      {note.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#547A3F]">
                      {note.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Economy & Trade */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#547A3F]">
              ECONOMY &amp; TRADE
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#1E241F] sm:text-4xl">
              Built for reliable global export.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#547A3F]">
              Thailand&apos;s agricultural exports are supported by modern port
              infrastructure, including Laem Chabang — one of Southeast
              Asia&apos;s busiest container ports — and long-established trade
              relationships across Asia, the Middle East, Europe and North
              America.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#547A3F]">
              National standards for Good Agricultural Practice (GAP) and food
              safety give international buyers confidence in traceability and
              quality — the same standards Kingmarind applies across its
              sourcing and processing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-[#315C38]/15 bg-[#F7F3E8] p-6 shadow-sm">
              <Ship className="h-5 w-5 text-[#315C38]" />
              <p className="mt-4 text-sm text-[#1E241F]">
                Established maritime and air freight routes to major global
                markets.
              </p>
            </div>
            <div className="rounded-2xl border border-[#315C38]/15 bg-[#F7F3E8] p-6 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-[#315C38]" />
              <p className="mt-4 text-sm text-[#1E241F]">
                National GAP and food-safety standards aligned with
                international buyer requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-[#315C38]/15 bg-[#F7F3E8] p-6 shadow-sm">
              <Leaf className="h-5 w-5 text-[#315C38]" />
              <p className="mt-4 text-sm text-[#1E241F]">
                One of the world&apos;s leading exporters of processed fruit and
                agricultural goods.
              </p>
            </div>
            <div className="rounded-2xl border border-[#315C38]/15 bg-[#F7F3E8] p-6 shadow-sm">
              <Globe2 className="h-5 w-5 text-[#315C38]" />
              <p className="mt-4 text-sm text-[#1E241F]">
                Long-standing trade relationships across Asia, the Middle East,
                Europe and North America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E241F] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#C9A24A]">
              FROM THAILAND TO YOUR SUPPLY CHAIN
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-bold text-[#FCFBF7] sm:text-3xl">
              See where Kingmarind&apos;s tamarind comes from.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-[#C9A24A] px-6 py-3 text-sm font-semibold text-[#1E241F] transition-colors hover:bg-[#B88E35]"
          >
            View Full Catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
