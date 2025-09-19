import React from 'react';
import { TropicalButton } from './ui/tropical-button';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Aloha-Laundry-Logo-Without-background .png" 
              alt="ALOHA Laundry Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <TropicalButton 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary"
            >
              About Us
            </TropicalButton>
            <TropicalButton 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary"
            >
              Services
            </TropicalButton>
            <TropicalButton 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary"
            >
              Contact
            </TropicalButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;