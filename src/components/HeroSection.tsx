import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "(323) 991-8637";
const TEL_LINK = "tel:+13239918637";
const SMS_LINK = "sms:+13239918637";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-16 md:py-24 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-4 leading-tight text-balance animate-fade-in">
          Never Wait on a Plumber Again.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Call or text us and get a fast response from a real local plumbing team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button variant="hero" size="xl" asChild>
            <a href={TEL_LINK}>
              <Phone className="w-6 h-6" />
              Call Now
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href={SMS_LINK}>
              <MessageCircle className="w-6 h-6" />
              Text Us
            </a>
          </Button>
        </div>
        
        <a 
          href={TEL_LINK} 
          className="inline-block text-2xl md:text-3xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          {PHONE_NUMBER}
        </a>
        
        <p className="text-primary-foreground/80 mt-4 text-sm md:text-base animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Serving Los Angeles and surrounding areas
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
