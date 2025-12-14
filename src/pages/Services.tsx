import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import { cn } from "@/lib/utils";
import {
  Lightbulb,
  Search,
  Share2,
  FileText,
  MousePointerClick,
  Globe,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Target,
  TrendingUp,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy & Communication",
    description:
      "We develop comprehensive brand strategies that define your unique positioning, messaging, and visual identity to create lasting impressions.",
    features: ["Brand Positioning", "Visual Identity", "Brand Guidelines", "Messaging Framework"],
    color: "teal" as const,
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your visibility with data-driven SEO strategies that improve rankings, drive organic traffic, and increase conversions.",
    features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"],
    color: "gold" as const,
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build engaged communities and amplify your brand voice across all major social platforms with strategic content and campaigns.",
    features: ["Content Strategy", "Community Management", "Paid Social", "Influencer Marketing"],
    color: "teal" as const,
  },
  {
    icon: FileText,
    title: "Content Creation & Marketing",
    description:
      "Compelling stories and visuals that capture attention, engage audiences, and drive meaningful action.",
    features: ["Blog Writing", "Video Production", "Graphic Design", "Email Marketing"],
    color: "gold" as const,
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Maximize ROI with targeted advertising campaigns across Google, social media, and programmatic networks.",
    features: ["Google Ads", "Display Advertising", "Retargeting", "Campaign Optimization"],
    color: "teal" as const,
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Beautiful, responsive websites that convert visitors into customers with seamless user experiences.",
    features: ["UI/UX Design", "Web Development", "E-commerce", "Landing Pages"],
    color: "gold" as const,
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Transform data into actionable insights with comprehensive analytics and transparent reporting.",
    features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Strategic Insights"],
    color: "teal" as const,
  },
];

