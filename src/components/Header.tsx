import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Github, Menu, X, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";
import { ABOUT_ME } from "../data";

const menuItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills-tools" },
  { label: "Projects", id: "projects" },
  { label: "Publications", id: "publications" },
  { label: "Awards", id: "honors-awards" },
  { label: "Vitals", id: "vitals-analytics" },
  { label: "QA Sandbox", id: "qa-playground" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isManualScroll = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Monitor scrolling to highlight active menu item and trigger navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isManualScroll.current) return;

      // Check if near the very bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const headerOffset = 120; // 80px header + 40px threshold buffer
      let currentSection = "";

      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom > headerOffset) {
            currentSection = item.id;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    isManualScroll.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    scrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 850);
  };

  return (
    <>
      {/* Dynamic colorful ribbon announcement bar */}
      <div className="bg-slate-950 text-indigo-200 text-[10px] py-1.5 px-4 font-mono flex items-center justify-center border-b border-indigo-950 tracking-wider uppercase select-none relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 via-pink-950/25 to-amber-950/20 pointer-events-none"></div>
        <div className="flex items-center gap-2 relative z-10">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-pink-500 animate-pulse"></span>
          <span className="font-black text-indigo-300">SYSTEM AUDIENCED:</span>
          <span className="text-slate-400">LIABILITY PASSED • CONTINUOUS WORKFLOW ACTIVE</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-slate-950/85 backdrop-blur-xl border-b border-indigo-950/60`}
      >
        {/* RGB neon flow line running across bottom of header */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 shadow-[0_1px_3px_rgba(99,102,241,0.25)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            
            {/* Corporate Logo with gradient glass design */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection("about")}>
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-650 to-pink-500 flex items-center justify-center text-white shadow-lg border border-indigo-400/50 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="h-5 w-5 text-white animate-pulse" />
              </div>
              <div className="hidden sm:block text-left">
                <span className="font-sans font-black text-[13px] tracking-wider block text-white leading-none">
                  TAHSIN AHMED QA
                </span>
                <span className="font-mono text-[8px] tracking-widest text-indigo-400 block mt-1 uppercase font-bold">
                  SOFTWARE QUALITY SYSTEMS ADVISORY
                </span>
              </div>
              <div className="sm:hidden text-left">
                <span className="font-sans font-black text-xs tracking-wider block text-white">
                  TAHSIN AHMED QA
                </span>
              </div>
            </div>

            {/* Desktop Navigation Link Array */}
            <nav className="hidden xl:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2.5 py-1.5 rounded-md text-[11px] font-black tracking-normal uppercase transition-all relative cursor-pointer ${
                    activeSection === item.id
                      ? "text-indigo-200"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1 font-sans">
                    <span className="text-[9px] font-mono font-black text-indigo-400">{(index + 1).toString().padStart(2, "0")}</span>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-indigo-950/80 border border-indigo-500/35 rounded-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* External Links / Social Actions */}
            <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-indigo-950">
              <a
                href={ABOUT_ME.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-slate-200 hover:text-indigo-400 transition-colors p-2 rounded-md hover:bg-slate-900"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={ABOUT_ME.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-slate-200 hover:text-white transition-colors p-2 rounded-md hover:bg-slate-900"
                title="GitHub Repositories"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile / Compact Tabletop controls */}
            <div className="flex xl:hidden items-center gap-2">
              <a
                href={ABOUT_ME.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-slate-200 hover:text-indigo-400 p-2 rounded-md hover:bg-slate-900 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={ABOUT_ME.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-slate-200 hover:text-white p-2 rounded-md hover:bg-slate-900 transition-colors"
                title="GitHub Repositories"
              >
                <Github className="h-5 w-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-200 hover:text-white p-2 hover:bg-slate-900 rounded-md transition-colors"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden border-t border-indigo-950/65 bg-slate-950/95 backdrop-blur-xl overflow-hidden shadow-2xl"
            >
              <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                <div className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest px-3 mb-2 font-black">
                  System Navigation Grid
                </div>
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase flex items-center transition-all cursor-pointer ${
                      activeSection === item.id
                        ? "bg-indigo-950 text-indigo-300 border-l-4 border-indigo-500 font-bold"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-indigo-400 mr-2 w-5 font-bold">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
