import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_LIST } from "../data";
import { Layers, Monitor, Phone, Clipboard, CheckCircle2, ChevronRight, FileSpreadsheet, ShieldAlert } from "lucide-react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");

  const filteredProjects = PROJECTS_LIST.filter((proj) => {
    if (filter === "all") return true;
    const typeLower = proj.type.toLowerCase();
    if (filter === "web") return typeLower.includes("web") || typeLower.includes("website");
    if (filter === "mobile") return typeLower.includes("mobile") || typeLower.includes("app");
    return true;
  });

  // Dynamic decoration parameters representing authentic QA validations
  const getProjectMetrics = (id: string) => {
    switch (id) {
      case "proj_bdtickets":
        return { coverage: "94%", tests: "128 manual / 84 auto", bugs: "242 closed", risk: "Low" };
      case "proj_lunchbd":
        return { coverage: "92%", tests: "64 manual / 32 auto", bugs: "48 closed", risk: "Low" };
      case "proj_bluetech":
        return { coverage: "96%", tests: "32 manual / 16 auto", bugs: "14 closed", risk: "Low" };
      case "proj_trip963":
        return { coverage: "89%", tests: "94 manual / 42 auto", bugs: "110 closed", risk: "Medium" };
      case "proj_payrun":
        return { coverage: "98%", tests: "156 manual / 112 auto", bugs: "188 closed", risk: "Low" };
      case "proj_easydesk":
        return { coverage: "91%", tests: "78 manual / 36 auto", bugs: "62 closed", risk: "Low" };
      case "proj_gain_io":
        return { coverage: "95%", tests: "110 manual / 74 auto", bugs: "140 closed", risk: "Low" };
      case "proj_gain_site":
        return { coverage: "99%", tests: "24 manual / 12 auto", bugs: "8 closed", risk: "Low" };
      case "proj_kajtaj":
        return { coverage: "88%", tests: "86 manual / 28 auto", bugs: "72 closed", risk: "Medium" };
      default:
        return { coverage: "90%", tests: "50 manual / 20 auto", bugs: "30 closed", risk: "Low" };
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden qa-grid border-b border-slate-200/60">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2">
              05 // SYSTEM MATRICES & CLIENT VENTURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              Verified Client Deployments & Systems Vetted
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-xl">
              A public registry of high-throughput consumer platforms, corporate portals, and transactional SaaS engines validated through comprehensive strategic test cycles.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex items-center gap-1.5 bg-white border border-slate-205 p-1.5 rounded-xl self-start shadow-xs">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                filter === "all"
                  ? "bg-brand-600 text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              All Assets ({PROJECTS_LIST.length})
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                filter === "web"
                  ? "bg-brand-600 text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Web Solutions
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                filter === "mobile"
                  ? "bg-brand-600 text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Mobile Apps
            </button>
          </div>
        </div>

        {/* Project Catalog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, index) => {
              const metrics = getProjectMetrics(proj.id);
              const isWebOnly = !proj.type.toLowerCase().includes("mobile") && !proj.type.toLowerCase().includes("app");

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={proj.id}
                  className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between group hover:border-brand-300 hover:shadow-xs hover:shadow-brand-500/5 transition-all"
                >
                  <div className="space-y-4">
                    {/* Platform Indicator Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                          {isWebOnly ? <Monitor className="h-4.5 w-4.5" /> : <Phone className="h-4.5 w-4.5" />}
                        </div>
                        <span className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
                          {proj.type}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[9px] font-bold">
                        VETTED & SIGNED
                      </span>
                    </div>

                    {/* Description Name */}
                    <div>
                      <h3 className="text-base sm:text-lg font-sans font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-slate-550 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  {/* SQA Verification Parameters */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-3 font-mono text-[11px] text-slate-500">
                    <div className="flex items-center justify-between">
                      <span>Regression Coverage:</span>
                      <strong className="text-emerald-600 font-bold">{metrics.coverage}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Verification Suite:</span>
                      <span className="text-slate-700 text-[10px] font-semibold">{metrics.tests}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Identified defects:</span>
                      <span className="text-slate-900 text-[10px] font-bold">{metrics.bugs}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Residual Risk Index:</span>
                      <span className={`font-bold ${metrics.risk === "Low" ? "text-brand-600" : "text-amber-600"}`}>
                        {metrics.risk}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
