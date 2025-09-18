import React from 'react';
import { TropicalCard } from './ui/tropical-card';
import tropicalLeaves from '@/assets/tropical-leaves.png';

const MapSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-background relative">
      {/* Decorative Elements */}
      <div 
        className="absolute top-10 left-10 w-20 h-20 opacity-20"
        style={{ backgroundImage: `url(${tropicalLeaves})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-32 h-32 opacity-15 -rotate-45"
        style={{ backgroundImage: `url(${tropicalLeaves})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-ocean bg-clip-text text-transparent">
            Find Our Tropical Oasis
          </h2>
          <p className="text-xl text-muted-foreground">
            Located in the heart of Honolulu! 🗺️
          </p>
          <div className="w-24 h-1 bg-gradient-tropical mx-auto rounded-full mt-6"></div>
        </div>
        
        <TropicalCard variant="neon" padding="none" className="relative overflow-hidden shadow-2xl">
          {/* Decorative palm trees around the map */}
          <div className="absolute top-4 left-4 z-10 text-2xl opacity-60">🌴</div>
          <div className="absolute top-4 right-4 z-10 text-2xl opacity-60">🌺</div>
          <div className="absolute bottom-4 left-4 z-10 text-2xl opacity-60">🏄‍♀️</div>
          <div className="absolute bottom-4 right-4 z-10 text-2xl opacity-60">🌊</div>
          
          {/* Google Maps Embed */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.2!2d-157.8583!3d21.3099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00183b8cc3464d%3A0x4b2c9c8b8e8e8e8e!2sHonolulu%2C%20HI!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '0 0 1.5rem 1.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ALOHA Laundry Location"
              className="filter brightness-90 contrast-110"
            />
            
            {/* Tropical overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10 pointer-events-none rounded-b-3xl"></div>
          </div>
          
          {/* Map Info Card */}
          <div className="p-6 bg-gradient-tropical text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">ALOHA Laundry 🌺</h3>
                <p className="text-white/90 text-lg">123 Tropical Paradise Blvd</p>
                <p className="text-white/90">Honolulu, HI 96813</p>
              </div>
              <div className="text-right">
                <p className="text-white/90 font-semibold">Call us:</p>
                <p className="text-xl font-bold">(808) 555-ALOHA</p>
              </div>
            </div>
          </div>
        </TropicalCard>
        
        {/* Floating bubbles around map */}
        <div className="relative mt-8">
          <div className="absolute -top-4 left-[20%] w-6 h-6 bg-primary/30 rounded-full bubble-float"></div>
          <div className="absolute -top-8 right-[30%] w-4 h-4 bg-secondary/40 rounded-full bubble-float-delayed"></div>
          <div className="absolute -top-6 left-[60%] w-8 h-8 bg-accent/25 rounded-full bubble-float"></div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;