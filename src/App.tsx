import { useState } from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsToolsSection from "./components/SkillsToolsSection";
import ProjectsSection from "./components/ProjectsSection";
import PublicationsSection from "./components/PublicationsSection";
import HonorsAwardsSection from "./components/HonorsAwardsSection";
import VitalsAnalyticsSection from "./components/VitalsAnalyticsSection";
import QaPlayground from "./components/QaPlayground";
import ContactSection from "./components/ContactSection";
import { ABOUT_ME } from "./data";
import { ShieldCheck, ArrowUpRight, X, Shield, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-brand-500/10 selection:text-brand-800">
      
      {/* Top Floating Header & Nav Ribbon */}
      <Header />

      {/* Main Corporate Workspace */}
      <main className="flex-1">
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsToolsSection />
        <ProjectsSection />
        <PublicationsSection />
        <HonorsAwardsSection />
        <VitalsAnalyticsSection />
        <QaPlayground />
        <ContactSection />
      </main>

      {/* Corporate SQA Systems Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-8 text-xs font-mono relative qa-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 pb-12 border-b border-slate-900">
            
            {/* Column 1: Brand details */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded bg-brand-600 flex items-center justify-center text-white border border-brand-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="font-sans font-extrabold text-sm tracking-tight text-white">
                  TAHSIN AHMED QA
                </span>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed max-w-sm font-light">
                Secure and highly compliant digital quality systems bridging computer science theoretical benchmarks with agile corporate business strategy.
              </p>
            </div>

            {/* Column 2: Contact coordinates */}
            <div className="space-y-3">
              <span className="text-[10px] text-brand-400 font-bold uppercase tracking-widest block font-sans">
                Coordinates
              </span>
              <ul className="space-y-2 text-slate-400 list-none m-0 p-0">
                <li>Tel: {ABOUT_ME.contact.phone}</li>
                <li>Email: {ABOUT_ME.contact.email}</li>
                <li>Hq: Dhaka, Bangladesh</li>
              </ul>
            </div>

          </div>

          {/* Copyright Bottom row */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-[10px]">
            <div>
              &copy; 2026 Tahsin Ahmed. All operations monitored by SQA automated assertion suites.
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 font-sans">
              <button 
                onClick={() => setShowPrivacy(true)}
                className="hover:text-white transition-colors cursor-pointer font-semibold underline underline-offset-2"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button 
                onClick={() => setShowTerms(true)}
                className="hover:text-white transition-colors cursor-pointer font-semibold underline underline-offset-2"
              >
                Terms & Conditions
              </button>
              <span>•</span>
              <span>ISO 9001 COMPLIANT</span>
              <span>•</span>
              <span>VERIFIED GITHUB EXPORT</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacy(false)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs"
            />
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative z-10 text-left font-sans text-slate-705 max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setShowPrivacy(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-5">
                <div className="h-10 w-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Privacy Policy</h3>
                  <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-0.5">SQA SYSTEMS COMPLIANCE SECURITY</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider mb-1">1. User Data Security</h4>
                  <p>
                    We strictly uphold regional and international secure user and client directory practices. Standard portfolio data, manual test sandbox interactions, and simulated logs are processed strictly in-client and never cached or indexed.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider mb-1">2. Endpoint Tracking</h4>
                  <p>
                    There are no persistent surveillance cookies, analytical tracking packages, or remote database triggers operating on user visits on this sandbox dashboard. All session diagnostics are dynamic.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider mb-1">3. Automated Defect Storage</h4>
                  <p>
                    Forms and details filled inside this terminal (e.g. SQA Playground bug reporting and security dispatcher) operate localized transmissions. Your email and correspondence coordinates are private and processed only for secure outreach.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="px-5 py-2.5 bg-brand-605 hover:bg-brand-700 active:bg-brand-800 text-white font-mono font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Confirm Compliance
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terms & Conditions Modal */}
      <AnimatePresence>
        {showTerms && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTerms(false)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs"
            />
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative z-10 text-left font-sans text-slate-705 max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setShowTerms(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-5">
                <div className="h-10 w-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Terms & Conditions</h3>
                  <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-0.5">GOVERNANCE & USAGE PROTOCOLS</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider mb-1">1. Sandbox Agreement</h4>
                  <p>
                    All tools, logs, and simulations hosted within the "Interactive Quality Assurance Sandbox" are provided for technical demonstration and validation purposes. No actual production ticket transactions occur.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider mb-1">2. SLA & Verification Standards</h4>
                  <p>
                    Automated assertion suites represent real-world SQA paradigms (Cypress, Playwright, K6). Output results are simulated models showcasing system capacity thresholds under controlled test parameters.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider mb-1">3. Technical Ownership</h4>
                  <p>
                    All static assets, research publications, and custom automation scripts remain the intellectual design properties of S. M. Tahsin Ahmed. Peer-reviewed journal publications are indexed and subject to respective publisher terms.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setShowTerms(false)}
                  className="px-5 py-2.5 bg-brand-605 hover:bg-brand-700 active:bg-brand-800 text-white font-mono font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Accept Terms
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
