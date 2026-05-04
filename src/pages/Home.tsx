import { motion } from 'motion/react';
import { 
  Activity, 
  UserRound, 
  Stethoscope, 
  Waves, 
  HeartPulse, 
  Microscope, 
  Truck, 
  Syringe, 
  FlaskConical, 
  CircleCheck,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  { icon: Activity, title: 'Physical Exam', desc: 'Comprehensive annual check-ups.' },
  { icon: UserRound, title: 'Pre-Employment', desc: 'Fast turnaround for job requirements.' },
  { icon: Stethoscope, title: 'Consultation', desc: 'Professional medical advice.' },
  { icon: HeartPulse, title: '2D Echo / ECG', desc: 'Advanced cardiac diagnostics.' },
  { icon: Truck, title: 'Home Service', desc: 'We collect samples at your doorstep.' },
  { icon: FlaskConical, title: 'Drug Testing', desc: 'Accredited and reliable results.' },
];

const testimonials = [
  { name: 'Maria Santos', role: 'Job Applicant', text: 'Super fast results! I got my medical for my new job in just one day. Highly recommended.' },
  { name: 'Ricardo Cruz', role: 'Business Owner', text: 'Their mobile X-ray and home service made it so easy for my staff checkups. Professional team.' },
  { name: 'Elena Gomez', role: 'Mother', text: 'Open even on Sundays! Very convenient for families with busy schedules.' },
];

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-12 hero-gradient">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-clinic-blue-light text-clinic-blue rounded-full self-center lg:self-start">
              <CircleCheck size={20} className="fill-clinic-blue text-white" />
              <span className="text-sm font-bold uppercase tracking-wider">Licensed & Certified Facility</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900">
              Fast, Reliable <span className="text-clinic-blue">Medical Services</span> in Cagayan de Oro
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your "One-Stop Clinic" for all your medical needs. From X-rays to lab tests, we provide fast, accurate results every day of the week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/booking">
                <Button variant="yellow" size="lg" className="w-full sm:w-auto h-16 px-10 text-xl">
                  Book Appointment Now
                </Button>
              </Link>
              <a href="tel:09669020517">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 px-10 text-xl">
                  Contact Us
                </Button>
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm font-medium text-slate-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
                    <UserRound size={20} className="text-slate-400" />
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="text-clinic-blue font-bold">10,000+</span> Patients Yearly</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" 
                alt="Modern Medical Clinic"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-clinic-blue/20 mix-blend-overlay" />
            </div>
            
            {/* Float Cards */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex gap-4 items-center"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Open Daily</p>
                <p className="font-bold">Mon - Sun: 8AM-5PM</p>
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-10 -left-10 bg-clinic-yellow p-6 rounded-2xl shadow-xl z-20 flex gap-4 items-center"
            >
              <div className="w-12 h-12 bg-white text-clinic-yellow rounded-full flex items-center justify-center">
                <FlaskConical size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-800 uppercase font-bold">Fast Results</p>
                <p className="font-bold text-slate-900">Same Day Available</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges / Social Proof */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-400 font-bold uppercase text-xs tracking-widest mb-10">Accredited by Top Agencies & Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
             {/* Mock Partner Logos */}
             <div className="font-display font-black text-2xl">DOH</div>
             <div className="font-display font-black text-2xl">PNP</div>
             <div className="font-display font-black text-2xl">LTO</div>
             <div className="font-display font-black text-2xl">PHILHEALTH</div>
             <div className="font-display font-black text-2xl">HMO RED</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
            <h2 className="text-clinic-blue font-bold uppercase text-sm tracking-widest">Our Medical Services</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Comprehensive Healthcare Under One Roof</h3>
            <p className="text-slate-600 text-lg">We offer a wide range of diagnostic and clinical services to ensure your health requirements are met quickly and accurately.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-6"
              >
                <div className="w-16 h-16 bg-clinic-blue-light text-clinic-blue rounded-2xl flex items-center justify-center">
                  <service.icon size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
                <Link to="/services" className="mt-auto inline-flex items-center gap-2 text-clinic-blue font-bold hover:underline">
                  Learn More <ChevronRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services">
              <Button variant="outline" size="lg" className="px-12 group">
                View All Services 
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-clinic-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-clinic-yellow font-bold uppercase text-sm tracking-widest mb-6">Why Choose Mission Lab</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
                Your Health is Our Priority, Every Single Day.
              </h3>
              
              <div className="space-y-8">
                {[
                  { title: "One-Stop Medical Solution", desc: "No need to travel to multiple clinics. We have everything you need in one building." },
                  { title: "Commitment to Speed", desc: "We understand your time is valuable. Fast-track processing for pre-employment medical tests." },
                  { title: "Open Every Single Day", desc: "Health concerns don't take weekends off. That's why we are open even on Saturdays and Sundays." },
                  { title: "Affordability", desc: "Quality medical services that don't break the bank. Competitive pricing for all packages." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-clinic-yellow text-slate-900 rounded-full flex shrink-0 items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-100/80 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-3xl p-1 rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2670&auto=format&fit=crop" 
                  alt="Friendly staff" 
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-clinic-yellow text-slate-900 p-8 rounded-2xl shadow-2xl">
                <p className="text-4xl font-bold font-display">10+</p>
                <p className="text-sm uppercase font-bold tracking-tight">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">How it Works</h2>
            <p className="text-slate-500">Getting your medical check-up is as easy as 1-2-3</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector lines (Desktop) */}
             <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-slate-100 -z-10" />
             
             {[
               { icon: Calendar, title: "Book or Walk-in", desc: "Schedule online or simply visit our clinic during operating hours." },
               { icon: Microscope, title: "Quick Testing", desc: "Our professional staff will conduct tests with precision and care." },
               { icon: CircleCheck, title: "Get Your Results", desc: "Receive your results same-day or as scheduled. Digital copies available." }
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center text-center gap-6">
                 <div className="w-20 h-20 bg-white border-8 border-slate-100 text-clinic-blue rounded-full flex items-center justify-center shadow-lg">
                   <step.icon size={32} />
                 </div>
                 <h4 className="text-2xl font-bold text-slate-900">{step.title}</h4>
                 <p className="text-slate-600 px-6">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-display font-bold text-slate-900 mb-16">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col gap-6 border border-white">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} className="fill-clinic-yellow text-clinic-yellow" />)}
                </div>
                <p className="text-lg italic text-slate-600 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <UserRound size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-display font-bold text-slate-900 leading-tight">Conveniently Located in the Heart of CGY</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <MapPin size={28} className="text-clinic-blue shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Address</h4>
                  <p className="text-slate-600">#3 El Elyon Bldg. JR Borja Corner Tiano Bros. St., Cagayan de Oro City</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <Clock size={28} className="text-clinic-blue shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Operating Hours</h4>
                  <p className="text-slate-600">Open Daily: 8:00 AM - 5:00 PM (Monday to Sunday)</p>
                </div>
              </div>
            </div>
            
            <Link to="/booking">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-12">
                Get Directions
              </Button>
            </Link>
          </div>
          
          <div className="h-[450px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative border border-slate-200">
            {/* Embedded Google Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
              <MapPin size={48} />
              <p className="font-bold">Interactive Map Loading...</p>
              <p className="text-xs">Mission Laboratory Medical Clinic, JR Borja St.</p>
            </div>
            <iframe 
               title="Clinic Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126290.04505166085!2d124.580468!3d8.477217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff93da82d02b0d%3A0x6b77242131d10214!2sCagayan%20de%20Oro%2C%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1714800000000!5m2!1sen!2sph"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale contrast-125"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Strong Final CTA */}
      <section className="py-24 bg-clinic-yellow">
        <div className="container mx-auto px-4 text-center text-slate-900 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-black leading-tight mb-8">Ready to prioritize your health?</h2>
          <p className="text-xl mb-12 font-medium opacity-80">Skip the long lines. Book your appointment now or just walk in. We are open every day to serve you.</p>
          <div className="flex flex-col sm:row gap-4 justify-center">
             <Link to="/booking">
                <Button variant="primary" size="lg" className="px-16 py-6 text-xl shadow-2xl">
                  Book Appointment Now
                </Button>
             </Link>
             <p className="mt-6 font-bold flex items-center justify-center gap-2">
                <Phone size={20} /> Or Call Us: 0966 902 0517
             </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What are your operating hours?", a: "We are open daily, including weekends, from 8:00 AM to 5:00 PM." },
              { q: "How long does it take to get results?", a: "Most routine laboratory and physical exam results are available same-day or within 24 hours." },
              { q: "Do you offer home service collection?", a: "Yes, we offer home service for blood collection and other tests within Cagayan de Oro City." },
              { q: "What should I bring for my physical exam?", a: "Please bring a valid ID and any referral forms from your company or agency if applicable." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
