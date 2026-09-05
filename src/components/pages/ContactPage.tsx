import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CircuitBackground } from "../ui/CircuitBackground";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { BRAND_DATA } from "../../data/content";
import { sendEnquiryEmail, generateMailtoUrl, type EnquiryPayload } from "../../services/emailService";

export const ContactPage: React.FC = () => {
  const [enquiryType, setEnquiryType] = useState<"business" | "technical">("business");
  const [formData, setFormData] = useState<EnquiryPayload>({
    name: "",
    company: "",
    workEmail: "",
    phone: "",
    serviceRequirement: "Electronics Manufacturing Services (EMS)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await sendEnquiryEmail({
        ...formData,
        enquiryType,
      });

      if (response.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(response.message || "Failed to transmit message. Please try direct contact or email.");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "An unexpected error occurred. Please use direct email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    "Electronics Manufacturing Services (EMS)",
    "Diagnostics & Testing",
    "Repair & Refurbishment",
    "Field Services & Regional Rollouts",
    "Supply Chain & Sourcing",
    "Enterprise Hardware Lifecycle / Fleet Management",
    "OEM Partnership / Warranty Support",
  ];

  return (
    <div className="pt-24 pb-20 bg-white text-slate-800">
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50/80 to-white border-b border-slate-200 overflow-hidden">
        <CircuitBackground density="low" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="orange" icon={<Send className="w-3.5 h-3.5" />} className="mb-4">
            Enterprise Engagement
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#0A2540] tracking-tight max-w-4xl mx-auto">
            Let's Talk
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
            Have a technology, repair, refurbishment, manufacturing, or lifecycle challenge? Let's explore how StratumForge Global can help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Contact Info & Channel Routing */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A2540]">
                Direct Channels & Regional Hub
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-sans leading-relaxed">
                Connect directly with our engineering operations in Chennai, India to discuss custom SLAs or volume intakes.
              </p>
            </div>

            {/* Official Details Cards */}
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-orange-50 text-brand-orange border border-orange-200 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                    Operational Headquarters
                  </div>
                  <div className="text-base font-display font-extrabold text-[#0A2540] mt-1">
                    {BRAND_DATA.contact.location}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Strategic Regional Center serving India & South Asia
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                    Official Email
                  </div>
                  <a
                    href={`mailto:${BRAND_DATA.contact.email}`}
                    className="text-base font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors block mt-1 break-all"
                  >
                    {BRAND_DATA.contact.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Monitored 24/7 by enterprise response desk
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                    Direct Lines
                  </div>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+16476806419"
                      className="text-sm sm:text-base font-mono font-bold text-[#0A2540] hover:text-blue-600 transition-colors flex items-center gap-2"
                    >
                      <span className="text-xs font-sans font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">Canada:</span>
                      <span>+1(647)680-6419</span>
                    </a>
                    <a
                      href="tel:+919566065552"
                      className="text-sm sm:text-base font-mono font-bold text-[#0A2540] hover:text-blue-600 transition-colors flex items-center gap-2"
                    >
                      <span className="text-xs font-sans font-bold px-2 py-0.5 rounded bg-orange-100 text-brand-orange">India:</span>
                      <span>+91 9566065552</span>
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Enterprise technical inquiries & dispatch desk
                  </p>
                </div>
              </div>
            </div>

            {/* Quality & Security Assurance */}
            <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Enterprise SLA Assurance</span>
              </div>
              <p className="text-xs text-slate-700 font-sans leading-relaxed">
                All communications and hardware specifications are handled under standard NDA protocols with secure chain-of-custody tracking.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact & RFQ Form (EmailJS Integrated) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-xl relative">
              
              {/* Enquiry Type Selector Tabs - Responsive Stacking */}
              <div className="flex flex-col sm:flex-row rounded-xl bg-white p-1.5 border border-slate-200 mb-6 sm:mb-8 shadow-sm gap-1 sm:gap-0">
                <button
                  type="button"
                  onClick={() => setEnquiryType("business")}
                  className={`flex-1 py-2 sm:py-2.5 px-3 text-xs font-display font-bold rounded-lg transition-all text-center ${
                    enquiryType === "business"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  Business & Partnerships
                </button>
                <button
                  type="button"
                  onClick={() => setEnquiryType("technical")}
                  className={`flex-1 py-2 sm:py-2.5 px-3 text-xs font-display font-bold rounded-lg transition-all text-center ${
                    enquiryType === "technical"
                      ? "bg-brand-orange text-white shadow-sm"
                      : "text-slate-600 hover:text-brand-orange"
                  }`}
                >
                  Technical & Service
                </button>
              </div>

              {/* Error Alert if transmission fails */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold">Message Transmission Error</p>
                    <p className="mt-0.5">{errorMessage}</p>
                    <a
                      href={generateMailtoUrl(formData)}
                      className="inline-flex items-center gap-1.5 font-bold text-red-700 underline mt-2 hover:text-red-900"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Send directly using your email client instead</span>
                    </a>
                  </div>
                </div>
              )}

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-[#0A2540]">
                    Enquiry Transmitted Successfully
                  </h3>
                  <p className="text-sm text-slate-600 font-sans max-w-md mx-auto leading-relaxed">
                    Thank you for contacting StratumForge Global. Your requirement has been routed directly to{" "}
                    <strong className="text-blue-600 font-mono">admin@stratumforgeglobal.com</strong> for review by our{" "}
                    <strong className="text-[#0A2540]">
                      {enquiryType === "business" ? "Partnership Operations" : "Technical Engineering Operations"}
                    </strong>{" "}
                    team in Chennai.
                  </p>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-left text-xs font-mono text-slate-600 space-y-1.5 max-w-md mx-auto">
                    <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Submission Summary:</div>
                    <div><strong className="text-slate-800">Sender:</strong> {formData.name} ({formData.company})</div>
                    <div><strong className="text-slate-800">Email:</strong> {formData.workEmail}</div>
                    <div><strong className="text-slate-800">Service:</strong> {formData.serviceRequirement}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          workEmail: "",
                          phone: "",
                          serviceRequirement: serviceOptions[0],
                          message: "",
                        });
                      }}
                    >
                      Submit Another Requirement
                    </Button>
                    <a
                      href={generateMailtoUrl(formData)}
                      className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Copy in Mail Client</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Varma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans shadow-sm disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Global Tech Solutions"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans shadow-sm disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans shadow-sm disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans shadow-sm disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                      Service / Requirement *
                    </label>
                    <select
                      value={formData.serviceRequirement}
                      disabled={isSubmitting}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceRequirement: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans shadow-sm disabled:opacity-60"
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt} className="text-slate-800">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                      Message / Technical Specifications *
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your device categories, estimated volumes, failure symptoms, or partnership scope..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans shadow-sm disabled:opacity-60"
                    />
                  </div>

                  <div className="pt-3">
                    <Button
                      variant={enquiryType === "business" ? "primary" : "orange"}
                      size="lg"
                      withArrow={!isSubmitting}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Enquiry via EmailJS...</span>
                        </>
                      ) : (
                        <span>Send Enquiry</span>
                      )}
                    </Button>
                  </div>

                  <p className="text-center text-[11px] font-mono text-slate-500 pt-2">
                    Routing to {BRAND_DATA.contact.email} • Direct Engineering Response Desk
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