export default function Services() {
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

  const words = ["Digital Solutions", "That Drive", "Results"];
  const gradientWords = [false, false, true];

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
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium transition-all duration-1000 border border-primary/20",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span className="relative">
                  Our Services
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
                From brand strategy to execution, we offer comprehensive digital services 
                designed to elevate your brand and accelerate growth.
              </p>

              <div
                className={cn(
                  "flex flex-wrap gap-4 transition-all duration-1000 mt-6",
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
                      Get Started
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
                  <Link to="/about">
                    <span className="relative z-10">Learn More</span>
                    <span className="absolute inset-0 bg-muted/50 dark:bg-muted/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </Button>
              </div>

              {/* Stats Row */}
              <div
                className={cn(
                  "flex flex-wrap gap-8 pt-8 transition-all duration-1000",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "1000ms" }}
              >
               
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
                {/* Animated Services Hub Visualization */}
                <svg
                  viewBox="0 0 700 500"
                  className="w-full h-full max-w-5xl scale-75 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="serviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(265, 75%, 58%)" />
                      <stop offset="50%" stopColor="hsl(265, 75%, 68%)" />
                      <stop offset="100%" stopColor="hsl(15, 85%, 60%)" />
                    </linearGradient>
                    <linearGradient id="serviceFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(265, 75%, 58%)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="hsl(15, 85%, 60%)" stopOpacity="0.6" />
                    </linearGradient>
                    <filter id="serviceGlow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="serviceSoftGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Animated Background Pulse */}
                  <circle cx="350" cy="250" r="220" fill="url(#serviceGrad)" opacity="0.08">
                    <animate attributeName="r" values="220;240;220" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.08;0.12;0.08" dur="5s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Central Hub */}
                  <g id="centralHub">
                    <circle cx="350" cy="250" r="70" fill="url(#serviceGrad)" opacity="0.9" filter="url(#serviceGlow)">
                      <animate attributeName="r" values="70;75;70" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" cy="250" r="55" fill="hsl(var(--card))" />
                    <text x="350" y="245" textAnchor="middle" fontSize="18" fontWeight="bold" fill="hsl(265, 75%, 58%)">Services</text>
                    <text x="350" y="260" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Hub</text>
                  </g>
                  
                  {/* Service 1: Brand Strategy - Top */}
                  <g id="service1" transform="translate(350, 80)">
                    <circle cx="0" cy="0" r="55" fill="url(#serviceGrad)" opacity="0.9" filter="url(#serviceGlow)">
                      <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="42" fill="hsl(var(--card))" />
                    {/* Target Icon */}
                    <foreignObject x="-12" y="-20" width="24" height="24">
                      <div className="flex items-center justify-center w-full h-full">
                        <Target className="w-6 h-6" stroke="hsl(265, 75%, 58%)" fill="none" strokeWidth="2.5" />
                      </div>
                    </foreignObject>
                    <text x="0" y="65" textAnchor="middle" fontSize="15" fontWeight="bold" fill="hsl(var(--foreground))">Brand Strategy</text>
                    <text x="0" y="80" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Identity & Vision</text>
                  </g>
                  
                  {/* Animated Connection Line 1 */}
                  <line x1="350" y1="135" x2="350" y2="205" stroke="url(#serviceFlow)" strokeWidth="3" opacity="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <circle cx="350" cy="170" r="4" fill="url(#serviceGrad)">
                    <animate attributeName="cy" values="135;205;135" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Service 2: Digital Marketing - Right */}
                  <g id="service2" transform="translate(550, 200)">
                    <circle cx="0" cy="0" r="55" fill="url(#serviceGrad)" opacity="0.9" filter="url(#serviceGlow)">
                      <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="42" fill="hsl(var(--card))" />
                    {/* Smartphone Icon */}
                    <foreignObject x="-12" y="-20" width="24" height="24">
                      <div className="flex items-center justify-center w-full h-full">
                        <Smartphone className="w-6 h-6" stroke="hsl(265, 75%, 58%)" fill="none" strokeWidth="2.5" />
                      </div>
                    </foreignObject>
                    <text x="0" y="75" textAnchor="middle" fontSize="15" fontWeight="bold" fill="hsl(var(--foreground))">Digital Marketing</text>
                    <text x="0" y="90" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Reach & Engage</text>
                  </g>
                  
                  {/* Animated Connection Line 2 */}
                  <path d="M 390 250 Q 470 250 550 250" stroke="url(#serviceFlow)" strokeWidth="3" fill="none" opacity="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                  </path>
                  <circle cx="470" cy="250" r="4" fill="url(#serviceGrad)">
                    <animate attributeName="cx" values="390;550;390" dur="3s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Service 3: SEO & Growth - Bottom */}
                  <g id="service3" transform="translate(350, 420)">
                    <circle cx="0" cy="0" r="55" fill="url(#serviceGrad)" opacity="0.9" filter="url(#serviceGlow)">
                      <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="42" fill="hsl(var(--card))" />
                    {/* TrendingUp Icon */}
                    <foreignObject x="-12" y="-20" width="24" height="24">
                      <div className="flex items-center justify-center w-full h-full">
                        <TrendingUp className="w-6 h-6" stroke="hsl(15, 85%, 60%)" fill="none" strokeWidth="2.5" />
                      </div>
                    </foreignObject>
                    <text x="0" y="65" textAnchor="middle" fontSize="15" fontWeight="bold" fill="hsl(var(--foreground))">SEO & Growth</text>
                    <text x="0" y="80" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Scale & Optimize</text>
                  </g>
                  
                  {/* Animated Connection Line 3 */}
                  <line x1="350" y1="295" x2="350" y2="365" stroke="url(#serviceFlow)" strokeWidth="3" opacity="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="1s" repeatCount="indefinite" />
                  </line>
                  <circle cx="350" cy="330" r="4" fill="url(#serviceGrad)">
                    <animate attributeName="cy" values="295;365;295" dur="3s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Service 4: Content Creation - Left */}
                  <g id="service4" transform="translate(150, 200)">
                    <circle cx="0" cy="0" r="55" fill="url(#serviceGrad)" opacity="0.9" filter="url(#serviceGlow)">
                      <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="42" fill="hsl(var(--card))" />
                    {/* Sparkles Icon */}
                    <foreignObject x="-12" y="-20" width="24" height="24">
                      <div className="flex items-center justify-center w-full h-full">
                        <Sparkles className="w-6 h-6" stroke="hsl(15, 85%, 60%)" fill="hsl(15, 85%, 60%)" strokeWidth="2.5" />
                      </div>
                    </foreignObject>
                    <text x="0" y="75" textAnchor="middle" fontSize="15" fontWeight="bold" fill="hsl(var(--foreground))">Content Creation</text>
                    <text x="0" y="90" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Stories & Visuals</text>
                  </g>
                  
                  {/* Animated Connection Line 4 */}
                  <path d="M 310 250 Q 230 250 150 250" stroke="url(#serviceFlow)" strokeWidth="3" fill="none" opacity="0.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
                  </path>
                  <circle cx="230" cy="250" r="4" fill="url(#serviceGrad)">
                    <animate attributeName="cx" values="310;150;310" dur="3s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Rotating Service Icons Around Hub */}
                  <g id="rotatingServices">
                    <circle cx="350" cy="250" r="120" fill="none" stroke="url(#serviceFlow)" strokeWidth="2" opacity="0.2" strokeDasharray="3,3">
                      <animateTransform attributeName="transform" type="rotate" values="0 350 250;360 350 250" dur="20s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Small orbiting elements */}
                    <circle cx="470" cy="250" r="6" fill="url(#serviceGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="0 350 250;360 350 250" dur="15s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" cy="130" r="6" fill="url(#serviceGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="90 350 250;450 350 250" dur="15s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="230" cy="250" r="6" fill="url(#serviceGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="180 350 250;540 350 250" dur="15s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" cy="370" r="6" fill="url(#serviceGrad)" opacity="0.7">
                      <animateTransform attributeName="transform" type="rotate" values="270 350 250;630 350 250" dur="15s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1.5s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  {/* Floating Data Particles */}
                  <circle cx="250" cy="150" r="3" fill="url(#serviceGrad)" opacity="0.6">
                    <animate attributeName="cy" values="150;130;150" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="450" cy="150" r="4" fill="url(#serviceGrad)" opacity="0.6">
                    <animate attributeName="cy" values="150;170;150" dur="2.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="300" r="3" fill="url(#serviceGrad)" opacity="0.6">
                    <animate attributeName="cy" values="300;280;300" dur="3.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="500" cy="300" r="4" fill="url(#serviceGrad)" opacity="0.6">
                    <animate attributeName="cy" values="300;320;300" dur="2.9s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.9s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 w-full px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>What We Offer</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Comprehensive digital solutions tailored to elevate your brand and drive measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card3D
                key={service.title}
                variant="glass"
                className={cn(
                  "group relative p-8 sm:p-10 h-full flex flex-col hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 overflow-hidden",
                  "border border-border/60 hover:border-primary/50",
                  "shadow-xl hover:shadow-2xl hover:shadow-primary/20",
                  "bg-card/90 backdrop-blur-md",
                  "rounded-3xl"
                )}
              >
                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/50 via-primary/40 to-primary/20 rounded-t-3xl" />
                
                {/* Service Number */}
                <div className="absolute top-5 right-5 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <span className="text-5xl font-bold text-muted-foreground/30 font-heading">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full pt-2">
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-5 sm:mb-6">
                  <div className={cn(
                      "relative shadow-xl flex items-center justify-center rounded-xl transition-all duration-300",
                      service.color === 'teal' 
                        ? "icon-box w-16 h-16 sm:w-20 sm:h-20"
                        : "icon-box-gold w-16 h-16 sm:w-20 sm:h-20"
                    )}>
                      <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-lg" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-2xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4 pr-12 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features with enhanced styling */}
                  <div className="space-y-2.5 pt-5 border-t border-border/60 group-hover:border-primary/40 transition-colors duration-500 mb-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground"
                      >
                        <CheckCircle2 className={cn(
                          "h-4 w-4 flex-shrink-0 transition-all duration-300",
                          service.color === 'teal'
                            ? "text-teal" 
                            : "text-gold"
                        )} strokeWidth={2.5} />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                   
                </div>
                
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 w-full px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Our Approach</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A proven approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your brand, goals, and audience" },
              { step: "02", title: "Strategy", desc: "Crafting a tailored plan for success" },
              { step: "03", title: "Execution", desc: "Bringing your vision to life with precision" },
              { step: "04", title: "Optimize", desc: "Continuous improvement for lasting results" },
            ].map((item, index) => (
              <Card3D
                key={item.step}
                variant="glass"
                className="p-6 text-center group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-3">{item.step}</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 max-w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Get Started</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Ready to Get{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">Started?</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-teal/50 via-gold/50 to-teal/50 blur-xl opacity-60" />
              </span>
          </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's discuss how we can help your brand reach its full potential.
          </p>
            
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="group relative overflow-hidden px-8 py-6 text-lg shadow-2xl shadow-teal/20 hover:shadow-teal/30 transition-all duration-300"
            >
            <Link to="/contact">
                <span className="relative z-10 flex items-center gap-3">
              Start Your Project
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
