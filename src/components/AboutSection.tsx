import React from "react";
import { motion } from "motion/react";
import { ABOUT_ME } from "../data";
import { Phone, Mail, MapPin, Heart, Compass, Camera, Car, Award, Shield, Server, CheckCircle2, ChevronRight, Activity, Zap } from "lucide-react";

export default function AboutSection() {
  const getInterestIcon = (interest: string) => {
    switch (interest.toLowerCase()) {
      case "photography":
        return <Camera className="h-4.5 w-4.5 text-brand-600" />;
      case "traveling":
        return <Compass className="h-4.5 w-4.5 text-brand-600" />;
      case "driving":
        return <Car className="h-4.5 w-4.5 text-brand-600" />;
      default:
        return <Zap className="h-4.5 w-4.5 text-brand-600" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden qa-grid border-b border-slate-200/60">
      {/* Subtle Visual Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Corporate Trust Segment */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16 pb-6 border-b border-slate-200/60 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse"></span>
            <span className="font-bold text-slate-700">PRINCIPAL QA PRACTICE:</span>
            <span>SECURE, COMPLIANT, AGILITY-READY</span>
          </div>
          <div className="flex items-center gap-6">
            <span>REGISTRATION: BD-2026-DHAKA</span>
            <span>•</span>
            <span>ISO 9001 ACCREDITED WORKFLOWS</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate Profile Identity & Coordinates Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-800 rounded-t-2xl"></div>
              
              {/* Header Segment */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <span className="font-sans font-bold text-xs uppercase text-slate-400 tracking-wider">
                  Professional Profile
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Active Advisor
                </span>
              </div>

              {/* Core Executive Card Elements */}
              <div className="space-y-4">
                <div className="pb-2 text-center sm:text-left space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-200/65 text-brand-700 rounded-full text-[10px] font-mono font-bold tracking-tight">
                    <Server className="h-3.5 w-3.5" />
                    QUALITY SYSTEMS DEPLOYED
                  </div>
                  
                  <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight font-sans">
                    Tahsin Ahmed
                  </h1>
                  
                  <p className="text-brand-700 font-bold text-xs tracking-tight">
                    {ABOUT_ME.title}
                  </p>
                </div>

                <div className="border-t border-slate-100 my-4 pt-4 space-y-3 font-mono text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-brand-500 shrink-0" />
                    <span>HQ Base: <strong className="text-slate-900 font-bold">{ABOUT_ME.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="h-4 w-4 text-brand-500 shrink-0" />
                    <span>Validation Factor: <strong className="text-rose-600 font-bold">{ABOUT_ME.contact.bloodGroup} (Blood Group)</strong></span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono font-bold mb-2">
                    Practices Handled
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[10px]">
                    <span className="bg-slate-50 text-slate-700 px-2.5 py-1 rounded border border-slate-200/60 font-mono font-medium">
                      ✓ End-to-End Automation
                    </span>
                    <span className="bg-slate-50 text-slate-700 px-2.5 py-1 rounded border border-slate-200/60 font-mono font-medium">
                      ✓ Corporate Strategy
                    </span>
                    <span className="bg-slate-50 text-slate-700 px-2.5 py-1 rounded border border-slate-200/60 font-mono font-medium">
                      ✓ Performance Benchmarks
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Balancing Interests Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-xs"
            >
              <span className="text-[11px] font-mono font-bold uppercase text-slate-400 tracking-wider block mb-4">
                Core Dynamic Balance
              </span>
              <div className="grid grid-cols-3 gap-3">
                {ABOUT_ME.interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:border-brand-500/40 hover:bg-white transition-all text-center text-slate-600 gap-2 cursor-default group"
                  >
                    <div className="p-2 rounded-lg bg-white border border-slate-100 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors">
                      {getInterestIcon(interest)}
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{interest}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Corporate-style professional statement */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
                  01 // CORPORATE SUMMARY & CORE CHARTER
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug font-sans">
                  {ABOUT_ME.tagline}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                {ABOUT_ME.bio}
              </p>

              {/* Corporate Credibility Block */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-200 transition-colors">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-sans font-bold text-slate-900 text-sm">Dual-Discipline Synergy</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Combines advanced program synthesis concepts (MSc CS) with organizational leadership matrices (MBA, DU) for high-impact advisory.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-200 transition-colors">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-sans font-bold text-slate-900 text-sm">Industrial Scale Capacity</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Evaluated dynamic transactional nodes serving hundreds of thousands of concurrent booking streams across telecommunication hubs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Info Ribbons */}
              <div className="pt-6 border-t border-slate-200 grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                  <div className="h-10 w-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">EMAIL ADVISORY</span>
                    <a href={`mailto:${ABOUT_ME.contact.email}`} className="text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors">
                      {ABOUT_ME.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                  <div className="h-10 w-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">DIRECT TELEPHONY</span>
                    <a href={`tel:${ABOUT_ME.contact.phone}`} className="text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors">
                      {ABOUT_ME.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Dynamic Partner Logo Vetted Band to look identical to high-end consulting sites */}
        <div className="mt-20 pt-10 border-t border-slate-200/60">
          <p className="text-center font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-6">
            Trusted software systems validated & verified:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-sans font-black text-slate-600 text-xl tracking-tight flex items-center gap-1.5"><Shield className="h-5 w-5 text-brand-600" /> BDTICKETS</span>
            <span className="font-mono font-bold text-slate-600 text-lg tracking-widest">ROBI AXIATA LTD</span>
            <span className="font-sans font-extrabold text-slate-600 text-xl tracking-tight">GAIN SOLUTION</span>
            <span className="font-sans font-bold text-slate-600 text-lg">LUNCH.BD</span>
            <span className="font-mono font-black text-slate-600 text-lg tracking-widest text-[#2563eb]">BLUETECH</span>
            <span className="font-sans font-light text-slate-600 text-lg tracking-wider">TRIP 963</span>
          </div>
        </div>

      </div>
    </section>
  );
}
