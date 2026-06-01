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

  const getProjectVisuals = (id: string, index: number) => {
    // Return high-vibrancy colorful styling configs depending on the project
    switch (id) {
      case "proj_bdtickets":
        return {
          headerBg: "bg-rose-950/20 border-rose-500/20 text-rose-200",
          itemIconBg: "bg-rose-950/80 border-rose-500/30 text-rose-300",
          badge: "bg-rose-950/70 border border-rose-500/40 text-rose-200",
          metricValueColor: "text-rose-300",
          hoverBorder: "hover:border-rose-400/60 hover:shadow-rose-500/5"
        };
      case "proj_lunchbd":
        return {
          headerBg: "bg-emerald-950/20 border-emerald-500/20 text-emerald-200",
          itemIconBg: "bg-emerald-950/80 border-emerald-500/30 text-emerald-300",
          badge: "bg-emerald-950/70 border border-emerald-500/40 text-emerald-200",
          metricValueColor: "text-emerald-300",
          hoverBorder: "hover:border-emerald-400/60 hover:shadow-emerald-500/5"
        };
      case "proj_payrun":
        return {
          headerBg: "bg-amber-950/20 border-amber-500/20 text-amber-200",
          itemIconBg: "bg-amber-950/80 border-amber-500/30 text-amber-300",
          badge: "bg-amber-950/70 border border-amber-500/40 text-amber-200",
          metricValueColor: "text-amber-300",
          hoverBorder: "hover:border-amber-400/60 hover:shadow-amber-500/5"
        };
      case "proj_trip963":
        return {
          headerBg: "bg-cyan-950/20 border-cyan-500/20 text-cyan-200",
          itemIconBg: "bg-cyan-950/80 border-cyan-500/30 text-cyan-300",
          badge: "bg-cyan-950/70 border border-cyan-500/40 text-cyan-200",
          metricValueColor: "text-cyan-300",
          hoverBorder: "hover:border-cyan-400/60 hover:shadow-cyan-500/5"
        };
      case "proj_kajtaj":
        return {
          headerBg: "bg-purple-950/20 border-purple-500/20 text-purple-200",
          itemIconBg: "bg-purple-950/80 border-purple-500/30 text-purple-300",
          badge: "bg-purple-950/70 border border-purple-500/40 text-purple-200",
          metricValueColor: "text-purple-300",
          hoverBorder: "hover:border-purple-400/60 hover:shadow-purple-500/5"
        };
      default:
        // Stagger others with high fidelity standard colors
        const colors = [
          {
            headerBg: "bg-indigo-950/20 border-indigo-500/20 text-indigo-200",
            itemIconBg: "bg-indigo-950/80 border-indigo-500/30 text-indigo-300",
            badge: "bg-indigo-950/70 border border-indigo-500/40 text-indigo-200",
            metricValueColor: "text-indigo-300",
            hoverBorder: "hover:border-indigo-400/60 hover:shadow-indigo-500/5"
          },
          {
            headerBg: "bg-fuchsia-950/20 border-fuchsia-500/20 text-fuchsia-200",
            itemIconBg: "bg-fuchsia-950/80 border-fuchsia-500/30 text-fuchsia-300",
            badge: "bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-200",
            metricValueColor: "text-fuchsia-300",
            hoverBorder: "hover:border-fuchsia-400/60 hover:shadow-fuchsia-500/5"
          }
        ];
        return colors[index % colors.length];
    }
  };

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
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden qa-grid border-b border-indigo-950 mesh-gradient-amber">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-glow-indigo"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pink"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs font-black text-amber-400 uppercase tracking-widest block mb-2">
              05 // SYSTEM MATRICES &amp; CLIENT VENTURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Verified Client Deployments <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400 bg-clip-text text-transparent">&amp; Systems Vetted</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              A public registry of high-throughput consumer platforms, corporate portals, and transactional SaaS engines validated through comprehensive strategic test cycles.
            </p>
          </div>

          {/* Filtering Tabs with chromatic outline */}
          <div className="flex items-center gap-1.5 bg-slate-950 border border-indigo-950 p-1.5 rounded-xl self-start shadow-2xl">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-indigo-600 via-purple-650 to-rose-600 text-white shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              All ({PROJECTS_LIST.length})
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                filter === "web"
                  ? "bg-gradient-to-r from-indigo-600 via-purple-650 to-rose-600 text-white shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              Web Solutions
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                filter === "mobile"
                  ? "bg-gradient-to-r from-indigo-600 via-purple-650 to-rose-600 text-white shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              Mobile Apps
            </button>
          </div>
        </div>

        {/* Project Catalog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const metrics = getProjectMetrics(proj.id);
              const style = getProjectVisuals(proj.id, idx);
              const isWebOnly = !proj.type.toLowerCase().includes("mobile") && !proj.type.toLowerCase().includes("app");

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={proj.id}
                  className={`p-6 bg-slate-950 border border-indigo-500/20 rounded-2xl flex flex-col justify-between group hover:bg-slate-950/90 transition-all ${style.hoverBorder}`}
                >
                  <div className="space-y-4">
                    {/* Platform Indicator Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${style.itemIconBg}`}>
                          {isWebOnly ? <Monitor className="h-4.5 w-4.5" /> : <Phone className="h-4.5 w-4.5" />}
                        </div>
                        <span className="font-mono text-[9px] uppercase text-indigo-400 tracking-wider">
                          {proj.type}
                        </span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded font-mono text-[9px] font-bold ${style.badge}`}>
                        VETTED &amp; SIGNED
                      </span>
                    </div>

                    {/* Description Name */}
                    <div>
                      <h3 className="text-base sm:text-lg font-sans font-black text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-350 transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-slate-200 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  {/* SQA Verification Parameters */}
                  <div className="mt-6 pt-5 border-t border-indigo-950 space-y-3 font-mono text-[11px] text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Regression Coverage:</span>
                      <strong className={`font-black ${style.metricValueColor}`}>{metrics.coverage}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Verification Suite:</span>
                      <span className="text-slate-300 text-[10px] font-semibold">{metrics.tests}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Identified defects:</span>
                      <span className="text-white text-[10px] font-bold">{metrics.bugs}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Residual Risk Factor:</span>
                      <span className={`font-black ${metrics.risk === "Low" ? "text-emerald-400" : "text-amber-400 animate-pulse"}`}>
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
