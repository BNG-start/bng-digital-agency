"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ServiceModal, { type Service } from '@/components/ServiceModal';

export default function ServicesPage() {
  // État pour savoir quel service est sélectionné
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "Création Web",
      description: "Des sites vitrines et e-commerce ultra-performants sous Next.js.",
      img: "/images/dev.jpg", // Utilise ton image locale
      fullDetails: "Nous concevons des écosystèmes numériques où la performance rencontre l'élégance. Chaque ligne de code est optimisée pour offrir une fluidité absolue, indispensable pour convertir vos visiteurs à Bamako comme à l'international.",
      points: [
        "Expérience Mobile-First : Optimisé pour tous les smartphones.",
        "Vitesse de chargement SEO : Score de performance maximal.",
        "Panneau d'administration intuitif : Gérez votre contenu facilement."
      ]
    },
    {
      title: "Marketing Digital",
      description: "Stratégies d'acquisition pour dominer votre marché local et global.",
      img: "/images/strategie.jpg", // Utilise ton image locale
      fullDetails: "Le marketing ne consiste pas à être vu, mais à être choisi. Nous déployons des stratégies d'acquisition chirurgicales basées sur la donnée pour transformer chaque investissement en opportunité commerciale concrète.",
      points: [
        "Social Ads Haute Conversion : Meta et Google Ads ciblés.",
        "Audit SEO complet : Visibilité maximale sur les moteurs de recherche.",
        "Gestion de contenu stratégique : Engagez votre communauté."
      ]
    },
    {
      title: "Design Graphique",
      description: "Identités visuelles marquantes qui racontent votre histoire.",
      img: "/images/branding.jpg", // Utilise ton image locale
      fullDetails: "Votre identité visuelle est votre premier argument de vente. BNG crée des univers de marque qui imposent le respect et la confiance. Nous bâtissons une image mémorable et intemporelle pour votre entreprise.",
      points: [
        "Logo & Branding Premium : Une identité unique et forte.",
        "Supports Print de Luxe : Plaquettes et cartes de visite.",
        "UI/UX Design : Interfaces modernes et faciles à utiliser."
      ]
    }
  ];

  const packs = [
    {
      name: 'Site Vitrine',
      delay: 'Délai indicatif : 2 à 4 semaines',
      features: [
        'Design sur mesure, mobile-first',
        "Jusqu'à 5 pages + blog",
        'SEO de base et analytics',
        'Bouton WhatsApp intégré',
        'Formation à la prise en main',
      ],
    },
    {
      name: 'Branding',
      delay: 'Délai indicatif : 1 à 2 semaines',
      features: [
        'Logo + charte graphique',
        'Cartes de visite et papeterie',
        'Kit réseaux sociaux',
        'Fichiers sources livrés',
        '2 séries de révisions',
      ],
    },
    {
      name: 'Pack Lancement',
      delay: 'Délai indicatif : 3 à 5 semaines',
      features: [
        'Site vitrine + branding',
        'Pages réseaux sociaux',
        'Campagne de lancement',
        'Production vidéo courte',
        'Suivi 30 jours inclus',
      ],
    },
  ];

  return (
    <div className="bg-premiumBlack min-h-screen pt-20">
      {/* 1. HERO SECTION */}
      <SectionWrapper className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter"
        >
          Nos Expertises<span className="text-accentBlue">.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-16"
        >
          Nous combinons technique de pointe et créativité pour offrir des solutions qui génèrent des résultats concrets pour les leaders maliens.
        </motion.p>

        {/* 2. GRILLE DE SERVICES */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: services.indexOf(s) * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-left group hover:border-accentBlue/50 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-gray-400 mb-10 leading-relaxed">
                {s.description}
              </p>
              
              {/* BOUTON EN SAVOIR PLUS */}
              <button 
                onClick={() => setSelectedService(s)}
                className="text-accentBlue font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                En savoir plus <span className="text-xl">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. MODALE (S'affiche au clic) */}
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />

      {/* 4. PACKS */}
      <SectionWrapper className="text-center pt-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Nos packs<span className="text-accentBlue">.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Des formules claires pour démarrer. Chaque projet restant unique, le chiffrage final se fait sur devis gratuit sous 24 heures.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {packs.map((p) => (
            <div key={p.name} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:border-accentBlue/50 transition-all duration-500 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-accentBlue text-xs font-bold uppercase tracking-widest mb-8">{p.delay}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="text-accentBlue mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center border border-white/20 text-white py-4 rounded-xl font-bold hover:bg-accentBlue hover:border-accentBlue transition"
              >
                Demander un devis
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. CTA SECTION */}
      <SectionWrapper className="text-center py-24">
        <div className="bg-accentBlue/10 p-12 md:p-20 rounded-[3rem] border border-accentBlue/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            Prêt à lancer votre projet ?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition"
          >
            Parlons-en maintenant
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
