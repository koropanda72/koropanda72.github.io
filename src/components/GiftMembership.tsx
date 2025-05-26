import React from 'react';
import { Gift, Calendar, Percent, Award } from 'lucide-react';

interface GiftCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

const GiftCard: React.FC<GiftCardProps> = ({ icon, title, description, price }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-soft scale-hover">
      <div className="flex mb-4">
        <div className="bg-earth-100 text-earth-600 p-3 rounded-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-auto">
        <div className="font-semibold text-lg text-charcoal mb-3">{price}</div>
        <button className="w-full bg-earth-500 hover:bg-earth-600 text-white py-2 px-4 rounded-md transition-colors btn-hover">
          Purchase
        </button>
      </div>
    </div>
  );
};

interface MembershipProps {
  title: string;
  price: string;
  duration: string;
  benefits: string[];
  isPopular?: boolean;
}

const MembershipCard: React.FC<MembershipProps> = ({ title, price, duration, benefits, isPopular = false }) => {
  return (
    <div className={`rounded-xl p-6 relative scale-hover ${isPopular ? 'bg-sage-500 text-white' : 'bg-white'}`}>
      {isPopular && (
        <div className="absolute -top-3 right-8 bg-earth-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-2xl font-bold">{price}</span>
        <span className="ml-2 opacity-75">{duration}</span>
      </div>
      
      <ul className="mb-6 space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <span className={`mr-2 text-xl ${isPopular ? 'text-cream-200' : 'text-sage-500'}`}>•</span>
            <span className={isPopular ? 'opacity-90' : 'text-gray-600'}>{benefit}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-3 rounded-lg transition-colors btn-hover ${
          isPopular 
            ? 'bg-white text-sage-600 hover:bg-cream-50' 
            : 'bg-sage-500 text-white hover:bg-sage-600'
        }`}
      >
        Select Plan
      </button>
    </div>
  );
};

const GiftMembership: React.FC = () => {
  const giftCards = [
    {
      icon: <Gift size={24} />,
      title: "Signature Gift Card",
      description: "Perfect for birthdays, anniversaries, or just to show you care.",
      price: "From $50"
    },
    {
      icon: <Calendar size={24} />,
      title: "Treatment Package",
      description: "Save when you purchase multiple sessions in advance.",
      price: "From $225"
    }
  ];
  
  const memberships = [
    {
      title: "Essential Wellness",
      price: "$89",
      duration: "per month",
      benefits: [
        "1 60-minute service per month",
        "10% off additional services",
        "5% off retail products",
        "24-hour appointment booking window"
      ]
    },
    {
      title: "Premium Wellness",
      price: "$169",
      duration: "per month",
      benefits: [
        "2 60-minute services per month",
        "15% off additional services",
        "10% off retail products",
        "48-hour appointment booking window",
        "Complimentary aromatherapy"
      ],
      isPopular: true
    },
    {
      title: "Ultimate Wellness",
      price: "$249",
      duration: "per month",
      benefits: [
        "3 60-minute services per month",
        "20% off additional services",
        "15% off retail products",
        "72-hour appointment booking window",
        "Complimentary enhancement with each service"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Gift Cards & Membership Plans
          </h2>
          <p className="text-gray-600">
            Give the gift of wellness or invest in your own self-care routine with our customizable 
            options designed to fit your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center">
              <Gift className="text-earth-500 mr-3" size={24} />
              Gift Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {giftCards.map((card, index) => (
                <GiftCard 
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  price={card.price}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-cream-50 rounded-xl p-8">
            <h3 className="text-2xl font-serif font-semibold mb-2">Why Gift Wellness?</h3>
            <p className="text-gray-600 mb-6">
              Our gift cards are perfect for any occasion and allow your loved ones to 
              choose the wellness experience that's right for them.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <Award className="text-earth-500 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Customizable</h4>
                  <p className="text-sm text-gray-600">Available in any amount starting at $50</p>
                </div>
              </div>
              
              <div className="flex">
                <Calendar className="text-earth-500 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Flexible</h4>
                  <p className="text-sm text-gray-600">Valid for 12 months from purchase date</p>
                </div>
              </div>
              
              <div className="flex">
                <Percent className="text-earth-500 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Special Offers</h4>
                  <p className="text-sm text-gray-600">Buy $200+ in gift cards and receive a $20 bonus card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-serif font-semibold mb-6 text-center flex items-center justify-center">
            <Calendar className="text-sage-500 mr-3" size={24} />
            Membership Plans
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {memberships.map((membership, index) => (
              <MembershipCard 
                key={index}
                title={membership.title}
                price={membership.price}
                duration={membership.duration}
                benefits={membership.benefits}
                isPopular={membership.isPopular}
              />
            ))}
          </div>
          
          <p className="text-center mt-8 text-gray-500">
            All memberships include a 6-month commitment. <a href="#contact" className="text-sky-600 hover:underline">Contact us</a> for more details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftMembership;