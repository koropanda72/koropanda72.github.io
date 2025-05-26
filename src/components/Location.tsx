import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-sage-500/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Visit Our Tranquil Space
          </h2>
          <p className="text-gray-600">
            Located in a peaceful setting, our wellness center is designed to provide 
            a calming environment from the moment you step in.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-xl shadow-soft overflow-hidden fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Map - using an iframe for an interactive map */}
            <div className="h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151464843!2d-73.9885193!3d40.7410592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b64a9b5b%3A0x1a8d3c96d31d28de!2sMadison%20Square%20Park!5e0!3m2!1sen!2sus!4v1656472023288!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Serenity Wellness Clinic Location"
              ></iframe>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-sage-500 mr-2" size={20} />
                <h3 className="text-xl font-medium">Find Us</h3>
              </div>
              
              <address className="not-italic text-gray-600 mb-6">
                123 Serenity Lane<br />
                Suite 200<br />
                New York, NY 10001
              </address>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Phone className="text-sage-500 mr-2" size={16} />
                    <h4 className="font-medium">Phone</h4>
                  </div>
                  <p className="text-gray-600">
                    <a href="tel:+15555551234" className="hover:text-sage-600 transition-colors">
                      (555) 555-1234
                    </a>
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="text-sage-500 mr-2" size={16} />
                    <h4 className="font-medium">Email</h4>
                  </div>
                  <p className="text-gray-600">
                    <a href="mailto:info@serenitywellness.com" className="hover:text-sage-600 transition-colors">
                      info@serenitywellness.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="text-sage-500 mr-2" size={20} />
                <h3 className="text-xl font-medium">Hours of Operation</h3>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
              
              <div className="bg-cream-50 p-5 rounded-lg mb-8">
                <h4 className="font-medium mb-2">Getting Here</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <strong>Public Transit:</strong> 2 blocks from Union Square station (N, Q, R, W, 4, 5, 6 lines)
                  </li>
                  <li>
                    <strong>Parking:</strong> Metered street parking available. Garage parking at 130 East 24th St.
                  </li>
                  <li>
                    <strong>Accessibility:</strong> Our facility is wheelchair accessible with ADA-compliant restrooms.
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Contact Us</h4>
                <a href="#booking" className="block text-center w-full bg-sage-500 hover:bg-sage-600 text-white py-3 rounded-md transition-colors btn-hover">
                  Book an Appointment
                </a>
                <p className="text-center mt-3 text-sm text-gray-500">
                  Questions? Call us at (555) 555-1234
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;