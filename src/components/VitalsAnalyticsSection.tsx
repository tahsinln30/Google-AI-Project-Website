import React, { useState } from "react";
import { motion } from "motion/react";
import { VITALS_METRICS } from "../data";
import { Gauge, CheckCircle, Award, Database, TrendingUp, Cpu, Server, LineChart } from "lucide-react";

export default function VitalsAnalyticsSection() {
  const [selectedMetric, setSelectedMetric] = useState<string>("vital_bugs");

  const getMetricIcon = (id: string) => {
    switch (id) {
      case "vital_bugs":
        return <Gauge className="h-5 w-5 text-rose-600" />;
      case "vital_cases":
        return <CheckCircle className="h-5 w-5 text-brand-600" />;
      case "vital_scripts":
        return <Cpu className="h-5 w-5 text-emerald-600" />;
      case "vital_perf":
        return <Server className="h-5 w-5 text-amber-600" />;
      case "vital_academic":
        return <Award className="h-5 w-5 text-purple-600" />;
      default:
        return <Database className="h-5 w-5 text-sky-600" />;
    }
  };

  return (
    <section id="vitals-analytics" className="py-24 bg-slate-50 border-b border-slate-200/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2">
            08 // KEY INTENSITY INDICATORS & SYSTEMS METRICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Metrics & QA Systems Analytics
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Real software assurance metrics translating execution registry, automated regression scripting, and load boundary checks.
          </p>
        </div>

        {/* Grid Area: Stats vs Chart panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stat Widgets Array */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {VITALS_METRICS.map((metric) => {
              const isSelected = selectedMetric === metric.id;
              return (
                <div
                  key={metric.id}
                  onClick={() => setSelectedMetric(metric.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                    isSelected
                      ? "bg-white border-brand-500 shadow-sm text-slate-900"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-350 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-brand-50 border border-brand-100 text-brand-705" : "bg-slate-50 border border-slate-100 text-brand-500"}`}>
                        {getMetricIcon(metric.id)}
                      </div>
                      <span className="font-mono text-[9px] text-slate-400">DATA_VETTED</span>
                    </div>
                    <div>
                      <h4 className="font-sans font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                        {metric.value}
                      </h4>
                      <p className="font-sans font-bold text-xs text-slate-700 tracking-tight mt-0.5">
                        {metric.label}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-500 text-[11px] mt-3 font-mono border-t border-slate-100 pt-2 leading-relaxed">
                    {metric.subtext}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-fidelity Corporate QA Trend Panel */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[380px] shadow-xs">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <LineChart className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 text-sm">Automated Scripting Scaling</h3>
                    <p className="text-slate-400 text-[11px] font-mono">Quarterly code-integration test scripts & browser automation units</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded font-mono text-[10px] text-emerald-750 font-bold uppercase">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-600" /> STABLE TRACK
                </div>
              </div>

              {/* Hand-crafted elegant SVG Trend Graph */}
              <div className="pt-6 relative">
                <div className="absolute right-4 top-2 bg-slate-55 border border-slate-200/60 rounded px-2.5 py-1 flex items-center gap-1 text-[10px] font-mono text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                  <span>Scripts Created</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 ml-2"></span>
                  <span>Passing Rate (99.4%)</span>
                </div>

                <svg viewBox="0 0 500 200" className="w-full h-auto overflow-visible mt-2">
                  {/* Grid Lines */}
                  <line x1="0" y1="180" x2="500" y2="180" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="0" y1="130" x2="500" y2="130" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="0" y1="30" x2="500" y2="30" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4" />

                  {/* Areas gradients */}
                  <defs>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Shaded Area */}
                  <path
                    d="M 10 170 Q 100 140 180 120 T 320 60 T 480 25 L 480 180 L 10 180 Z"
                    fill="url(#blueGrad)"
                  />

                  {/* Dynamic Curve lines */}
                  <path
                    d="M 10 170 Q 100 140 180 120 T 320 60 T 480 25"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M 10 175 Q 100 150 180 110 T 320 80 T 480 40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                    className="opacity-60"
                  />

                  {/* Circle Highlights */}
                  <circle cx="10" cy="170" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="130" cy="132" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="210" cy="115" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="340" cy="55" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="480" cy="25" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2.5" />

                  {/* Value Popups */}
                  <g transform="translate(435, 10)">
                    <rect width="45" height="15" rx="3.5" fill="#1e293b" />
                    <text x="7" y="11" fill="#fff" fontSize="9" fontFamily="monospace">350+</text>
                  </g>

                  {/* X-axis legends */}
                  <text x="10" y="196" fill="#94a3b8" fontSize="8" fontFamily="monospace">Q1-24</text>
                  <text x="130" y="196" fill="#94a3b8" fontSize="8" fontFamily="monospace">Q3-24</text>
                  <text x="210" y="196" fill="#94a3b8" fontSize="8" fontFamily="monospace">Q1-25</text>
                  <text x="340" y="196" fill="#94a3b8" fontSize="8" fontFamily="monospace">Q3-25</text>
                  <text x="445" y="196" fill="#64748b" fontSize="8" fontFamily="monospace" fontWeight="bold">Q1-26 (NOW)</text>
                </svg>
              </div>
            </div>

            {/* QA metrics confirmation footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
              <span>SECURITY TARGET REVISION: GP-BD-PR-V1.0</span>
              <span className="text-slate-500 font-bold">STABILITY FACTOR: 100% RELIABLE</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
