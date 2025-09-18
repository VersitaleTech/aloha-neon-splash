import React from 'react';

const BubbleAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Bubbles */}
      <div className="absolute top-20 left-[10%] w-4 h-4 bg-primary/30 rounded-full bubble-float"></div>
      <div className="absolute top-32 right-[15%] w-6 h-6 bg-secondary/40 rounded-full bubble-float-delayed"></div>
      <div className="absolute top-40 left-[20%] w-3 h-3 bg-accent/35 rounded-full bubble-float"></div>
      <div className="absolute top-60 right-[25%] w-5 h-5 bg-primary/25 rounded-full bubble-float-delayed"></div>
      <div className="absolute top-80 left-[30%] w-7 h-7 bg-secondary/30 rounded-full bubble-float"></div>
      <div className="absolute top-96 right-[10%] w-4 h-4 bg-accent/40 rounded-full bubble-float-delayed"></div>
      
      {/* Medium Bubbles */}
      <div className="absolute top-[20%] left-[5%] w-8 h-8 bg-primary/20 rounded-full bubble-float opacity-60"></div>
      <div className="absolute top-[30%] right-[8%] w-10 h-10 bg-secondary/25 rounded-full bubble-float-delayed opacity-50"></div>
      <div className="absolute top-[50%] left-[12%] w-6 h-6 bg-accent/30 rounded-full bubble-float opacity-70"></div>
      <div className="absolute top-[70%] right-[20%] w-9 h-9 bg-primary/15 rounded-full bubble-float-delayed opacity-40"></div>
      
      {/* Large Background Bubbles */}
      <div className="absolute top-[15%] right-[5%] w-20 h-20 bg-secondary/10 rounded-full bubble-float opacity-30"></div>
      <div className="absolute top-[60%] left-[8%] w-16 h-16 bg-accent/15 rounded-full bubble-float-delayed opacity-25"></div>
      <div className="absolute top-[85%] right-[15%] w-24 h-24 bg-primary/8 rounded-full bubble-float opacity-20"></div>
    </div>
  );
};

export default BubbleAnimation;