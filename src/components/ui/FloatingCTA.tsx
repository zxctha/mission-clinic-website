import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 md:hidden">
      <motion.a
        href="https://m.me/missionlab"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl"
      >
        <MessageCircle size={28} />
      </motion.a>
      <motion.a
        href="tel:09669020517"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-clinic-yellow text-slate-900 rounded-full flex items-center justify-center shadow-2xl"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
};
