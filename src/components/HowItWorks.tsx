import { MessageSquare, ClipboardList, Wrench } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Step 1",
    description: "Call or text us at (323) 991-8637 and tell us what's going on.",
  },
  {
    icon: ClipboardList,
    title: "Step 2",
    description: "We ask a few quick questions and schedule a visit.",
  },
  {
    icon: Wrench,
    title: "Step 3",
    description: "A licensed plumber comes out and fixes the problem.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-card">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
