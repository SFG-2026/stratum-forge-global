import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CircuitBackground } from "../ui/CircuitBackground";
import {
  Leaf,
  Cpu,
  RefreshCw,
  Layers,
  TrendingUp,
  CheckCircle2,
  TreePine,
  Droplets,
  ShieldCheck,
  FileText,
  Recycle,
  Scale,
  Award,
  ArrowRight,
  Sparkles,
  BarChart3,
  Flame,
} from "lucide-react";
import { BRAND_DATA } from "../../data/content";

interface SustainabilityPageProps {
  onNavigate: (tabId: string) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  const [deviceCount, setDeviceCount] = useState<number>(3500);

  const estimatedCO2Tons = Math.round(deviceCount * 0.18 * 0.75);
  const estimatedRecoveryUSD = Math.round(deviceCount * 140);
  const estimatedTreesEquivalent = Math.round(estimatedCO2Tons * 17);
  const estimatedLandfillKg = Math.round(deviceCount * 3.8);

  const pillars = [
    {
      icon: Cpu,
      title: "Component Harvesting & BGA Recovery",
      tagline: "Preserving embodied energy at the silicon level",
      description:
        "Rather than shredding entire assemblies, our engineers de-solder, clean, and test high-value microprocessors, power ICs, memory modules, and passive networks for recertified reuse.",
      stat: "85%+",
      statLabel: "Component Reclamation Yield",
    },
    {
      icon: Recycle,
      title: "Toxic Material & Heavy Metal Diversion",
      tagline: "Zero-landfill chemical and metallurgical management",
      description:
        "Every assembly processed through our Chennai facility adheres to stringent RoHS and WEEE compliance, preventing hazardous substances like lead, cadmium, mercury, and halogenated flame retardants from entering ecosystems.",
      stat: "99.2%",
      statLabel: "Zero-Landfill Diversion Rate",
    },
    {
      icon: TrendingUp,
      title: "Scope 3 Carbon Abatement",
      tagline: "Mitigating upstream manufacturing emissions",
      description:
        "Over 75% of an enterprise server's total carbon footprint is generated during manufacturing. Extending operational lifespan by 3–5 years directly eliminates the carbon overhead of new fabrication.",
      stat: "~75%",
      statLabel: "Avoided Upstream Carbon Footprint",
    },
    {
      icon: ShieldCheck,
      title: "NIST 800-88 Data Sanitization & Auditability",
      tagline: "Enterprise security without physical shredding",
      description:
        "We implement DoD 5220.22-M and NIST SP 800-88 Rev. 1 cryptographic erasure protocols to wipe enterprise storage devices securely, eliminating the need to physically shred functional drives.",
      stat: "100%",
      statLabel: "Cryptographically Verified Erasure",
    },
    {
      icon: RefreshCw,
      title: "Closed-Loop Secondary Market Lifecycle",
      tagline: "Connecting recovered hardware to verified secondary demand",
      description:
        "Recertified hardware is redeployed to secondary enterprise ecosystems, testing laboratories, edge computing clusters, and regional telecom nodes with full functional warranties.",
      stat: "3–5 yrs",
      statLabel: "Extended Useful Lifespan",
    },
  ];

  const standards = [
    {
      code: "ISO 14001:2015",
      title: "Environmental Management Systems",
      desc: "Full auditable tracking of energy consumption, waste segregation, and environmental performance indicators.",
    },
    {
      code: "R2v3 Standard",
      title: "Responsible Recycling & Asset Management",
      desc: "Comprehensive downstream accountability, worker health & safety, and data sanitization verification.",
    },
    {
      code: "NIST SP 800-88 Rev. 1",
      title: "Media Sanitization Guidelines",
      desc: "Purge and Clear sanitization levels guaranteeing zero residual corporate data on reused media.",
    },
    {
      code: "RoHS & WEEE Compliant",
      title: "Hazardous Substance & E-Waste Directives",
      desc: "Strict compliance with EU and international restrictions on hazardous electronic substances.",
    },
  ];

