"use client";
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceModal({ isOpen, onClose, service }: any) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Overlay sombre */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          {/* Contenu de la Modale */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-premiumBlack border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white z-10 text-2xl"
            >
              ✕
            </button>

            <div className="h-48 w-full relative">
               <img src={service.img} className="w-full h-full object-cover opacity-60" alt="" />
               <div className="absolute inset-0 bg-gradient-to-t from-premiumBlack to-transparent" />
            </div>

            <div className="p-10 pt-0">
              <span className="text-accentBlue font-bold tracking-widest text-xs uppercase">Expertise BNG</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">{service.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.fullDetails}
              </p>
              
              <div className="grid gap-4">
                {service.points.map((point: string) => (
                  <div key={point} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 bg-accentBlue rounded-full" />
                    {point}
                  </div>
                ))}
              </div>

              <button 
                onClick={onClose}
                className="mt-10 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-accentBlue hover:text-white transition-colors"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}