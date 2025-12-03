import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
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
} from "lucide-react";
import servicesImage from "@/assets/services-laptop.jpg";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy & Communication",
    description:
      "We develop comprehensive brand strategies that define your unique positioning, messaging, and visual identity to create lasting impressions.",
    features: ["Brand Positioning", "Visual Identity", "Brand Guidelines", "Messaging Framework"],
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your visibility with data-driven SEO strategies that improve rankings, drive organic traffic, and increase conversions.",
    features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build engaged communities and amplify your brand voice across all major social platforms with strategic content and campaigns.",
    features: ["Content Strategy", "Community Management", "Paid Social", "Influencer Marketing"],
  },
  {
    icon: FileText,
    title: "Content Creation & Marketing",
    description:
      "Compelling stories and visuals that capture attention, engage audiences, and drive meaningful action.",
    features: ["Blog Writing", "Video Production", "Graphic Design", "Email Marketing"],
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Maximize ROI with targeted advertising campaigns across Google, social media, and programmatic networks.",
    features: ["Google Ads", "Display Advertising", "Retargeting", "Campaign Optimization"],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Beautiful, responsive websites that convert visitors into customers with seamless user experiences.",
    features: ["UI/UX Design", "Web Development", "E-commerce", "Landing Pages"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Transform data into actionable insights with comprehensive analytics and transparent reporting.",
    features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Strategic Insights"],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                Our Services
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
                Digital Solutions That{" "}
                <span className="gradient-text">Drive Results</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
                From brand strategy to execution, we offer comprehensive digital services 
                designed to elevate your brand and accelerate growth.
              </p>
            </div>

            <div className="animate-fade-in-right animation-delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={servicesImage}
                  alt="Digital marketing analytics"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card">
        <div className="section-container">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-3d p-8 lg:p-10 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: "forwards" }}
              >
                <div className="grid lg:grid-cols-[auto,1fr,auto] gap-8 items-start">
                  <div className="w-16 h-16 rounded-xl bg-gradient-teal flex items-center justify-center shadow-glow-teal shrink-0">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <span className="text-6xl font-bold text-muted/50 font-heading">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how we can help your brand reach its full potential.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
