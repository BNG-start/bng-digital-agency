"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-premiumBlack/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO BNG */}
        <Link 
          href="/" 
          className="flex flex-col items-center transition-transform duration-300 group hover:scale-110 active:scale-100"
        >
          <Image 
            src="/images/logo-bng.png" 
            alt="BNG Logo" 
            width={120} 
            height={120} 
            className="h-12 md:h-20 w-auto object-contain"
            priority
          />
          <div className="flex flex-col items-center mt-1 text-center">
            <span className="text-[10px] md:text-[14px] font-bold tracking-[0.25em] text-accentBlue uppercase leading-none">
              Digital Agency
            </span>
          </div>
        </Link>

        {/* Menu Desktop (Visible uniquement sur ordi) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-gray-300">
          <Link href="/services" className="hover:text-accentBlue transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-accentBlue transition-colors">Projets</Link>
          <Link href="/about" className="hover:text-accentBlue transition-colors">Agence</Link>
        </div>

        {/* Bouton d'action & Burger Mobile */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block bg-white text-black px-6 py-2.5 rounded-full text-[10px] md:text-sm font-black hover:bg-accentBlue hover:text-white transition-all duration-300">
            Parlons Projet
          </Link>
          
          {/* Bouton Burger (Visible uniquement sur mobile) */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile Déroulant */}
      <div className={`md:hidden bg-premiumBlack border-b border-white/10 overflow-hidden transition-all duration-300 ${isOpen ? 'max-height-screen py-6' : 'max-h-0'}`}>
        <div className="flex flex-col items-center space-y-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-300">
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-accentBlue">Services</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-accentBlue">Projets</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-accentBlue">Agence</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-accentBlue text-white px-8 py-3 rounded-full font-black">
            Parlons Projet
          </Link>
        </div>
      </div>
    </nav>
  );
}
