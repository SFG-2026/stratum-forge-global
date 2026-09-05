import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { CircuitBackground } from "../ui/CircuitBackground";
import {
  Briefcase,
  Users,
  GraduationCap,
  Target,
  CheckCircle2,
  MapPin,
  Clock,
  Loader2,
} from "lucide-react";
import { BRAND_DATA } from "../../data/content";
import { sendEnquiryEmail } from "../../services/emailService";

interface JobRole {
  id?: string;
  role: string;
  dept: string;
  location: string;
  type: string;
  desc?: string;
  reqs?: string[];
}

interface CareersPageProps {
  onNavigate?: (tabId: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = () => {
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    notes: "",
  });

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEnquiryEmail({
        name: formData.name,
        company: `Applicant for ${selectedRole?.role || "General Position"}`,
        workEmail: formData.email,
        phone: formData.phone,
        serviceRequirement: `Job Application: ${selectedRole?.role || "Specialist"} (${selectedRole?.dept || "Operations"})`,
        message: `Years of Experience: ${formData.experience}\n\nKey Skills / Candidate Notes:\n${formData.notes}`,
        enquiryType: "technical",
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const cultureValues = [
    {
      title: "People First",
      desc: "We value hands-on craftsmanship, curiosity, and the dedication required for micro-precision rework.",
      icon: Users,
    },
    {
      title: "Continuous Upskilling",
      desc: "Structured training in advanced diagnostic equipment, SMD/BGA soldering, and IPC standards.",
      icon: GraduationCap,
    },
    {
      title: "Meaningful Impact",
      desc: "Every device we recover directly diverts toxic e-waste and restores valuable resources for South Asia.",
      icon: Target,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white text-slate-800">
      
      {/* Header with Dynamic Aurora Mesh */}
      <section className="relative py-12 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 hero-aurora-mesh opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="cyan" icon={<Users className="w-3.5 h-3.5" />} className="mb-3 sm:mb-4">
            Careers & Workplace Culture
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0A2540] tracking-tight max-w-4xl mx-auto break-words">
            {BRAND_DATA.careers.heading}
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
            "{BRAND_DATA.careers.copy}"
          </p>
        </div>
      </section>

      {/* Workplace Photo Banner: Team Collaboration in Glass Room */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 items-center bg-slate-50">
          <div className="lg:col-span-6 h-72 sm:h-96 relative overflow-hidden">
            <img
              src="/images/team_meeting.jpg"
              alt="Engineering Team Strategy and Schematic Planning"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                Engineering Strategy & Culture
              </span>
            </div>
          </div>
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
            <Badge variant="orange">Collaborative Growth</Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A2540]">
              Where Engineering Curiosity Thrives
            </h2>
            <p className="text-sm text-slate-600 font-sans leading-relaxed">
              At StratumForge Global, every engineer and technician works with advanced diagnostic systems and stereo-microscopic rework tools. We provide structured career paths in Chennai to help you master next-generation hardware lifecycle engineering.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-blue-600 font-bold">
              <span>✓ Mentorship • Career Paths • Purpose-Driven Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-extrabold text-[#0A2540]">
            Our Culture & Engineering Mindset
          </h2>
          <p className="mt-3 text-sm text-slate-600 font-sans">
            Disciplined execution rooted in respect, curiosity, and world-class technical standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cultureValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 w-fit rounded-2xl bg-blue-100 text-blue-700 mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-[#0A2540] mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-mono text-brand-orange font-bold">
                  StratumForge Standard
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Badge variant="orange" icon={<Briefcase className="w-3.5 h-3.5" />} className="mb-2">
                Open Positions
              </Badge>
              <h2 className="text-3xl font-display font-extrabold text-[#0A2540]">
                Current Technical Opportunities
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 font-bold">
              Operations Hub: Chennai, India
            </span>
          </div>

          <div className="space-y-4">
            {BRAND_DATA.careers.openings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                      {job.dept}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-[#0A2540]">{job.role}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      Full-Time Role
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    variant="orange"
                    size="sm"
                    withArrow
                    onClick={() => {
                      setSelectedRole(job);
                      setIsSubmitted(false);
                    }}
                  >
                    Apply for Position
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* General Application Callout */}
          <div className="mt-12 text-center text-xs text-slate-600 font-mono">
            Don't see your specific specialization? Send your CV directly to{" "}
            <a
              href={`mailto:${BRAND_DATA.contact.email}?subject=General Career Application`}
              className="text-blue-600 font-bold underline hover:text-blue-800 whitespace-nowrap inline-block"
            >
              {BRAND_DATA.contact.email}
            </a>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedRole && (
        <Modal
          isOpen={!!selectedRole}
          onClose={() => setSelectedRole(null)}
          title={`Apply: ${selectedRole.role}`}
          subtitle={`${selectedRole.dept} • ${selectedRole.location}`}
          maxWidth="lg"
        >
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-extrabold text-[#0A2540]">
                Application Transmitted
              </h3>
              <p className="text-xs text-slate-600 font-sans max-w-sm mx-auto">
                Thank you for applying to StratumForge Global. Our talent team in Chennai will review your profile against operational requirements and reach out directly.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedRole(null)}
                className="mt-4"
              >
                Close Window
              </Button>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anand@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Years of Technical Experience *</label>
                <input
                  type="text"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="e.g. 4+ years in SMD/BGA rework & diagnostics"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Summary of Key Skills / Notes</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Detail your diagnostic tool experience, soldering certifications, or relevant hardware projects..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-sans"
                />
              </div>

              <div className="pt-2">
                <Button
                  variant="orange"
                  size="md"
                  withArrow={!isSubmitting}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <span>Submit Application to StratumForge</span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </Modal>
      )}

    </div>
  );
};
