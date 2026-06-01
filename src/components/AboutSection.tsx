import React from "react";
import { motion } from "motion/react";
import { ABOUT_ME } from "../data";
import { Phone, Mail, MapPin, Heart, Compass, Camera, Car, Award, Shield, Server, CheckCircle2, ChevronRight, Activity, Zap } from "lucide-react";

export default function AboutSection() {
  const getInterestIcon = (interest: string) => {
    switch (interest.toLowerCase()) {
      case "photography":
        return <Camera className="h-4 w-4 text-rose-500" />;
      case "traveling":
        return <Compass className="h-4 w-4 text-cyan-500" />;
      case "driving":
        return <Car className="h-4 w-4 text-amber-500" />;
      default:
        return <Zap className="h-4 w-4 text-indigo-500" />;
    }
  };

  const getInterestColors = (interest: string) => {
    switch (interest.toLowerCase()) {
      case "photography":
        return "bg-rose-950/20 border-rose-500/30 text-rose-300 hover:border-rose-400";
      case "traveling":
        return "bg-cyan-950/20 border-cyan-500/30 text-cyan-300 hover:border-cyan-400";
      case "driving":
        return "bg-amber-950/20 border-amber-500/30 text-amber-300 hover:border-amber-400";
      default:
        return "bg-indigo-950/20 border-indigo-500/30 text-indigo-300 hover:border-indigo-400";
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden qa-grid border-b border-indigo-950">
      {/* Animated Glowing Colorful Mesh Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-glow-indigo"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none animate-glow-pink"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-glow-amber"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-14 pb-6 border-b border-indigo-900/60 text-[11px] font-mono select-none">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500 animate-pulse"></span>
            <span className="font-extrabold text-indigo-300 tracking-wider">SECURE SQA PRACTICE:</span>
            <span className="text-slate-400">COMPLIANT, SCALABLE &amp; AGILE-READY</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>REG: BD-2026-DHAKA</span>
            <span>•</span>
            <span className="text-indigo-400 font-extrabold">ISO 9001 ACCREDITED WORKFLOWS</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Coordinates Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-7 bg-slate-900/75 backdrop-blur-xl border border-indigo-500/20 rounded-2xl shadow-2xl hover:border-indigo-500/35 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500 rounded-t-2xl"></div>
              
              <div className="flex items-center justify-between border-b border-indigo-950 pb-4 mb-5">
                <span className="font-sans font-black text-xs uppercase text-indigo-400 tracking-wider">
                  Professional Core
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 animate-pulse">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Active QA Lead
                </span>
              </div>

              {/* Core Attributes */}
              <div className="space-y-4">
                <div className="pb-1 text-left space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-950/80 border border-indigo-500/30 text-indigo-200 rounded-full text-[9px] font-mono font-extrabold tracking-wider uppercase">
                    <Server className="h-3 w-3 text-indigo-400" />
                    QUALITY INFRASTRUCTURES VETTED
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-none font-sans">
                    Tahsin Ahmed
                  </h1>
                  
                  <p className="text-indigo-400 font-extrabold text-xs uppercase tracking-wider">
                    {ABOUT_ME.title}
                  </p>
                </div>

                <div className="border-t border-indigo-950 my-3 pt-3.5 space-y-2.5 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>HQ Base: <strong className="text-white font-bold">{ABOUT_ME.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="h-4 w-4 text-pink-500 shrink-0" />
                    <span>Validation Factor: <strong className="text-rose-400 font-semibold">{ABOUT_ME.contact.bloodGroup} (Blood Group)</strong></span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-[10px] uppercase tracking-wider text-indigo-400 font-mono font-black mb-2">
                    Key Practices Handled
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[10px]">
                    <span className="bg-emerald-950/40 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-500/20 font-mono font-medium">
                      ✓ End-to-End Automation
                    </span>
                    <span className="bg-indigo-950/40 text-indigo-300 px-2.5 py-1 rounded-lg border border-indigo-500/20 font-mono font-medium">
                      ✓ Corporate Strategy
                    </span>
                    <span className="bg-amber-950/40 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-500/20 font-mono font-medium">
                      ✓ Performance Benchmarks
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Balancing Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 bg-slate-900/50 backdrop-blur-xl border border-indigo-500/10 rounded-2xl shadow-sm"
            >
              <span className="text-[10px] font-mono font-black uppercase text-indigo-400 tracking-wider block mb-3.5">
                Dynamic Personal Interests
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {ABOUT_ME.interests.map((interest) => (
                  <div
                    key={interest}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all text-center gap-2 cursor-pointer group ${getInterestColors(interest)}`}
                  >
                    <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 transition-colors group-hover:bg-white group-hover:text-slate-950">
                      {getInterestIcon(interest)}
                    </div>
                    <span className="text-xs font-bold leading-none">{interest}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Statement & Tagline */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-black text-indigo-400 uppercase tracking-widest block">
                  01 // CORPORATE SUMMARY &amp; QUALITY CHARTER
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-sans">
                  Bridging <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">Advanced Computer Science</span> and Organization Strategy.
                </h2>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                {ABOUT_ME.bio}
              </p>

              {/* Corporate Credibility Block */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-indigo-500/15 shadow-sm hover:border-indigo-405/40 transition-all duration-300">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5.5 w-5.5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-sans font-extrabold text-white text-sm">Dual-Discipline Synergy</h4>
                      <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                        Combines software quality synthesis (MSc CS, CGPA 3.77) with organization leadership (MBA, University of Dhaka, CGPA 3.33) for technology-strategy alignment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-indigo-500/15 shadow-sm hover:border-rose-405/45 transition-all duration-300">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5.5 w-5.5 text-rose-450 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-sans font-extrabold text-white text-sm">Industrial Scale Capacity</h4>
                      <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                        Tested high-traffic digital ticket booking nodes (BDTickets for Robi Axiata) handles transactional latency bounds under high stress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Ribbons */}
              <div className="pt-6 border-t border-indigo-950 grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-indigo-500/15 hover:border-indigo-400/35 transition-colors">
                  <div className="h-10 w-10 class rounded-lg bg-indigo-950 border border-indigo-500/35 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block">EMAIL ADVISORY</span>
                    <a href={`mailto:${ABOUT_ME.contact.email}`} className="text-sm font-bold text-white hover:text-indigo-300 transition-colors">
                      {ABOUT_ME.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-indigo-500/15 hover:border-amber-405/35 transition-colors">
                  <div className="h-10 w-10 class rounded-lg bg-amber-950 border border-amber-500/35 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">DIRECT TELEPHONY</span>
                    <a href={`tel:${ABOUT_ME.contact.phone}`} className="text-sm font-bold text-white hover:text-indigo-300 transition-colors">
                      {ABOUT_ME.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Dynamic Partner Logo Vetted Band */}
        <div className="mt-20 pt-10 border-t border-indigo-950/80">
          <p className="text-center font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-6">
            Trusted software systems validated &amp; verified:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-85 select-none">
            <span className="font-sans font-black text-rose-500 text-xl tracking-tight flex items-center gap-1.5 hover:scale-105 transition-transform"><Shield className="h-5 w-5 text-rose-500" /> BDTICKETS</span>
            <span className="font-mono font-extrabold text-orange-400 text-lg tracking-widest hover:scale-105 transition-transform">ROBI AXIATA LTD</span>
            <span className="font-sans font-black text-indigo-400 text-xl tracking-tight hover:scale-105 transition-transform">GAIN SOLUTION</span>
            <span className="font-sans font-black text-emerald-400 text-lg tracking-tight hover:scale-105 transition-transform">LUNCH.BD</span>
            <span className="font-mono font-black text-indigo-300 text-lg tracking-widest hover:scale-105 transition-transform">BLUETECH</span>
            <span className="font-sans font-light text-cyan-450 text-lg tracking-wider hover:scale-105 transition-transform">TRIP 963</span>
          </div>
        </div>

      </div>
    </section>
  );
}
