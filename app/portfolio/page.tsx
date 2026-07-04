"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Portfolio() {
  // État pour gérer le projet sélectionné
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "Love Connect - Expérience Digitale", 
      category: "Web Development", 
      desc: "Plateformes interactives personnalisées pour célébrer les moments forts.",
      details: "Développement d'une infrastructure web robuste permettant une personnalisation totale. Nous avons mis l'accent sur l'expérience utilisateur (UX) pour rendre l'interface intuitive tout en conservant un aspect émotionnel fort. Technologies utilisées : Next.js, Framer Motion et intégrations API sur mesure.",
      image: "/images/love.jpg" 
    },
    { 
      title: "A&A Food' — Identité & Campagnes", 
      category: "Branding & Communication",
      desc: "Création d'une identité de marque ancrée dans la culture malienne pour un service de livraison de plats traditionnels.",
      details: "Conception du logo, de la palette terracotta et or, et des motifs inspirés du Bogolan. Déclinaison en supports promotionnels hebdomadaires (Tô, Woudjila) pour accompagner le lancement des offres du service de livraison basé à Kalaban Coura. (Les prix visibles sur l'affiche sont ceux des plats du client, non de nos prestations.)",
      image: "/images/aa-food-poster-woudjila.jpg" 
    },
    { 
      title: "BBK Barber — Storytelling Vidéo", 
      category: "Video Production", 
      desc: "Vidéo promotionnelle immersive pour BBK Barber Shop, valorisant le savoir-faire et l'ambiance du salon.",
      details: "Production d'un contenu vidéo court, pensé pour les réseaux sociaux, capturant l'atmosphère et le professionnalisme de BBK Barber Shop, situé à Sirakoro Cité BMS. Notre approche a mis en avant l'expertise du barbier à travers un montage dynamique et une mise en scène soignée de l'espace.",
      image: "/images/bbk-barber-shop.jpg",
      videoLink: "https://www.instagram.com/stories/highlights/18129921559532413/"
    },
  ];

  return (
    <div className="bg-premiumBlack text-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
            >
              Projets <span className="text-accentBlue">Sélectionnés.</span>
            </motion.h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              De l'architecture web haute performance à l'élaboration de <span className="text-white">l'identité visuelle</span> des leaders de demain.
            </p>
          </div>
          <div className="text-accentBlue font-bold hidden md:block border-b border-accentBlue uppercase tracking-[0.3em] text-[10px] pb-2">
            Projets réalisés ({projects.length})
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white/5 aspect-[16/10] mb-8 border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-white/20">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition duration-[1.5s] group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-premiumBlack via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="absolute top-8 left-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="bg-white text-black text-[10px] px-6 py-2.5 rounded-full font-black uppercase tracking-[0.2em] shadow-2xl">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start px-4">
                <div className="max-w-[85%]">
                  <h3 className="text-3xl font-bold mt-1 group-hover:text-accentBlue transition duration-300 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-sm">
                    {project.desc}
                  </p>
                </div>
                {/* Bouton flèche actif */}
                <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accentBlue group-hover:border-accentBlue group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg] shrink-0 shadow-lg">
                  <span className="text-2xl font-light">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PANNEAU LATÉRAL (SLIDE-OVER) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[150] flex justify-end">
              {/* Fond sombre */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              
              {/* Le contenu */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                className="relative bg-[#0A0A0A] w-full md:w-[550px] h-full shadow-2xl border-l border-white/10 p-8 md:p-16 overflow-y-auto"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors mb-12 uppercase text-[10px] font-bold tracking-[0.3em]"
                >
                  <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span> Fermer l'aperçu
                </button>

                <div className="space-y-8">
                  <div>
                    <span className="text-accentBlue font-black uppercase tracking-[0.2em] text-[10px]">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tighter leading-none">
                      {selectedProject.title}
                    </h2>
                  </div>

                  <div className="rounded-[2rem] overflow-hidden border border-white/5 bg-black/40">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto object-contain" />
                  </div>

                  {selectedProject.videoLink && (
                    <a 
                      href={selectedProject.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full border border-accentBlue text-accentBlue py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-accentBlue hover:text-white transition-all duration-500"
                    >
                      Voir la vidéo sur Instagram
                      <span className="text-lg">↗</span>
                    </a>
                  )}

                  <div>
                    <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-4 opacity-50">L'approche BNG</h4>
                    <p className="text-gray-400 text-lg leading-relaxed italic">
                      "{selectedProject.details}"
                    </p>
                  </div>

                  <button 
                    onClick={() => window.location.href='/contact'}
                    className="w-full bg-accentBlue text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-accentBlue transition-all duration-500 mt-8 shadow-xl shadow-accentBlue/20"
                  >
                    Démarrer un projet similaire
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* CTA final */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-24 bg-accentBlue rounded-[4rem] text-center relative overflow-hidden group shadow-[0_30px_100px_rgba(59,130,246,0.3)]"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 transition-all duration-1000"></div>
          
          <h2 className="text-4xl md:text-7xl font-bold mb-12 text-white tracking-tighter leading-[1.1]">
            Prêt à marquer <br /> les esprits ?
          </h2>
          <button 
            onClick={() => window.location.href='/contact'}
            className="bg-white text-black px-16 py-7 rounded-full font-black text-xl hover:bg-black hover:text-white hover:scale-105 transition-all duration-500 shadow-2xl"
          >
            Démarrer un projet
          </button>
        </motion.div>
      </div>
    </div>
  );
}