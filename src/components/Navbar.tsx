import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled
            ? "border border-line/80 bg-void/70 backdrop-blur-xl py-2 px-6"
            : "py-1"
        }`}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-mono text-sm text-paper tracking-tight"
        >
          hsr<span className="text-signal">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="relative text-sm text-mist hover:text-paper transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-signal transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-line rounded-full px-4 py-1.5 text-paper hover:border-signal/60 hover:text-signal transition-colors"
        >
          GitHub
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-paper w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`h-px bg-paper transition-transform ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span className={`h-px bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px bg-paper transition-transform ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mx-5 mt-2 rounded-2xl border border-line bg-void/95 backdrop-blur-xl overflow-hidden"
        >
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="text-left py-2.5 px-2 text-mist hover:text-paper transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
