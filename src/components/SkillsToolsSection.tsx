import React, { useState } from "react";
import { motion } from "motion/react";
import { SKILLS_LIST, TOOLS_LIST } from "../data";
import { ShieldAlert, Settings, Terminal, PenTool, Database, Bug, Gauge, Code2, ClipboardEdit, CheckCircle } from "lucide-react";

export default function SkillsToolsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Map specialized icons for visual representation
  const getSkillIcon = (skillName: string) => {
    const lower = skillName.toLowerCase();
    if (lower.includes("automation")) return <Settings className="h-5 w-5 text-brand-600" />;
    if (lower.includes("load")) return <Gauge className="h-5 w-5 text-amber-600" />;
    if (lower.includes("api")) return <Code2 className="h-5 w-5 text-sky-600" />;
    if (lower.includes("script")) return <Terminal className="h-5 w-5 text-emerald-600" />;
    if (lower.includes("test case") || lower.includes("bug report")) return <ClipboardEdit className="h-5 w-5 text-purple-600" />;
    return <Bug className="h-5 w-5 text-rose-600" />;
  };

  // Provide realistic SQA context explanations for his skills to highlight technical mastery
  const getSkillContext = (skillName: string) => {
    const lower = skillName.toLowerCase();
    if (lower.includes("manual testing")) return "Heuristic bug-finding, functional requirement mappings, regression runs, user experience flows.";
    if (lower.includes("automation testing")) return "End-to-end framework assembly, async-aware custom locator mappings, continuous integration pipelines.";
    if (lower.includes("load testing")) return "Stress bounds analysis, throughput tracking, latency degradation profiles, virtual runner setups.";
    if (lower.includes("api testing")) return "JSON schema contract reviews, secure cookie assertions, response code, and latency checks.";
    if (lower.includes("script writing")) return "Writing stable Cypress hooks, Playwright asynchronous actions, and automated page controllers.";
    if (lower.includes("test case")) return "Exhaustive positive, negative, and field boundary scenarios structured with state conditions.";
    return "Ad-hoc bug exploration, security permission checks, layout verification, and sprint reports.";
  };

  return (
    <section id="skills-tools" className="py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2">
            04 // COMPETENCY MATRIX & PLATFORM INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Technical Capabilities & Engineering Stack
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            A comprehensive catalog of testing methodologies, automated scripting engines, and enterprise workflow technologies utilized to secure operational products.
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch font-sans">
          
          {/* Left Column: SQA Core Disciplines */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-slate-600 tracking-wider font-bold">
                CORE QUALITY ASSURANCE COMPETENCIES
              </span>
              <span className="font-mono text-[9px] text-slate-400">QUALIFIED CAPABILITIES REPRESENTED</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SKILLS_LIST.map((skill) => {
                return (
                  <div
                    key={skill}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-sm hover:border-brand-200 transition-all cursor-default flex flex-col justify-between group min-h-[140px]"
                  >
                    <div className="flex gap-3.5">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-brand-50 transition-colors shrink-0">
                        {getSkillIcon(skill)}
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-slate-900 text-sm tracking-tight">
                          {skill}
                        </h4>
                        <p className="text-slate-505 text-xs mt-1.5 leading-relaxed font-normal">
                          {getSkillContext(skill)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Visual simulated QA validation indicator */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] text-slate-400">
                      <span>DEPLOYMENT STATUS</span>
                      <span className="font-bold text-brand-600 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-600 animate-pulse"></span>
                        STANDARD VERIFIED
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Orchestration Tools & Systems */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xs">
            
            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-brand-600 tracking-wider font-bold block">
                  ORCHESTRATION & CLOUD INFRASTRUCTURE
                </span>
                <p className="text-slate-500 text-xs">
                  The primary system applications used daily to organize reports, map regression blocks, track sprints, and synchronize repository check-ins.
                </p>
              </div>

              {/* Grid of Tools with detailed icons */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {TOOLS_LIST.map((tool) => (
                  <div
                    key={tool}
                    className="p-3 bg-white border border-slate-200/60 rounded-xl flex items-center gap-2.5 hover:bg-white hover:border-brand-400 hover:shadow-2xs transition-all select-none group"
                  >
                    <div className="h-2 w-2 rounded-full bg-brand-500/70 group-hover:bg-brand-500 group-hover:scale-110 transition-all shrink-0"></div>
                    <span className="font-mono text-xs text-slate-650 font-semibold group-hover:text-slate-900 transition-colors">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro analytics badge */}
            <div className="mt-8 pt-6 border-t border-slate-200 relative z-10">
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-slate-800 text-xs text-left">Systems Audit Status</h5>
                    <p className="text-slate-400 text-[10px] font-mono mt-0.5">Verification pipelines: PASSING</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[9px] font-bold tracking-wider">
                  HEALTH_CONFIRMED
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
