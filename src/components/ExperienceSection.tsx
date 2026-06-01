import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WORK_EXPERIENCES } from "../data";
import { Briefcase, Calendar, MapPin, ChevronRight, Activity, Terminal, ShieldAlert } from "lucide-react";

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>("bluetech");

  const activeExperience = WORK_EXPERIENCES.find((exp) => exp.id === selectedId) || WORK_EXPERIENCES[0];

  // Helper to color engagement tools based on brands
  const getToolTheme = (tool: string) => {
    const lower = tool.toLowerCase();
    if (lower.includes("cypress")) return "bg-emerald-950/70 border-emerald-500/40 text-emerald-200";
    if (lower.includes("playwright")) return "bg-violet-950/70 border-violet-500/40 text-violet-200";
    if (lower.includes("manual")) return "bg-rose-950/70 border-rose-500/40 text-rose-200";
    if (lower.includes("k6")) return "bg-amber-950/70 border-amber-500/40 text-amber-200";
    if (lower.includes("jira")) return "bg-indigo-950/70 border-indigo-500/40 text-indigo-200";
    if (lower.includes("slack")) return "bg-pink-950/70 border-pink-500/40 text-pink-200";
    if (lower.includes("trello")) return "bg-cyan-950/70 border-cyan-500/40 text-cyan-200";
    if (lower.includes("bdtickets")) return "bg-rose-950/80 border-rose-500/50 text-rose-200";
    return "bg-slate-900 border border-indigo-500/25 text-slate-200";
  };

  return (
    <section id="experience" className="py-24 bg-slate-900 border-b border-indigo-950 relative overflow-hidden mesh-gradient-pink">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-glow-indigo"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none animate-glow-pink"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-black text-indigo-400 uppercase tracking-widest block mb-2">
            02 // SYSTEM ENGAGEMENTS &amp; EXPERIENCE LOGS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Corporate Engagements <span className="bg-gradient-to-r from-indigo-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">&amp; Industry Tenure</span>
          </h2>
          <p className="text-slate-350 text-sm sm:text-base mt-2">
            A comprehensive registry of software engineering, quality governance, and performance load auditing roles held across regional industry leaders and technology vendors.
          </p>
        </div>

        {/* Timeline Interaction Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: List of Companies & Timelines */}
          <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-24">
            <div className="p-3 bg-slate-950/80 rounded-xl border border-indigo-500/15 mb-2 shadow-inner">
              <span className="font-mono text-[10px] uppercase text-indigo-400 tracking-wider font-extrabold block px-2">
                ORGANIZATIONAL INSTANCES
              </span>
            </div>
            
            <div className="space-y-1.5 list-none">
              {WORK_EXPERIENCES.map((exp, index) => {
                const isActive = selectedId === exp.id;
                // Generate colorful indexes
                const pulseColors = ["bg-indigo-500", "bg-rose-500", "bg-amber-500", "bg-emerald-500", "bg-cyan-500"];
                const bulletPulse = pulseColors[index % pulseColors.length];

                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedId(exp.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 cursor-pointer relative ${
                      isActive
                        ? "bg-slate-950/90 border-indigo-500 text-white shadow-xl"
                        : "bg-slate-950/30 border-transparent text-slate-400 hover:text-white hover:bg-slate-950/60"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-lg shrink-0 transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-indigo-500/20"
                          : "bg-slate-900 border border-indigo-500/5 text-slate-500"
                      }`}
                    >
                      <Briefcase className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-sans font-black text-sm tracking-tight leading-tight block text-white">
                        {exp.company}
                      </div>
                      <div className="font-sans font-semibold text-xs text-indigo-300 truncate mt-1">
                        {exp.role.split(" (")[0]}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-300 mt-2">
                        <Calendar className="h-3 w-3 shrink-0 text-indigo-400 animate-pulse" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeLeftIndicator"
                        className={`absolute left-0 top-1/4 bottom-1/4 w-1 ${bulletPulse} rounded-r`}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detail Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-950/75 backdrop-blur-md border border-indigo-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl hover:border-indigo-500/35 transition-all relative min-h-[400px] flex flex-col justify-between"
              >
                {/* Background Accent Stamp with high-vibrancy */}
                <div className="absolute right-6 top-6 opacity-[0.03] select-none pointer-events-none">
                  <Activity className="h-40 w-40 text-rose-500" />
                </div>

                <div className="space-y-6">
                  {/* Company Header Info */}
                  <div className="border-b border-indigo-950 pb-6 mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 text-left">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight">
                          {activeExperience.company}
                        </h3>
                        <p className="text-indigo-300 font-extrabold text-sm mt-1">
                          {activeExperience.role}
                        </p>
                      </div>
                      <div className="flex flex-col items-end shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-950 border border-indigo-500/40 rounded font-mono text-xs text-indigo-200">
                          <Calendar className="h-3 w-3 text-rose-400 animate-pulse" />
                          {activeExperience.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Task Responsibilities Checklist */}
                  <div className="space-y-4 flex-1 text-left">
                    <h4 className="font-mono text-[10px] text-pink-400 font-black uppercase tracking-widest block">
                      FUNCTIONAL COMPLIANCE REGISTRY
                    </h4>
                    <ul className="space-y-3 list-none m-0 p-0">
                      {activeExperience.responsibilities.map((resp, i) => {
                        const markerColors = ["bg-indigo-400", "bg-rose-400", "bg-amber-400", "bg-emerald-400"];
                        const dotColor = markerColors[i % markerColors.length];
                        return (
                          <motion.li
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.03 }}
                            key={i}
                            className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-100 leading-relaxed font-normal"
                          >
                            <span className={`h-2 w-2 rounded-full mt-2 shrink-0 ${dotColor} shadow-inner`}></span>
                            <span>{resp}</span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Associated Tools used in the role */}
                {activeExperience.skillsAndTools && (
                  <div className="pt-8 border-t border-indigo-950 mt-8 text-left">
                    <span className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-3">
                      ROLE ENGAGEMENT STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeExperience.skillsAndTools.map((tool) => (
                        <span
                          key={tool}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold select-none border transition-all ${getToolTheme(tool)}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
