import { Clock, Shield, DollarSign, Users } from "lucide-react";

const reasons = [
  { icon: Clock, text: "24/7 emergency response" },
  { icon: Shield, text: "Licensed and insured plumbers" },
  { icon: DollarSign, text: "Upfront, honest pricing" },
  { icon: Users, text: "Friendly, local team" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-card">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          Why Choose Us
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 bg-background rounded-xl border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">{reason.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
