import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, ClipboardList, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="flex-grow flex items-center justify-center p-4 py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[2.5rem] p-12 text-center shadow-2xl border border-slate-100"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Request Sent!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for choosing Mission Lab. Our staff will call you shortly at the provided number to confirm your schedule.
          </p>
          <Button variant="primary" onClick={() => (window.location.href = '/')} className="w-full py-4">
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-white">
          {/* Left Column: Info */}
          <div className="bg-clinic-blue p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold mb-6">Book Your Appointment</h1>
              <p className="text-xl text-slate-100/80 mb-12">
                Skip the waiting room. Schedule your medical exam or home service in less than a minute.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-clinic-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Fast Confirmation</h4>
                    <p className="text-slate-100/60">We callback within 30 minutes during operating hours.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-clinic-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Daily Appointments</h4>
                    <p className="text-slate-100/60">Mon-Sun availability for all diagnostic services.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-clinic-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Home Service Option</h4>
                    <p className="text-slate-100/60">Choose "Home Service" and we'll come to your location.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm font-medium mb-2 opacity-60 uppercase tracking-widest">Need urgent help?</p>
              <a href="tel:09669020517" className="text-2xl font-display font-bold hover:text-clinic-yellow transition-colors">0966 902 0517</a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="p-12 lg:p-16 bg-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-slate-900 border-b pb-4 border-slate-100">Patient Details</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <User size={16} className="text-clinic-blue" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Juan Dela Cruz"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-clinic-blue focus:ring-4 focus:ring-clinic-blue/10 outline-none transition-all font-medium"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Phone size={16} className="text-clinic-blue" /> Mobile Number
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0912 345 6789"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-clinic-blue focus:ring-4 focus:ring-clinic-blue/10 outline-none transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-slate-900 border-b pb-4 border-slate-100">Schedule</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <ClipboardList size={16} className="text-clinic-blue" /> Service Needed
                    </label>
                    <select className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-clinic-blue focus:ring-4 focus:ring-clinic-blue/10 outline-none transition-all font-medium bg-white appearance-none cursor-pointer">
                      <option>Annual Physical Exam</option>
                      <option>Pre-Employment Med</option>
                      <option>Ultrasound/2D Echo</option>
                      <option>Home Service Collection</option>
                      <option>Laboratory Tests</option>
                      <option>Drug Testing</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Calendar size={16} className="text-clinic-blue" /> Preferred Date
                    </label>
                    <input 
                      type="date" 
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-clinic-blue focus:ring-4 focus:ring-clinic-blue/10 outline-none transition-all font-medium bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  disabled={loading}
                  className="w-full h-16 rounded-2xl text-xl gap-3 shadow-xl shadow-clinic-blue/20"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>Confirm Appointment <ArrowRight size={24} /></>
                  )}
                </Button>
                <p className="text-center text-slate-400 text-sm mt-6">
                  By clicking confirm, you agree to our privacy policy and consent to a phone call from our reception team.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
