import React from 'react';
import { TropicalCard } from './ui/tropical-card';
import tropicalLeaves from '@/assets/tropical-leaves.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background Decorations */}
      <div 
        className="absolute top-10 right-10 w-32 h-32 opacity-20"
        style={{ backgroundImage: `url(${tropicalLeaves})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-40 h-40 opacity-15 rotate-45"
        style={{ backgroundImage: `url(${tropicalLeaves})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-tropical mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <TropicalCard variant="neon" padding="lg" className="relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl opacity-30">🌺</div>
            <h3 className="text-3xl font-bold mb-6 text-primary">
              Welcome to Paradise Cleaning! 🏝️
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              At ALOHA Laundry, we bring the spirit of Hawaii to your laundry experience. 
              Our friendly ohana (family) is dedicated to providing you with the highest 
              quality cleaning services while spreading the Aloha spirit.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From the moment you walk through our doors, you'll feel the warm, 
              welcoming atmosphere that makes doing laundry feel like a mini vacation!
            </p>
          </TropicalCard>
          
          <TropicalCard variant="secondary" padding="lg" className="relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl opacity-30">🧽</div>
            <h3 className="text-3xl font-bold mb-6 text-secondary">
              Quality & Convenience 🌴
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-secondary glow-green"></div>
                <span className="text-lg">Premium eco-friendly detergents</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-accent glow-blue"></div>
                <span className="text-lg">State-of-the-art washing machines</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-primary glow-pink"></div>
                <span className="text-lg">Expert garment care specialists</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-secondary glow-green"></div>
                <span className="text-lg">Fast turnaround times</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-accent glow-blue"></div>
                <span className="text-lg">Exceptional customer service</span>
              </div>
            </div>
          </TropicalCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;