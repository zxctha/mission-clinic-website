import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, Award, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
                Committed to Serving the Community <span className="text-clinic-blue">Since Day One.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Mission Laboratory Medical Clinic was founded with a singular purpose: to provide high-quality, accessible healthcare services to the people of Cagayan de Oro. 
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-4xl font-display font-bold text-clinic-blue mb-2">10+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-bold text-clinic-blue mb-2">50k+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Patients Served</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
               <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2670&auto=format&fit=crop" 
                alt="Clinic Interior"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                <p className="text-slate-600 italic">"Integrity and compassion are at the heart of everything we do at Mission Lab."</p>
                <p className="font-bold text-slate-900 mt-4">— Dr. Elena Ramos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-clinic-blue p-12 rounded-[2rem] text-white flex flex-col gap-6"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold">Our Mission</h2>
              <p className="text-lg text-slate-100 leading-relaxed font-light">
                To serve our patients with the highest level of professionalism and care, ensuring accurate diagnostics and efficient medical solutions that support the health and well-being of our community every day.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-clinic-yellow p-12 rounded-[2rem] text-slate-900 flex flex-col gap-6"
            >
              <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center">
                <Heart size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold">Our Vision</h2>
              <p className="text-lg text-slate-800 leading-relaxed">
                To be the leading, most trusted medical clinic in Northern Mindanao, recognized for our speed, technological innovation, and unwavering commitment to patient satisfaction and clinical excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">The Mission Lab Standards</h2>
            <p className="text-slate-500">The values that drive us to serve you better every day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Integrity", desc: "We maintain the highest ethical standards in all our diagnostic procedures and patient interactions." },
              { icon: Users, title: "Community Focus", desc: "We are deeply rooted in CGY and dedicated to serving the diverse needs of its residents." },
              { icon: Award, title: "Excellence", desc: "Our lab results and medical consultations meet stringent national healthcare standards." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl text-center flex flex-col items-center gap-6 shadow-sm border border-slate-100">
                <div className="w-16 h-16 bg-clinic-blue-light text-clinic-blue rounded-full flex items-center justify-center">
                  <value.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Licensed & Accredited Facility</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl text-slate-600 leading-relaxed">
              We are a fully licensed medical facility operating under the standards of the <span className="font-bold text-clinic-blue">Department of Health (DOH)</span>. Our laboratory participates in external quality assurance programs to ensure the accuracy of every test we conduct.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "DOH Licensed Tertiary Laboratory",
                "LTO & PNP Accredited Drug Testing",
                "DOH Accredited Mobile X-ray",
                "Certified Medical Doctors & Specialists"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-full border border-slate-100 font-medium text-slate-700">
                  <CheckCircle2 className="text-green-500" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-clinic-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to experience better healthcare?</h2>
               <Link to="/booking">
                 <Button variant="yellow" size="lg" className="px-16 py-6 text-xl">
                   Book Your Visit Today
                 </Button>
               </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
