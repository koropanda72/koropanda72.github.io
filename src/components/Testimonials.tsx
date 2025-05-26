import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jennifer M.",
      service: "Deep Tissue Massage",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "After struggling with back pain for years, I found relief after just a few sessions. Michael's expertise in deep tissue massage has completely changed my quality of life.",
      rating: 5
    },
    {
      id: 2,
      name: "David R.",
      service: "Acupuncture",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Dr. Chen's acupuncture treatments have helped manage my chronic migraines when nothing else worked. Her knowledge and gentle approach made me feel comfortable from day one.",
      rating: 5
    },
    {
      id: 3,
      name: "Amanda L.",
      service: "Prenatal Massage",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Emily's prenatal massage techniques were exactly what I needed during my third trimester. The relief from back pain was immediate, and her nurturing approach was so comforting.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-sage-500/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-20 top-20 w-64 h-64 bg-sage-200 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 bg-sky-200 rounded-full opacity-30 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Client Stories
          </h2>
          <p className="text-gray-600">
            Hear from our clients about how our wellness services have made a difference in their lives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white rounded-2xl shadow-medium overflow-hidden">
            {/* Testimonial Carousel */}
            <div className="relative">
              {/* Testimonial Content */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto border-4 border-cream-100">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-3">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} fill="#D2A24C" color="#D2A24C" size={20} />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic text-gray-700 mb-5">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    
                    <div>
                      <div className="font-semibold text-charcoal">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonials[currentIndex].service}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-cream-100 hover:bg-cream-200 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} className="text-charcoal" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-cream-100 hover:bg-cream-200 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} className="text-charcoal" />
                </button>
              </div>
              
              {/* Indicators */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentIndex === index ? 'w-8 bg-sage-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-medium mb-4">Ready to experience the benefits?</h3>
            <a href="#booking" className="bg-sage-500 hover:bg-sage-600 text-white py-3 px-8 rounded-md text-lg font-medium inline-block transition-colors btn-hover">
              Book Your First Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;