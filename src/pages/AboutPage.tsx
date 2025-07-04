import React from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/70 z-10" />
          <img
            src="https://images.pexels.com/photos/6963619/pexels-photo-6963619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Rudraksha beads"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Our Rudraksha Journey
            </h1>
            <p className="text-lg text-amber-100">
              Discover the story behind our commitment to providing the highest quality
              Rudraksha beads, sourced directly from the pristine foothills of the Himalayas.
            </p>
          </div>
        </div>
      </section>
      
     {/* Our Story */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">Our Story</h2>
      <p className="text-lg text-amber-800 mb-6">
        Rooted in tradition and devotion, RudrakshaBeads traces its origins back four generations to the early 1970s. What began as a humble Rudraksha business in the serene hills of Dingla, Bhojpur, has now evolved into a globally trusted name for authentic Rudraksha beads.
      </p>
      <p className="text-lg text-amber-800 mb-6">
        Our journey began when our ancestor, deeply immersed in spiritual practices, experienced profound transformation through the power of Rudraksha. Inspired to share this gift, the family committed to providing genuine, high-vibration Rudraksha sourced solely from Dingla Bhojpur—a region renowned for its sacred and powerful beads.
      </p>
      <p className="text-lg text-amber-800">
        Today, we remain dedicated to our roots. Every Rudraksha in our collection is ethically sourced from Dingla Bhojpur, handpicked for authenticity, and energized through traditional methods before it reaches your hands—ensuring spiritual integrity and connection.
      </p>
    </div>
  </div>
</section>

{/* Our Values */}
<section className="py-16 bg-amber-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-serif font-bold text-amber-900 text-center mb-12">
      Our Values
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Award className="w-12 h-12 text-amber-600 mb-4" />
        <h3 className="text-xl font-semibold text-amber-900 mb-2">Authenticity</h3>
        <p className="text-amber-800">
          Every Rudraksha we offer comes from Dingla Bhojpur, known for producing some of the most genuine and spiritually potent beads in the world.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Users className="w-12 h-12 text-amber-600 mb-4" />
        <h3 className="text-xl font-semibold text-amber-900 mb-2">Community</h3>
        <p className="text-amber-800">
          We work hand-in-hand with the communities of Dingla Bhojpur, preserving traditional practices and supporting local livelihoods through our fair and respectful approach.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <MapPin className="w-12 h-12 text-amber-600 mb-4" />
        <h3 className="text-xl font-semibold text-amber-900 mb-2">Ethical Sourcing</h3>
        <p className="text-amber-800">
          All our Rudraksha beads are ethically harvested in the forests of Dingla Bhojpur, with deep reverence for the environment and cultural heritage.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Clock className="w-12 h-12 text-amber-600 mb-4" />
        <h3 className="text-xl font-semibold text-amber-900 mb-2">Customer Care</h3>
        <p className="text-amber-800">
          From guidance in selection to spiritual advice, we offer lifelong support rooted in our family’s generations of experience and trust.
        </p>
      </div>
    </div>
  </div>
</section>

      
      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-900 text-center mb-12">
            Our Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-amber-200 transform md:-translate-x-1/2"></div>
              
              {/* Timeline Items */}
              {[
                {
                  title: 'Sourcing',
                  description: 'We carefully select Rudraksha trees in Nepal and Indonesia, harvesting beads in accordance with traditional practices and timing.',
                },
                {
                  title: 'Authentication',
                  description: 'Each bead undergoes rigorous testing to verify its authenticity, including X-ray testing, water test, and microscopic examination.',
                },
                {
                  title: 'Energization',
                  description: 'Our Rudraksha beads are energized through traditional Vedic rituals performed by experienced priests to maximize their spiritual potency.',
                },
                {
                  title: 'Certification',
                  description: 'Every premium Rudraksha comes with proper certification detailing its authenticity, mukhi count, and origin.',
                },
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center mb-12">
                  <div className="order-1 md:w-1/2 px-6 md:pr-12 md:pl-0 text-right md:text-right">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.title}</h3>
                        <p className="text-amber-800">{item.description}</p>
                      </>
                    ) : (
                      <div className="md:hidden">
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.title}</h3>
                        <p className="text-amber-800">{item.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="z-10 flex items-center order-1 bg-amber-600 shadow-xl w-8 h-8 rounded-full">
                    <h3 className="mx-auto text-white font-semibold text-lg">{index + 1}</h3>
                  </div>
                  
                  <div className="order-1 md:w-1/2 px-6 md:pl-12 md:pr-0">
                    {index % 2 === 1 ? (
                      <>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.title}</h3>
                        <p className="text-amber-800">{item.description}</p>
                      </>
                    ) : (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.title}</h3>
                        <p className="text-amber-800">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;