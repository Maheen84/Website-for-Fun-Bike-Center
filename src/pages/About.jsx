import { Award, ShieldCheck, Users, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const values = [
    { icon: Award, title: 'Expertise', desc: 'Decades of combined experience in the powersports industry.' },
    { icon: Heart, title: 'Selection', desc: 'The largest inventory of top brands in the San Diego area.' },
    { icon: ShieldCheck, title: 'Trust', desc: 'Transparent pricing, honest service, and no hidden fees.' },
    { icon: Users, title: 'Community', desc: 'Proud supporters of local riding groups and events.' }
  ];

  const team = [
    { name: 'Jerome Gilding', role: 'General Manager' },
    { name: 'Sarah Jenkins', role: 'Sales Director' },
    { name: 'Mike Torres', role: 'Lead Technician' },
    { name: 'David Chen', role: 'Parts Manager' }
  ];

  return (
    <>
      <SEO title="About Us" />
      
      {/* Hero Section */}
      <section className="bg-brand-dark py-32 text-center border-b-4 border-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Built On Trust. <span className="text-brand-red">Driven By Passion.</span>
            </h1>
            <p className="font-body text-xl text-gray-300">
              For over two decades, Fun Bike Center has been San Diego's premier destination for powersports enthusiasts, offering unmatched service and selection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <AnimatedSection>
                <span className="font-heading font-bold text-brand-red uppercase tracking-widest block mb-4">Our Story</span>
                <h2 className="font-heading font-bold text-4xl text-brand-dark mb-6">
                  Fueling San Diego's Adventures Since Day One.
                </h2>
                <div className="font-body text-gray-600 space-y-6 text-lg leading-relaxed">
                  <p>
                    It started with a simple mission: to provide the local riding community with a dealership they could truly rely on. Today, Fun Bike Center stands as one of the largest and most respected powersports dealers in Southern California.
                  </p>
                  <p>
                    Whether you're hitting the desert trails, cruising the coast, or tearing up the track, our passionate team is here to ensure you have the right machine, the right gear, and the expert support to keep you moving forward.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-red rounded-lg transform translate-x-4 translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80" 
                    alt="Motorcycles lined up" 
                    className="relative rounded-lg shadow-xl w-full object-cover h-[500px]"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Why Riders Choose Us */}
      <section className="bg-brand-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-4xl text-brand-dark mb-16">
              Why Riders Choose Us
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <AnimatedSection delay={i * 0.1} key={val.title}>
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-brand-red hover:shadow-md transition-all h-full">
                  <val.icon className="h-12 w-12 text-brand-red mx-auto mb-6" />
                  <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{val.title}</h3>
                  <p className="font-body text-gray-600">{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="font-heading font-bold text-brand-red uppercase tracking-widest block mb-4">Leadership</span>
            <h2 className="font-heading font-bold text-4xl text-brand-dark mb-16">
              Meet The Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <AnimatedSection delay={i * 0.1} key={member.name}>
                <div className="group cursor-pointer">
                  <div className="bg-gray-200 aspect-square rounded-lg mb-6 overflow-hidden relative">
                    {/* Placeholder image */}
                    <div className="absolute inset-0 bg-brand-dark group-hover:bg-brand-red transition-colors flex items-center justify-center opacity-10 group-hover:opacity-20 z-10"></div>
                    <img 
                      src={`https://i.pravatar.cc/400?img=${i + 11}`} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-brand-dark">{member.name}</h3>
                  <p className="font-body text-brand-red font-medium uppercase tracking-wider text-sm mt-1">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