  const auditSteps = [
    {
      step: "01",
      title: "Chain-of-Custody Inbound Triage",
      desc: "Serialized barcode tracking, weight verification, and tamper-evident receipt documentation upon arrival at our Chennai hub.",
    },
    {
      step: "02",
      title: "Non-Destructive Diagnostic Triage",
      desc: "Automated test benches determine whether units require board-level rework, sub-component harvesting, or material recovery.",
    },
    {
      step: "03",
      title: "Precision Micro-Rework & Thermal Soak",
      desc: "Component replacement under ESD cleanroom protocols, followed by 48-hour burn-in stress testing to guarantee reliability.",
    },
    {
      step: "04",
      title: "Certified Refining of End-of-Life Scrap",
      desc: "Only irrecoverable fractions are routed to audited metallurgical smelting partners for raw elemental precious metal reclamation.",
    },
    {
      step: "05",
      title: "Auditable ESG Reporting & Certificate",
      desc: "Client receives tamper-proof sustainability certificates detailing exact CO₂ avoided, materials diverted, and serials sanitized.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white text-slate-800">
      
      {/* Hero Header */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-emerald-50/70 via-blue-50/40 to-white border-b border-slate-200 overflow-hidden">
        <CircuitBackground density="low" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="orange" icon={<Leaf className="w-3.5 h-3.5" />} className="mb-3 sm:mb-4">
            Circular Engineering & ESG Assurance
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0A2540] tracking-tight max-w-4xl mx-auto break-words">
            Measurable Impact. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-blue-600 to-brand-orange">
              Zero-Landfill Hardware Lifecycle.
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
            We turn electronic waste liability into tangible ESG capital. Through precision component harvesting, board-level repair, and certified asset recovery, StratumForge Global eliminates millions of tons of embodied carbon.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate("contact")}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto text-xs sm:text-sm active:scale-95"
            >
              Request Circularity Assessment
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const calc = document.getElementById("impact-calculator");
                calc?.scrollIntoView({ behavior: "smooth" });
              }}
              icon={<BarChart3 className="w-4 h-4 text-emerald-600" />}
              className="w-full sm:w-auto text-xs sm:text-sm active:scale-95"
            >
              Simulate Carbon Offset
            </Button>
          </div>
        </div>
      </section>

      {/* 4 Impact Stat Highlights */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-black text-[#0A2540]">
                100,000+
              </div>
              <div className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider">
                Devices Restored
              </div>
              <p className="text-xs text-slate-500 font-sans">
                Telecom, enterprise servers, and compute modules given a secondary operational life.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-100 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-black text-[#0A2540]">
                4,200+ <span className="text-base font-bold text-slate-400">Tons</span>
              </div>
              <div className="text-xs font-mono font-bold text-orange-900 uppercase tracking-wider">
                CO₂ Emissions Mitigated
              </div>
              <p className="text-xs text-slate-500 font-sans">
                Calculated based on avoided raw silicon, copper, and PCB manufacturing overheads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                <TreePine className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-black text-[#0A2540]">
                71,400+
              </div>
              <div className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider">
                Tree Equivalents
              </div>
              <p className="text-xs text-slate-500 font-sans">
                Equivalent annual carbon sequestration capacity of mature deciduous forest acreage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-slate-800 text-white flex items-center justify-center shadow-md shadow-slate-800/20">
                <Recycle className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-black text-[#0A2540]">
                99.2%
              </div>
              <div className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                Landfill Diversion
              </div>
              <p className="text-xs text-slate-500 font-sans">
                Only non-recyclable inert residues are separated; all metallic & plastic fractions are recycled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ESG & Carbon Calculator Section */}
      <section id="impact-calculator" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-[#0A2540] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Calculator Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Interactive Enterprise ESG Estimator
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                Simulate Your Hardware Carbon Offset & Value Recovery
              </h2>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Adjust your fleet or batch volume below to calculate estimated greenhouse gas savings, landfill diversion tonnage, and capital restored by extending asset lifecycles through StratumForge.
              </p>

              {/* Slider Control */}
              <div className="pt-4 space-y-3 bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300">Hardware Fleet Batch Volume:</span>
                  <span className="text-xl font-bold text-cyan-300 font-display">
                    {deviceCount.toLocaleString()} Units
                  </span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="15000"
                  step="250"
                  value={deviceCount}
                  onChange={(e) => setDeviceCount(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>250 Units</span>
                  <span>7,500 Units</span>
                  <span>15,000+ Units</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate("contact")}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Official ESG Audit
                </Button>
              </div>
            </div>

            {/* Right Column: Calculated Results Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Flame className="w-4 h-4 text-brand-orange" />
                  <span>Avoided CO₂</span>
                </div>
                <div className="text-3xl sm:text-4xl font-display font-black text-brand-orange">
                  ~{estimatedCO2Tons}
                </div>
                <span className="text-xs text-slate-400 font-sans block">
                  Metric tons of carbon avoided
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <BarChart3 className="w-4 h-4 text-cyan-300" />
                  <span>Capital Restored</span>
                </div>
                <div className="text-3xl sm:text-4xl font-display font-black text-cyan-300">
                  ${(estimatedRecoveryUSD / 1000).toFixed(0)}k+
                </div>
                <span className="text-xs text-slate-400 font-sans block">
                  Estimated residual value saved
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <TreePine className="w-4 h-4 text-emerald-400" />
                  <span>Trees Equivalent</span>
                </div>
                <div className="text-3xl sm:text-4xl font-display font-black text-emerald-400">
                  ~{estimatedTreesEquivalent.toLocaleString()}
                </div>
                <span className="text-xs text-slate-400 font-sans block">
                  Sequestration equivalence
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Scale className="w-4 h-4 text-blue-400" />
                  <span>E-Waste Diverted</span>
                </div>
                <div className="text-3xl sm:text-4xl font-display font-black text-blue-400">
                  {(estimatedLandfillKg / 1000).toFixed(1)} <span className="text-lg">Tons</span>
                </div>
                <span className="text-xs text-slate-400 font-sans block">
                  Solid electronic waste diverted
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5 Pillars of Circular Lifecycle */}
      <section className="py-16 bg-slate-50/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              Methodology & Technical Pillars
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-black text-[#0A2540]">
              The Five Disciplines of Hardware Circularity
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans">
              True circular electronics requires engineering mastery, not just logistics. Here is how we extract maximum life from every circuit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-[#0A2540]">
                        {p.title}
                      </h3>
                      <p className="text-xs font-mono text-brand-orange mt-1">
                        {p.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-sans">{p.statLabel}</span>
                    <span className="text-lg font-display font-extrabold text-[#0A2540]">
                      {p.stat}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Sixth Callout Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A2540] to-blue-900 text-white flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/10 text-brand-orange w-fit">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-white">
                  Full Chain-of-Custody Certification
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Every batch processed comes with a tamper-proof digital certificate documenting exact environmental metrics, serialized tracking, and verifiable compliance records for corporate ESG filings.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => onNavigate("contact")}
                >
                  Inquire About Batch Audits
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chain of Custody & Process Steps */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            End-to-End Governance
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-black text-[#0A2540]">
            The 5-Stage Asset Custody & Recovery Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans">
            From secure collection to final recertification or certified smelting, every step is rigorously governed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {auditSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all space-y-3 relative"
            >
              <div className="text-2xl font-display font-black text-brand-orange">
                {step.step}
              </div>
              <h3 className="text-sm font-display font-bold text-[#0A2540]">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Photo Facility Banner */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center border border-slate-800">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              Chennai Lifecycle Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
              State-of-the-Art Electronics Lifecycle & Recovery Facility
            </h2>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Our hub integrates cleanroom component rework stations, automated SMT diagnostics, and dedicated zero-landfill scrap segregation lines. We process tens of thousands of complex PCBAs monthly with auditable precision.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% ESD Protected Cleanrooms
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                Continuous Environmental Auditing
              </span>
            </div>
          </div>
          <div className="lg:col-span-6 h-72 lg:h-full min-h-[320px] relative overflow-hidden">
            <img
              src="/images/sustainability_ewaste.jpg"
              alt="StratumForge Global Certified E-Waste & Component Recovery Center"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                ISO 14001 & R2 Compliant Operations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Certified Standards
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-black text-[#0A2540]">
            Enterprise Environmental & Data Compliance
          </h2>
          <p className="mt-3 text-sm text-slate-600 font-sans">
            Our processes comply with leading international quality, environmental, and security frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all space-y-3"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                  {std.code}
                </span>
              </div>
              <h3 className="text-base font-display font-bold text-[#0A2540]">
                {std.title}
              </h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
            Partner With StratumForge Global
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0A2540]">
            Elevate Your Corporate ESG Mandate Today
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Whether retiring legacy data center infrastructure, managing warranty returns, or looking to deploy refurbished systems, speak with our circular engineering specialists.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate("contact")}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Initiate Direct Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("services")}
            >
              Explore Our Technical Services
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
