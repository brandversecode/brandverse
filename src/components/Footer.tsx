import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/brandverse-logo-removebg-preview.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-[hsl(225,33%,12%)] via-[hsl(225,33%,10%)] to-[hsl(225,33%,8%)] text-white">
      {/* 3D SVG Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(175, 54%, 48%)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(42, 50%, 54%)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="hsl(225, 33%, 17%)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="footerGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(42, 50%, 54%)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(175, 54%, 48%)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="hsl(225, 33%, 17%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* 3D Geometric Shapes */}
          <g opacity="0.6">
            {/* Hexagons */}
            <path
              d="M100,200 L150,170 L200,200 L200,250 L150,280 L100,250 Z"
              fill="url(#footerGrad1)"
              transform="translate(0, 0)"
            />
            <path
              d="M400,150 L450,120 L500,150 L500,200 L450,230 L400,200 Z"
              fill="url(#footerGrad2)"
              transform="translate(0, 0)"
            />
            <path
              d="M800,250 L850,220 L900,250 L900,300 L850,330 L800,300 Z"
              fill="url(#footerGrad1)"
              transform="translate(0, 0)"
            />
            
            {/* Circles with depth */}
            <circle cx="300" cy="100" r="40" fill="url(#footerGrad1)" opacity="0.5" />
            <circle cx="700" cy="350" r="50" fill="url(#footerGrad2)" opacity="0.5" />
            <circle cx="1000" cy="150" r="35" fill="url(#footerGrad1)" opacity="0.5" />
            
            {/* Connecting Lines */}
            <line
              x1="150"
              y1="225"
              x2="450"
              y2="175"
              stroke="hsl(175, 54%, 48%)"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
            <line
              x1="500"
              y1="175"
              x2="850"
              y2="275"
              stroke="hsl(42, 50%, 54%)"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
          </g>
          
          {/* Mesh Grid */}
          <g opacity="0.3">
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 20}
                x2="1200"
                y2={i * 20}
                stroke="hsl(175, 54%, 48%)"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 40}
                y1="0"
                x2={i * 40}
                y2="400"
                stroke="hsl(42, 50%, 54%)"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
            ))}
          </g>
        </svg>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <img 
                src={logo} 
                alt="Brandverse Studio" 
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <p className="text-white/70 max-w-md leading-relaxed text-base mb-6">
              We're not just an agency. We're your partner in shaping a brand story 
              that inspires trust, builds loyalty, and drives real impact.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/the_bvsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Instagram"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(225,33%,25%)] to-[hsl(225,33%,20%)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="flex items-center gap-2 text-white/70 hover:text-primary transition-all duration-300 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:8937888833"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(265,75%,58%)] to-[hsl(265,75%,48%)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-teal/40">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">Phone</p>
                    <span className="font-medium text-white group-hover:text-primary transition-colors">8937888833</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@thebrandversestudio.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(42,50%,54%)] to-[hsl(42,50%,44%)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-gold/30">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">Email</p>
                    <span className="font-medium text-white group-hover:text-primary transition-colors break-all text-sm">support@thebrandversestudio.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/the_bvsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(225,33%,25%)] to-[hsl(225,33%,20%)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-navy/30">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">Instagram</p>
                    <span className="font-medium text-white group-hover:text-primary transition-colors">@the_bvsofficial</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Brandverse Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="/privacy" 
                className="text-white/60 hover:text-primary transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-white/60 hover:text-primary transition-colors duration-300 hover:underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
