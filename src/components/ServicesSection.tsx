import { Droplets, CircleOff, Flame, PipetteIcon, Trash2, Bath } from "lucide-react";

const services = [
  { icon: Droplets, name: "Emergency leak repair" },
  { icon: CircleOff, name: "Clogged drains & toilets" },
  { icon: Flame, name: "Water heater repair & replacement" },
  { icon: PipetteIcon, name: "Burst pipe repair" },
  { icon: Trash2, name: "Garbage disposal repair" },
  { icon: Bath, name: "Fixture installs (sinks, faucets, toilets)" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 section-alt">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our Services
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
