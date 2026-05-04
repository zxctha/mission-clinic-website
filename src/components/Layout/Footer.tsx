import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Clinic Branding */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-clinic-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-white">MISSION LAB</span>
                <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">Medical Clinic</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Serving our community with integrity and care. Your trusted partner for clinical laboratory diagnostics and medical services in Cagayan de Oro City.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-clinic-yellow transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-clinic-yellow transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-clinic-yellow transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-display font-bold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-clinic-yellow transition-colors">Home</Link>
              <Link to="/services" className="hover:text-clinic-yellow transition-colors">Medical Services</Link>
              <Link to="/about" className="hover:text-clinic-yellow transition-colors">Our Story</Link>
              <Link to="/contact" className="hover:text-clinic-yellow transition-colors">Contact Us</Link>
              <Link to="/booking" className="hover:text-clinic-yellow transition-colors">Book Appointment</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-display font-bold text-lg">Key Services</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>Annual Physical Examination</li>
              <li>Pre-Employment Packages</li>
              <li>Ultrasound Services</li>
              <li>2D Echo & 12-Lead ECG</li>
              <li>Home Service Collection</li>
              <li>Mobile X-ray</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-display font-bold text-lg">Reach Us</h3>
            <div className="flex flex-col gap-4 text-sm font-light">
              <div className="flex gap-3">
                <MapPin size={20} className="text-clinic-yellow shrink-0" />
                <span>#3 El Elyon Bldg. JR Borja Corner Tiano Bros. St., Cagayan de Oro City</span>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="text-clinic-yellow shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:09669020517">0966 902 0517</a>
                  <a href="tel:09154548768">0915 454 8768</a>
                  <a href="tel:088-323-5097">088 323 5097</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={20} className="text-clinic-yellow shrink-0" />
                <a href="mailto:missionlab.ph@gmail.com">missionlab.ph@gmail.com</a>
              </div>
              <div className="flex gap-3">
                <Clock size={20} className="text-clinic-yellow shrink-0" />
                <span>Open Daily: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Mission Laboratory Medical Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
