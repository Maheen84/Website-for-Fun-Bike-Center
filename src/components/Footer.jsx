import { Link } from 'react-router-dom';
import { Navigation, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      {/* Thin Banner Strip Above Footer */}
      <div className="bg-[#F1F5F9] py-3 text-center border-t border-gray-200">
        <p className="font-body text-brand-dark text-sm sm:text-base">
          Designed & Developed by{' '}
          <a 
            href="mailto:biztechresourceanalyst@gmail.com"
            className="text-brand-red font-semibold underline hover:text-red-800 transition-colors"
          >
            BizTech Resource Analyst
          </a>
        </p>
      </div>

      {/* Main Footer */}
      <div className="bg-brand-dark text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Info */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
                <Navigation className="h-6 w-6 text-brand-red group-hover:scale-110 transition-transform" />
                <span className="font-heading font-bold text-2xl tracking-wider">
                  FUN BIKE CENTER
                </span>
              </Link>
              <div className="space-y-4 font-body text-gray-400">
                <p className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <span>5755 Kearny Villa Rd<br />San Diego, CA 92123</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-red shrink-0" />
                  <span>(858) 555-0198</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-red shrink-0" />
                  <span>cbailey@funbike.com</span>
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-xl mb-6 tracking-wide">QUICK LINKS</h3>
              <ul className="space-y-3 font-body">
                <li><Link to="/" className="text-gray-400 hover:text-brand-red transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-brand-red transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-brand-red transition-colors">Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-brand-red transition-colors">Contact & Location</Link></li>
              </ul>
            </div>

            {/* Column 3: Get In Touch */}
            <div>
              <h3 className="font-heading font-bold text-xl mb-6 tracking-wide">GET IN TOUCH</h3>
              <p className="font-body text-gray-400 mb-6">
                Ready to find your next ride or need expert service? Our team is here to help.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-brand-red hover:bg-red-800 text-white font-heading font-bold uppercase px-6 py-3 rounded transition-colors mb-8"
              >
                Get a Quote
              </Link>
              <div className="flex items-center gap-4">
                <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-800 text-center font-body text-sm text-gray-500">
            &copy; 2026 Fun Bike Center. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
