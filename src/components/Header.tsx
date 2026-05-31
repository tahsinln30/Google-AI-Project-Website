import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Github, Menu, X, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";
import { ABOUT_ME } from "../data";

const menuItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Skills & Tools", id: "skills-tools" },
  { label: "Projects", id: "projects" },
  { label: "Publications", id: "publications" },
  { label: "Honors & Awards", id: "honors-awards" },
  { label: "Vitals & Analytics", id: "vitals-analytics" },
  { label: "QA Playground", id: "qa-playground" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to highlight active menu item and trigger navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find which section is currently mostly within view
      const scrollPosition = window.scrollY + 160;
      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Tiny Informational Announcement Ribbon */}
      <div className="bg-brand-900 text-brand-50 text-[11px] py-1.5 px-4 font-mono flex items-center justify-center border-b border-brand-800 tracking-tight select-none">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold opacity-90">LIVE SECURE SYSTEM STATUS:</span>
          <span className="text-brand-300">COMPLIANCE ACTIVE & SECURITY AUDITED</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 text-slate-950 backdrop-blur-md shadow-sm border-b border-slate-200/80"
            : "bg-white text-slate-900 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Corporate Logo / Identity */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollToSection("about")}>
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white shadow-md shadow-brand-500/10 border border-brand-500">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-base tracking-tight block text-slate-900 leading-none">
                  TAHSIN AHMED QA
                </span>
                <span className="font-mono text-[9px] tracking-wider text-brand-600 block mt-1 font-bold">
                  SOFTWARE QUALITY SYSTEMS & ADVISORY
                </span>
              </div>
            </div>

            {/* Desktop Navigation Link Array */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-tight transition-all relative ${
                    activeSection === item.id
                      ? "text-brand-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="relative z-10">
                    <span className="text-brand-500 font-mono font-medium mr-1">{(index + 1).toString().padStart(2, "0")}</span>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-brand-50 border border-brand-200/60 rounded-md"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* External Links / Social Actions */}
            <div className="hidden xl:flex items-center gap-3 pl-4 border-l border-slate-200">
              <a
                href={ABOUT_ME.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-slate-500 hover:text-brand-600 transition-colors p-1.5 rounded-md hover:bg-slate-50"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={ABOUT_ME.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-slate-500 hover:text-slate-900 transition-colors p-1.5 rounded-md hover:bg-slate-50"
                title="GitHub Repositories"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={ABOUT_ME.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-slate-600 hover:text-brand-600 p-1.5"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href={ABOUT_ME.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-slate-600 hover:text-slate-900 p-1.5"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-1.5 hover:bg-slate-100 rounded-md"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-slate-200 bg-white overflow-hidden shadow-inner"
            >
              <div className="px-4 py-4 space-y-1.5 max-h-[80vh] overflow-y-auto">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-3 mb-2">
                  System Navigation Grid
                </div>
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center transition-all ${
                      activeSection === item.id
                        ? "bg-brand-50 text-brand-700 border-l-4 border-brand-600 font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                     }`}
                  >
                    <span className="font-mono text-[11px] text-brand-500 mr-2 w-5">
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
