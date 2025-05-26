import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-0 w-96 h-96 bg-sage-100 rounded-full opacity-40 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-100 rounded-full opacity-40 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Your Journey to Balance & Wellness Starts Here
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Experience holistic healing through our therapeutic massage and acupuncture treatments. Restore your body's natural balance in a tranquil, nurturing environment.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="bg-sage-500 hover:bg-sage-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors flex items-center justify-center btn-hover">
                Book Your Session
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="border border-sage-500 text-sage-600 hover:bg-sage-50 py-3 px-8 rounded-md text-lg font-medium transition-colors flex items-center justify-center">
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-2xl overflow-hidden shadow-medium relative">
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Peaceful massage therapy room with natural elements"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 text-white">
                <p className="font-medium">
                  "Transformative healing in a peaceful sanctuary"
                </p>
              </div>
            </div>
            
            <div className="mt-5 flex justify-between gap-4">
              <div className="bg-white p-4 rounded-lg shadow-soft flex-1">
                <p className="font-semibold text-lg text-sage-600">200+</p>
                <p className="text-sm text-gray-600">5-star reviews</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-soft flex-1">
                <p className="font-semibold text-lg text-sky-600">15+</p>
                <p className="text-sm text-gray-600">Years experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-soft flex-1">
                <p className="font-semibold text-lg text-earth-500">6</p>
                <p className="text-sm text-gray-600">Certified experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;