"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { PRODUCTS } from "@/data/products";
import { useLanguage } from "@/components/common/LanguageContext";
import { useRfq } from "@/components/common/RfqContext";
import { Download, FileText, Printer, CheckCircle, Package, ArrowUpRight, Search } from "lucide-react";

export default function CatalogPage() {
  const { t } = useLanguage();
  const { openModal } = useRfq();
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [search, setSearch] = useState("");

  const handleDownload = () => {
    setDownloadSuccess(true);
    // Trigger printable / download view
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const filtered = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.format.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#FCFBF7] min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="bg-[#1E241F] text-[#FCFBF7] py-20 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C9A24A] text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              Digital Sourcing Catalog
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t("Explore the Full Product Range", "ดาวน์โหลดและดูรายการผลิตภัณฑ์ฉบับสมบูรณ์")}
            </h1>
            <p className="text-sm sm:text-base text-[#A9C39B] leading-relaxed max-w-2xl font-light">
              {t(
                "Download our product catalog to explore available tamarind products, packaging formats and wholesale options.",
                "ดาวน์โหลดและตรวจสอบรายละเอียดสินค้า ขนาดบรรจุภัณฑ์ และรูปแบบการสั่งซื้อเพื่อประกอบการพิจารณาจัดซื้อ"
              )}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <button
                type="button"
                onClick={handleDownload}
                className="px-6 py-3 bg-[#C9A24A] hover:bg-[#B88E35] text-[#1E241F] font-bold rounded-xl text-sm transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t("Download / Print Catalog", "ดาวน์โหลด / พิมพ์แคตตาล็อก")}</span>
              </button>

              <button
                type="button"
                onClick={() => openModal()}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm transition-all border border-white/20 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#C9A24A]" />
                <span>{t("Request Product List & Pricing", "ขอรับตารางราคาส่ง")}</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Catalog Table */}
      <section className="py-16">
        <Container>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#315C38]/15 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#315C38]/10">
              <div>
                <h2 className="text-xl font-bold text-[#1E241F]">
                  Kingmarind Export Master Product Index (32 Products)
                </h2>
                <div className="text-xs text-[#547A3F] mt-0.5">
                  Reference catalog specifications for wholesale and international procurement.
                </div>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Filter catalog..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs border border-[#315C38]/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#315C38]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#315C38]/15 text-[#547A3F] uppercase tracking-wider font-bold">
                    <th className="py-3 px-3">#</th>
                    <th className="py-3 px-3">Product Name</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Grade Standard</th>
                    <th className="py-3 px-3">Available Pack Sizes</th>
                    <th className="py-3 px-3">Shelf Life</th>
                    <th className="py-3 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#315C38]/10 text-[#1E241F]">
                  {filtered.map((item) => (
                    <tr key={item.id} className="hover:bg-[#F7F3E8]/50 transition-colors">
                      <td className="py-3 px-3 font-mono text-[#547A3F] font-semibold">{item.id}</td>
                      <td className="py-3 px-3 font-bold text-[#315C38]">{item.name}</td>
                      <td className="py-3 px-3 text-[#547A3F]">{item.category}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded bg-[#F7F3E8] text-[#1E241F] font-mono text-[11px]">
                          {item.grade || "Export Standard"}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px]">
                        {item.sizes.map((s) => s.size).join(" • ")}
                      </td>
                      <td className="py-3 px-3 text-[#547A3F]">{item.shelfLife}</td>
                      <td className="py-3 px-3 text-right">
                        <button
                          type="button"
                          onClick={() => openModal(item)}
                          className="px-3 py-1 bg-[#315C38] text-white rounded text-[11px] font-bold hover:bg-[#25462B] transition-colors"
                        >
                          RFQ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-4 border-t border-[#315C38]/10 flex items-center justify-between text-xs text-[#547A3F]">
              <span>KINGMARIND CO., LTD. • Phetchabun 67110, Thailand</span>
              <span>All specifications subject to seasonal crop variations</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
