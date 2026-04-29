"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const expertises = [
    { 
      title: 'Strategy', 
      desc: 'Analyse de marché et plans digitaux stratégiques pour dominer votre secteur, où que vous soyez.',
      img: '/images/strategie.jpg' 
    },
    { 
      title: 'Development', 
      desc: 'Sites Next.js et applications mobiles conçus avec la rigueur des standards mondiaux.',
      img: '/images/dev.jpg' 
    },
    { 
      title: 'Branding', 
      desc: 'Identités visuelles modernes qui imposent votre standing à Bamako et à l\'international.',
      img: '/images/branding.jpg' 
    }
  ];

  return (
    <div className="bg-premiumBlack min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accentBlue/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 text-center max-w-7xl px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-accentBlue text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            L'excellence digitale • Bamako • International
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-white"
          >
            Designez l'avenir <br className="hidden md:block" />
            <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-blue-400 to-cyan-300">
              de votre business.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            BNG Digital Agency fusionne créativité et technologie pour bâtir des expériences numériques qui captivent et convertissent vos clients à travers le monde.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="https://wa.me/22391220321" className="group relative bg-white text-black px-12 py-5 rounded-full text-lg font-bold transition overflow-hidden">
              <span className="relative z-10">Démarrer un projet</span>
              <div className="absolute inset-0 bg-accentBlue translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link href="/portfolio" className="text-white hover:text-accentBlue px-10 py-4 text-lg font-bold transition flex items-center gap-2">
              Voir nos travaux <span className="text-2xl">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grid Expertise */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Expertise</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Nos pôles de compétences.</h3>
            </div>
            <p className="text-gray-500 max-w-sm">Des solutions sur mesure conçues pour propulser les visions locales vers des sommets internationaux.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertises.map((s) => (
              <motion.div 
                key={s.title}
                whileHover={{ y: -15 }}
                className="group relative h-[500px] overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5"
              >
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-premiumBlack via-premiumBlack/40 to-transparent"></div>
                
                <div className="absolute bottom-0 p-10">
                  <div className="h-1 w-12 bg-accentBlue mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <h4 className="text-3xl font-bold text-white mb-4">{s.title}</h4>
                  <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-accentBlue rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 transition-all duration-1000"></div>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tighter leading-tight">Prêt à dominer <br /> le digital ?</h2>
          <Link href="/contact" className="inline-block bg-white text-accentBlue px-16 py-6 rounded-full text-xl font-black hover:scale-105 transition shadow-2xl">
            Parlons de votre projet
          </Link>
        </div>
      </section>
    </div>
  );
}