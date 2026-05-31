import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WORK_EXPERIENCES } from "../data";
import { Briefcase, Calendar, MapPin, ChevronRight, Activity, Terminal, ShieldAlert } from "lucide-react";

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>("bluetech");

  const activeExperience = WORK_EXPERIENCES.find((exp) => exp.id === selectedId) || WORK_EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2">
            02 // SYSTEM ENGAGEMENTS & ENGAGEMENT LOGS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Corporate Engagements & Industry Tenure
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            A comprehensive registry of software engineering, quality governance, and performance load auditing roles held across regional industry leaders and technology vendors.
          </p>
        </div>

        {/* Timeline Interaction Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: List of Companies & Timelines */}
          <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-24">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 mb-2">
              <span className="font-mono text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-2">
                ORGANIZATIONAL INSTANCES
              </span>
            </div>
            
            <div className="space-y-1.5 list-none">
              {WORK_EXPERIENCES.map((exp) => {
                const isActive = selectedId === exp.id;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedId(exp.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 cursor-pointer relative ${
                      isActive
                        ? "bg-brand-50/40 border-brand-500/80 text-brand-900 shadow-xs"
                        : "bg-transparent border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-lg shrink-0 transition-all ${
                        isActive
                          ? "bg-brand-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <Briefcase className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-sans font-bold text-sm sm:text-base tracking-tight leading-tight block text-slate-900">
                        {exp.company}
                      </div>
                      <div className="font-sans font-medium text-xs text-brand-650 truncate mt-0.5">
                        {exp.role.split(" (")[0]}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 mt-2">
                        <Calendar className="h-3 w-3 shrink-0" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeLeftIndicator"
                        className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-brand-600 rounded-r"
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
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-sm transition-all relative min-h-[400px] flex flex-col"
              >
                {/* Background Accent Stamp */}
                <div className="absolute right-6 top-6 opacity-[0.02] select-none pointer-events-none">
                  <Activity className="h-40 w-40 text-brand-600" />
                </div>

                {/* Company Header Info */}
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-900 tracking-tight">
                        {activeExperience.company}
                      </h3>
                      <p className="text-brand-600 font-bold text-sm mt-0.5">
                        {activeExperience.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200/60 rounded font-mono text-xs text-slate-600">
                        <Calendar className="h-3.5 w-3.5 text-brand-500" />
                        {activeExperience.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Task Responsibilities Checklist */}
                <div className="space-y-4 flex-1">
                  <h4 className="font-mono text-[10px] text-brand-600 font-bold uppercase tracking-widest block">
                    FUNCTIONAL COMPLIANCE REGISTRY
                  </h4>
                  <ul className="space-y-3 list-none m-0 p-0">
                    {activeExperience.responsibilities.map((resp, i) => (
                      <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-650 leading-relaxed font-normal"
                      >
                        <span className="h-2 w-2 rounded-full bg-brand-600 mt-2 shrink-0"></span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Associated Tools used in the role */}
                {activeExperience.skillsAndTools && (
                  <div className="pt-8 border-t border-slate-100 mt-8">
                    <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">
                      ROLE ENGAGEMENT STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeExperience.skillsAndTools.map((tool) => (
                        <span
                          key={tool}
                          className="bg-slate-50 text-slate-650 px-3 py-1.5 rounded-lg border border-slate-200/60 text-xs font-mono font-medium select-none"
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
