import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import { cn } from "@/lib/utils";
import {
  Handshake,
  Lightbulb,
  TrendingUp,
  Heart,
  ArrowRight,
  Target,
  Sparkles,
  Star,
} from "lucide-react";

const whyUs = [
  {
    icon: Handshake,
    title: "One-Stop Partner",
    description: "Complete digital brand solutions under one roof for seamless execution",
    color: "teal" as const,
  },
  {
    icon: Target,
    title: "Programmatic Expertise",
    description: "Advanced digital advertising & programmatic media that delivers ROI",
    color: "gold" as const,
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    description: "Strategies that deliver real, measurable results you can track",
    color: "teal" as const,
  },
  {
    icon: Heart,
    title: "Growth Partnership",
    description: "We grow when you grow — your success is our ultimate mission",
    color: "gold" as const,
  },
];

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const words = ["We Bring", "Brands", "to Life"];
  const gradientWords = [false, true, false];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-6rem)] lg:min-h-screen flex items-center overflow-hidden max-w-full"
      >
        <Background3D variant="hero" />
        
        {/* Animated gradient orbs that follow mouse */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal/20 dark:bg-teal/10 rounded-full blur-3xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/15 dark:bg-gold/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
        
        <div className="section-container relative z-10 py-6 sm:py-8 md:py-10 lg:py-12 max-w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-2xl w-full overflow-hidden px-2 sm:px-0">
              {/* Badge with animation */}
              <div
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium transition-all duration-1000",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span className="relative">
                  About Brandverse Studio
                  <span className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
                </span>
              </div>
              
              {/* Animated Headline */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] sm:leading-[1.1] md:leading-[1.15] tracking-tight break-words overflow-hidden">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={cn(
                      "block transition-all duration-1000",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8",
                      gradientWords[index] && "gradient-text"
                    )}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              
              <p
                className={cn(
                  "text-lg text-muted-foreground max-w-xl leading-relaxed transition-all duration-1000",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "600ms" }}
              >
                At Brandverse Studio, we believe every brand has a story waiting to be told — 
                a story that connects, inspires, and builds lasting impact.
              </p>

              <div
                className={cn(
                  "flex flex-wrap gap-4 transition-all duration-1000 mt-4",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "800ms" }}
              >
                <Button
                  variant="hero"
                  asChild
                  className="group relative overflow-hidden"
                >
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      Work With Us
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </Button>
                <Button
                  variant="hero-outline"
                  asChild
                  className="group relative overflow-hidden"
                >
                  <Link to="/services">
                    <span className="relative z-10">Explore Our Services</span>
                    <span className="absolute inset-0 bg-muted/50 dark:bg-muted/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </Button>
              </div>

             
            </div>

            {/* Hero SVG Illustration */}
            <div
              className={cn(
                "relative transition-all duration-1000 lg:ml-auto lg:mr-0 w-full",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}
              style={{
                transitionDelay: "400ms",
              }}
            >
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal/20 via-transparent to-gold/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center p-2">
                {/* Animated Company Story Visualization */}
                <svg
                  viewBox="0 0 700 500"
                  className="w-full h-full max-w-5xl scale-75 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(265, 75%, 58%)" />
                      <stop offset="50%" stopColor="hsl(265, 75%, 68%)" />
                      <stop offset="100%" stopColor="hsl(15, 85%, 60%)" />
                    </linearGradient>
                    <linearGradient id="aboutFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(265, 75%, 58%)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="hsl(15, 85%, 60%)" stopOpacity="0.6" />
                    </linearGradient>
                    <filter id="aboutGlow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="aboutSoftGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Animated Background Pulse */}
                  <circle cx="350" cy="250" r="220" fill="url(#aboutGrad)" opacity="0.08">
                    <animate attributeName="r" values="220;240;220" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.08;0.12;0.08" dur="5s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Central Brandverse Logo/Heart */}
                  <g id="centralBrand">
                    <circle cx="350" cy="250" r="70" fill="url(#aboutGrad)" opacity="0.9" filter="url(#aboutGlow)">
                      <animate attributeName="r" values="70;75;70" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" cy="250" r="55" fill="hsl(var(--card))" />
                    <text x="350" y="245" textAnchor="middle" fontSize="18" fontWeight="bold" fill="hsl(265, 75%, 58%)">Brandverse</text>
                    <text x="350" y="260" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Studio</text>
                  </g>
                  
                  {/* Value 1: Innovation - Top Left */}
                  <g id="value1" transform="translate(150, 100)">
                    <circle cx="0" cy="0" r="55" fill="url(#aboutGrad)" opacity="0.9" filter="url(#aboutGlow)">
                      <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="42" fill="hsl(var(--card))" />
                    {/* Lightbulb Icon */}
                    <foreignObject x="-12" y="-20" width="24" height="24">
                      <div className="flex items-center justify-center w-full h-full">
                        <Lightbulb className="w-6 h-6" stroke="hsl(265, 75%, 58%)" fill="none" strokeWidth="2.5" />
                      </div>
                    </foreignObject>
                    <text x="0" y="65" textAnchor="middle" fontSize="15" fontWeight="bold" fill="hsl(var(--foreground))">Innovation</text>
                    <text x="0" y="80" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Fresh Ideas</text>
                  </g>
                  
                  {/* Animated Connection 1 */}
                  <path d="M 188 138 Q 250 180 312 220" stroke="url(#aboutFlow)" strokeWidth="3" fill="none" opacity="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" />
                  </path>
                  <circle cx="250" cy="180" r="4" fill="url(#aboutGrad)">
                    <animate attributeName="cx" values="188;312;188" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="138;220;138" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Value 2: Excellence - Top Right */}
                  <g id="value2" transform="translate(550, 100)">
                    <circle cx="0" cy="0" r="50" fill="url(#aboutGrad)" opacity="0.9" filter="url(#aboutGlow)">
                      <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="38" fill="hsl(var(--card))" />
                    {/* Star Icon */}
                    <foreignObject x="-12" y="-20" width="24" height="24">
                      <div className="flex items-center justify-center w-full h-full">
                        <Star className="w-6 h-6" stroke="hsl(265, 75%, 58%)" fill="hsl(265, 75%, 58%)" strokeWidth="2.5" />
                      </div>
                    </foreignObject>
                    <text x="0" y="65" textAnchor="middle" fontSize="15" fontWeight="bold" fill="hsl(var(--foreground))">Excellence</text>
                    <text x="0" y="80" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Quality First</text>
                  </g>
                  
                  {/* Animated Connection 2 */}
                  <path d="M 512 138 Q 450 180 388 220" stroke="url(#aboutFlow)" strokeWidth="3" fill="none" opacity="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                  </path>
                  <circle cx="450" cy="180" r="4" fill="url(#aboutGrad)">
                    <animate attributeName="cx" values="512;388;512" dur="3s" begin="0.3s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="138;220;138" dur="3s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Value 3: Partnership - Bottom Right */}
                  <g id="value3" transform="translate(550, 400)">
                    <circle cx="0" cy="0" r="50" fill="url(#aboutGrad)" opacity="0.9" filter="url(#aboutGlow)">
                      <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="38" fill="hsl(var(--card))" />
                    {/* Handshake Icon */}
                    <foreignObject x="-12" y="-20" width="24" height="24">
                      <div className="flex items-center justify-center w-full h-full">
                        <Handshake className="w-6 h-6" stroke="hsl(15, 85%, 60%)" fill="none" strokeWidth="2.5" />
                      </div>
                    </foreignObject>
                    <text x="0" y="65" textAnchor="middle" fontSize="15" fontWeight="bold" fill="hsl(var(--foreground))">Partnership</text>
                    <text x="0" y="80" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Your Success</text>
                  </g>
                  
                  {/* Animated Connection 3 */}
                  <path d="M 512 362 Q 450 320 388 280" stroke="url(#aboutFlow)" strokeWidth="3" fill="none" opacity="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="1s" repeatCount="indefinite" />
                  </path>
                  <circle cx="450" cy="320" r="4" fill="url(#aboutGrad)">
                    <animate attributeName="cx" values="512;388;512" dur="3s" begin="0.6s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="362;280;362" dur="3s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Value 4: Growth - Bottom Left */}
                  <g id="value4" transform="translate(150, 400)">
                    <circle cx="0" cy="0" r="50" fill="url(#aboutGrad)" opacity="0.9" filter="url(#aboutGlow)">
                      <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="38" fill="hsl(var(--card))" />
                    {/* TrendingUp Icon */}
                    <foreignObject x="-12" y="-20" width="24" height="24">
                      <div className="flex items-center justify-center w-full h-full">
                        <TrendingUp className="w-6 h-6" stroke="hsl(15, 85%, 60%)" fill="none" strokeWidth="2.5" />
                      </div>
                    </foreignObject>
                    <text x="0" y="65" textAnchor="middle" fontSize="15" fontWeight="bold" fill="hsl(var(--foreground))">Growth</text>
                    <text x="0" y="80" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Together</text>
                  </g>
                  
                  {/* Animated Connection 4 */}
                  <path d="M 188 362 Q 250 320 312 280" stroke="url(#aboutFlow)" strokeWidth="3" fill="none" opacity="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
                  </path>
                  <circle cx="250" cy="320" r="4" fill="url(#aboutGrad)">
                    <animate attributeName="cx" values="188;312;188" dur="3s" begin="0.9s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="362;280;362" dur="3s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Rotating Value Ring */}
                  <g id="rotatingValues">
                    <circle cx="350" cy="250" r="130" fill="none" stroke="url(#aboutFlow)" strokeWidth="2" opacity="0.2" strokeDasharray="4,4">
                      <animateTransform attributeName="transform" type="rotate" values="0 350 250;360 350 250" dur="25s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Orbiting elements */}
                    <circle cx="480" cy="250" r="5" fill="url(#aboutGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="0 350 250;360 350 250" dur="18s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" cy="120" r="5" fill="url(#aboutGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="90 350 250;450 350 250" dur="18s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="220" cy="250" r="5" fill="url(#aboutGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="180 350 250;540 350 250" dur="18s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" cy="380" r="5" fill="url(#aboutGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="270 350 250;630 350 250" dur="18s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1.5s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  {/* Floating Story Elements */}
                  <circle cx="200" cy="180" r="3" fill="url(#aboutGrad)" opacity="0.6">
                    <animate attributeName="cy" values="180;160;180" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="500" cy="180" r="4" fill="url(#aboutGrad)" opacity="0.6">
                    <animate attributeName="cy" values="180;200;180" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="320" r="3" fill="url(#aboutGrad)" opacity="0.6">
                    <animate attributeName="cy" values="320;300;320" dur="3.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="500" cy="320" r="4" fill="url(#aboutGrad)" opacity="0.6">
                    <animate attributeName="cy" values="320;340;320" dur="3.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.4s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-4 border border-primary/20">
                  <Sparkles className="h-4 w-4" />
                  <span>Our Story</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Who We <span className="gradient-text">Are</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3 text-base">
                  At Brandverse Studio, we believe every brand has a story waiting to be told — 
                  a story that connects, inspires, and builds lasting impact. We are a team of 
                  strategists, creatives, and digital experts passionate about transforming 
                  businesses into memorable brands.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Founded on the principles of innovation and authenticity, we've helped 
                  countless businesses find their voice in the digital landscape and connect 
                  with audiences that matter.
                </p>
              </div>

              <Card3D 
                variant="glass" 
                className={cn(
                  "p-6 group relative overflow-hidden",
                  "hover:scale-[1.02] hover:-translate-y-1 transition-all duration-700 ease-out",
                  "border-2 border-border/30 hover:border-gold/30",
                  "shadow-lg hover:shadow-2xl hover:shadow-gold/10"
                )}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="icon-box-gold w-12 h-12 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-gold/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                      Our Philosophy
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                      Branding is about creating authentic conversations. We combine data-driven 
                      insights with bold creative thinking so your brand communicates with 
                      clarity and confidence.
                    </p>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Card3D>
            </div>

            {/* Right Column - Values Cards */}
            <div className="space-y-3">
              {[
                { icon: Target, title: "Mission-Driven", desc: "Every project starts with purpose", color: "teal" },
                { icon: TrendingUp, title: "Results-Focused", desc: "Measurable outcomes that matter", color: "teal" },
                { icon: Heart, title: "Client-Centric", desc: "Your success is our priority", color: "teal" },
              ].map((item, index) => (
                <Card3D
                  key={item.title}
                  variant="glass"
                  className={cn(
                    "group p-6 relative overflow-hidden",
                    "hover:scale-[1.02] hover:-translate-y-1 transition-all duration-700 ease-out",
                    "border-2 border-border/30 hover:border-primary/30",
                    "shadow-lg hover:shadow-2xl hover:shadow-primary/10"
                  )}
                >
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none from-primary/10 via-primary/5 to-transparent" />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="icon-box w-12 h-12 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground/90 transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </Card3D>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 w-full px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-4 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Partner <span className="gradient-text">With Us</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your success is our mission. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {whyUs.map((item, index) => (
              <Card3D
                key={item.title}
                variant="glass"
                className={cn(
                  "group relative p-8 flex items-start gap-6 opacity-0 animate-fade-in overflow-hidden",
                  "hover:scale-[1.03] hover:-translate-y-2 transition-all duration-700 ease-out",
                  "border-2 border-border/30 hover:border-primary/30",
                  "shadow-lg hover:shadow-2xl hover:shadow-primary/10"
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" } as React.CSSProperties}
              >
                {/* Animated gradient overlay on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                  item.color === 'teal' ? "from-primary/10 via-primary/5 to-transparent" : "from-gold/10 via-gold/5 to-transparent"
                )} />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Glow effect */}
                <div className={cn(
                  "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10",
                  item.color === 'teal' 
                    ? "bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20"
                    : "bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20"
                )} />
                
                <div className={`${item.color === 'teal' ? 'icon-box' : 'icon-box-gold'} w-16 h-16 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex items-center justify-center`}>
                  <item.icon className="h-8 w-8 text-white group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                  {/* Icon glow */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                    item.color === 'teal' ? "bg-primary/20" : "bg-gold/20"
                  )} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
                
                {/* Corner accent */}
                <div className={cn(
                  "absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                  item.color === 'teal' 
                    ? "bg-gradient-to-br from-primary/10 to-transparent"
                    : "bg-gradient-to-br from-gold/10 to-transparent"
                )} />
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="max-w-4xl mx-auto text-center w-full px-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Our Mission</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              To Transform Businesses Into{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">Brands</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-teal/50 via-gold/50 to-teal/50 blur-xl opacity-60" />
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              People <span className="text-foreground font-medium">love</span> and{" "}
              <span className="text-foreground font-medium">remember</span>.
            </p>
            
            {/* CTA Button */}
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="group relative overflow-hidden px-8 py-6 text-lg shadow-2xl shadow-teal/20 hover:shadow-teal/30 transition-all duration-300"
            >
              <Link to="/contact">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
