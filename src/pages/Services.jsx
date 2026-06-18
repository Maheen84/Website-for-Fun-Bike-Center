import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-heading font-bold text-xl text-brand-dark group-hover:text-brand-red transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`h-6 w-6 text-brand-red transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="font-body text-gray-600 text-lg leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const faqs = [
    {
      question: "Do you offer financing for new and pre-owned vehicles?",
      answer: "Yes, we work with multiple lenders to offer competitive financing options for all credit levels. You can apply online or in person at our dealership."
    },
    {
      question: "Do you accept trade-ins?",
      answer: "Absolutely. We accept trade-ins on most motorcycles, ATVs, UTVs, and watercraft. Bring your vehicle in for a free appraisal."
    },
    {
      question: "How do I schedule a service appointment?",
      answer: "You can schedule a service appointment by calling us directly, filling out the contact form on our website, or walking into our service department."
    },
    {
      question: "Are your technicians certified?",
      answer: "Yes, our service team consists of factory-certified technicians who undergo continuous training to stay up-to-date with the latest technologies and repair procedures."
    },
    {
      question: "Do you sell genuine OEM parts?",
      answer: "Yes, our parts department stocks a massive inventory of genuine OEM parts and accessories for all the major brands we carry."
    }
  ];

  return (
    <>
      <SEO title="Services & Sales" />

      {/* Hero Section */}
      <section className="bg-brand-dark py-32 text-center border-b-4 border-brand-red relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620914902047-975ce492ebfa?w=1600&q=80')" }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Expert Service. <span className="text-brand-red">Every Time.</span>
            </h1>
            <p className="font-body text-xl text-gray-300">
              From finding your dream machine to keeping it running flawlessly, we're with you for every mile.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Alternating Sections */}
      {/* 1. Sales */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <AnimatedSection>
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-red rounded-lg transform -translate-x-4 translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1558981420-c532902e58b4?w=800&q=80" 
                    alt="Motorcycle showroom" 
                    className="relative rounded-lg shadow-xl w-full object-cover h-[400px]"
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="w-full md:w-1/2">
              <AnimatedSection delay={0.2}>
                <h2 className="font-heading font-bold text-4xl text-brand-dark mb-6">
                  New & Pre-Owned Sales
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you're looking for the latest off-road side-by-side or a reliable pre-owned street bike, our massive showroom features the best selection in San Diego. Our knowledgeable sales staff isn't here to push you into a sale; we're here to match you with the perfect ride for your lifestyle and budget.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-brand-red hover:bg-red-800 text-white font-heading font-bold uppercase px-8 py-4 rounded transition-colors shadow-lg"
                >
                  Browse Inventory
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service & Repair */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2">
              <AnimatedSection>
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-dark rounded-lg transform translate-x-4 translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1530026365319-3f0f7f3bd294?w=800&q=80" 
                    alt="Mechanic working on motorcycle" 
                    className="relative rounded-lg shadow-xl w-full object-cover h-[400px]"
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="w-full md:w-1/2">
              <AnimatedSection delay={0.2}>
                <h2 className="font-heading font-bold text-4xl text-brand-dark mb-6">
                  Service & Repair
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                  Your machine is an investment. Protect it with San Diego's most trusted service department. From 500-mile break-in services and tire mounting to complete engine rebuilds, our factory-certified technicians handle it all with precision and care. We service all major makes and models.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-brand-dark hover:bg-black text-white font-heading font-bold uppercase px-8 py-4 rounded transition-colors shadow-lg"
                >
                  Schedule Service
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Parts & Accessories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <AnimatedSection>
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-red rounded-lg transform -translate-x-4 translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1623869680327-0ec997637841?w=800&q=80" 
                    alt="Motorcycle gear and helmets" 
                    className="relative rounded-lg shadow-xl w-full object-cover h-[400px]"
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="w-full md:w-1/2">
              <AnimatedSection delay={0.2}>
                <h2 className="font-heading font-bold text-4xl text-brand-dark mb-6">
                  Parts & Accessories
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                  Upgrading your exhaust? Need a new helmet? Replacing a worn-out belt on your ATV? Our parts counter is stocked with genuine OEM parts and the industry's top aftermarket brands. If we don't have it in stock, our specialists can order it and have it ready for you fast.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-heading font-bold uppercase px-8 py-4 rounded transition-colors"
                >
                  Request Parts
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="font-heading font-bold text-brand-red uppercase tracking-widest block mb-4">Got Questions?</span>
              <h2 className="font-heading font-bold text-4xl text-brand-dark">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
