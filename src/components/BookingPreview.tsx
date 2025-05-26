import React, { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const BookingPreview: React.FC = () => {
  const [selectedService, setSelectedService] = useState('swedish');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Generate dates for the next 7 days
  const getDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        full: date.toISOString().split('T')[0]
      });
    }
    
    return dates;
  };
  
  // Sample time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM'
  ];
  
  const services = [
    { id: 'swedish', name: 'Swedish Massage', duration: '60 min', price: '$85' },
    { id: 'deep-tissue', name: 'Deep Tissue Massage', duration: '60 min', price: '$95' },
    { id: 'acupuncture', name: 'Acupuncture', duration: '45 min', price: '$90' },
    { id: 'hot-stone', name: 'Hot Stone Massage', duration: '75 min', price: '$110' },
  ];

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Book Your Wellness Session
          </h2>
          <p className="text-gray-600">
            Choose a service, select a date and time that works for you, and take the first step toward your wellness journey.
          </p>
        </div>
        
        <div className="bg-cream-50 rounded-2xl shadow-medium overflow-hidden max-w-5xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row">
            {/* Step 1: Service Selection */}
            <div className="md:w-1/3 bg-sage-500/10 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-sage-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-medium mr-3">
                  1
                </div>
                <h3 className="text-xl font-medium">Select Service</h3>
              </div>
              <div className="space-y-3 mt-6">
                {services.map(service => (
                  <div 
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedService === service.id 
                        ? 'bg-white shadow-soft border-l-4 border-sage-500' 
                        : 'bg-transparent hover:bg-white/50'
                    }`}
                  >
                    <div className="font-medium">{service.name}</div>
                    <div className="flex justify-between mt-1 text-sm text-gray-500">
                      <span>{service.duration}</span>
                      <span>{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Step 2: Date Selection */}
            <div className="md:w-1/3 p-6 border-t md:border-t-0 md:border-l md:border-r border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-sky-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-medium mr-3">
                  2
                </div>
                <h3 className="text-xl font-medium">Select Date</h3>
              </div>
              
              <div className="flex justify-center items-center mb-4">
                <Calendar className="text-sky-500 mr-2" size={18} />
                <span className="text-gray-600">Available Dates</span>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {getDates().map((date, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedDate(date.full)}
                    className={`p-3 rounded-lg text-center cursor-pointer transition-all ${
                      selectedDate === date.full 
                        ? 'bg-sky-500 text-white' 
                        : 'bg-white hover:bg-sky-50'
                    }`}
                  >
                    <div className="text-xs font-medium">{date.day}</div>
                    <div className="text-lg font-semibold">{date.date}</div>
                    <div className="text-xs">{date.month}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Step 3: Time Selection */}
            <div className="md:w-1/3 p-6 border-t md:border-t-0">
              <div className="flex items-center mb-4">
                <div className="bg-earth-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-medium mr-3">
                  3
                </div>
                <h3 className="text-xl font-medium">Select Time</h3>
              </div>
              
              <div className="flex justify-center items-center mb-4">
                <Clock className="text-earth-500 mr-2" size={18} />
                <span className="text-gray-600">Available Times</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg text-center cursor-pointer transition-all ${
                      selectedTime === time 
                        ? 'bg-earth-500 text-white' 
                        : 'bg-white hover:bg-earth-50'
                    }`}
                  >
                    <div className="font-medium">{time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Booking Button */}
          <div className="p-6 bg-white border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <div className="text-sm text-gray-500">Selected Service:</div>
                <div className="font-medium">
                  {services.find(s => s.id === selectedService)?.name || 'None'}
                  {selectedDate && selectedTime && ` - ${selectedDate} at ${selectedTime}`}
                </div>
              </div>
              <button 
                className={`bg-sage-500 hover:bg-sage-600 text-white py-3 px-6 rounded-md transition-colors flex items-center btn-hover ${
                  (!selectedDate || !selectedTime) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!selectedDate || !selectedTime}
              >
                Complete Booking
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600 fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center">
            <Users size={16} className="text-sage-500 mr-2" />
            <span>New clients, please arrive 15 minutes early to complete your intake form.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPreview;