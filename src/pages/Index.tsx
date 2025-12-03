import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import {
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Zap,
  Award,
  ArrowRight,
  Sparkles,
  LineChart,
  Megaphone,
} from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Crafting unique brand identities that resonate with your audience and stand out in the market.",
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description: "Data-driven campaigns that connect you with the right customers at the right time.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth",
    description: "Optimizing your digital presence to drive organic traffic and sustainable growth.",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Building engaged communities and amplifying your brand voice across platforms.",
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Transforming data into actionable insights that fuel smarter business decisions.",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    description: "Compelling stories and visuals that capture attention and inspire action.",
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
    icon: Award,
    title: "Award-Winning",
    description: "Recognized excellence in digital branding",
  },
  {
    icon: Target,
    title: "Data-Driven",
    description: "Decisions backed by real analytics",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Abstract 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-soft animation-delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
                <Sparkles className="h-4 w-4" />
                Digital Branding Excellence
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in animation-delay-100">
                Building Brands.{" "}
                <span className="gradient-text">Creating Connections.</span>{" "}
                Driving Growth.
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in animation-delay-200">
                At Brandverse Studio, we craft powerful digital strategies that help your brand 
                stand out, speak louder, and grow faster in today's digital world.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button variant="hero" asChild>
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-right animation-delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Creative team collaborating"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-medium animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Growth Rate</p>
                    <p className="text-2xl font-bold gradient-text">+180%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Block */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              "We're not just an agency. We're your partner in shaping a brand story that{" "}
              <span className="text-foreground font-medium">inspires trust</span>, builds{" "}
              <span className="text-primary font-medium">loyalty</span>, and drives{" "}
              <span className="text-gold font-medium">real impact</span>."
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive digital solutions tailored to elevate your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-3d p-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-teal flex items-center justify-center mb-6 shadow-glow-teal">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Brandverse?
            </h2>
            <p className="text-muted-foreground text-lg">
              What sets us apart in the digital landscape
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center shadow-glow-gold">
                  <item.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Let's create something extraordinary together. Transform your vision into a brand 
            that people love and remember.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Let's Build Your Brand
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
