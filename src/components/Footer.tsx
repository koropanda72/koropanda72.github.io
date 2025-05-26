import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Serenity Wellness</h3>
            <p className="text-gray-300 mb-6">
              Providing holistic healing and wellness services to help you achieve balance 
              in body, mind, and spirit since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#practitioners" className="text-gray-300 hover:text-white transition-colors">
                  Our Practitioners
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                  Wellness Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-sage-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  123 Serenity Lane<br />
                  Suite 200<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex">
                <Phone className="text-sage-400 mr-3 flex-shrink-0" size={18} />
                <a href="tel:+15555551234" className="text-gray-300 hover:text-white transition-colors">
                  (555) 555-1234
                </a>
              </li>
              <li className="flex">
                <Mail className="text-sage-400 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@serenitywellness.com" className="text-gray-300 hover:text-white transition-colors">
                  info@serenitywellness.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-medium mb-6">Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="text-sage-400 mr-3 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white">Monday - Friday</div>
                  <div className="text-gray-300">9:00 AM - 7:00 PM</div>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="text-sage-400 mr-3 flex-shrink-0 opacity-0" size={18} />
                <div>
                  <div className="text-white">Saturday</div>
                  <div className="text-gray-300">10:00 AM - 6:00 PM</div>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="text-sage-400 mr-3 flex-shrink-0 opacity-0" size={18} />
                <div>
                  <div className="text-white">Sunday</div>
                  <div className="text-gray-300">10:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Serenity Wellness Clinic. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;