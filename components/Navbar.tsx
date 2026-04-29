"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-premiumBlack/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* LOGO BNG COMPLET - ZOOM SUR LE BLOC ENTIER */}
        <Link 
          href="/" 
          className="flex flex-col items-center transition-transform duration-300 group hover:scale-110 active:scale-100"
        >
          <Image 
            src="/images/logo-bng.png" 
            alt="BNG Logo" 
            width={120} 
            height={120} 
            className="h-16 md:h-20 w-auto object-contain"
            priority
          />
          
          <div className="flex flex-col items-center mt-3 text-center">
            <span className="text-[12px] md:text-[14px] font-bold tracking-[0.25em] text-accentBlue uppercase leading-none">
              Digital Agency
            </span>
          </div>
        </Link>

        {/* Menu de navigation */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-gray-300 md:pt-6">
          <Link href="/services" className="hover:text-accentBlue transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-accentBlue transition-colors">Projets</Link>
          <Link href="/about" className="hover:text-accentBlue transition-colors">Agence</Link>
        </div>

        {/* Bouton d'action */}
        <div className="md:pt-6">
          <Link href="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-black hover:bg-accentBlue hover:text-white transition-all duration-300 transform active:scale-95">
            Parlons Projet
          </Link>
        </div>
      </div>
    </nav>
  );
}