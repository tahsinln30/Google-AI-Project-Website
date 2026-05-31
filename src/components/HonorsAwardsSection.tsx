import React from "react";
import { motion } from "motion/react";
import { AWARDS_LIST } from "../data";
import { Award, Trophy, ShieldCheck } from "lucide-react";

export default function HonorsAwardsSection() {
  const getAwardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="h-6 w-6 text-amber-600" />;
      case 1:
        return <Trophy className="h-6 w-6 text-amber-600" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-brand-600" />;
    }
  };

  return (
    <section id="honors-awards" className="py-24 bg-white relative overflow-hidden qa-grid border-b border-slate-200/60 font-sans">
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:lg-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2">
            07 // RECOGNITIONS & INDUSTRY ACCREDITATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Honors, Awards & Accreditations
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Formal achievements, regional corporate recognitions, and university distinctions certifying high technical excellence and systematic rigorous dedication.
          </p>
        </div>

        {/* Awards Badges Area */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {AWARDS_LIST.map((award, index) => {
            const isRobi = index === 1;

            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={award.id}
                className="p-6 sm:p-8 rounded-2xl border bg-white border-slate-200 flex flex-col justify-between hover:shadow-sm transition-all shadow-xs"
              >
                <div className="space-y-4">
                  {/* Icon medallion */}
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${
                    isRobi
                      ? "bg-brand-50 border border-brand-100 text-brand-600"
                      : "bg-slate-50 border border-slate-100 text-amber-600"
                  }`}>
                    {getAwardIcon(index)}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {award.title}
                    </h3>
                    <p className="font-mono text-[10px] text-brand-600 font-bold uppercase tracking-wider mt-1.5">
                      Issued by: {award.issuer}
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                      {award.description}
                    </p>
                  </div>
                </div>

                {/* Simulated Verification Seal */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-slate-400">AUTHORITY CONFIRMED</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    GOLD SEAL
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
