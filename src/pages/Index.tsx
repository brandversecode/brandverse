import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import { cn } from "@/lib/utils";
import {
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Zap,
  Handshake,
  ArrowRight,
  Sparkles,
  LineChart,
  Megaphone,
  MousePointerClick,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Crafting unique brand identities that resonate with your audience and stand out in the market.",
    features: ["Brand Identity", "Market Research", "Positioning"],
    color: "from-teal/20 to-teal/5",
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description: "Data-driven campaigns that connect you with the right customers at the right time.",
    features: ["Campaign Strategy", "PPC Advertising", "Email Marketing"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth",
    description: "Optimizing your digital presence to drive organic traffic and sustainable growth.",
    features: ["SEO Optimization", "Content Strategy", "Link Building"],
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Building engaged communities and amplifying your brand voice across platforms.",
    features: ["Community Management", "Content Planning", "Influencer Marketing"],
    color: "from-teal/20 to-teal/5",
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Transforming data into actionable insights that fuel smarter business decisions.",
    features: ["Data Analysis", "Performance Tracking", "ROI Reporting"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    description: "Compelling stories and visuals that capture attention and inspire action.",
    features: ["Visual Design", "Copywriting", "Video Production"],
    color: "from-gold/20 to-gold/5",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Industry veterans with proven track records",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "Agile strategies that deliver quickly",
  },
  {
    icon: Handshake,
    title: "Trusted by Clients",
    description: "Proven success across diverse industries",
  },
  {
    icon: Target,
    title: "Data-Driven",
    description: "Decisions backed by real analytics",
  },
];

export default function Index() {
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

  const words = ["Building Brands.", "Creating Connections.", "Driving Growth."];
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
          className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal/22 dark:bg-teal/15 rounded-full blur-3xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gold/22 dark:bg-gold/15 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
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
                  "inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 dark:bg-primary/25 text-primary text-xs sm:text-sm font-semibold transition-all duration-1000 border border-primary/40 shadow-md backdrop-blur-sm",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse text-primary" strokeWidth={2.5} />
                <span className="relative whitespace-nowrap">
                  <span className="hidden sm:inline">Digital Branding Excellence</span>
                  <span className="sm:hidden">Branding Excellence</span>
                </span>
              </div>
              
              {/* Animated Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] sm:leading-[1.1] md:leading-[1.15] tracking-tight break-words overflow-hidden">
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
                  "text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed transition-all duration-1000 mb-2 font-light",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "600ms" }}
              >
                At Brandverse Studio, we craft powerful digital strategies that help your brand 
                stand out, speak louder, and grow faster in today's digital world.
              </p>

              <div
                className={cn(
                  "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transition-all duration-1000 mt-4 sm:mt-6",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "800ms" }}
              >
                <Button
                  variant="hero"
                  asChild
                  className="group relative overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl"
                >
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                    Work With Us
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </Button>
                <Button
                  variant="hero-outline"
                  asChild
                  className="group relative overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold border-2"
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
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-teal/25 via-transparent to-gold/25 rounded-3xl blur-2xl opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
              
              <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center p-2 sm:p-4">
                  {/* Animated Brand Journey Visualization - Improved Design */}
                  <svg
                    viewBox="0 0 800 600"
                    className="w-full h-full max-w-5xl scale-75 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(265, 75%, 58%)" />
                        <stop offset="50%" stopColor="hsl(265, 75%, 68%)" />
                        <stop offset="100%" stopColor="hsl(15, 85%, 60%)" />
                      </linearGradient>
                      <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(265, 75%, 58%)" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="hsl(15, 85%, 60%)" stopOpacity="0.7" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <filter id="softGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Animated Background Circle - Centered */}
                    <circle cx="400" cy="300" r="220" fill="url(#brandGrad)" opacity="0.08">
                      <animate attributeName="r" values="220;240;220" dur="5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.08;0.12;0.08" dur="5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Central Connection Hub - Better Positioned */}
                    <g id="centralHub">
                      <circle cx="400" cy="300" r="70" fill="url(#brandGrad)" opacity="0.9" filter="url(#softGlow)">
                        <animate attributeName="r" values="70;75;70" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="400" cy="300" r="55" fill="hsl(var(--card))" />
                      <text x="400" y="290" textAnchor="middle" fontSize="18" fontWeight="bold" fill="hsl(265, 75%, 58%)">Brandverse</text>
                      <text x="400" y="308" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Studio</text>
                    </g>
                    
                    {/* Step 1: Idea - Top Left - Better Aligned */}
                    <g id="step1" transform="translate(150, 120)">
                      <circle cx="0" cy="0" r="55" fill="url(#brandGrad)" opacity="0.9" filter="url(#glow)">
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="42" fill="hsl(var(--card))" />
                      {/* Lightbulb Icon */}
                      <foreignObject x="-12" y="-20" width="24" height="24">
                        <div className="flex items-center justify-center w-full h-full">
                          <Lightbulb className="w-6 h-6" stroke="hsl(265, 75%, 58%)" fill="none" strokeWidth="2.5" />
                        </div>
                      </foreignObject>
                      <text x="0" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="hsl(var(--foreground))">Idea</text>
                      <text x="0" y="80" textAnchor="middle" fontSize="13" fill="hsl(var(--muted-foreground))">Your Vision</text>
                    </g>
                    
                    {/* Animated Flow Arrow 1 - Improved Path */}
                    <path d="M 205 120 Q 280 150 345 180" stroke="url(#flowGrad)" strokeWidth="4" fill="none" strokeDasharray="6,6" opacity="0.7">
                      <animate attributeName="stroke-dashoffset" values="0;12" dur="1.5s" repeatCount="indefinite" />
                    </path>
                    <circle cx="275" cy="150" r="4" fill="url(#brandGrad)">
                      <animate attributeName="cx" values="205;345;205" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="120;180;120" dur="3s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Step 2: Strategy - Top Right - Better Aligned */}
                    <g id="step2" transform="translate(650, 120)">
                      <circle cx="0" cy="0" r="55" fill="url(#brandGrad)" opacity="0.9" filter="url(#glow)">
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="42" fill="hsl(var(--card))" />
                      {/* Target Icon */}
                      <foreignObject x="-12" y="-20" width="24" height="24">
                        <div className="flex items-center justify-center w-full h-full">
                          <Target className="w-6 h-6" stroke="hsl(265, 75%, 58%)" fill="none" strokeWidth="2.5" />
                        </div>
                      </foreignObject>
                      <text x="0" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="hsl(var(--foreground))">Strategy</text>
                      <text x="0" y="80" textAnchor="middle" fontSize="13" fill="hsl(var(--muted-foreground))">We Plan</text>
                    </g>
                    
                    {/* Animated Flow Arrow 2 - Improved Path */}
                    <path d="M 595 120 Q 520 150 455 180" stroke="url(#flowGrad)" strokeWidth="4" fill="none" strokeDasharray="6,6" opacity="0.7">
                      <animate attributeName="stroke-dashoffset" values="0;12" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                    </path>
                    <circle cx="525" cy="150" r="4" fill="url(#brandGrad)">
                      <animate attributeName="cx" values="595;455;595" dur="3s" begin="0.3s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="120;180;120" dur="3s" begin="0.3s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Step 3: Execution - Bottom Right - Better Aligned */}
                    <g id="step3" transform="translate(650, 480)">
                      <circle cx="0" cy="0" r="55" fill="url(#brandGrad)" opacity="0.9" filter="url(#glow)">
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" begin="1s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="42" fill="hsl(var(--card))" />
                      {/* Zap Icon */}
                      <foreignObject x="-12" y="-20" width="24" height="24">
                        <div className="flex items-center justify-center w-full h-full">
                          <Zap className="w-6 h-6" stroke="hsl(265, 75%, 58%)" fill="hsl(265, 75%, 58%)" strokeWidth="2.5" />
                        </div>
                      </foreignObject>
                      <text x="0" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="hsl(var(--foreground))">Execute</text>
                      <text x="0" y="80" textAnchor="middle" fontSize="13" fill="hsl(var(--muted-foreground))">We Build</text>
                    </g>
                    
                    {/* Animated Flow Arrow 3 - Improved Path */}
                    <path d="M 595 480 Q 520 450 455 420" stroke="url(#flowGrad)" strokeWidth="4" fill="none" strokeDasharray="6,6" opacity="0.7">
                      <animate attributeName="stroke-dashoffset" values="0;12" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                    </path>
                    <circle cx="525" cy="450" r="4" fill="url(#brandGrad)">
                      <animate attributeName="cx" values="595;455;595" dur="3s" begin="0.6s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="480;420;480" dur="3s" begin="0.6s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Step 4: Growth - Bottom Left - Better Aligned */}
                    <g id="step4" transform="translate(150, 480)">
                      <circle cx="0" cy="0" r="55" fill="url(#brandGrad)" opacity="0.9" filter="url(#glow)">
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="42" fill="hsl(var(--card))" />
                      {/* TrendingUp Icon */}
                      <foreignObject x="-12" y="-20" width="24" height="24">
                        <div className="flex items-center justify-center w-full h-full">
                          <TrendingUp className="w-6 h-6" stroke="hsl(15, 85%, 60%)" fill="none" strokeWidth="2.5" />
                        </div>
                      </foreignObject>
                      <text x="0" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="hsl(var(--foreground))">Growth</text>
                      <text x="0" y="80" textAnchor="middle" fontSize="13" fill="hsl(var(--muted-foreground))">You Succeed</text>
                    </g>
                    
                    {/* Animated Flow Arrow 4 - Improved Path */}
                    <path d="M 205 480 Q 280 450 345 420" stroke="url(#flowGrad)" strokeWidth="4" fill="none" strokeDasharray="6,6" opacity="0.7">
                      <animate attributeName="stroke-dashoffset" values="0;12" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
                    </path>
                    <circle cx="275" cy="450" r="4" fill="url(#brandGrad)">
                      <animate attributeName="cx" values="205;345;205" dur="3s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="480;420;480" dur="3s" begin="0.9s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Connecting Lines to Center - Improved */}
                    <line x1="150" y1="120" x2="400" y2="300" stroke="url(#flowGrad)" strokeWidth="2.5" opacity="0.4" strokeDasharray="4,4">
                      <animate attributeName="opacity" values="0.4;0.6;0.4" dur="3s" repeatCount="indefinite" />
                    </line>
                    <line x1="650" y1="120" x2="400" y2="300" stroke="url(#flowGrad)" strokeWidth="2.5" opacity="0.4" strokeDasharray="4,4">
                      <animate attributeName="opacity" values="0.4;0.6;0.4" dur="3s" begin="0.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="650" y1="480" x2="400" y2="300" stroke="url(#flowGrad)" strokeWidth="2.5" opacity="0.4" strokeDasharray="4,4">
                      <animate attributeName="opacity" values="0.4;0.6;0.4" dur="3s" begin="1s" repeatCount="indefinite" />
                    </line>
                    <line x1="150" y1="480" x2="400" y2="300" stroke="url(#flowGrad)" strokeWidth="2.5" opacity="0.4" strokeDasharray="4,4">
                      <animate attributeName="opacity" values="0.4;0.6;0.4" dur="3s" begin="1.5s" repeatCount="indefinite" />
                    </line>
                    
                    {/* Rotating Ring Around Center */}
                    <circle cx="400" cy="300" r="180" fill="none" stroke="url(#flowGrad)" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                      <animateTransform attributeName="transform" type="rotate" values="0 400 300;360 400 300" dur="20s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Orbiting Elements */}
                    <circle cx="580" cy="300" r="5" fill="url(#brandGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="0 400 300;360 400 300" dur="15s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="400" cy="120" r="5" fill="url(#brandGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="90 400 300;450 400 300" dur="15s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="220" cy="300" r="5" fill="url(#brandGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="180 400 300;540 400 300" dur="15s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="400" cy="480" r="5" fill="url(#brandGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="270 400 300;630 400 300" dur="15s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1.5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Floating Particles - Better Positioned */}
                    <circle cx="250" cy="200" r="4" fill="url(#brandGrad)" opacity="0.6">
                      <animate attributeName="cy" values="200;180;200" dur="3.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="550" cy="200" r="3" fill="url(#brandGrad)" opacity="0.6">
                      <animate attributeName="cy" values="200;220;200" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="400" r="3" fill="url(#brandGrad)" opacity="0.6">
                      <animate attributeName="cy" values="400;380;400" dur="3.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="550" cy="400" r="4" fill="url(#brandGrad)" opacity="0.6">
                      <animate attributeName="cy" values="400;420;400" dur="3.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.4s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                  </div>
              
              {/* Floating Cards */}
            

              {/* Additional floating element */}
             
            </div>
          </div>
        </div>

        
      </section>

      {/* Services Preview */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-0 relative overflow-hidden max-w-full px-4 sm:px-6">
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gold/20 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 w-full px-2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 border border-primary/20">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>What We Offer</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-foreground mb-5 sm:mb-6 md:mb-8 px-2 leading-tight">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed px-2 max-w-3xl mx-auto font-light">
              Comprehensive digital solutions tailored to elevate your brand and drive measurable results
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card3D
                key={service.title}
                variant="glass"
                className={cn(
                  "group relative p-6 sm:p-8 h-full flex flex-col opacity-0 animate-fade-in",
                  "hover:shadow-xl hover:-translate-y-1 transition-all duration-200",
                  "border-2 border-border/80",
                  "shadow-md",
                  "bg-white dark:bg-card",
                  "rounded-xl"
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" } as React.CSSProperties}
              >
                {/* Content */}
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12 pb-8 sm:pb-12 md:pb-16">
            <Button 
              variant="hero" 
              size="lg" 
              asChild
              className="group relative overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6"
            >
              <Link to="/services">
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Explore All Services
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tagline Block */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative overflow-hidden max-w-full px-4 sm:px-6">
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal/18 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gold/18 rounded-full blur-3xl animate-pulse-soft animation-delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-teal/12 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 py-4 sm:py-6 md:py-8 lg:py-12 max-w-full">
          <div className="max-w-5xl mx-auto w-full px-2 sm:px-4">
            {/* Quote Icon */}
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl" />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 backdrop-blur-sm border-2 border-primary/40 flex items-center justify-center shadow-xl shadow-primary/30">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Quote Text */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed sm:leading-relaxed font-light text-foreground animate-fade-in animation-delay-100 text-center">
              <p className="mb-6 sm:mb-8 md:mb-10">
                <span className="text-muted-foreground">We're not just an agency. We're your partner in shaping a brand story that</span>{" "}
                <span className="relative inline-block group">
                  <span className="text-teal font-bold relative z-10">inspires trust</span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-teal/30 rounded-full blur-sm group-hover:bg-teal/50 transition-all duration-300" />
                  <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-teal/60 rounded-full" />
                </span>
                {", builds "}
                <span className="relative inline-block group">
                  <span className="text-primary font-bold relative z-10">loyalty</span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-primary/30 rounded-full blur-sm group-hover:bg-primary/50 transition-all duration-300" />
                  <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-primary/60 rounded-full" />
                </span>
                {", and drives "}
                <span className="relative inline-block group">
                  <span className="text-gold font-bold relative z-10">real impact</span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-gold/30 rounded-full blur-sm group-hover:bg-gold/50 transition-all duration-300" />
                  <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gold/60 rounded-full" />
                </span>
                {"."}
              </p>
            </blockquote>
            
            {/* Author/Attribution */}
            <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-3 sm:gap-4 animate-fade-in animation-delay-200">
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-sm sm:text-base text-muted-foreground font-semibold">Brandverse Studio</p>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse animation-delay-300" />
              </div>
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden max-w-full px-4 sm:px-6">
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-teal/18 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gold/18 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 w-full px-2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 border border-primary/20">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-foreground mb-5 sm:mb-6 md:mb-8 px-2 leading-tight">
              Why Choose <span className="gradient-text">Brandverse?</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed px-2 max-w-3xl mx-auto font-light">
              What sets us apart in the digital landscape
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card3D
                key={item.title}
                variant="glass"
                className={cn(
                  "group relative p-6 sm:p-8 text-center opacity-0 animate-fade-in h-full flex flex-col items-center",
                  "hover:shadow-xl hover:-translate-y-1 transition-all duration-200",
                  "border-2 border-border/80",
                  "shadow-md",
                  "bg-white dark:bg-card",
                  "rounded-xl"
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" } as React.CSSProperties}
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gold/15 border border-gold/20 flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-gold" strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden max-w-full px-4 sm:px-6">
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gold/20 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="max-w-4xl mx-auto text-center w-full px-2 sm:px-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8 animate-fade-in border border-primary/20">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Let's Get Started</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-5 md:mb-8 leading-tight px-2">
              Ready to Build Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">Brand?</span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-teal/50 via-gold/50 to-teal/50 blur-xl opacity-60" />
              </span>
          </h2>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 leading-relaxed px-2 font-light">
            Let's create something extraordinary together. Transform your vision into a brand 
              that people <span className="text-foreground font-semibold">love</span> and{" "}
              <span className="text-foreground font-semibold">remember</span>.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Button 
                variant="hero" 
                size="lg"
                asChild
                className="group relative overflow-hidden w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-7 text-lg sm:text-xl font-semibold shadow-2xl shadow-teal/20 hover:shadow-teal/40 hover:-translate-y-1 transition-all duration-300"
              >
            <Link to="/contact">
                  <span className="relative z-10 flex items-center justify-center gap-3">
              Let's Build Your Brand
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </Button>
              
              <Button 
                variant="hero-outline" 
                size="lg"
                asChild
                className="w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-7 text-lg sm:text-xl font-semibold border-2 transition-all duration-300"
              >
                <Link to="/services">
                  Explore Our Services
            </Link>
          </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
