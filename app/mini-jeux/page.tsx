"use client";
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { miniJeux } from './jeux';

const WHATSAPP = 'https://wa.me/22391220321?text=' +
  encodeURIComponent("Bonjour BNG, je suis intéressé(e) par un mini-jeu à ma marque.");

const etapes = [
  { step: '01', title: 'Vous nous envoyez votre marque', desc: 'Logo, couleurs, produits et lots à gagner. Un échange WhatsApp suffit.' },
  { step: '02', title: 'On crée votre jeu', desc: 'Vos produits deviennent les blocs du jeu, vos textes et votre langue partout.' },
  { step: '03', title: 'Vous partagez le lien', desc: 'Instagram, WhatsApp, TikTok, QR code en boutique : aucun téléchargement.' },
  { step: '04', title: 'Vous récoltez les résultats', desc: 'Visibilité, partages, et la liste des emails des participants au concours.' },
];

const avantages = [
  { icon: '🎨', title: 'À vos couleurs', desc: 'Logo, couleurs, produits, textes : le jeu est 100 % votre marque.' },
  { icon: '🏆', title: 'Concours intégré', desc: 'Prénom, email et consentement en fin de partie pour vos tirages au sort.' },
  { icon: '📲', title: 'Partage viral', desc: 'Chaque joueur partage son score et défie ses amis : votre marque circule.' },
  { icon: '⚡', title: 'Zéro installation', desc: 'Le jeu s’ouvre en un clic sur téléphone et ordinateur, en français ou en anglais.' },
  { icon: '🔗', title: 'Vers votre offre', desc: 'Un bouton mène directement à votre menu, votre boutique ou votre site.' },
  { icon: '🚀', title: 'Livré vite', desc: 'Votre jeu est prêt en quelques jours, hébergé et prêt à partager.' },
];

