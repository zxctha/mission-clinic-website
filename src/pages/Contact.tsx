import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Facebook, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="flex flex-col">
       <section className="bg-clinic-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-100/80 max-w-2xl mx-auto"
          >
            Have questions about our services or pricing? We're here to help. Reach out to us via phone, email, or visit our clinic.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-clinic-blue-light text-clinic-blue rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">Our Location</h4>
                      <p className="text-slate-600 leading-relaxed">
                        #3 El Elyon Bldg. JR Borja Corner Tiano Bros. St.,<br />
                        Cagayan de Oro City, 9000
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-clinic-blue-light text-clinic-blue rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">Phone Numbers</h4>
                      <div className="flex flex-col text-slate-600">
                        <a href="tel:09669020517" className="hover:text-clinic-blue transition-colors">0966 902 0517 (Globe/TM)</a>
                        <a href="tel:09154548768" className="hover:text-clinic-blue transition-colors">0915 454 8768 (Globe/TM)</a>
                        <a href="tel:088-323-5097" className="hover:text-clinic-blue transition-colors">088-323-5097 (Landline)</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-clinic-blue-light text-clinic-blue rounded-2xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">Email Address</h4>
                      <a href="mailto:missionlab.ph@gmail.com" className="text-slate-600 hover:text-clinic-blue transition-colors">missionlab.ph@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-clinic-blue-light text-clinic-blue rounded-2xl flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">Business Hours</h4>
                      <p className="text-slate-600">Open Daily: 8:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Connect with us</h3>
                <div className="flex gap-4">
                   <Button variant="outline" className="gap-2">
                     <Facebook size={20} /> Facebook
                   </Button>
                   <Button variant="outline" className="gap-2">
                     <MessageSquare size={20} /> Messenger
                   </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">Quick Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Juan Dela Cruz"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0912 345 6789"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20 outline-none transition-all bg-white">
                    <option>Annual Physical Examination</option>
                    <option>Pre-Employment Package</option>
                    <option>Ultrasound/2D Echo</option>
                    <option>Home Service Collection</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="How can we help you today?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20 outline-none transition-all"
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full gap-2 py-4">
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
         <iframe 
               title="Clinic Location Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126290.04505166085!2d124.580468!3d8.477217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff93da82d02b0d%3A0x6b77242131d10214!2sCagayan%20de%20Oro%2C%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1714800000000!5m2!1sen!2sph"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
      </section>
    </div>
  );
}
