import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { toast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  Instagram,
  Send,
  MapPin,
  Sparkles,
} from "lucide-react";
import contactImage from "@/assets/contact-support.jpg";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Contact Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
              Let's Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
              Have a project in mind? We'd love to hear about it. Get in touch and 
              let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:8937888833"
                  className="card-3d p-6 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center shadow-glow-teal">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      8937888833
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:support@thebrandversestudio.com"
                  className="card-3d p-6 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-glow-gold">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      support@thebrandversestudio.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/the_bvsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-3d p-6 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-navy flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      @the_bvsofficial
                    </p>
                  </div>
                </a>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={contactImage}
                  alt="Our support team"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-secondary-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Ready to help 24/7</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <div className="card-3d p-8 lg:p-10">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input
                      id="service"
                      placeholder="e.g., Brand Strategy, SEO, Social Media"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
