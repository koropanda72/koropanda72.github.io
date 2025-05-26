import React from 'react';

interface Practitioner {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  certifications: string[];
}

const Practitioners: React.FC = () => {
  const practitioners: Practitioner[] = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Acupuncturist & Clinical Director",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Dr. Chen brings over 15 years of experience in Traditional Chinese Medicine. She specializes in pain management, women's health, and stress-related conditions.",
      specialties: ["Pain Management", "Women's Health", "Anxiety & Depression"],
      certifications: ["Doctorate in Acupuncture & Oriental Medicine", "National Board Certified (NCCAOM)", "Licensed Acupuncturist"]
    },
    {
      id: 2,
      name: "Michael Rivera",
      role: "Licensed Massage Therapist",
      image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Michael specializes in deep tissue and sports massage therapy. With a background in physical therapy, he focuses on injury prevention and recovery.",
      specialties: ["Deep Tissue Massage", "Sports Massage", "Myofascial Release"],
      certifications: ["Licensed Massage Therapist", "Certified in Sports Massage", "Myofascial Release Specialist"]
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Holistic Health Practitioner",
      image: "https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Emily combines massage therapy with energy work to provide a truly holistic healing experience. She specializes in Swedish massage, hot stone therapy, and prenatal massage.",
      specialties: ["Swedish Massage", "Hot Stone Therapy", "Prenatal Massage"],
      certifications: ["Certified Massage Therapist", "Prenatal Massage Certification", "Reiki Master"]
    },
  ];

  return (
    <section id="practitioners" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Our Wellness Experts
          </h2>
          <p className="text-gray-600">
            Meet our team of dedicated professionals committed to your wellness journey.
            Each practitioner brings specialized expertise and a compassionate approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practitioners.map((practitioner, index) => (
            <div 
              key={practitioner.id} 
              className="bg-white rounded-xl shadow-soft overflow-hidden scale-hover fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={practitioner.image} 
                  alt={practitioner.name} 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1">{practitioner.name}</h3>
                <p className="text-sky-600 mb-4">{practitioner.role}</p>
                <p className="text-gray-600 mb-5">{practitioner.bio}</p>
                
                <div className="mb-5">
                  <h4 className="font-medium text-charcoal mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {practitioner.specialties.map((specialty, idx) => (
                      <span 
                        key={idx} 
                        className="bg-sage-100 text-sage-700 text-sm px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-charcoal mb-2">Certifications</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {practitioner.certifications.map((certification, idx) => (
                      <li key={idx}>{certification}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a 
                    href="#booking" 
                    className="inline-block w-full text-center bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md transition-colors btn-hover"
                  >
                    Book with {practitioner.name.split(' ')[0]}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practitioners;