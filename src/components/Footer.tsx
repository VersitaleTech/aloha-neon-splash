import React from 'react';
import { TropicalButton } from './ui/tropical-button';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import tropicalLeaves from '@/assets/tropical-leaves.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-primary/20">
      {/* Tropical background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-40 h-40 opacity-10"
          style={{ backgroundImage: `url(${tropicalLeaves})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
        />
        <div 
          className="absolute top-20 right-20 w-32 h-32 opacity-15 rotate-45"
          style={{ backgroundImage: `url(${tropicalLeaves})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
        />
        <div 
          className="absolute bottom-0 left-[30%] w-60 h-60 opacity-5 -rotate-12"
          style={{ backgroundImage: `url(${tropicalLeaves})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
        />
      </div>
      
      {/* Palm tree silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30"></div>
      <div className="absolute bottom-0 left-10 text-6xl opacity-40">🌴</div>
      <div className="absolute bottom-0 right-10 text-8xl opacity-30">🌴</div>
      <div className="absolute bottom-0 left-[25%] text-5xl opacity-35">🌴</div>
      <div className="absolute bottom-0 right-[30%] text-7xl opacity-25">🌴</div>
      
      {/* Floating bubbles */}
      <div className="absolute top-10 left-[20%] w-4 h-4 bg-primary/30 rounded-full bubble-float"></div>
      <div className="absolute top-20 right-[15%] w-6 h-6 bg-secondary/25 rounded-full bubble-float-delayed"></div>
      <div className="absolute top-16 left-[60%] w-5 h-5 bg-accent/30 rounded-full bubble-float"></div>
      
      <div className="relative z-10 pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-black mb-4 bg-gradient-tropical bg-clip-text text-transparent">
                ALOHA Laundry
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Bringing the spirit of Hawaii to your laundry experience. 
                Fresh, fast, and filled with Aloha! 🌺
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <TropicalButton variant="outline" size="icon">
                  <Facebook className="w-5 h-5" />
                </TropicalButton>
                <TropicalButton variant="outline" size="icon">
                  <Instagram className="w-5 h-5" />
                </TropicalButton>
              </div>
            </div>
            
            {/* Quick Contact */}
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-6 text-secondary">
                Quick Contact 📞
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-lg font-semibold">(808) 555-ALOHA</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span className="text-lg">hello@alohalaundry.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-lg">123 Tropical Paradise Blvd</span>
                </div>
              </div>
            </div>
            
            {/* Hours */}
            <div className="text-center md:text-right">
              <h4 className="text-2xl font-bold mb-6 text-accent">
                Quick Hours ⏰
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg"><strong>Mon-Sat:</strong> 8AM - 8PM</p>
                <p className="text-lg"><strong>Sunday:</strong> Closed</p>
                <p className="text-sm mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  🌊 Self-Service 24/7! 🌊
                </p>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-tropical mx-auto mb-8"></div>
          
          {/* Bottom section */}
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-4">
              © 2024 ALOHA Laundry. Made with 🌺 and lots of Aloha spirit!
            </p>
            <p className="text-sm text-muted-foreground/70">
              Experience the tropical difference in laundry care.
            </p>
            
            {/* Decorative wave */}
            <div className="flex justify-center mt-8 space-x-2 text-2xl">
              <span className="animate-bounce">🌊</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌊</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌊</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;