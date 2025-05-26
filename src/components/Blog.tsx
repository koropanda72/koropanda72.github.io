import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPostProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ image, category, title, excerpt, date }) => {
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden scale-hover">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-sky-600">{category}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href="#" className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium transition-colors">
          Read More <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const blogPosts = [
    {
      image: "https://images.pexels.com/photos/4098225/pexels-photo-4098225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Massage Therapy",
      title: "The Benefits of Regular Massage for Stress Management",
      excerpt: "Discover how incorporating regular massage therapy into your wellness routine can significantly reduce stress and improve overall well-being.",
      date: "May 15, 2025"
    },
    {
      image: "https://images.pexels.com/photos/3756773/pexels-photo-3756773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Acupuncture",
      title: "Acupuncture for Pain Relief: What to Expect",
      excerpt: "Learn how acupuncture works to alleviate chronic pain and what to expect during your first acupuncture treatment session.",
      date: "May 8, 2025"
    },
    {
      image: "https://images.pexels.com/photos/3900392/pexels-photo-3900392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Wellness Tips",
      title: "5 Essential Self-Care Practices for Busy Professionals",
      excerpt: "Practical self-care strategies that even the busiest professionals can incorporate into their daily routines for better health.",
      date: "April 29, 2025"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Wellness Resources
          </h2>
          <p className="text-gray-600">
            Explore our collection of articles, tips, and insights to support your wellness journey 
            between your visits to our clinic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-fade-in">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={index}
              image={post.image}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#" className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium text-lg transition-colors">
            View All Wellness Resources
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
        
        <div className="mt-20 bg-cream-50 rounded-xl p-8 md:p-10 fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif font-semibold mb-3">Subscribe to Our Wellness Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Join our community and receive monthly wellness tips, special offers, and health insights 
                directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                />
                <button className="bg-sage-500 hover:bg-sage-600 text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap btn-hover">
                  Subscribe Now
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                By subscribing, you agree to receive emails from us. You can unsubscribe at any time.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/5240676/pexels-photo-5240676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Wellness newsletter"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;