"use client";
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

export default function Contact() {
  // MODIFICATION EFFECTUÉE : Ton ID Formspree est maintenant intégré directement
  const [state, handleSubmit] = useForm("mbdqnzpk"); 
  
  const [contactMethod, setContactMethod] = useState("email");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [submissionTime, setSubmissionTime] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
    setSubmissionTime(formattedDate);
  }, []);

  const isPhoneValid = contactMethod === "phone" 
    ? (phoneNumber ? isValidPhoneNumber(phoneNumber) : false) 
    : true;

  const canSubmit = isPhoneValid && isAgreed && !state.submitting;

  if (state.succeeded) {
    return (
      <div className="bg-premiumBlack min-h-screen flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white/5 border border-accentBlue/30 p-12 rounded-[2.5rem] text-center"
        >
          <div className="w-20 h-20 bg-accentBlue/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-accentBlue text-3xl">✓</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Reçu !</h2>
          <p className="text-gray-400 leading-relaxed font-medium">
            Votre vision est entre nos mains. BNG Digital Agency vous recontacte sous 24 heures.
          </p>
          <Link href="/">
            <button className="mt-10 w-full bg-accentBlue text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-accentBlue transition-all shadow-lg">
              Retour à l'accueil
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-premiumBlack min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter"
        >
          Parlons de votre <span className="text-accentBlue">vision.</span>
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <input type="hidden" name="Date_Envoi" value={submissionTime} />

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">Nom complet</label>
            <input 
              name="Client_Nom"
              type="text" 
              required
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-accentBlue outline-none transition placeholder:text-gray-700 font-medium" 
              placeholder="Moussa Keita" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">Préférence de contact</label>
              <select 
                className="bg-white/5 border border-white/10 rounded-2xl p-[1.15rem] text-white focus:border-accentBlue outline-none appearance-none cursor-pointer font-medium"
                onChange={(e) => setContactMethod(e.target.value)}
                value={contactMethod}
              >
                <option value="email" className="bg-[#0A0A0A]">Email</option>
                <option value="phone" className="bg-[#0A0A0A]">Téléphone / WhatsApp</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">
                {contactMethod === "email" ? "Adresse Email" : "Numéro de téléphone"}
              </label>
              
              {contactMethod === "email" ? (
                <input 
                  name="Client_Email"
                  type="email" 
                  required
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-accentBlue outline-none transition placeholder:text-gray-700" 
                  placeholder="contact@entreprise.ml" 
                />
              ) : (
                <div className="relative">
                  <PhoneInput
                    international
                    defaultCountry="ML"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    name="Client_Telephone"
                    required
                    className={`bg-white/5 border rounded-2xl p-4 text-white transition outline-none ${!isPhoneValid && phoneNumber ? 'border-red-500/50' : 'border-white/10 focus-within:border-accentBlue'}`}
                  />
                  {!isPhoneValid && phoneNumber && (
                    <span className="text-red-500 text-[9px] font-bold uppercase tracking-widest mt-1 ml-1 animate-pulse">Numéro invalide</span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">Nature du projet</label>
            <div className="relative">
              <select 
                name="Service_Demande"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-accentBlue outline-none appearance-none cursor-pointer font-medium"
                defaultValue=""
              >
                <option value="" disabled className="bg-[#0A0A0A] text-gray-500">Sélectionnez le type de service</option>
                <option value="Web & App" className="bg-[#0A0A0A]">Écosystème Web & Application</option>
                <option value="Branding & Affiches" className="bg-[#0A0A0A]">Identité Visuelle & Affiches</option>
                <option value="Strategie Marketing" className="bg-[#0A0A0A]">Stratégie Digitale & Marketing</option>
                <option value="Video Storytelling" className="bg-[#0A0A0A]">Production Vidéo & Storytelling</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-accentBlue">▼</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] ml-1">Détails</label>
            <textarea 
              name="Details_Projet"
              required
              rows={5} 
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-accentBlue outline-none transition resize-none font-medium" 
              placeholder="Décrivez votre projet..."
            ></textarea>
          </div>

          <div className="flex items-start gap-3 px-1">
            <input 
              type="checkbox" 
              id="legal"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              required 
              className="mt-1 h-4 w-4 cursor-pointer accent-accentBlue bg-white/5 border-white/10"
            />
            <label htmlFor="legal" className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-wider cursor-pointer">
              J'accepte que mes données soient traitées pour répondre à ma demande selon la 
              <span className="text-accentBlue hover:underline ml-1">politique de confidentialité</span> de BNG.
            </label>
          </div>

          <motion.button 
            whileHover={canSubmit ? { scale: 1.01 } : {}}
            whileTap={canSubmit ? { scale: 0.99 } : {}}
            type="submit" 
            disabled={!canSubmit}
            className={`w-full font-black py-5 rounded-2xl transition duration-300 uppercase tracking-widest text-sm 
              ${canSubmit 
                ? "bg-accentBlue text-white shadow-[0_15px_30px_rgba(59,130,246,0.2)] hover:bg-white hover:text-accentBlue cursor-pointer" 
                : "bg-gray-800 text-gray-600 cursor-not-allowed"}`}
          >
            {state.submitting ? "Transmission..." : !isPhoneValid && phoneNumber ? "Numéro incorrect" : !isAgreed ? "Accepter les conditions" : "Envoyer la demande"}
          </motion.button>
        </form>

        <p className="text-center text-gray-600 text-[10px] uppercase tracking-[0.3em] mt-12">
          Réponse confidentielle sous 24 heures • BNG Digital Agency
        </p>
      </div>

      <style jsx global>{`
        .PhoneInputInput {
          background: transparent !important;
          border: none !important;
          color: white !important;
          outline: none !important;
          margin-left: 10px;
          font-weight: 500;
        }
        .PhoneInputCountry {
          margin-right: 5px;
          padding-left: 5px;
        }
      `}</style>
    </div>
  );
}
