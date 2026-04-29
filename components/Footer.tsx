"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-premiumBlack border-t border-white/10 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* COLONNE LOGO */}
          <div className="flex flex-col gap-6 md:col-span-2">
            <Link href="/" className="flex flex-col items-start transition-transform duration-300 group hover:scale-105 origin-left">
              <Image 
                src="/images/logo-bng.png" 
                alt="BNG Logo" 
                width={100} 
                height={100} 
                className="h-16 w-auto object-contain"
              />
              <span className="text-[10px] font-bold tracking-[0.25em] text-accentBlue uppercase mt-3">
                Digital Agency
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Agence digitale premium basée à Bamako. Nous propulsons les entreprises vers l'excellence numérique à travers le monde.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link href="/services" className="hover:text-accentBlue transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-accentBlue transition-colors">Nos Projets</Link></li>
              <li><Link href="/about" className="hover:text-accentBlue transition-colors">L'Agence</Link></li>
              <li>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-accentBlue transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* EXPERTISES */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Expertises</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-white transition-colors cursor-default">Développement Web</li>
              <li className="hover:text-white transition-colors cursor-default">Marketing Digital</li>
              <li className="hover:text-white transition-colors cursor-default">Branding & UI/UX</li>
              <li className="hover:text-white transition-colors cursor-default">Production Vidéo</li>
            </ul>
          </div>

          {/* LÉGAL & SOCIAL */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Légal</h4>
            <ul className="space-y-4 text-gray-500 text-[10px] uppercase tracking-widest mb-8">
              {/* On pointe vers la page unique /legal qui regroupe tout */}
              <li><Link href="/legal" className="hover:text-accentBlue transition-colors">Confidentialité & Mentions</Link></li>
            </ul>
            
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Social</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/bng_digital_agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION DE PROTECTION INFÉRIEURE */}
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} BNG Digital Agency. Tous droits réservés.
            </p>
            <p className="text-gray-700 text-[9px] uppercase tracking-widest max-w-md text-center md:text-right leading-relaxed font-medium">
              Toute exploitation non autorisée du design, des actifs visuels ou du code de ce site est passible de poursuites.
            </p>
          </div>
        </div>
      </footer>

      {/* MODALE DE CONTACT PREMIUM */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-in fade-in duration-500"
            onClick={() => setIsContactOpen(false)}
          />
          <div className="relative bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-[2rem] max-w-2xl w-full shadow-[0_0_50px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-10">
              <h3 className="text-white text-3xl font-bold mb-3 uppercase tracking-tighter">Prenons contact</h3>
              <p className="text-gray-500 text-sm">Discutons de votre prochain projet d'envergure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="mailto:bngdigitalagency@gmail.com"
                className="group p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-accentBlue transition-all duration-500"
              >
                <div className="text-accentBlue text-[10px] font-bold uppercase tracking-widest mb-4">Envoyer un mail</div>
                <div className="text-white text-sm font-medium group-hover:translate-x-1 transition-transform break-all">
                  bngdigitalagency@gmail.com
                </div>
              </a>

              <a 
                href="https://wa.me/22391220321"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-green-500 transition-all duration-500"
              >
                <div className="text-green-500 text-[10px] font-bold uppercase tracking-widest mb-4">WhatsApp Direct</div>
                <div className="text-white text-sm font-medium group-hover:translate-x-1 transition-transform">
                  +223 91 22 03 21
                </div>
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase">
                Bamako • Mali • International
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}