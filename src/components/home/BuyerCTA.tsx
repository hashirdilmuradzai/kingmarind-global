"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/components/common/LanguageContext";
import { Send, CheckCircle2, Building, Mail, Phone, Globe, PackageCheck, ShieldAlert } from "lucide-react";

export function BuyerCTA() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    country: "",
    phoneWhatsApp: "",
    productInterest: "Sweet Tamarind",
    estimatedQuantity: "1,000 kg – 5,000 kg (Palletized)",
    preferredPackaging: "Standard Wholesale Packaging",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F7F3E8] relative overflow-hidden border-b border-[#315C38]/10" id="buyer-inquiry">
      <Container>
        <div className="max-w-4xl mx-auto bg-[#FCFBF7] rounded-3xl p-8 sm:p-12 border border-[#315C38]/15 shadow-xl relative overflow-hidden">
          {/* Top gold line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#315C38] via-[#C9A24A] to-[#315C38]" />

          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
              {t("International Buyers & Partners", "สำหรับผู้ซื้อและคู่ค้านานาชาติ")}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E241F] tracking-tight leading-tight">
              {t("Looking for a Thai Tamarind Supplier?", "กำลังมองหาผู้ส่งออกมะขามไทยคุณภาพสูง?")}
            </h2>

            <p className="text-sm sm:text-base text-[#547A3F] leading-relaxed">
              {t(
                "Tell us what you are looking for and our team can help you explore suitable products, packaging formats and wholesale requirements.",
                "ระบุความต้องการของคุณเพื่อให้ทีมงานฝ่ายส่งออกช่วยแนะนำรายการสินค้า รูปแบบบรรจุภัณฑ์ และเงื่อนไขการค้าส่งที่ตรงตามเป้าหมายธุรกิจ"
              )}
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-[#315C38]/10 text-[#315C38] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E241F]">
                {t("Thank you. Your inquiry has been received.", "ขอบคุณสำหรับการติดต่อ ข้อมูลการสอบถามของท่านถูกบันทึกเรียบร้อยแล้ว")}
              </h3>
              <p className="text-sm text-[#547A3F] max-w-md mx-auto leading-relaxed">
                {t(
                  "Our export management team will review your requirements and respond via email with specifications and preliminary quotation details.",
                  "ฝ่ายจัดการการส่งออกจะตรวจสอบข้อกำหนดและติดต่อกลับทางอีเมลพร้อมรายละเอียดข้อกำหนดและใบเสนอราคาเบื้องต้น"
                )}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-[#315C38] text-white rounded-lg font-semibold text-sm hover:bg-[#25462B] transition-colors"
                >
                  {t("Submit Another Inquiry", "ส่งข้อความสอบถามรายการอื่น")}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                    {t("Full Name", "ชื่อ-นามสกุล")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                    {t("Company Name", "ชื่อบริษัท")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Pacific Imports Inc."
                    className="w-full px-4 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                    {t("Business Email", "อีเมลธุรกิจ")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="trade@company.com"
                    className="w-full px-4 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                    {t("Country / Destination Market", "ประเทศ / ตลาดปลายทาง")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Japan, Saudi Arabia, USA, Germany"
                    className="w-full px-4 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                    {t("Phone / WhatsApp", "เบอร์โทร / WhatsApp")}
                  </label>
                  <input
                    type="text"
                    value={formData.phoneWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                    {t("Product Interest", "กลุ่มสินค้าที่สนใจ")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  >
                    <option value="Sweet Tamarind">Sweet Tamarind (มะขามหวาน)</option>
                    <option value="Seedless Tamarind">Seedless Tamarind (มะขามไร้เมล็ด)</option>
                    <option value="Dried Tamarind">Dried Tamarind (มะขามแห้ง)</option>
                    <option value="Seasoned Tamarind">Seasoned Tamarind (มะขามคลุกปรุงรส)</option>
                    <option value="Tamarind Snacks">Tamarind Snacks (ขนมขบเคี้ยวมะขาม)</option>
                    <option value="Tamarind Paste">Tamarind Paste (มะขามเปียก/มะขามกวน)</option>
                    <option value="Other">Other / Full Sourcing Inquiry (อื่นๆ)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                    {t("Estimated Order Quantity", "ปริมาณการสั่งซื้อโดยประมาณ")}
                  </label>
                  <input
                    type="text"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    placeholder="e.g. 500 kg, 2 Metric Tons, 1 FCL 20ft"
                    className="w-full px-4 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                    {t("Preferred Packaging", "รูปแบบบรรจุภัณฑ์ที่ต้องการ")}
                  </label>
                  <input
                    type="text"
                    value={formData.preferredPackaging}
                    onChange={(e) => setFormData({ ...formData, preferredPackaging: e.target.value })}
                    placeholder="e.g. Retail stand-up pouches, 10kg master cartons, private label"
                    className="w-full px-4 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                  {t("Message & Specifications", "ข้อความและรายละเอียดเพิ่มเติม")}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding target delivery terms (FOB/CIF), specific grading, or labeling requirements..."
                  className="w-full px-4 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-[#547A3F] flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-[#315C38]" />
                  Direct response from Kingmarind export management.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-[#315C38] hover:bg-[#25462B] text-white font-bold rounded-xl shadow-md text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C9A24A]" />
                      <span>{t("Send Wholesale Inquiry", "ส่งข้อความสอบถาม")}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
