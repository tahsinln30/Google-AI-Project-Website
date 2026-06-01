import React from "react";
import { motion } from "motion/react";
import { PUBLICATIONS_LIST } from "../data";
import { BookOpen, ExternalLink, Calendar, Newspaper } from "lucide-react";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2">
            06 // RESEARCH REPOST & SYSTEM AUDITING WHITEPAPERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Research Publications & Whitepapers
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 font-sans">
            Academic papers and quantitative modeling exploring computer network architecture, digital startup demography, and technology-management intersections indexed in international journals.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PUBLICATIONS_LIST.map((pub, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={pub.id}
                className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-brand-300 hover:shadow-xs transition-all group"
              >
                <div className="space-y-4 font-sans">
                  {/* Journal Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-brand-700 font-bold bg-brand-50 border border-brand-100 px-2.5 py-1 rounded">
                      <Newspaper className="h-3 w-3 text-brand-600" />
                      <span>{pub.journal.includes("Scientific") ? "IJSER REGISTERED" : "IJISRT RECOGNIZED"}</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">ISSN VERIFIED</span>
                  </div>

                  {/* Title and descriptions */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <p className="font-sans font-semibold text-xs text-brand-600 mt-1">
                      Published in {pub.journal}
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm mt-3.5 leading-relaxed font-normal">
                      {pub.description}
                    </p>
                  </div>
                </div>

                {/* PDF Link Button Trigger */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>PEER EXAMINED</span>
                  </div>

                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 hover:border-brand-500 hover:bg-brand-50 text-xs font-mono font-bold text-brand-700 rounded-lg transition-colors"
                  >
                    <span>Inspect Archive</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
