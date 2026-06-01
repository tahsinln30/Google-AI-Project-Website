import React from "react";
import { motion } from "motion/react";
import { EDUCATION_HISTORY } from "../data";
import { GraduationCap, Landmark, Calendar, Star } from "lucide-react";

export default function EducationSection() {
  const getEduVisuals = (eduId: string) => {
    switch (eduId) {
      case "edu_mba":
        return {
          cardBg: "bg-slate-950/65 border-amber-500/20 hover:border-amber-400/50",
          sideBorder: "bg-gradient-to-b from-amber-500 via-rose-500 to-red-600",
          iconBg: "bg-amber-950/70 border border-amber-500/30 text-amber-400",
          tagBg: "bg-rose-950/80 border border-rose-500/35 text-rose-300 animate-pulse",
          scoreBg: "bg-amber-950/40 border border-amber-500/20 text-amber-300"
        };
      case "edu_msc":
        return {
          cardBg: "bg-slate-950/65 border-emerald-500/20 hover:border-emerald-400/50",
          sideBorder: "bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500",
          iconBg: "bg-emerald-950/70 border border-emerald-500/30 text-emerald-400",
          tagBg: "bg-indigo-950/80 border border-indigo-500/35 text-indigo-300",
          scoreBg: "bg-emerald-950/40 border border-emerald-500/20 text-emerald-300"
        };
      case "edu_bsc":
        return {
          cardBg: "bg-slate-950/65 border-indigo-500/20 hover:border-indigo-400/50",
          sideBorder: "bg-gradient-to-b from-indigo-500 via-violet-500 to-purple-500",
          iconBg: "bg-indigo-950/70 border border-indigo-500/30 text-indigo-400",
          tagBg: "bg-purple-950/80 border border-purple-500/35 text-purple-300",
          scoreBg: "bg-indigo-950/40 border border-indigo-500/20 text-indigo-300"
        };
      default:
        return {
          cardBg: "bg-slate-950/65 border-slate-800/20 hover:border-slate-700/50",
          sideBorder: "bg-gradient-to-b from-slate-500 to-slate-700",
          iconBg: "bg-slate-900 border border-indigo-500/10 text-indigo-400",
          tagBg: "bg-slate-950 border border-slate-700 text-slate-400",
          scoreBg: "bg-slate-950 border border-slate-800 text-slate-300"
        };
    }
  };

  return (
    <section id="education" className="py-24 bg-slate-900 relative overflow-hidden qa-grid border-b border-indigo-950 mesh-gradient-emerald">
      {/* Decorative colorful ambient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pink"></div>
      <div className="absolute bottom-5 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-glow-amber"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-black text-emerald-400 uppercase tracking-widest block mb-2">
            03 // ACADEMIC TRUST MASTERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Education <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">&amp; Academic Credentials</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A solid analytical architecture backing operational expertise, integrating deep technical software engineering MSc with strategic corporate MBA leadership skills from top-tier institutions.
          </p>
        </div>

        {/* Chronological Card List */}
        <div className="space-y-5 max-w-4xl mx-auto">
          {EDUCATION_HISTORY.map((edu, index) => {
            const isDhakaUni = edu.institution.includes("Dhaka");
            const isMsc = edu.degree.includes("MSc");
            const visuals = getEduVisuals(edu.id);

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={edu.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all relative overflow-hidden group ${visuals.cardBg} backdrop-blur-md shadow-xl`}
              >
                {/* Decorative Side Marker with beautiful gradient color */}
                <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${visuals.sideBorder}`}></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left Column: Degree & School */}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl shrink-0 mt-1 ${visuals.iconBg}`}>
                      <GraduationCap className="h-5.5 w-5.5" />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-sans font-black text-white group-hover:text-indigo-300 transition-colors">
                          {edu.degree}
                        </h3>
                        {isDhakaUni && (
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[9px] rounded font-mono font-extrabold uppercase tracking-wide ${visuals.tagBg}`}>
                            <Star className="h-2.5 w-2.5 py-0 text-amber-400 animate-spin" /> ACTIVE PURSUIT
                          </span>
                        )}
                        {!isDhakaUni && isMsc && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-950/90 border border-emerald-500/50 text-[10px] rounded font-mono font-black uppercase tracking-wider text-emerald-300 shadow-md">
                            ACADEMIC DISTINCTION
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1.5 font-sans font-semibold text-slate-300 text-sm">
                        <Landmark className="h-4 w-4 text-slate-400 shrink-0" />
                        <span>{edu.institution}</span>
                      </div>

                      {edu.details && (
                        <p className="text-slate-400 text-xs sm:text-sm mt-3 pt-3 border-t border-indigo-950 leading-relaxed max-w-2xl font-light">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Grade & Dates */}
                  <div className="md:items-end flex md:flex-col justify-between md:justify-start gap-4 shrink-0 border-t md:border-t-0 border-indigo-950 pt-4 md:pt-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-indigo-500/10 rounded-lg text-slate-300 font-mono text-[11px]">
                      <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                      <span>{edu.duration}</span>
                    </div>

                    <div className={`flex items-center gap-2 rounded-xl px-4 py-2 border transition-all ${visuals.scoreBg}`}>
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Grade:</span>
                      <strong className="font-mono text-xs text-white font-black">{edu.grade.replace("CGPA: ", "").replace("GPA: ", "")}</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
