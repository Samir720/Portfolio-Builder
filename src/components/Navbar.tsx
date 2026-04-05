import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show at top, hide when scrolling down, show when scrolling up
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={cn(
          "fixed left-0 right-0 top-0 z-[80] transition-transform duration-300 ease-in-out glass-nav",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-display font-bold text-foreground">
            samir<span className="text-primary">.dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="group relative text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </div>
            
            <a 
              href="#contact"
              className="group relative overflow-hidden rounded-full border border-border px-6 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk 
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 z-0 h-full w-0 bg-primary/10 transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center px-8",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <button 
          className="absolute right-6 top-6 p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <div className="flex flex-col gap-8 text-center">
          {NAV_LINKS.map((link, i) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-4xl font-display font-bold text-muted hover:text-foreground hover:translate-x-2 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-8 mx-auto w-max inline-block rounded-full bg-gradient-to-r from-primary to-primary/80 px-8 py-4 font-display font-bold text-background shadow-[0_0_20px_rgba(109,129,150,0.3)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}
