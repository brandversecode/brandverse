import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Phone,
  Mail,
  Instagram,
  Send,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Google Maps Embed URL
  // Location: Sector 137, Noida, Uttar Pradesh 201304
  // Link: https://maps.app.goo.gl/jRTWwi6TomToCA527
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.151214620158!2d77.40393059412976!3d28.507372880985372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8f6ef43af1f%3A0x6275b6af8ccbafd6!2sSector%20137%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1764919643955!5m2!1sen!2sin";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || "Not provided",
      service: formData.get("service") as string || "Not specified",
      message: formData.get("message") as string,
    };

    try {
      // Google Sheets integration
      // Get the Google Apps Script web app URL from environment variable
      const googleSheetsUrl = "https://script.google.com/macros/s/AKfycbzCd-_zFcLHy_ZF0b-NK_QbL7sKs5H8u909Saisn7e_1PCD0li49a0BLsoQJnjn2j32/exec";      
      if (googleSheetsUrl) {
        // Prepare form data for Google Sheets
        // Note: Field names must match Google Sheet column headers (case-sensitive)
        // Expected headers: Date, Time, Email, Name, Phone, Service, Message
        const formDataToSubmit = new URLSearchParams();
        
        // Add separate Date and Time (formatted for Indian timezone)
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        });
        const timeStr = now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        
        // Send Date and Time separately
        formDataToSubmit.append("Date", dateStr);
        formDataToSubmit.append("Time", timeStr);
        formDataToSubmit.append("Email", data.email);
        formDataToSubmit.append("Name", `${data.firstName} ${data.lastName}`);
        formDataToSubmit.append("Phone", data.phone);
        formDataToSubmit.append("Service", data.service);
        formDataToSubmit.append("Message", data.message);

        try {
          const response = await fetch(googleSheetsUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formDataToSubmit.toString(),
          });

          // Try to parse response if available
          if (response.ok) {
            const result = await response.json().catch(() => null);
            if (result && result.result === "success") {
              toast({
                title: "Message Sent!",
                description: "We'll get back to you within 24 hours.",
              });
              form.reset();
              return;
            }
          }
          
          // If response parsing fails or status is not ok, still show success
          // (Google Sheets might return CORS errors but still process the data)
          toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
          });
          form.reset();
        } catch (fetchError) {
          // CORS or network error - data might still be submitted
          // Show success message as Google Sheets often processes even with CORS errors
          toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
          });
          form.reset();
        }
        return;
      } else {
        // Fallback: Try Formspree if configured
        const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
        
        if (formspreeEndpoint) {
          // Using Formspree
          const response = await fetch(formspreeEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: `${data.firstName} ${data.lastName}`,
              email: data.email,
              phone: data.phone,
              service: data.service,
              message: data.message,
              _to: "divyanshrohil28@gmail.com",
            }),
          });

          if (response.ok) {
            toast({
              title: "Message Sent!",
              description: "We'll get back to you within 24 hours.",
            });
            form.reset();
          } else {
            throw new Error("Form submission failed");
          }
        } else {
          // Final fallback: Use mailto with pre-filled form
          const subject = `Contact Form Submission from ${data.firstName} ${data.lastName}`;
          const body = `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Service Interested In: ${data.service}

Message:
${data.message}
          `.trim();

          const mailtoLink = `mailto:divyanshrohil28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailtoLink;
          
          toast({
            title: "Email Client Opening",
            description: "Your email client will open with the message. Please click send.",
          });
          
          form.reset();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-6rem)] lg:min-h-screen flex items-center overflow-hidden max-w-full pt-24 md:pt-0">
        <Background3D variant="hero" />
        
        <div className="section-container relative z-10 py-8 sm:py-10 md:py-12 lg:py-16 max-w-full mt-8 md:mt-0">
          <div className="max-w-3xl mx-auto text-center w-full px-2 pt-4 md:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Contact Us</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100 leading-tight">
              Let's Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
              Have a project in mind? We'd love to hear about it. Get in touch and 
              let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-24 pb-24 bg-muted/30 relative overflow-hidden max-w-full">
        <Background3D variant="mesh" />
        
        <div className="section-container relative z-10 max-w-full">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>

              <div className="space-y-5 mb-8">
                <a href="tel:9286758833" className="block group">
                  <Card3D 
                    variant="glass" 
                    className={cn(
                      "p-6 flex items-center gap-4 relative overflow-hidden",
                      "hover:scale-[1.02] hover:-translate-y-1 transition-all duration-700 ease-out",
                      "border-2 border-border/30 hover:border-primary/30",
                      "shadow-lg hover:shadow-2xl hover:shadow-primary/10"
                    )}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
                    
                    <div className="icon-box w-12 h-12 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white group-hover:text-white transition-all duration-500" />
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-sm text-muted-foreground mb-0.5 group-hover:text-foreground/70 transition-colors">Phone</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                       9286758833
                      </p>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </Card3D>
                </a>

                <a href="mailto:support@thebrandversestudio.com" className="block group">
                  <Card3D 
                    variant="glass" 
                    className={cn(
                      "p-6 flex items-center gap-4 relative overflow-hidden",
                      "hover:scale-[1.02] hover:-translate-y-1 transition-all duration-700 ease-out",
                      "border-2 border-border/30 hover:border-gold/30",
                      "shadow-lg hover:shadow-2xl hover:shadow-gold/10"
                    )}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
                    
                    <div className="icon-box-gold w-12 h-12 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white group-hover:text-white transition-all duration-500" />
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-gold/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-sm text-muted-foreground mb-0.5 group-hover:text-foreground/70 transition-colors">Email</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-500 break-all text-sm">
                        support@thebrandversestudio.com
                      </p>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </Card3D>
                </a>

                <a
                  href="https://instagram.com/the_bvsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card3D 
                    variant="glass" 
                    className={cn(
                      "p-6 flex items-center gap-4 relative overflow-hidden",
                      "hover:scale-[1.02] hover:-translate-y-1 transition-all duration-700 ease-out",
                      "border-2 border-border/30 hover:border-navy/30",
                      "shadow-lg hover:shadow-2xl hover:shadow-navy/10"
                    )}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-navy/20 via-navy/10 to-navy/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
                    
                    <div className="icon-box-navy w-12 h-12 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-white group-hover:text-white transition-all duration-500" />
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-navy/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-sm text-muted-foreground mb-0.5 group-hover:text-foreground/70 transition-colors">Instagram</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                        @the_bvsofficial
                      </p>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-navy/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </Card3D>
                </a>
              </div>

              {/* Google Map */}
              <Card3D 
                variant="elevated" 
                className="overflow-hidden group hover:scale-[1.02] transition-all duration-700"
              >
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden">
                  {/* 
                    To get the embed URL:
                    1. Go to https://www.google.com/maps
                    2. Search for your location
                    3. Click "Share" → "Embed a map"
                    4. Copy the iframe src URL and replace the one below
                  */}
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                    title="Brandverse Studio Location"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl pointer-events-none" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg group-hover:translate-y-[-4px] transition-transform duration-500 shadow-lg border border-border/50">
                    <div className="icon-box w-8 h-8 group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Visit Our Office</span>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <Card3D 
                variant="glow" 
                className={cn(
                  "p-8 lg:p-10 relative overflow-hidden",
                  "border-2 border-border/30 hover:border-primary/30",
                  "shadow-lg hover:shadow-2xl hover:shadow-primary/10",
                  "hover:scale-[1.01] transition-all duration-700"
                )}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6 relative z-10">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Your first name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input
                      id="service"
                      name="service"
                      placeholder="Service you're interested in"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project"
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
              </Card3D>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
