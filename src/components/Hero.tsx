
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="leaf-decoration top-20 left-[5%] animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="leaf-decoration bottom-40 right-[10%] animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="leaf-decoration top-40 right-[20%] animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Cloud-like shapes */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-ghibli-blue/10 blur-3xl"></div>
      <div className="absolute bottom-[5%] right-[5%] w-[30%] h-[30%] rounded-full bg-ghibli-green/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block text-ghibli-brown">Creating </span>
            <span className="block text-ghibli-blue">Magical Digital </span>
            <span className="block">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg">
            Welcome to my Ghibli-inspired portfolio, where enchanting design meets modern web development
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="ghibli-btn">
              View My Work
            </a>
            <a 
              href="#about" 
              className="px-5 py-2 border border-ghibli-blue/50 text-foreground rounded-md hover:bg-ghibli-blue/10 transition-colors duration-300 font-medium"
            >
              About Me
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Main circular frame */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ghibli-blue/40 to-ghibli-green/40 animate-float" style={{ animationDelay: '1s' }}></div>
            
            {/* Inner image frame */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/80 bg-ghibli-cream/50">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Ghibli-inspired landscape" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            
            {/* Small decorative circles */}
            <div className={cn(
              "absolute w-16 h-16 rounded-full bg-ghibli-peach/80 animate-float",
              "top-[10%] -right-[5%]"
            )} style={{ animationDelay: '0.5s' }}></div>
            
            <div className={cn(
              "absolute w-12 h-12 rounded-full bg-ghibli-green/80 animate-float",
              "bottom-[10%] -left-[5%]"
            )} style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-foreground/70 hover:text-foreground transition-colors"
      >
        <span className="mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
