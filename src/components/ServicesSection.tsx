import React from 'react';
import { TropicalCard, TropicalCardContent, TropicalCardHeader, TropicalCardTitle } from './ui/tropical-card';
import { Shirt, Sparkles, Settings, Truck } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Shirt className="w-12 h-12" />,
      title: "Wash & Fold",
      description: "Professional washing and folding service with premium detergents and fabric softeners. Your clothes come back fresh and perfectly folded!",
      variant: "neon" as const,
      accent: "🧺"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Dry Cleaning",
      description: "Expert dry cleaning for your delicate and special garments. We handle suits, dresses, and formal wear with tropical care.",
      variant: "secondary" as const,
      accent: "✨"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Self-Service Machines",
      description: "Modern, high-efficiency washers and dryers available 24/7. Enjoy our comfortable tropical atmosphere while you wait.",
      variant: "accent" as const,
      accent: "⚙️"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Pickup & Delivery",
      description: "Convenient pickup and delivery service straight to your door. Schedule online and let us handle the rest with Aloha spirit!",
      variant: "neon" as const,
      accent: "🚚"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-ocean bg-clip-text text-transparent">
            Our Tropical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the island life with our comprehensive laundry services! 🌊
          </p>
          <div className="w-24 h-1 bg-gradient-tropical mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <TropicalCard 
              key={index} 
              variant={service.variant}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <TropicalCardHeader className="text-center relative">
                <div className="absolute top-2 right-2 text-2xl opacity-50">
                  {service.accent}
                </div>
                <div className="mx-auto mb-4 flex justify-center text-current">
                  {service.icon}
                </div>
                <TropicalCardTitle className="text-xl font-bold">
                  {service.title}
                </TropicalCardTitle>
              </TropicalCardHeader>
              <TropicalCardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </TropicalCardContent>
              
              {/* Decorative bottom wave */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-tropical opacity-50 rounded-b-3xl"></div>
            </TropicalCard>
          ))}
        </div>
        
        {/* Decorative floating elements */}
        <div className="flex justify-center items-center space-x-12 mt-16 text-4xl">
          <div className="bubble-float">🌺</div>
          <div className="bubble-float-delayed">🧼</div>
          <div className="bubble-float">🌴</div>
          <div className="bubble-float-delayed">💧</div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;