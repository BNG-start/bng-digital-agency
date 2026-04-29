"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LegalPage() {
  return (
    <div className="bg-premiumBlack min-h-screen pt-32 pb-20 px-6 text-gray-400 font-medium">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
              Mentions Légales <span className="text-accentBlue">&</span> Confidentialité
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-accentBlue">Document Officiel • BNG Digital Agency</p>
          </div>

          {/* Section 1: Éditeur */}
          <section className="space-y-4">
            <h2 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-accentBlue pl-4">1. Éditeur du site</h2>
            <p className="text-sm leading-relaxed">
              Le présent site est édité par <span className="text-white font-bold">BNG Digital Agency</span>, agence de services numériques basée à Bamako, Mali. 
              L'agence opère dans le domaine du développement web, du marketing digital et de la production audiovisuelle.
            </p>
            <p className="text-sm">
              Contact direction : <span className="text-white">bngdigitalagency@gmail.com</span>
            </p>
          </section>

          {/* Section 2: Données Personnelles (Plus détaillé pour faire "vrai") */}
          <section className="space-y-4">
            <h2 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-accentBlue pl-4">2. Protection des données</h2>
            <p className="text-sm leading-relaxed">
              Conformément aux normes internationales de protection de la vie privée (RGPD et lois locales), les informations collectées via nos formulaires sont traitées avec la plus haute confidentialité.
            </p>
            <div className="bg-white/5 p-6 rounded-2xl space-y-3">
              <p className="text-xs uppercase tracking-wider text-white">Utilisation des données :</p>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Établissement de devis personnalisés et diagnostics digitaux.</li>
                <li>Communication relative à la gestion des projets clients.</li>
                <li>Analyses statistiques anonymes pour l'amélioration de nos services.</li>
              </ul>
            </div>
            <p className="text-sm leading-relaxed">
              Vos données ne sont **jamais vendues, louées ou cédées** à des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande.
            </p>
          </section>

          {/* Section 3: Propriété Intellectuelle */}
          <section className="space-y-4">
            <h2 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-accentBlue pl-4">3. Propriété Intellectuelle</h2>
            <p className="text-sm leading-relaxed">
              L'ensemble de ce site (structure, design, charte graphique, logos, photographies, textes et codes sources) est la propriété exclusive de <span className="text-white font-bold">BNG Digital Agency</span>. 
            </p>
            <p className="text-sm leading-relaxed border border-white/10 p-4 rounded-xl italic">
              Toute reproduction, représentation, modification ou adaptation, même partielle, est strictement interdite sans l'accord écrit préalable de la direction et peut faire l'objet de poursuites judiciaires.
            </p>
          </section>

          {/* Section 4: Ta modif spécifique */}
          <section className="space-y-4">
            <h2 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-accentBlue pl-4">4. Responsabilité</h2>
            <p className="text-sm leading-relaxed italic opacity-80">
              <span className="text-white font-bold">BNG Digital Agency</span> s'efforce d'assurer l'exactitude des informations diffusées. Toutefois, l'agence ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation des informations qu'il contient.
            </p>
          </section>

          {/* Section 5: Cookies */}
          <section className="space-y-4">
            <h2 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-accentBlue pl-4">5. Cookies & Traçabilité</h2>
            <p className="text-sm leading-relaxed">
              Pour optimiser votre navigation, ce site peut utiliser des cookies. Ces fichiers ne permettent pas de vous identifier personnellement mais enregistrent des informations relatives à la navigation de votre terminal. Vous pouvez vous opposer à l'enregistrement de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          {/* Bouton Retour */}
          <div className="pt-10 border-t border-white/5 text-center md:text-left">
            <Link href="/">
              <button className="text-white text-[10px] font-bold uppercase tracking-[0.4em] px-10 py-5 border border-white/10 rounded-full hover:bg-accentBlue hover:border-accentBlue transition-all duration-300">
                ← Retour à la plateforme
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}