import React, { useState } from 'react';
import { TropicalCard, TropicalCardContent, TropicalCardHeader, TropicalCardTitle } from './ui/tropical-card';
import { TropicalButton } from './ui/tropical-button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🌺",
      description: "Mahalo! We'll get back to you with Aloha spirit soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-tropical bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to experience the Aloha difference? Contact us today! 🏄‍♀️
          </p>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <TropicalCard variant="neon" className="relative overflow-hidden">
              <TropicalCardHeader>
                <div className="absolute top-4 right-4 text-3xl opacity-30">📞</div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/20 glow-pink">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <TropicalCardTitle className="text-2xl">Call Us</TropicalCardTitle>
                    <p className="text-muted-foreground">Ready to help with Aloha spirit!</p>
                  </div>
                </div>
              </TropicalCardHeader>
              <TropicalCardContent>
                <p className="text-2xl font-bold text-primary">(808) 555-ALOHA</p>
                <p className="text-lg text-muted-foreground">(808) 555-2564</p>
              </TropicalCardContent>
            </TropicalCard>
            
            <TropicalCard variant="secondary" className="relative overflow-hidden">
              <TropicalCardHeader>
                <div className="absolute top-4 right-4 text-3xl opacity-30">✉️</div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-secondary/20 glow-green">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <TropicalCardTitle className="text-2xl">Email Us</TropicalCardTitle>
                    <p className="text-muted-foreground">We love hearing from you!</p>
                  </div>
                </div>
              </TropicalCardHeader>
              <TropicalCardContent>
                <p className="text-xl font-semibold text-secondary">hello@alohalaundry.com</p>
                <p className="text-lg text-muted-foreground">service@alohalaundry.com</p>
              </TropicalCardContent>
            </TropicalCard>
            
            <TropicalCard variant="accent" className="relative overflow-hidden">
              <TropicalCardHeader>
                <div className="absolute top-4 right-4 text-3xl opacity-30">🗺️</div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-accent/20 glow-blue">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <TropicalCardTitle className="text-2xl">Visit Us</TropicalCardTitle>
                    <p className="text-muted-foreground">Come feel the tropical vibes!</p>
                  </div>
                </div>
              </TropicalCardHeader>
              <TropicalCardContent>
                <p className="text-lg font-semibold text-accent">123 Tropical Paradise Blvd</p>
                <p className="text-lg text-muted-foreground">Honolulu, HI 96813</p>
              </TropicalCardContent>
            </TropicalCard>
          </div>
          
          {/* Contact Form */}
          <TropicalCard variant="gradient" className="relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl opacity-30">🌺</div>
            <TropicalCardHeader>
              <TropicalCardTitle className="text-white text-3xl">Send us a Message</TropicalCardTitle>
              <p className="text-white/80">We'd love to hear from you!</p>
            </TropicalCardHeader>
            <TropicalCardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white font-semibold">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Your tropical name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white font-semibold">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                <TropicalButton 
                  type="submit" 
                  variant="outline" 
                  className="w-full border-white text-white hover:bg-white hover:text-primary"
                >
                  Send Message 🌊
                </TropicalButton>
              </form>
            </TropicalCardContent>
          </TropicalCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;