const formules = [
  {
    name: 'Basic', price: '$99', highlight: false,
    items: ['Jeu à vos couleurs et votre logo', 'Textes et langue personnalisés', 'Livré avec un lien prêt à partager'],
  },
  {
    name: 'Standard', price: '$249', highlight: true,
    items: ['Tout le Basic', 'Vos produits dessinés en blocs', 'Bouton vers votre site ou menu', 'Partage du score'],
  },
  {
    name: 'Premium', price: '$499', highlight: false,
    items: ['Tout le Standard', 'Concours avec collecte d’emails', '1 mois d’hébergement inclus', 'Suivi de la campagne'],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function MiniJeuxPage() {
  const [actif, setActif] = useState(0);
  const jeu = miniJeux[actif];

  return (
    <div className="bg-premiumBlack min-h-screen text-white">
      {/* HERO + téléphone jouable */}
      <section className="relative overflow-hidden pt-36 pb-24 px-6">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accentBlue/20 blur-[120px] rounded-full"></div>
        <div
          className="absolute bottom-0 -right-20 w-[28rem] h-[28rem] blur-[140px] rounded-full transition-colors duration-700"
          style={{ backgroundColor: `${jeu.color}33` }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-2 px-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-accentBlue text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
            >
              Nouveau · Mini-jeux de marque
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-8"
            >
              Vos clients jouent.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-cyan-400">
                Votre marque gagne.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Un mini-jeu à vos couleurs pour vos concours et vos réseaux sociaux. Vos clients
              jouent, partagent leur score et vous laissent leur email. Restaurants, cafés,
              boutiques : partout dans le monde.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group relative bg-white text-black px-10 py-5 rounded-full text-lg font-bold transition overflow-hidden text-center">
                <span className="relative z-10 group-hover:text-white transition-colors">Je veux mon jeu</span>
                <div className="absolute inset-0 bg-accentBlue translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a href="#formules" className="px-10 py-5 rounded-full text-lg font-bold border border-white/20 hover:border-accentBlue transition text-center">
                Voir les formules
              </a>
            </motion.div>
          </div>

          {/* Téléphone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex gap-2 mb-6 bg-white/5 border border-white/10 rounded-full p-1.5">
              {miniJeux.map((j, i) => (
                <button
                  key={j.slug}
                  onClick={() => setActif(i)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-sm font-bold transition ${
                    i === actif ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {j.emoji} {j.short}
                </button>
              ))}
            </div>
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/16] rounded-[2.75rem] border-[10px] border-neutral-800 bg-black shadow-[0_0_80px_rgba(37,99,235,0.25)] overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-800 rounded-full z-10 pointer-events-none"></div>
              <iframe
                key={jeu.slug}
                src={jeu.href}
                title={`Démo jouable ${jeu.name}`}
                className="w-full h-full"
                loading="lazy"
                allow="fullscreen; web-share"
              />
            </div>
            <p className="text-gray-500 text-sm mt-5 text-center">
              Jouez ici : touchez l’écran pour lâcher le bloc.{' '}
              <a href={jeu.href} target="_blank" rel="noopener noreferrer" className="text-accentBlue hover:underline">
                Ouvrir en plein écran ↗
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Démos */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Démos</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Un jeu, mille marques.</h3>
            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              Le même jeu addictif, transformé pour chaque client. Imaginez-le avec vos produits.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {miniJeux.map((j, i) => (
              <motion.a
                key={j.slug}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                href={j.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 p-8 hover:border-white/30 transition"
                style={{ background: `linear-gradient(160deg, ${j.color}26, transparent 60%)` }}
              >
                <div className="text-6xl mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">{j.emoji}</div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: j.color }}>{j.sector}</p>
                <h4 className="text-2xl font-bold mb-3">{j.name}</h4>
                <p className="text-gray-400 mb-8">{j.desc}</p>
                <span className="font-bold group-hover:translate-x-1 inline-block transition-transform">Jouer →</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Ce que vous recevez</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Plus qu’un jeu, une campagne.</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((a, i) => (
              <motion.div
                key={a.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-accentBlue/50 transition"
              >
                <div className="text-3xl mb-5">{a.icon}</div>
                <h4 className="text-xl font-bold mb-3">{a.title}</h4>
                <p className="text-gray-400 leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Comment ça marche</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Prêt en quelques jours.</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((e, i) => (
              <motion.div key={e.step} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="border-t border-white/10 pt-8">
                <span className="text-5xl font-bold text-white/10">{e.step}</span>
                <h4 className="text-xl font-bold mt-4 mb-3">{e.title}</h4>
                <p className="text-gray-400 leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section id="formules" className="py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Formules</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Simple et transparent.</h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {formules.map((f, i) => (
              <motion.div
                key={f.name}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-[2rem] p-10 flex flex-col ${
                  f.highlight
                    ? 'bg-accentBlue shadow-[0_0_60px_rgba(37,99,235,0.35)] md:-translate-y-4'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {f.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-accentBlue text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Le plus choisi
                  </span>
                )}
                <h4 className="text-xl font-bold mb-2">{f.name}</h4>
                <p className="text-5xl font-bold tracking-tight mb-8">{f.price}</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {f.items.map((it) => (
                    <li key={it} className={`flex gap-3 ${f.highlight ? 'text-white' : 'text-gray-300'}`}>
                      <span className={f.highlight ? 'text-white' : 'text-accentBlue'}>✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-4 rounded-full font-bold transition hover:scale-[1.02] ${
                    f.highlight ? 'bg-white text-accentBlue' : 'border border-white/20 hover:border-white'
                  }`}
                >
                  Choisir {f.name}
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-10">
            Option : hébergement et maintenance après le premier mois, $19/mois. Paiement en ligne, clients du monde entier.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-accentBlue rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 transition-all duration-1000"></div>
          <h2 className="relative text-3xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
            Lancez votre <br /> jeu concours.
          </h2>
          <p className="relative text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Devis gratuit sous 24 heures. On peut même vous préparer une démo à votre nom.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-accentBlue px-10 py-5 rounded-full text-lg font-black hover:scale-105 transition shadow-2xl">
              Écrire sur WhatsApp
            </a>
            <a href="mailto:bngdigitalagency@gmail.com?subject=Mini-jeu%20de%20marque" className="inline-block border border-white/40 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition">
              bngdigitalagency@gmail.com
            </a>
          </div>
          <div className="relative mt-6">
            <Link href="/contact" className="text-white/80 hover:text-white underline underline-offset-4">
              ou remplissez le formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
