import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bug, Play, Terminal, Zap, ShieldAlert, Cpu, RefreshCw, Layers, CheckCircle, Flame, ArrowRight, Clipboard } from "lucide-react";

type ActiveTab = "bug-hunt" | "assertion-editor" | "load-simulation";

export default function QaPlayground() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("bug-hunt");

  // State for Bug Hunt
  const [foundBugs, setFoundBugs] = useState<string[]>([]);
  const [activeReportBug, setActiveReportBug] = useState<any | null>(null);

  // State for Code Assertion Simulator
  const [selectedScript, setSelectedScript] = useState<string>("cypress-bdtickets");
  const [runLogs, setRunLogs] = useState<string[]>([]);
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testSuccess, setTestSuccess] = useState<boolean | null>(null);

  // State for Load Testing Sim
  const [virtualUsers, setVirtualUsers] = useState<number>(500);
  const [latencyMills, setLatencyMills] = useState<number>(180);
  const [errorRatePercent, setErrorRatePercent] = useState<number>(0);
  const [serverLoadState, setServerLoadState] = useState<"HEALTHY" | "DEGRADED" | "CRITICAL">("HEALTHY");

  // Bug details dictionary for Bug Hunt
  const bdticketsBugs = [
    {
      id: "coupon_math_overflow",
      element: "Promo Coupon Bad Arithmetic",
      label: "Promo calculations are returning incorrect fractions, enabling a negative checkout balance.",
      severity: "CRITICAL",
      reproduction: "1. Select Ticket Dhaka -> Chittagong.\n2. Apply coupon code 'WINTER50'.\n3. View final grand total balance.",
      expected: "10% deduction applied properly ($50 deduction on $500 seat).",
      actual: "Double deduction applied sequentially ($500 balance reduced to -$150)."
    },
    {
      id: "cutoff_truncated_username",
      element: "Profile Card Content Overflow",
      label: "Passenger names exceeding 18 characters are cut off and crash the ticket generation server.",
      severity: "MEDIUM",
      reproduction: "1. Create user profile named 'S. M. Tahsin Ahmed Chowdhury'.\n2. Click 'Download PDF Ticket'.",
      expected: "Layout wraps or auto-truncates gracefully with ellipsis.",
      actual: "Layout container overflows, PDF text overlaps block headers."
    },
    {
      id: "invalid_passenger_payload",
      element: "Quantity Field Boundary Fail",
      label: "Quantity field accepts negative numbers (-5) and crashes checkout payload.",
      severity: "HIGH",
      reproduction: "1. Add a seat ticket to basket.\n2. Write '-5' inside seat counter inputs manually.",
      expected: "Field restricts input block to positive integers >= 1.",
      actual: "System proceeds to gateway and crashes on DB schema checks."
    }
  ];

  const handleBugClick = (bugId: string) => {
    if (!foundBugs.includes(bugId)) {
      setFoundBugs([...foundBugs, bugId]);
    }
    const bug = bdticketsBugs.find((b) => b.id === bugId);
    if (bug) setActiveReportBug(bug);
  };

  const resetBugHunt = () => {
    setFoundBugs([]);
    setActiveReportBug(null);
  };

  // Run Assertions Simulator
  const scriptsCatalog = {
    "cypress-bdtickets": {
      framework: "Cypress V13",
      target: "bdtickets.com.bd",
      code: `describe('BDTickets Payment Flow Integration', () => {
  it('Validates checkout pricing equations matches DB schema', () => {
    cy.visit('/checkout?id=GP-9421');
    cy.get('[data-qa="seat-charge"]').should('be.visible');
    cy.get('[data-qa="promo-field"]').type('TAHSIN_QA_PRO');
    cy.get('[data-qa="apply-btn"]').click();
    
    // Core SQA Assertion
    cy.get('[data-qa="discount-value"]').then(($discount) => {
      const value = parseFloat($discount.text().replace('$', ''));
      expect(value).to.be.greaterThan(0);
    });
    
    cy.get('[data-qa="net-amount"]').should('contain', '$450.00');
    cy.get('[data-qa="checkout-btn"]').click();
    cy.url().should('include', '/gateway/complete');
  });
});`
    },
    "playwright-lunchbd": {
      framework: "Playwright Core",
      target: "lunchbd.com",
      code: `import { test, expect } from '@playwright/test';

test('Verify subscription calendar locks after cutoff', async ({ page }) => {
  await page.goto('https://lunchbd.com/dashboard');
  await page.fill('#user-email', 'tahsin@bluetech.solutions');
  await page.click('#submit-auth');
  
  // SQA Boundary Assertions
  const selectBox = page.locator('#meal-slot-31');
  await expect(selectBox).toBeDisabled();
  
  // Capture snapshot verification
  await expect(page.locator('.lock-badge')).toBeVisible();
  await page.screenshot({ path: 'lock-verification-stage.png' });
});`
    }
  };

  const executeAutoscript = () => {
    setIsRunningTests(true);
    setTestSuccess(null);
    setRunLogs([]);

    const script = scriptsCatalog[selectedScript as keyof typeof scriptsCatalog];
    const logBatch = [
      `[QA ENGINE] Initializing secure Chromium instance for target: ${script.target}...`,
      `[SYSTEM] Invoking ${script.framework} compilation headers...`,
      `[TEST RUNNER] Launching spec script: spec.cy.ts`,
      `[CHROME] Navigating to verified endpoint...`,
      `[LOG] Element [data-qa="seat-charge"] verified as visible.`,
      `[LOG] Submitting coupon assertions and validating input elements...`,
      `[ASSERTION] expect(value).to.be.greaterThan(0); -> SUCCESS (Value: $50.00)`,
      `[LOG] Simulating human checkout gesture click...`,
      `[STAGE] API Schema payload confirmed matches server configuration.`,
      `[TEST RUNNER] Spec finished. Elapsed time: 1.48s`
    ];

    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < logBatch.length) {
        setRunLogs((prev) => [...prev, logBatch[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        setIsRunningTests(false);
        setTestSuccess(true);
      }
    }, 280);
  };

  // Adjust Load simulated metrics depending on Virtual User volume
  useEffect(() => {
    let latency = 50 + Math.floor(virtualUsers * 0.15);
    if (virtualUsers > 3500) {
      latency = 50 + Math.floor(virtualUsers * 0.45);
    }
    let errorRate = 0;
    if (virtualUsers > 2005) {
      errorRate = Math.floor((virtualUsers - 2000) * 0.015);
    }
    setLatencyMills(latency);
    setErrorRatePercent(errorRate);

    if (virtualUsers <= 1800) {
      setServerLoadState("HEALTHY");
    } else if (virtualUsers <= 3800) {
      setServerLoadState("DEGRADED");
    } else {
      setServerLoadState("CRITICAL");
    }
  }, [virtualUsers]);

  return (
    <section id="qa-playground" className="py-24 bg-white relative overflow-hidden qa-grid border-b border-slate-200">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2">
            09 // INTERACTIVE SYSTEMS SIMULATORS & SANDBOX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Interactive Quality Assurance Sandbox
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 font-sans">
            Experience our SQA workflows hands-on. Toggle between live-testing engines to capture UI defects, compile automated code assertions, or stress network capacities.
          </p>
        </div>

        {/* Tab Selector Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 font-sans">
          <button
            onClick={() => setActiveTab("bug-hunt")}
            className={`px-5 py-3 rounded-xl border font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === "bug-hunt"
                ? "bg-brand-600 border-brand-500 text-white shadow-sm"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Bug className="h-4.5 w-4.5" />
            01. Spot UI Defects (Manual Bug Hunt)
          </button>

          <button
            onClick={() => setActiveTab("assertion-editor")}
            className={`px-5 py-3 rounded-xl border font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === "assertion-editor"
                ? "bg-brand-600 border-brand-500 text-white shadow-sm"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Terminal className="h-4.5 w-4.5" />
            02. Automated Assertions Compiler
          </button>

          <button
            onClick={() => setActiveTab("load-simulation")}
            className={`px-5 py-3 rounded-xl border font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all cursor-pointer ${
              activeTab === "load-simulation"
                ? "bg-brand-600 border-brand-500 text-white shadow-sm"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Zap className="h-4.5 w-4.5" />
            03. K6 Load Stress Engine
          </button>
        </div>

        {/* Interactive Workspace Containers */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs min-h-[500px]">
          
          {/* TAB 1: BUG HUNT */}
          {activeTab === "bug-hunt" && (
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Mock bdtickets checkouts interfaces */}
              <div className="lg:col-span-7 space-y-6 bg-white p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-mono text-[10px] text-brand-600 font-bold uppercase tracking-wider block">
                    MOCK TARGET SCREEN: BDTICKETS CHECKOUT
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="font-mono text-[9px] text-slate-400">CLIENT RESOLVER READY</span>
                  </div>
                </div>

                <div className="space-y-4 font-sans text-left">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                    <h4 className="text-xs font-bold text-slate-800">Route Selection</h4>
                    <div className="grid grid-cols-2 gap-3 mt-2 text-xs text-slate-650">
                      <div className="bg-white p-2.5 rounded border border-slate-200">Dhaka Departure</div>
                      <div className="bg-white p-2.5 rounded border border-brand-500 font-bold text-brand-700">Chittagong Arrival</div>
                    </div>
                  </div>

                  {/* BUG #1 BUTTON ARTIFACT */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold text-slate-800 block">Promo Coupon Group</label>
                        <span className="text-[9px] font-mono text-slate-400 font-bold">WINTER50</span>
                      </div>
                      <button
                        onClick={() => handleBugClick("coupon_math_overflow")}
                        className={`w-full text-left py-2.5 px-3 rounded font-mono text-xs border flex items-center justify-between transition-all group cursor-pointer ${
                          foundBugs.includes("coupon_math_overflow")
                            ? "bg-rose-50 border-rose-300 text-rose-700 font-bold"
                            : "bg-white border-slate-200 hover:border-brand-500 text-slate-600 hover:text-brand-700"
                        }`}
                      >
                        <span>Grand Balance: -$150.00</span>
                        {foundBugs.includes("coupon_math_overflow") ? (
                          <span className="px-1.5 py-0.5 rounded bg-rose-600 text-[8px] text-white font-bold h-fit shrink-0">BUG FOUND</span>
                        ) : (
                          <span className="text-[10px] text-slate-400 group-hover:text-brand-600 font-bold">INSPECT</span>
                        )}
                      </button>
                    </div>

                    {/* BUG #2 BUTTON ARTIFACT */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                      <label className="text-xs font-bold text-slate-800 block mb-1">Passenger Details</label>
                      <button
                        onClick={() => handleBugClick("cutoff_truncated_username")}
                        className={`w-full text-left py-2.5 px-3 rounded font-mono text-xs border flex items-center justify-between transition-all group cursor-pointer ${
                          foundBugs.includes("cutoff_truncated_username")
                            ? "bg-rose-50 border-rose-300 text-rose-700 font-bold"
                            : "bg-white border-slate-200 hover:border-brand-500 text-slate-600 hover:text-brand-700"
                        }`}
                      >
                        <span className="truncate max-w-[140px]">S. M. Tahsin Ahmed Chowdhury</span>
                        {foundBugs.includes("cutoff_truncated_username") ? (
                          <span className="px-1.5 py-0.5 rounded bg-rose-600 text-[8px] text-white font-bold h-fit shrink-0">BUG FOUND</span>
                        ) : (
                          <span className="text-[10px] text-slate-400 group-hover:text-brand-600 font-bold">INSPECT</span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* BUG #3 BUTTON ARTIFACT */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-slate-800 block">Seat Ticket Counter</label>
                      <span className="text-[9px] font-mono text-slate-400">MANUAL OVERRIDE CHECK</span>
                    </div>
                    <button
                      onClick={() => handleBugClick("invalid_passenger_payload")}
                      className={`w-full text-left py-2.5 px-3 rounded font-mono text-xs border flex items-center justify-between transition-all group cursor-pointer ${
                        foundBugs.includes("invalid_passenger_payload")
                          ? "bg-rose-50 border-rose-300 text-rose-700 font-bold"
                          : "bg-white border-slate-200 hover:border-brand-500 text-slate-600 hover:text-brand-700"
                      }`}
                    >
                      <span>Selected Count: -5</span>
                      {foundBugs.includes("invalid_passenger_payload") ? (
                        <span className="px-1.5 py-0.5 rounded bg-rose-600 text-[8px] text-white font-bold h-fit shrink-0">BUG FOUND</span>
                      ) : (
                        <span className="text-[10px] text-slate-400 group-hover:text-brand-600 font-bold">INSPECT</span>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center font-sans">
                  <span className="text-slate-600 text-xs text-left">
                    Found BUGS: <strong className="text-slate-900 font-bold">{foundBugs.length} of 3</strong> hidden defects logged.
                  </span>
                  {foundBugs.length > 0 && (
                    <button
                      onClick={resetBugHunt}
                      className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-mono rounded-lg transition-colors cursor-pointer"
                    >
                      Reset Sim
                    </button>
                  )}
                </div>
              </div>

              {/* Right Side: Generated JIRA Ticket report preview */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 min-h-[420px] flex flex-col justify-between relative shadow-xs">
                
                <AnimatePresence mode="wait">
                  {activeReportBug ? (
                    <motion.div
                      key={activeReportBug.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-4 flex-1 h-full text-left"
                    >
                      {/* JIRA Ticket Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="font-mono text-xs font-bold text-brand-700">JIRA-TICKET // TA-4012</span>
                        <span className={`px-2.5 py-0.5 font-mono text-[9px] rounded font-bold uppercase ${
                          activeReportBug.severity === "CRITICAL"
                            ? "bg-rose-100 border border-rose-200 text-rose-700 animate-pulse"
                            : activeReportBug.severity === "HIGH"
                            ? "bg-orange-100 border border-orange-200 text-orange-750"
                            : "bg-amber-100 border border-amber-200 text-amber-850"
                        }`}>
                          SEVERITY: {activeReportBug.severity}
                        </span>
                      </div>

                      <div className="space-y-3 font-sans">
                        <div>
                          <label className="text-[10px] font-mono font-bold text-slate-400 block">BUG SUMMARY TITLE</label>
                          <div className="text-sm font-bold text-slate-900 mt-1 select-all">{activeReportBug.element}</div>
                        </div>

                        <div>
                          <label className="text-[10px] font-mono font-bold text-slate-400 block">REPRODUCTION SEQUENCES</label>
                          <pre className="text-xs bg-slate-50 p-3 rounded font-mono text-slate-650 border border-slate-200 leading-relaxed font-normal mt-1 whitespace-pre-wrap">
                            {activeReportBug.reproduction}
                          </pre>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] font-mono font-bold text-slate-400 block">EXPECTED ACTION</label>
                            <p className="text-xs text-emerald-700 font-semibold mt-1 leading-relaxed">{activeReportBug.expected}</p>
                          </div>
                          <div>
                            <label className="text-[10px] font-mono font-bold text-slate-400 block">ACTUAL SYSTEM FAILURE</label>
                            <p className="text-xs text-rose-700 font-semibold mt-1 leading-relaxed">{activeReportBug.actual}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center py-20 flex-1 space-y-4">
                      <div className="h-14 w-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-200/85">
                        <Clipboard className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-slate-800 text-sm font-bold">QA Automated Defect Reporter</h4>
                        <p className="text-slate-400 text-xs mt-1.5 max-w-[240px] leading-relaxed mx-auto">
                          Click on any identified "BUG REGISTER" element in the mock target ui to generate a formal clean issue ticket summary automatically.
                        </p>
                      </div>
                    </div>
                  )}
                </AnimatePresence>

                {/* Secure certificate flag */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[9px] text-slate-400 mt-4">
                  <span>SYSTEM REPORTER: TAHSIN_AHMED_SQA</span>
                  <span>CHECKSUM SECURE: PASS</span>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: AUTOMATED ASSERTION ENGINE */}
          {activeTab === "assertion-editor" && (
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Side: Code block display */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4 bg-white p-6 rounded-2xl border border-slate-200 text-left">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <select
                        value={selectedScript}
                        onChange={(e) => {
                          setSelectedScript(e.target.value);
                          setRunLogs([]);
                          setTestSuccess(null);
                        }}
                        className="bg-slate-50 border border-slate-200 text-xs font-mono rounded-lg px-3 py-1.5 text-slate-700 focus:outline-none focus:border-brand-500 cursor-pointer"
                      >
                        <option value="cypress-bdtickets">cypress-bdtickets.cy.ts</option>
                        <option value="playwright-lunchbd">playwright-launcher.spec.ts</option>
                      </select>
                    </div>
                    <span className="font-mono text-[9px] text-slate-400">SQA COMPILER LABS</span>
                  </div>

                  {/* Highlighting text block */}
                  <pre className="text-[11px] sm:text-xs bg-slate-50 p-4 rounded-xl font-mono text-slate-800 overflow-x-auto border border-slate-200 leading-relaxed max-h-[290px]">
                    <code>{scriptsCatalog[selectedScript as keyof typeof scriptsCatalog].code}</code>
                  </pre>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-sans">
                  <span className="font-mono text-[10px] text-slate-400">EMULATED HEADLESS BROWSER RUNNER</span>
                  <button
                    onClick={executeAutoscript}
                    disabled={isRunningTests}
                    className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 disabled:bg-slate-200 disabled:text-slate-400 text-xs font-mono font-bold text-white rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    {isRunningTests ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4 fill-white text-white" />}
                    Compile & Execute
                  </button>
                </div>
              </div>

              {/* Right Side: Sim Live Terminal Console logs */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] text-left shadow-xs">
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-sans">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-bold block">
                      CLI COMPILE OUTPUT
                    </span>
                    <span className="font-mono text-[9px] text-slate-400">STDOUT</span>
                  </div>

                  <div className="space-y-2 font-mono text-[11px] text-slate-755 max-h-[280px] overflow-y-auto bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {runLogs.length > 0 ? (
                      runLogs.map((log, i) => (
                        <div key={i} className="leading-relaxed">
                          <span className="text-slate-400 mr-2 opacity-50">#{(i + 1).toString().padStart(2, "0")}</span>
                          <span className={log.includes("SUCCESS") ? "text-emerald-700 font-bold" : log.includes("Initializing") ? "text-brand-600 font-semibold" : "text-slate-700"}>
                            {log}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-slate-400 text-center py-20 text-xs">
                        {"$ idle --waiting-for-spec; compliance outputs ready to fire."}
                      </div>
                    )}
                  </div>
                </div>

                {/* Status validation result card */}
                {testSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3.5 mt-4"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                    <div className="text-left font-sans">
                      <h5 className="font-sans font-bold text-emerald-800 text-xs">Assertions: ALL COMPLY BY SLA</h5>
                      <p className="text-emerald-750 text-[10px] font-mono mt-0.5">Specifications completed with 0 exceptions.</p>
                    </div>
                  </motion.div>
                )}

              </div>

            </div>
          )}

          {/* TAB 3: LOAD SIMULATOR */}
          {activeTab === "load-simulation" && (
            <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
              
              {/* Left Side: Stress levers and meters */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-slate-900 font-sans font-bold text-sm">Crank Simulated Virtual Users (VUs)</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    Slide the scale below to increase client concurrency demands on corporate host and core api servers, testing structural resilience.
                  </p>
                </div>

                {/* Concurrency slider */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-400">THREADS LIMIT</span>
                    <strong className="text-slate-900 text-base font-bold select-all">{virtualUsers} VUs</strong>
                  </div>

                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={virtualUsers}
                    onChange={(e) => setVirtualUsers(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 border border-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />

                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>100 VUs (Nominal)</span>
                    <span>2500 VUs</span>
                    <span>5000 VUs (Stress Limit)</span>
                  </div>
                </div>

                {/* Interactive dials response */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-400 block">SYSTEM RESPONSE TIMEOUT</span>
                    <strong className={`font-mono text-2xl font-black block mt-1.5 ${
                      serverLoadState === "CRITICAL" ? "text-rose-600 animate-pulse" : serverLoadState === "DEGRADED" ? "text-amber-600" : "text-emerald-600"
                    }`}>
                      {latencyMills} ms
                    </strong>
                    <span className="text-[9px] font-mono text-slate-400">95th Percentile bound</span>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-400 block">FAILURE RATE</span>
                    <strong className={`font-mono text-2xl font-black block mt-1.5 ${
                      errorRatePercent > 0 ? "text-rose-600 animate-pulse" : "text-emerald-600"
                    }`}>
                      {errorRatePercent}%
                    </strong>
                    <span className="text-[9px] font-mono text-slate-400">Payload exceptions</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Virtual server health warning card */}
              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 min-h-[352px] flex flex-col justify-between relative overflow-hidden shadow-xs">
                
                {/* Visual warning border under critical stress */}
                {serverLoadState === "CRITICAL" && (
                  <div className="absolute inset-0 bg-rose-50/40 pointer-events-none border border-rose-400 transition-all"></div>
                )}

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                      K6 INSTANCE SIM REPORT
                    </span>
                    <span className={`px-2.5 py-0.5 rounded font-mono text-[9px] font-bold ${
                      serverLoadState === "HEALTHY"
                        ? "bg-emerald-50 border border-emerald-150 text-emerald-800"
                        : serverLoadState === "DEGRADED"
                        ? "bg-amber-50 border border-amber-150 text-amber-800 animate-pulse"
                        : "bg-rose-100 border border-rose-200 text-rose-850"
                    }`}>
                      SERVER_{serverLoadState}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {serverLoadState === "HEALTHY" ? (
                      <div className="space-y-3 font-sans">
                        <div className="h-10 w-10 text-emerald-600 bg-emerald-50 border border-emerald-105 rounded-xl flex items-center justify-center">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">System Nominal and Responsive</h4>
                        <p className="text-slate-505 text-xs leading-relaxed font-normal">
                          Current throughput handles transactional database operations comfortably, complying with strict SLA response terms (latency &lt; 200ms).
                        </p>
                      </div>
                    ) : serverLoadState === "DEGRADED" ? (
                      <div className="space-y-3 font-sans">
                        <div className="h-10 w-10 text-amber-600 bg-amber-50 border border-amber-105 rounded-xl flex items-center justify-center animate-pulse">
                          <ShieldAlert className="h-5 w-5" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">Resource degradation warnings flagged</h4>
                        <p className="text-slate-505 text-xs leading-relaxed font-normal">
                          Throughput curves reveal API latency rising due to excessive memory allocations and CPU queues. Recommending thread-pool allocation review.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3 font-sans">
                        <div className="h-10 w-10 text-rose-600 bg-rose-50 border border-rose-105 rounded-xl flex items-center justify-center">
                          <Flame className="h-5 w-5 fill-rose-600 text-rose-600" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">Fatal Stress Limits Exceeded</h4>
                        <p className="text-slate-505 text-xs leading-relaxed font-normal">
                          K6 reports <strong>{errorRatePercent}% HTTP 500</strong> failures as memory stack allocations overflow. Host throttling activated to prevent broad systemic outage.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-slate-400 font-mono text-[9px] flex items-center justify-between">
                  <span>METRIC STANDARD: ISO-9001 COMPLIANT</span>
                  <span>STRESS CODES: ST-{virtualUsers > 3804 ? "900" : "001"}</span>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
