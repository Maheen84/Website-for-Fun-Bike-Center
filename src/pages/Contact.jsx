import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mockup form - no submission needed
    alert("Thanks for your message! This is a demo, so no data was actually sent.");
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
  };

  return (
    <>
      <SEO title="Contact & Location" />

      {/* Header */}
      <section className="bg-brand-dark py-20 text-center border-b-4 border-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-5xl text-white mb-4">
              Let's Talk Rides.
            </h1>
            <p className="font-body text-xl text-gray-300">
              Drop us a line, give us a call, or swing by our San Diego showroom.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Split Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Form Left */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection>
                <h2 className="font-heading font-bold text-3xl text-brand-dark mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block font-body text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input required type="text" id="firstName" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-body" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block font-body text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input required type="text" id="lastName" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-body" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block font-body text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input required type="email" id="email" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-body" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-body text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" id="phone" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-body" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block font-body text-sm font-medium text-gray-700 mb-2">I'm interested in: *</label>
                    <select required id="interest" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-body bg-white">
                      <option value="">Select an option...</option>
                      <option value="new">New Inventory</option>
                      <option value="pre-owned">Pre-Owned Inventory</option>
                      <option value="service">Service</option>
                      <option value="parts">Parts</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea required id="message" rows="5" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent font-body resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-red hover:bg-red-800 text-white font-heading font-bold uppercase tracking-wide px-8 py-4 rounded transition-colors flex justify-center items-center gap-2">
                    Send Message <Mail className="h-5 w-5" />
                  </button>
                </form>
              </AnimatedSection>
            </div>

            {/* Info + Map Right */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.2}>
                <div className="bg-brand-light p-8 rounded-lg mb-8 border border-gray-100">
                  <h3 className="font-heading font-bold text-2xl text-brand-dark mb-6">Contact Information</h3>
                  <div className="space-y-6 font-body">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-brand-red shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark">Address</h4>
                        <p className="text-gray-600 mt-1">5755 Kearny Villa Rd<br />San Diego, CA 92123</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-brand-red shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark">Phone</h4>
                        <p className="text-gray-600 mt-1">(858) 555-0198</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-brand-red shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark">Email</h4>
                        <p className="text-gray-600 mt-1">Contact: Jerome Gilding<br />cbailey@funbike.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-brand-red shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark">Hours</h4>
                        <p className="text-gray-600 mt-1">Tue - Sat: 9:00 AM - 6:00 PM<br />Sun - Mon: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden h-[300px] border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.473556094263!2d-117.14250268481744!3d32.83068998095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbff83d6a0a0f1%3A0x7d81ccaf21cd5f30!2s5755%20Kearny%20Villa%20Rd%2C%20San%20Diego%2C%20CA%2092123!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="bg-gradient-to-r from-brand-red to-[#8B0000] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="font-heading font-bold text-3xl text-white mb-2">Stay Updated on New Inventory & Promotions</h2>
                <p className="font-body text-red-100">Join our newsletter to get the latest deals sent to your inbox.</p>
              </div>
              <form onSubmit={handleNewsletter} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                <input 
                  required
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-6 py-4 rounded font-body min-w-[300px] focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button 
                  type="submit" 
                  className="bg-brand-dark hover:bg-black text-white font-heading font-bold uppercase tracking-wide px-8 py-4 rounded transition-colors whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;
