import React from 'react';
import { Sparkles, Leaf, Flame, Moon, Heart, Droplet } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  price: string;
  duration: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, title, description, benefits, price, duration, color 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 scale-hover">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color} mb-5`}>
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <ul className="mb-5 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-sage-500 mr-2">•</span>
            <span className="text-sm text-gray-600">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="font-semibold">{price}</span>
        <span className="text-sm text-gray-500">{duration}</span>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Leaf className="text-white" size={20} />,
      title: "Swedish Massage",
      description: "A gentle, relaxing massage that promotes circulation and relieves tension.",
      benefits: [
        "Reduces muscle tension", 
        "Improves circulation", 
        "Promotes relaxation"
      ],
      price: "$85",
      duration: "60 minutes",
      color: "bg-sage-500"
    },
    {
      icon: <Flame className="text-white\" size={20} />,
      title: "Deep Tissue Massage",
      description: "Focused pressure to reach deeper layers of muscle and fascia.",
      benefits: [
        "Alleviates chronic pain", 
        "Breaks down scar tissue", 
        "Improves mobility"
      ],
      price: "$95",
      duration: "60 minutes",
      color: "bg-sky-500"
    },
    {
      icon: <Sparkles className="text-white" size={20} />,
      title: "Acupuncture",
      description: "Ancient Chinese medicine using needles to stimulate specific points.",
      benefits: [
        "Balances energy flow", 
        "Reduces inflammation", 
        "Treats chronic conditions"
      ],
      price: "$90",
      duration: "45 minutes",
      color: "bg-earth-500"
    },
    {
      icon: <Moon className="text-white\" size={20} />,
      title: "Hot Stone Massage",
      description: "Heated stones placed on key points combined with massage.",
      benefits: [
        "Deep muscle relaxation", 
        "Improves circulation", 
        "Reduces stress"
      ],
      price: "$110",
      duration: "75 minutes",
      color: "bg-sky-600"
    },
    {
      icon: <Heart className="text-white" size={20} />,
      title: "Prenatal Massage",
      description: "Specialized massage for expecting mothers to ease discomfort.",
      benefits: [
        "Reduces pregnancy discomfort", 
        "Alleviates back pain", 
        "Improves sleep"
      ],
      price: "$90",
      duration: "60 minutes",
      color: "bg-sage-600"
    },
    {
      icon: <Droplet className="text-white\" size={20} />,
      title: "Cupping Therapy",
      description: "Suction cups create negative pressure to relieve muscle tension.",
      benefits: [
        "Increases blood flow", 
        "Releases fascial restrictions", 
        "Detoxifies tissues"
      ],
      price: "$75",
      duration: "45 minutes",
      color: "bg-earth-600"
    },
  ];

  return (
    <section id="services" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Our Healing Services
          </h2>
          <p className="text-gray-600">
            Our therapeutic treatments are designed to promote wellness, reduce stress,
            and restore your body's natural balance. Each service is personalized to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-fade-in">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              price={service.price}
              duration={service.duration}
              color={service.color}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#booking" className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-8 rounded-md text-lg font-medium inline-block transition-colors btn-hover">
            Book Your Appointment
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            Not sure which service is right for you? <a href="#contact" className="text-sky-600 hover:underline">Contact us</a> for a personalized recommendation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;