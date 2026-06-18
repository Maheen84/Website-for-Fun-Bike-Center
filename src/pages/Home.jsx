import { Link } from 'react-router-dom';
import { ShoppingCart, Wrench, Package, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

// Simple counter hook for numbers
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return { count, ref };
};

const StatItem = ({ end, label, suffix = "" }) => {
  const { count, ref } = useCounter(end);
  return (
    <div ref={ref} className="text-center">
      <div className="font-heading font-bold text-5xl text-brand-red mb-2">
        {count}{suffix}
      </div>
      <div className="font-body text-white font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
};

const Home = () => {
  const brands = ['Kawasaki', 'Honda', 'Yamaha', 'Can-Am', 'Suzuki', 'Sea-Doo', 'Polaris', 'CFMOTO'];

  return (
    <>
      <SEO title="Home" />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight">
              San Diego's Trusted <br/> Powersports Dealer <span className="text-brand-red">Since Day One.</span>
            </h1>
            <p className="font-body text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              New and pre-owned motorcycles, ATVs, UTVs, and watercraft from the brands you trust — plus expert service and parts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-brand-red hover:bg-red-800 text-white font-heading font-bold uppercase tracking-wide px-8 py-4 rounded text-center transition-all shadow-lg hover:shadow-red-900/50"
              >
                Browse Inventory
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white hover:bg-white hover:text-brand-dark text-white font-heading font-bold uppercase tracking-wide px-8 py-4 rounded text-center transition-colors"
              >
                Schedule Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-dark py-16 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem end={8} suffix="+" label="Major Brands" />
            <div className="text-center flex flex-col justify-center">
               <div className="font-heading font-bold text-3xl text-brand-red mb-2">3</div>
               <div className="font-body text-white font-medium uppercase tracking-wider text-sm">Sales · Service · Parts</div>
            </div>
            <StatItem end={1} label="San Diego, CA" />
            <StatItem end={100} suffix="%" label="Trusted by Riders" />
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="bg-brand-light py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-heading font-bold text-sm text-brand-red uppercase tracking-widest block mb-8">Brands We Carry</span>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={brand}
                className="bg-gray-200 text-brand-dark font-heading font-bold uppercase tracking-wider px-6 py-2 rounded-full border-2 border-transparent hover:border-brand-red hover:bg-white transition-all cursor-pointer"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-heading font-bold text-brand-red uppercase tracking-widest">What We Offer</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mt-4">
              Everything You Need, All In One Place.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="group bg-brand-light p-10 rounded-lg border-t-4 border-transparent hover:border-brand-red hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-red transition-colors">
                  <ShoppingCart className="h-8 w-8 text-brand-dark group-hover:text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">New & Pre-Owned Sales</h3>
                <p className="font-body text-gray-600 mb-6 leading-relaxed">
                  Browse our extensive inventory of new and pre-owned motorcycles, ATVs, UTVs, and personal watercraft.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 font-heading font-bold text-brand-red uppercase tracking-wider group-hover:text-red-800">
                  Learn More <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="group bg-brand-light p-10 rounded-lg border-t-4 border-transparent hover:border-brand-red hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-red transition-colors">
                  <Wrench className="h-8 w-8 text-brand-dark group-hover:text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Service & Repair</h3>
                <p className="font-body text-gray-600 mb-6 leading-relaxed">
                  Our certified technicians keep your ride running at its best, from routine maintenance to major repairs.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 font-heading font-bold text-brand-red uppercase tracking-wider group-hover:text-red-800">
                  Learn More <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="group bg-brand-light p-10 rounded-lg border-t-4 border-transparent hover:border-brand-red hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-red transition-colors">
                  <Package className="h-8 w-8 text-brand-dark group-hover:text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Parts & Accessories</h3>
                <p className="font-body text-gray-600 mb-6 leading-relaxed">
                  Genuine OEM parts and accessories to keep your vehicle performing and looking its best.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 font-heading font-bold text-brand-red uppercase tracking-wider group-hover:text-red-800">
                  Learn More <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-12">
              Decades of Experience. <br className="hidden md:block"/> Hundreds of Happy Riders.
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-brand-red rounded-full"></div>
                <span className="font-body font-medium text-gray-300 uppercase tracking-wider">Expert Technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-brand-red rounded-full"></div>
                <span className="font-body font-medium text-gray-300 uppercase tracking-wider">Competitive Financing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-brand-red rounded-full"></div>
                <span className="font-body font-medium text-gray-300 uppercase tracking-wider">Genuine OEM Parts</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-brand-red to-[#8B0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Find Your Next Ride?
            </h2>
            <p className="font-body text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Visit our San Diego showroom or get in touch — our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white hover:bg-gray-100 text-brand-red font-heading font-bold uppercase tracking-wide px-8 py-4 rounded text-center transition-colors shadow-lg"
              >
                Get a Quote
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white hover:bg-white hover:text-brand-red text-white font-heading font-bold uppercase tracking-wide px-8 py-4 rounded text-center transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
