import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Expertise", href: "#expertise" },
  { label: "Le Cabinet", href: "#cabinet" },
  { label: "Infos Pratiques", href: "#infos" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = ({ onBookClick }: { onBookClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#accueil" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary tracking-tight">Dr. Nutrition</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="cta" size="lg" onClick={onBookClick}>
            Prendre RDV
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 pb-6 pt-2 space-y-4 animate-fade-in-up">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button variant="cta" className="w-full" onClick={() => { onBookClick(); setMobileOpen(false); }}>
            Prendre RDV
          </Button>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
