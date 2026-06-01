import React, { useState } from "react";
import { motion } from "motion/react";
import { SKILLS_LIST, TOOLS_LIST } from "../data";
import { ShieldAlert, Settings, Terminal, PenTool, Database, Bug, Gauge, Code2, ClipboardEdit, CheckCircle } from "lucide-react";

export default function SkillsToolsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Map specialized colors & icons for stunning chromatic variety
  const getSkillVisuals = (skillName: string) => {
    const lower = skillName.toLowerCase();
    if (lower.includes("automation")) {
      return {
        icon: <Settings className="h-5 w-5 text-indigo-400" />,
        badgeColor: "bg-indigo-950/40 border-indigo-500/20 text-indigo-300",
        pillColor: "text-indigo-400",
        hoverBorder: "hover:border-indigo-500/40 hover:shadow-indigo-500/5"
      };
    }
    if (lower.includes("load")) {
      return {
        icon: <Gauge className="h-5 w-5 text-amber-400" />,
        badgeColor: "bg-amber-950/40 border-amber-500/20 text-amber-300",
        pillColor: "text-amber-400",
        hoverBorder: "hover:border-amber-500/40 hover:shadow-amber-500/5"
      };
    }
    if (lower.includes("api")) {
      return {
        icon: <Code2 className="h-5 w-5 text-cyan-400" />,
        badgeColor: "bg-cyan-950/40 border-cyan-500/20 text-cyan-300",
        pillColor: "text-cyan-400",
        hoverBorder: "hover:border-cyan-500/40 hover:shadow-cyan-500/5"
      };
    }
    if (lower.includes("script")) {
      return {
        icon: <Terminal className="h-5 w-5 text-rose-400" />,
        badgeColor: "bg-rose-950/40 border-rose-500/20 text-rose-300",
        pillColor: "text-rose-400",
        hoverBorder: "hover:border-rose-500/40 hover:shadow-rose-500/5"
      };
    }
    if (lower.includes("test case") || lower.includes("bug report")) {
      return {
        icon: <ClipboardEdit className="h-5 w-5 text-purple-400" />,
        badgeColor: "bg-purple-950/40 border-purple-500/20 text-purple-300",
        pillColor: "text-purple-400",
        hoverBorder: "hover:border-purple-500/40 hover:shadow-purple-500/5"
      };
    }
    if (lower.includes("manual")) {
      return {
        icon: <Bug className="h-5 w-5 text-emerald-400" />,
        badgeColor: "bg-emerald-950/40 border-emerald-500/20 text-emerald-300",
        pillColor: "text-emerald-400",
        hoverBorder: "hover:border-emerald-500/40 hover:shadow-emerald-500/5"
      };
    }
    // Default fallback design parameters
    return {
      icon: <CheckCircle className="h-5 w-5 text-pink-400" />,
      badgeColor: "bg-pink-950/40 border-pink-500/20 text-pink-300",
      pillColor: "text-pink-400",
      hoverBorder: "hover:border-pink-500/40 hover:shadow-pink-500/5"
    };
  };

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
    <section id="skills-tools" className="py-24 bg-slate-900 border-b border-indigo-950 relative overflow-hidden mesh-gradient-violet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-black text-indigo-400 uppercase tracking-widest block mb-2">
            04 // COMPETENCY MATRIX &amp; ENGINEERING STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Technical Capabilities <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">&amp; Engineering Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A vibrant comprehensive catalog of testing methodologies, automated scripting engines, and enterprise workflow technologies utilized to secure operational products.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch font-sans">
          
          {/* Left Column: SQA Core Disciplines */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 bg-slate-950/40 backdrop-blur-md rounded-xl border border-indigo-500/10 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-indigo-400 tracking-wider font-extrabold">
                CORE QUALITY ASSURANCE COMPETENCIES
              </span>
              <span className="font-mono text-[9px] text-indigo-500 font-bold">VETTED CAPABILITIES CATALOG</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SKILLS_LIST.map((skill) => {
                const design = getSkillVisuals(skill);
                return (
                  <div
                    key={skill}
                    className={`p-5 rounded-xl bg-slate-950/60 border border-indigo-500/15 shadow-sm hover:bg-slate-950/90 hover:scale-[1.01] transition-all cursor-default flex flex-col justify-between group min-h-[145px] ${design.hoverBorder}`}
                  >
                    <div className="flex gap-3.5">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-indigo-500/10 shrink-0">
                        {design.icon}
                      </div>
                      <div>
                        <h4 className="font-sans font-extrabold text-white text-sm tracking-tight">
                          {skill}
                        </h4>
                        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-normal">
                          {getSkillContext(skill)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Visual simulated QA validation indicator */}
                    <div className="mt-4 pt-3 border-t border-indigo-950 flex items-center justify-between font-mono text-[10px] text-slate-500">
                      <span>DEPLOYMENT STATUS</span>
                      <span className={`font-black flex items-center gap-1 ${design.pillColor}`}>
                        <span className={`h-1.5 w-1.5 rounded-full bg-current animate-pulse`}></span>
                        STANDARD VERIFIED
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Orchestration Tools & Systems */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-950/50 backdrop-blur-md border border-indigo-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase text-pink-400 tracking-wider font-black block">
                  ORCHESTRATION &amp; CLOUD INFRASTRUCTURE
                </span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  The primary system applications used daily to organize reports, map regression blocks, track sprints, and synchronize repository check-ins.
                </p>
              </div>

              {/* Grid of Tools with detailed colorful hover dots */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {TOOLS_LIST.map((tool, index) => {
                  // Assign colorful rings
                  const colors = [
                    "bg-rose-500 group-hover:shadow-[0_0_8px_rgba(244,63,94,0.6)]",
                    "bg-indigo-500 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.6)]",
                    "bg-amber-500 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.6)]",
                    "bg-emerald-500 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.6)]",
                    "bg-cyan-500 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.6)]",
                    "bg-purple-500 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                  ];
                  const dotColor = colors[index % colors.length];

                  return (
                    <div
                      key={tool}
                      className="p-3 bg-slate-900 border border-indigo-500/10 hover:border-indigo-400/40 rounded-xl flex items-center gap-2.5 hover:bg-slate-950 hover:shadow-md transition-all select-none group cursor-pointer"
                    >
                      <div className={`h-2.5 w-2.5 rounded-full transition-all shrink-0 ${dotColor}`}></div>
                      <span className="font-mono text-xs text-slate-300 font-semibold group-hover:text-white transition-colors">
                        {tool}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Micro analytics badge */}
            <div className="mt-8 pt-6 border-t border-indigo-950">
              <div className="p-4 bg-slate-900/80 rounded-xl border border-indigo-500/10 flex items-center justify-between gap-4 shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-405">
                    <CheckCircle className="h-4.5 w-4.5 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-sans font-black text-white text-xs text-left">Systems Audit Status</h5>
                    <p className="text-slate-450 text-[10px] font-mono mt-0.5">Verification pipelines: PASSING</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] font-bold tracking-wider animate-pulse">
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
