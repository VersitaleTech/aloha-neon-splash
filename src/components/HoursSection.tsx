import React from 'react';
import { TropicalCard, TropicalCardContent, TropicalCardHeader, TropicalCardTitle } from './ui/tropical-card';
import { Clock } from 'lucide-react';

const HoursSection = () => {
  const hours = [
    { day: 'Monday', time: '8:00 AM - 8:00 PM', open: true },
    { day: 'Tuesday', time: '8:00 AM - 8:00 PM', open: true },
    { day: 'Wednesday', time: '8:00 AM - 8:00 PM', open: true },
    { day: 'Thursday', time: '8:00 AM - 8:00 PM', open: true },
    { day: 'Friday', time: '8:00 AM - 8:00 PM', open: true },
    { day: 'Saturday', time: '8:00 AM - 8:00 PM', open: true },
    { day: 'Sunday', time: 'Closed', open: false },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-sunset bg-clip-text text-transparent">
            Operating Hours
          </h2>
          <p className="text-xl text-muted-foreground">
            We're here to serve you with Aloha spirit! 🕐
          </p>
          <div className="w-24 h-1 bg-gradient-tropical mx-auto rounded-full mt-6"></div>
        </div>
        
        <TropicalCard variant="gradient" className="relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 text-4xl opacity-30">⏰</div>
          <div className="absolute bottom-6 left-6 text-3xl opacity-20">🌺</div>
          
          <TropicalCardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-white/20">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
            <TropicalCardTitle className="text-white text-3xl">
              Visit Us During These Hours
            </TropicalCardTitle>
            <p className="text-white/80 text-lg">
              Fresh laundry service when you need it most!
            </p>
          </TropicalCardHeader>
          
          <TropicalCardContent className="px-8 pb-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="grid gap-4">
                {hours.map((schedule, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center p-4 rounded-xl transition-all ${
                      schedule.open 
                        ? 'bg-white/20 hover:bg-white/30' 
                        : 'bg-destructive/20 hover:bg-destructive/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        schedule.open ? 'bg-secondary glow-green' : 'bg-destructive'
                      }`}></div>
                      <span className="text-white font-semibold text-lg">
                        {schedule.day}
                      </span>
                    </div>
                    <span className={`font-bold text-lg ${
                      schedule.open ? 'text-white' : 'text-destructive-foreground'
                    }`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Special Note */}
              <div className="mt-6 p-4 bg-accent/20 rounded-xl border border-accent/30">
                <p className="text-white text-center font-semibold">
                  🌊 Self-Service Machines Available 24/7! 🌊
                </p>
              </div>
            </div>
          </TropicalCardContent>
        </TropicalCard>
        
        {/* Floating tropical elements */}
        <div className="flex justify-center items-center space-x-8 mt-12 text-3xl">
          <div className="bubble-float">🏄‍♂️</div>
          <div className="bubble-float-delayed">🧺</div>
          <div className="bubble-float">🌴</div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;