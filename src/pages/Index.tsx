import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import TextPolicy from "@/components/TextPolicy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <TextPolicy />
      <Footer />
    </main>
  );
};

export default Index;
