"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/data/company";
import { PRODUCTS } from "@/data/products";
import { useLanguage } from "@/components/common/LanguageContext";
import { MapPin, Phone, Mail, UserCheck, FileCheck2, Send, CheckCircle2, Building, MessageSquare, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    productInterest: "Sweet Tamarind",
    quantity: "1,000 kg (1 MT)",
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
    <div className="bg-[#FCFBF7] min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="bg-[#1E241F] text-[#FCFBF7] py-20 sm:py-28 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C9A24A] text-xs font-bold uppercase tracking-wider">
              {t("Direct Contact Channels", "ช่องทางการติดต่อ")}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]">
              {t("Let's Talk About Your Next", "ร่วมเป็นพันธมิตรธุรกิจ")}{" "}
              <span className="text-[#C9A24A] font-serif italic block mt-1">
                {t("Tamarind Supply.", "ด้านผลิตภัณฑ์มะขามกับเรา")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A9C39B] leading-relaxed max-w-2xl font-light">
              {t(
                "For wholesale, distribution, export or product inquiries, contact the Kingmarind team.",
                "สำหรับการสั่งซื้อค้าส่ง การเป็นตัวแทนจำหน่าย การส่งออก หรือข้อมูลผลิตภัณฑ์ ติดต่อทีมงาน บริษัท คิงมารินด์ จำกัด ได้โดยตรง"
              )}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Split: Form & Corporate Details */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#FCFBF7] rounded-3xl p-8 sm:p-10 border border-[#315C38]/15 shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#1E241F]">
                  {t("Send a Direct Business Inquiry", "ส่งข้อความติดต่อฝ่ายขายและการส่งออก")}
                </h2>
                <p className="text-xs text-[#547A3F] mt-1">
                  Fill in your company and product requirements below for a detailed quotation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#315C38]/10 text-[#315C38] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E241F]">
                    {t("Inquiry Successfully Transmitted", "ส่งข้อความเรียบร้อยแล้ว")}
                  </h3>
                  <p className="text-sm text-[#547A3F] max-w-md mx-auto leading-relaxed">
                    {t(
                      "Thank you for contacting Kingmarind Co., Ltd. Our export management team will respond to your registered email promptly.",
                      "ขอบพระคุณสำหรับการติดต่อ ทีมงานจะติดต่อกลับไปยังอีเมลของท่านโดยเร็วที่สุด"
                    )}
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-[#315C38] text-white rounded-lg font-semibold text-xs hover:bg-[#25462B] transition-colors"
                    >
                      {t("Send Another Message", "ส่งข้อความใหม่")}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                        {t("Name", "ชื่อ-นามสกุล")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                        {t("Company", "ชื่อบริษัท / องค์กร")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                        {t("Email", "อีเมล")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                        {t("Country", "ประเทศ")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. UAE, Saudi Arabia, Japan, USA"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                        {t("Phone / WhatsApp", "เบอร์โทรศัพท์")}
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+XX XXX XXX XXXX"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                        {t("Product Interest", "กลุ่มสินค้าที่สนใจ")}
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                      >
                        <option value="Sweet Tamarind">Sweet Tamarind</option>
                        <option value="Seedless Tamarind">Seedless Tamarind</option>
                        <option value="Dried Tamarind">Dried Tamarind</option>
                        <option value="Seasoned Tamarind">Seasoned Tamarind</option>
                        <option value="Tamarind Snacks">Tamarind Snacks</option>
                        <option value="Tamarind Paste">Tamarind Paste</option>
                        <option value="Full Portfolio">Full Portfolio Sourcing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                      {t("Estimated Quantity / Target Terms", "ปริมาณการสั่งซื้อหรือเงื่อนไข")}
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 500 kg trial, 1 FCL 20ft container, FOB Bangkok"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1.5">
                      {t("Message", "ข้อความ")} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide additional details regarding your business model, target market, or packaging requirements..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#315C38] hover:bg-[#25462B] text-white font-bold rounded-xl shadow-md text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C9A24A]" />
                        <span>{t("Submit Inquiry", "ส่งข้อความ")}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Official Coordinates & Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F7F3E8] rounded-3xl p-8 border border-[#315C38]/15 shadow-sm space-y-5">
                <div className="border-b border-[#315C38]/15 pb-4">
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#547A3F]">
                    Corporate Entity
                  </div>
                  <h3 className="text-xl font-bold text-[#1E241F] mt-1">
                    {COMPANY.name}
                  </h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#315C38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E241F] block uppercase tracking-wider text-[11px]">Headquarters & Facility</strong>
                      <span className="text-[#547A3F] leading-relaxed">{COMPANY.location.fullAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-[#315C38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E241F] block uppercase tracking-wider text-[11px]">Managing Director</strong>
                      <span className="text-[#1E241F] font-semibold">{COMPANY.managingDirector.name} ({COMPANY.managingDirector.shortName})</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileCheck2 className="w-5 h-5 text-[#315C38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E241F] block uppercase tracking-wider text-[11px]">Tax Registration Number</strong>
                      <span className="font-mono font-bold text-[#315C38]">{COMPANY.taxId}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#315C38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E241F] block uppercase tracking-wider text-[11px]">Phone / WhatsApp</strong>
                      <a href={`tel:${COMPANY.contact.phone}`} className="text-[#315C38] font-bold hover:underline">
                        {COMPANY.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#315C38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E241F] block uppercase tracking-wider text-[11px]">Official Email</strong>
                      <a href={`mailto:${COMPANY.contact.email}`} className="text-[#315C38] font-bold hover:underline">
                        {COMPANY.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#315C38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E241F] block uppercase tracking-wider text-[11px]">Business Card Handle</strong>
                      <span className="font-mono text-[#547A3F]">{COMPANY.contact.socialHandle}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Block */}
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#315C38]/15 bg-[#1E241F] h-64 p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C9A24A] uppercase tracking-wider">
                    Phetchabun Sourcing Hub
                  </span>
                  <span className="text-[11px] font-mono text-[#A9C39B]">
                    16°43&apos;00.1&quot;N 101°15&apos;00.0&quot;E
                  </span>
                </div>

                <div className="text-center my-auto">
                  <MapPin className="w-8 h-8 text-[#C9A24A] mx-auto mb-1 animate-bounce" />
                  <div className="text-sm font-bold">Lom Sak District, Phetchabun</div>
                  <div className="text-xs text-[#A9C39B]">Kingdom of Thailand</div>
                </div>

                <div className="text-[11px] text-white/70 text-center">
                  Direct dispatch to Bangkok Port & Laem Chabang Deep Sea Port
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
