import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import logo from "@/assets/brandverse-logo-removebg-preview.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      setScrollProgress(Math.min(progress, 100));
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    link.style.setProperty("--x", `${x}px`);
    link.style.setProperty("--y", `${y}px`);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 max-w-full overflow-x-hidden",
          scrolled
            ? "glass-card border-b border-border/50 shadow-lg backdrop-blur-xl dark:bg-background/80 bg-[hsl(210_30%_98%)]/90"
            : "bg-transparent border-b border-transparent"
        )}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal via-gold to-teal transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28 w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group relative pl-4 sm:pl-6 z-10"
            onMouseMove={handleMouseMove}
          >
            <div className="relative">
              <img
                src={logo}
                alt="Brandverse Studio"
                className="h-20 sm:h-24 md:h-28 w-auto transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal/10 to-gold/10 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none" />
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseMove={handleMouseMove}
                className={cn(
                  "nav-link-magnetic relative text-sm font-medium transition-all duration-300 py-2 px-3 rounded-lg group whitespace-nowrap",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className={cn(
                    "absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100",
                    location.pathname === link.path
                      ? "bg-primary/10 opacity-100"
                      : "bg-primary/5"
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 h-0.5 w-0 bg-primary transition-all duration-300 -translate-x-1/2",
                    location.pathname === link.path ? "w-full" : "group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Desktop: Theme Toggle & CTA - Right side */}
          <div className="hidden md:flex items-center gap-4 pr-4 sm:pr-6 z-10">
            <ThemeToggle />
            <Button
              asChild
              className="relative overflow-hidden group"
            >
              <Link to="/contact">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </Button>
          </div>

          {/* Mobile: Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-3 pr-4 sm:pr-6 z-10">
            <ThemeToggle />
            <button
              className="p-2 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                <X
                  className={cn(
                    "absolute inset-0 h-6 w-6 text-foreground transition-all duration-300",
                    isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                  )}
                />
                <Menu
                  className={cn(
                    "absolute inset-0 h-6 w-6 text-foreground transition-all duration-300",
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              "bg-background/95 dark:bg-background/95 backdrop-blur-xl border-t border-border/50",
              isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="section-container">
              <div className="flex flex-col gap-3 pt-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-base font-medium py-3 px-4 rounded-lg transition-all duration-300",
                      "relative z-10",
                      location.pathname === link.path
                        ? "bg-primary/10 text-primary border-l-4 border-primary"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground border-l-4 border-transparent",
                      isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className={cn(
                    "mt-2 w-full transition-all duration-300 relative z-10",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms" }}
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
