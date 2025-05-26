import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-sage-600 font-serif text-2xl font-semibold">
            Serenity
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-charcoal hover:text-sage-600 transition-colors">Services</a>
            <a href="#practitioners" className="text-charcoal hover:text-sage-600 transition-colors">Practitioners</a>
            <a href="#testimonials" className="text-charcoal hover:text-sage-600 transition-colors">Testimonials</a>
            <a href="#blog" className="text-charcoal hover:text-sage-600 transition-colors">Wellness Blog</a>
            <a href="#contact" className="text-charcoal hover:text-sage-600 transition-colors">Contact</a>
          </div>
          
          {/* Call Now Button */}
          <div className="hidden md:flex items-center">
            <a href="tel:+15555551234" className="flex items-center text-sage-600 hover:text-sage-700 font-medium transition-colors mr-4">
              <Phone size={18} className="mr-2" />
              (555) 555-1234
            </a>
            <a href="#booking" className="bg-sage-500 hover:bg-sage-600 text-white py-2 px-6 rounded-md transition-colors btn-hover">
              Book Now
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4 mt-2">
            <a href="#services" className="text-charcoal hover:text-sage-600 transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#practitioners" className="text-charcoal hover:text-sage-600 transition-colors" onClick={toggleMenu}>Practitioners</a>
            <a href="#testimonials" className="text-charcoal hover:text-sage-600 transition-colors" onClick={toggleMenu}>Testimonials</a>
            <a href="#blog" className="text-charcoal hover:text-sage-600 transition-colors" onClick={toggleMenu}>Wellness Blog</a>
            <a href="#contact" className="text-charcoal hover:text-sage-600 transition-colors" onClick={toggleMenu}>Contact</a>
            
            <div className="pt-4 border-t border-gray-200">
              <a href="tel:+15555551234" className="flex items-center text-sage-600 hover:text-sage-700 font-medium transition-colors mb-3">
                <Phone size={18} className="mr-2" />
                (555) 555-1234
              </a>
              <a href="#booking" className="block text-center bg-sage-500 hover:bg-sage-600 text-white py-2 px-6 rounded-md transition-colors btn-hover w-full">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;