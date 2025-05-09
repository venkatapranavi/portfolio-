
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-ghibli-cream py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="font-serif text-xl font-semibold">
              <span className="text-ghibli-blue">Ghibli</span>
              <span className="text-foreground">Portfolio</span>
            </a>
            <p className="mt-2 text-sm text-foreground/70 max-w-xs">
              Crafting magical digital experiences inspired by Studio Ghibli's enchanting worlds
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="font-medium mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#hero" className="hover:text-ghibli-blue transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-ghibli-blue transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-ghibli-blue transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-ghibli-blue transition-colors">Skills</a></li>
                <li><a href="#contact" className="hover:text-ghibli-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-ghibli-blue transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-ghibli-blue transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-ghibli-blue transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-ghibli-blue transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-ghibli-blue/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Ghibli Portfolio. All rights reserved.
          </p>
          
          <button onClick={scrollToTop} className="flex items-center gap-2 text-sm hover:text-ghibli-blue transition-colors">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
