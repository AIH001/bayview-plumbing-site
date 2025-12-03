import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "(323) 991-8637";
const TEL_LINK = "tel:+13239918637";
const SMS_LINK = "sms:+13239918637";

const CTASection = () => {
  return (
    <section className="hero-gradient py-16 md:py-20 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
          Need help right now?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-6">
          Call or text us and we'll get back to you fast.
        </p>
        
        <a 
          href={TEL_LINK} 
          className="inline-block text-3xl md:text-4xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors mb-8"
        >
          {PHONE_NUMBER}
        </a>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href={TEL_LINK}>
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href={SMS_LINK}>
              <MessageCircle className="w-5 h-5" />
              Text Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
