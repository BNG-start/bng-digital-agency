"use client";
import Link from 'next/link';
import Image from 'next/image';
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

  const stats = [
    { value: '6', label: 'Projets clients en vitrine' },
    { value: '3', label: "Pôles d'expertise" },
    { value: '24h', label: 'Devis et réponse garantis' },
    { value: '100%', label: 'Sur mesure, sans template' },
  ];

  const clients = ['Coulba Services', "A&A Food'", 'BBK Barber Shop', "Dia'agro", 'Love Connect'];

  const process = [
    {
      step: '01',
      title: 'Découverte',
      desc: "Échange sur WhatsApp ou par mail, analyse de votre besoin, devis gratuit sous 24 heures.",
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Maquettes et identité visuelle validées avec vous avant chaque étape de production.',
    },
    {
      step: '03',
      title: 'Réalisation',
      desc: 'Développement, contenus et tests qualité jusqu\u2019à un résultat irréprochable.',
    },
    {
      step: '04',
      title: 'Lancement',
      desc: 'Mise en ligne, formation à la prise en main et suivi après livraison.',
    },
  ];

  const testimonials = [
    {
      quote:
        "Du logo aux affiches hebdomadaires, BNG a donné une vraie identité à notre marque. Nos plats traditionnels méritaient une image moderne : aujourd'hui, nos clients nous reconnaissent au premier coup d'œil.",
      author: "A&A Food'",
      context: 'Branding & Communication',
    },
    {
      quote:
        "La vidéo réalisée pour le salon a parfaitement capturé notre ambiance et notre savoir-faire. Un travail sérieux, rapide, et un résultat que nous partageons fièrement sur nos réseaux.",
      author: 'BBK Barber Shop',
      context: 'Production vidéo',
    },
    {
      quote:
        "Huit produits, une seule identité cohérente : la gamme d'étiquettes réalisée par BNG a transformé la présentation de nos produits du terroir. Un partenaire attentif, du premier brief à la livraison.",
      author: "Dia'agro",
      context: 'Branding & Packaging',
    },
  ];

  const vitrineJeux = "/#mini-jeux";

  const miniJeux = [
    { name: "Burger Stack", href: "/#mini-jeux" },
    { name: "Cake Stack", href: "/#mini-jeux" },
    { name: "Coffee Stack", href: "/#mini-jeux" },
  ];

  const faqs = [
    {
      q: 'Quels services propose BNG Digital Agency ?',
      a: "Création de sites web (Next.js), identités visuelles et branding, marketing digital (publicités Meta et Google, SEO, contenus) et production vidéo pour les réseaux sociaux.",
    },
    {
      q: 'Quels sont vos délais de réalisation ?',
      a: "Comptez 1 à 2 semaines pour une identité visuelle, 2 à 4 semaines pour un site vitrine, selon la complexité. Un planning précis est fixé dans chaque devis.",
    },
    {
      q: 'Combien coûte un projet ?',
      a: "Chaque projet est chiffré sur mesure : devis gratuit sous 24 heures, sans engagement. Les packs présentés sur la page Services donnent une idée des formules possibles.",
    },
    {
      q: 'Travaillez-vous avec des clients hors du Mali ?',
      a: "Oui. Basés à Bamako, nous travaillons à distance avec des clients partout dans le monde, en français et en anglais.",
    },
    {
      q: 'Proposez-vous un suivi après livraison ?',
      a: "Oui : formation à la prise en main, corrections après mise en ligne et formules de maintenance pour garder votre site rapide et sécurisé.",
    },
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
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight md:tracking-tighter mb-8 leading-[1.15] text-white"
          >
            Dessinez l'avenir <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-blue-400 to-cyan-300">
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
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
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

      {/* Chiffres clés */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{s.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Preuves</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">Ils nous font confiance.</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <Link
                key={c}
                href="/portfolio"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-gray-300 font-bold hover:border-accentBlue hover:text-white transition"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Méthode</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Un processus simple et transparent.</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-accentBlue/50 transition">
                <div className="text-accentBlue text-5xl font-black mb-6 opacity-30">{p.step}</div>
                <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Avis clients</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Ils témoignent.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.author} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col hover:border-accentBlue/50 transition">
                <div className="text-accentBlue tracking-[0.3em] mb-6" aria-label="Note : 5 sur 5">★★★★★</div>
                <blockquote className="text-gray-300 text-sm leading-relaxed italic flex-1">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/5">
                  <div className="text-white font-bold">{t.author}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">{t.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">FAQ</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Questions fréquentes.</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white/5 border border-white/10 rounded-2xl px-6 open:border-accentBlue/50 transition">
                <summary className="py-5 cursor-pointer font-bold text-white list-none flex justify-between items-center gap-4">
                  {f.q}
                  <span className="text-accentBlue text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="pb-6 text-gray-400 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Mini-jeux de marque */}
      <section id="mini-jeux" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Mini-jeux</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Mini-jeux de marque.</h3>
            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              Des jeux à vos couleurs pour vos concours et votre marketing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {miniJeux.map((jeu) => (
              <a
                key={jeu.name}
                href={jeu.href}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-accentBlue/50 transition"
              >
                <h4 className="text-xl font-bold text-white mb-6">{jeu.name}</h4>
                <span className="text-accentBlue font-bold">Jouer →</span>
              </a>
            ))}
          </div>
          <Link href={vitrineJeux} className="group relative inline-block bg-white text-black px-12 py-5 rounded-full text-lg font-bold transition overflow-hidden">
            <span className="relative z-10">Découvrir l'offre</span>
            <div className="absolute inset-0 bg-accentBlue translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>
      </section>

      {/* CTA Final (Corrigé pour Mobile & Responsive) */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-accentBlue rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 transition-all duration-1000"></div>
          
          {/* Titre responsive : plus petit sur mobile (text-3xl) et grand sur PC (md:text-7xl) */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 md:mb-10 tracking-tighter leading-tight">
            Prêt à dominer <br /> le digital ?
          </h2>
          
          {/* Bouton responsive : paddings et texte réduits sur mobile, max-width pour éviter l'étirement */}
          <Link href="/contact" className="inline-block w-full sm:w-auto max-w-[280px] sm:max-w-none bg-white text-accentBlue px-6 py-4 sm:px-16 sm:py-6 rounded-full text-base sm:text-xl font-black hover:scale-105 transition shadow-2xl">
            Parlons de votre projet
          </Link>
        </div>
      </section>
    </div>
  );
}
