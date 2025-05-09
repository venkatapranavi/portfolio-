
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm',
        isScrolled ? 'bg-background/80 shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl md:text-2xl font-semibold">
          <span className="text-ghibli-blue">Ghibli</span>
          <span className="text-foreground">Portfolio</span>
        </a>
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMenu} 
              className="text-foreground p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
                <nav className="container py-4">
                  <ul className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="block py-2 px-4 hover:bg-ghibli-cream rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav>
            <ul className="flex items-center space-x-1 md:space-x-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-item">
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="ml-4">
                <a href="#contact" className="ghibli-btn">
                  Get in Touch
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
