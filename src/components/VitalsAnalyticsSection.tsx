import React, { useState } from "react";
import { motion } from "motion/react";
import { VITALS_METRICS } from "../data";
import { Gauge, CheckCircle, Award, Database, TrendingUp, Cpu, Server, LineChart } from "lucide-react";

export default function VitalsAnalyticsSection() {
  const [selectedMetric, setSelectedMetric] = useState<string>("vital_bugs");

  const getMetricVisuals = (id: string) => {
    switch (id) {
      case "vital_bugs":
        return {
          icon: <Gauge className="h-5 w-5 text-rose-400" />,
          glowColor: "border-rose-500/30 hover:border-rose-500 shadow-rose-500/10",
          iconBg: "bg-rose-950/45 border-rose-500/20 text-rose-300",
          bubbleBg: "bg-gradient-to-tr from-rose-950/20 via-slate-900 to-indigo-950/20",
          tagLabel: "DEFECTS_MONITORED"
        };
      case "vital_cases":
        return {
          icon: <CheckCircle className="h-5 w-5 text-indigo-400" />,
          glowColor: "border-indigo-500/30 hover:border-indigo-500 shadow-indigo-500/10",
          iconBg: "bg-indigo-950/45 border-indigo-500/20 text-indigo-300",
          bubbleBg: "bg-gradient-to-tr from-indigo-950/20 via-slate-900 to-purple-950/20",
          tagLabel: "ASSERTIONS_BUILT"
        };
      case "vital_scripts":
        return {
          icon: <Cpu className="h-5 w-5 text-emerald-400" />,
          glowColor: "border-emerald-500/30 hover:border-emerald-500 shadow-emerald-500/10",
          iconBg: "bg-emerald-950/45 border-emerald-500/20 text-emerald-300",
          bubbleBg: "bg-gradient-to-tr from-emerald-950/20 via-slate-900 to-cyan-950/20",
          tagLabel: "CD_AUTOMATED"
        };
      case "vital_perf":
        return {
          icon: <Server className="h-5 w-5 text-amber-400" />,
          glowColor: "border-amber-500/30 hover:border-amber-500 shadow-amber-500/10",
          iconBg: "bg-amber-950/45 border-amber-500/20 text-amber-300",
          bubbleBg: "bg-gradient-to-tr from-amber-950/20 via-slate-900 to-rose-950/20",
          tagLabel: "K6_STRESS_PEAK"
        };
      case "vital_academic":
        return {
          icon: <Award className="h-5 w-5 text-purple-400" />,
          glowColor: "border-purple-500/30 hover:border-purple-500 shadow-purple-500/10",
          iconBg: "bg-purple-950/45 border-purple-500/20 text-purple-300",
          bubbleBg: "bg-gradient-to-tr from-purple-950/20 via-slate-900 to-indigo-950/20",
          tagLabel: "PAPERS_INDEXED"
        };
      default:
        return {
          icon: <Database className="h-5 w-5 text-cyan-400" />,
          glowColor: "border-cyan-500/30 hover:border-cyan-500 shadow-cyan-500/10",
          iconBg: "bg-cyan-950/45 border-cyan-500/20 text-cyan-300",
          bubbleBg: "bg-gradient-to-tr from-cyan-950/20 via-slate-900 to-indigo-950/20",
          tagLabel: "AUDITING_VERIFIED"
        };
    }
  };

  return (
    <section id="vitals-analytics" className="py-24 bg-slate-950 border-b border-indigo-950 font-sans relative overflow-hidden mesh-gradient-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-black text-rose-400 uppercase tracking-widest block mb-2">
            08 // KEY INTENSITY INDICATORS &amp; SYSTEMS METRICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Metrics <span className="bg-gradient-to-r from-rose-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent">&amp; QA Systems Analytics</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Real software assurance metrics translating execution registry, automated regression scripting, and load boundary checks.
          </p>
        </div>

        {/* Grid Area: Stats vs Chart panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stat Widgets Array */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {VITALS_METRICS.map((metric) => {
              const theme = getMetricVisuals(metric.id);
              const isSelected = selectedMetric === metric.id;
              return (
                <div
                  key={metric.id}
                  onClick={() => setSelectedMetric(metric.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] relative overflow-hidden group ${
                    isSelected
                      ? `${theme.bubbleBg} border-indigo-500 shadow-lg shadow-indigo-500/5`
                      : "bg-slate-900/60 border-indigo-950 hover:bg-slate-900"
                  }`}
                >
                  {/* Subtle inner highlight glow */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500"></div>
                  )}

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${theme.iconBg}`}>
                        {theme.icon}
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 font-bold">{theme.tagLabel}</span>
                    </div>
                    <div>
                      <h4 className={`font-sans font-black text-2xl sm:text-3xl tracking-tight ${
                        isSelected 
                          ? "bg-gradient-to-r from-white via-indigo-200 to-amber-200 bg-clip-text text-transparent" 
                          : "text-white"
                      }`}>
                        {metric.value}
                      </h4>
                      <p className="font-sans font-bold text-xs text-indigo-300 tracking-tight mt-0.5">
                        {metric.label}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-[11px] mt-3 font-mono border-t border-indigo-950 pt-2 leading-relaxed">
                    {metric.subtext}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Colorful QA Trend Plan */}
          <div className="lg:col-span-6 bg-slate-900/80 backdrop-blur-md border border-indigo-500/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[380px] shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between border-b border-indigo-950 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 animate-pulse">
                    <LineChart className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-white text-sm">Automated Scripting Scale</h3>
                    <p className="text-slate-400 text-[11px] font-mono">Quarterly integration test scripts &amp; code assets</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-cyan-950 border border-cyan-500/30 rounded font-mono text-[10px] text-cyan-400 font-extrabold uppercase">
                  <TrendingUp className="h-3.5 w-3.5 text-cyan-400" /> STABLE TRACK
                </div>
              </div>

              {/* Hand-crafted colorful custom graph */}
              <div className="pt-6 relative">
                <div className="absolute right-2 top-0 flex items-center gap-3 text-[9px] font-mono text-slate-400 select-none">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                    <span>Created Scripts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                    <span>Pass Target (99.4%)</span>
                  </div>
                </div>

                <svg viewBox="0 0 500 200" className="w-full h-auto overflow-visible mt-2">
                  {/* Grid Lines */}
                  <line x1="0" y1="180" x2="500" y2="180" stroke="#1e1b4b" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="130" x2="500" y2="130" stroke="#1e1b4b" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#1e1b4b" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="30" x2="500" y2="30" stroke="#1e1b4b" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Areas gradients */}
                  <defs>
                    <linearGradient id="roseGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="indigoGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.30" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Shaded Areas with high chromatic values */}
                  <path
                    d="M 10 170 Q 100 140 180 120 T 320 60 T 480 25 L 480 180 L 10 180 Z"
                    fill="url(#indigoGrad)"
                  />
                  <path
                    d="M 10 175 Q 100 150 180 110 T 320 80 T 480 40 L 480 180 L 10 180 Z"
                    fill="url(#roseGrad)"
                    className="opacity-40"
                  />

                  {/* Multi-colored Curve lines */}
                  <path
                    d="M 10 170 Q 100 140 180 120 T 320 60 T 480 25"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M 10 175 Q 100 150 180 110 T 320 80 T 480 40"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    className="opacity-90"
                  />

                  {/* Highlight Circles with color variations */}
                  <circle cx="10" cy="170" r="5" fill="#6366f1" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="130" cy="132" r="5" fill="#a855f7" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="210" cy="115" r="5" fill="#ec4899" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="340" cy="55" r="5" fill="#f43f5e" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="480" cy="25" r="6" fill="#06b6d4" stroke="#ffffff" strokeWidth="2.5" />

                  {/* Overlay bubble */}
                  <g transform="translate(425, 5)">
                    <rect width="55" height="18" rx="4" fill="#06b6d4" />
                    <text x="8" y="12" fill="#0f172a" fontSize="9" fontFamily="monospace" fontWeight="bold">350+ PASS</text>
                  </g>

                  {/* X-axis legends */}
                  <text x="10" y="196" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="bold">Q1-24</text>
                  <text x="130" y="196" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="bold">Q3-24</text>
                  <text x="210" y="196" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="bold">Q1-25</text>
                  <text x="340" y="196" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="bold">Q3-25</text>
                  <text x="435" y="196" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">Q1-26 (NOW)</text>
                </svg>
              </div>
            </div>

            {/* QA confirmation registry bottom bar */}
            <div className="mt-8 pt-4 border-t border-indigo-950 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-slate-500 relative z-10">
              <span>SECURITY REVISION TARGET: GP-BD-PR-V100</span>
              <span className="text-emerald-400 font-black">STABILITY FACTOR: 100% RELIABLE</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
