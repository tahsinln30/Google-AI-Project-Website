import React from "react";
import { motion } from "motion/react";
import { EDUCATION_HISTORY } from "../data";
import { GraduationCap, Landmark, Calendar, Star } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-slate-50 relative overflow-hidden qa-grid border-b border-slate-200/60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2">
            03 // ACADEMIC TRUST MASTERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Education & Academic Credentials
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            A solid analytical architecture backing operational expertise, integrating deep technical software engineering MSc with strategic corporate MBA leadership skills.
          </p>
        </div>

        {/* Chronological Card List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {EDUCATION_HISTORY.map((edu, index) => {
            const isDhakaUni = edu.institution.includes("Dhaka");
            const isMsc = edu.degree.includes("MSc");

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={edu.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all relative overflow-hidden group bg-white border-slate-200 shadow-xs hover:shadow-sm`}
              >
                {/* Decorative Side Marker */}
                <div className={`absolute top-0 bottom-0 left-0 w-1 ${isDhakaUni ? "bg-brand-600" : isMsc ? "bg-blue-400" : "bg-slate-300"}`}></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left Column: Degree & School */}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl shrink-0 mt-1 ${isDhakaUni ? "bg-brand-600 text-white" : "bg-slate-100 text-brand-600"}`}>
                      <GraduationCap className="h-5.5 w-5.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-sans font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                          {edu.degree}
                        </h3>
                        {isDhakaUni && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-brand-600 text-white font-mono text-[9px] rounded font-bold uppercase tracking-wide">
                            <Star className="h-2 w-2 py-0 animate-spin" /> ACTIVE PURSUIT
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1.5 font-sans font-medium text-slate-600 text-sm">
                        <Landmark className="h-4 w-4 text-brand-500 shrink-0" />
                        <span>{edu.institution}</span>
                      </div>

                      {edu.details && (
                        <p className="text-slate-500 text-xs sm:text-sm mt-3 pt-3 border-t border-slate-100 leading-relaxed max-w-2xl font-normal">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Grade & Dates */}
                  <div className="md:items-end flex md:flex-col justify-between md:justify-start gap-4 shrink-0 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200/60 rounded-lg text-slate-600 font-mono text-[11px]">
                      <Calendar className="h-3.5 w-3.5 text-brand-500" />
                      <span>{edu.duration}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/65 rounded-xl px-4 py-2 hover:border-brand-300 transition-colors">
                      <div className="h-2.5 w-2.5 rounded-full bg-brand-600"></div>
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">Score:</span>
                      <strong className="font-mono text-sm text-slate-800 font-bold">{edu.grade.split(": ")[1] || edu.grade}</strong>
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
