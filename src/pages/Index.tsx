import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import HoursSection from '../components/HoursSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <MapSection />
      <HoursSection />
      <Footer />
    </div>
  );
};

export default Index;
