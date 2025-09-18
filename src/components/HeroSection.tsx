import React from 'react';
import { TropicalButton } from './ui/tropical-button';
import BubbleAnimation from './BubbleAnimation';
import heroBackground from '@/assets/tropical-hero-bg.jpg';
import alohaLogo from '@/assets/aloha-logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60"></div>
      </div>
      
      {/* Bubble Animation */}
      <BubbleAnimation />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={alohaLogo} 
            alt="ALOHA Laundry Logo" 
            className="h-24 md:h-32 object-contain pulse-tropical"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-tropical bg-clip-text text-transparent">
          ALOHA
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground drop-shadow-lg">
          Laundry
        </h2>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-semibold mb-12 text-foreground/90 drop-shadow-md">
          Fresh, Fast & Tropical Clean! 🌺
        </p>
        
        {/* CTA Button */}
        <TropicalButton variant="hero" size="lg" className="mb-8">
          Get Your Laundry Done Today
        </TropicalButton>
        
        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          <div className="text-4xl animate-bounce">🌴</div>
          <div className="text-3xl animate-pulse">🧺</div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🌺</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;