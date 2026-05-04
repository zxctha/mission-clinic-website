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
  Maximize,
  Briefcase,
  Baby,
  Dna,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    icon: Activity,
    title: 'Annual Physical Examination',
    who: 'Corporate employees, students, and wellness-conscious individuals.',
    benefits: ['Full health baseline', 'Early disease detection', 'Personalized medical advice'],
    desc: 'A complete assessment of your physical health, including vitals, physical check-up, and basic lab tests.'
  },
  {
    icon: Briefcase,
    title: 'Pre-Employment Packages',
    who: 'Job seekers for local or overseas deployment.',
    benefits: ['Fast turnaround (same-day possible)', 'DOH-accredited results', 'Complete requirements in one place'],
    desc: 'Tailored medical packages meeting company and government requirements for new hires.'
  },
  {
    icon: Stethoscope,
    title: 'Doctor’s Consultation',
    who: 'Patients with specific symptoms or needing general health guidance.',
    benefits: ['Professional medical diagnosis', 'Referral to specialists', 'Prescription management'],
    desc: 'One-on-one sessions with our resident doctors and specialists for diagnosis and treatment plans.'
  },
  {
    icon: Maximize,
    title: 'Ultrasound Services',
    who: 'Expectant mothers or those needing internal organ imaging.',
    benefits: ['High-resolution imaging', 'Experienced sonologists', 'Safe & non-invasive'],
    desc: 'Advanced imaging for abdominal, pelvic, breast, and thyroid diagnostics.'
  },
  {
    icon: HeartPulse,
    title: '2D Echo & 12-Lead ECG',
    who: 'Individuals monitoring heart health or with hypertension.',
    benefits: ['Detailed heart structure analysis', 'Rhythm abnormality detection', 'Non-invasive procedures'],
    desc: 'Critical cardiac diagnostics to assess heart function and electrical activity.'
  },
  {
    icon: Microscope,
    title: 'Laboratory Services',
    who: 'Anyone needing blood, urine, or stool analysis.',
    benefits: ['Accurate clinical results', 'Modern equipment', 'Wide range of tests available'],
    desc: 'Complete blood count (CBC), blood chemistry, urinalysis, fecalysis, and more.'
  },
  {
    icon: ShieldCheck,
    title: 'Drug Testing',
    who: 'Applicants for LTO, PNP, employment, or school.',
    benefits: ['Accredited by DOH', 'Fast results', 'Professional handling'],
    desc: 'Reliable screening for regulated substances with strictly managed chain-of-custody.'
  },
  {
    icon: Truck,
    title: 'Home Service Collection',
    who: 'Elderly, bed-ridden patients, or busy individuals.',
    benefits: ['Stress-free testing', 'Professional phlebotomists', 'Results sent digitally'],
    desc: 'We bring the laboratory to you. Professional sample collection in the comfort of your home.'
  },
  {
    icon: Syringe,
    title: 'Vaccination',
    who: 'Children and adults needing immunization.',
    benefits: ['Essential vaccines availability', 'Proper cold-chain storage', 'Vaccination records'],
    desc: 'Flu, pneumonia, and other primary vaccines to keep you and your family protected.'
  },
  {
    icon: Dna,
    title: 'Mobile X-ray',
    who: 'Companies or mass screening events.',
    benefits: ['On-site convenience', 'High-volume capacity', 'Digital image processing'],
    desc: 'State-of-the-art mobile X-ray unit for on-site corporate medical missions.'
  }
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-clinic-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our Medical Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-100/80 max-w-2xl mx-auto"
          >
            We provide a full suite of diagnostic and treatment services with a focus on speed, accuracy, and patient care.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24">
            {servicesList.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 flex flex-col gap-6">
                  <div className="w-16 h-16 bg-clinic-blue-light text-clinic-blue rounded-2xl flex items-center justify-center">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                    <div className="bg-slate-50 p-6 rounded-2xl">
                      <h4 className="font-bold text-clinic-blue mb-3 uppercase text-xs tracking-widest">Who it's for</h4>
                      <p className="text-sm text-slate-700 leading-relaxed">{service.who}</p>
                    </div>
                    <div className="bg-clinic-blue-light/30 p-6 rounded-2xl">
                      <h4 className="font-bold text-clinic-blue mb-3 uppercase text-xs tracking-widest">Key Benefits</h4>
                      <ul className="text-sm text-slate-700 space-y-2">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-clinic-blue font-bold">•</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Link to="/booking">
                      <Button variant="primary" className="w-full sm:w-auto">Book Service</Button>
                    </Link>
                    <a href="tel:09669020517" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full sm:w-auto">Inquire Price</Button>
                    </a>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="rounded-3xl overflow-hidden aspect-video shadow-2xl relative group">
                    <img 
                      src={`https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2670&auto=format&fit=crop&sig=${idx}`} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">Need a Custom Package?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">We provide discounted packages for large groups, schools, and corporate partners. Contact us for a specialized quote.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-12">Contact for Inquiry</Button>
            </Link>
            <Link to="/booking">
               <Button variant="primary" size="lg" className="px-12">Book Individual Test</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
