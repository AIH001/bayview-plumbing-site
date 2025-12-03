import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike R.",
    text: "Had a burst pipe at 2 AM. Called Aiss Plumbing and they were at my door within an hour. Saved my kitchen from serious water damage. Can't recommend them enough!",
  },
  {
    name: "Jasmine L.",
    text: "Super easy to text them my problem. Got a response right away and a plumber showed up the same day. Professional, fast, and fair pricing.",
  },
  {
    name: "Carlos M.",
    text: "These guys are the real deal. Fixed my water heater quickly and didn't try to upsell me on stuff I didn't need. Will definitely call again.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 section-alt">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          What Our Customers Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-foreground">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
