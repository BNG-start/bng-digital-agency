import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tournez la roue Nüa Café',
  description: 'Tentez de gagner une gourmandise à déguster chez nous.',
};

const INSTAGRAM = 'https://www.instagram.com/nuacafe.bko';
const JEU_PLEIN_ECRAN = '/jeux/roue-nua-cafe/index.html';

/** Démo prospect : la roue Nüa Café, habillée aux couleurs du café. */
export default function RoueNuaCafePage() {
  return (
    <div className="bg-[#F3ECE2] text-[#2A1F1A]">
      <section className="mx-auto flex w-full max-w-md flex-col items-center px-5 pb-16 pt-10 text-center">
        <Image
          src="/nua-logo.png"
          alt="Nüa Café"
          width={120}
          height={120}
          priority
          className="h-28 w-28 rounded-full object-cover shadow-lg"
        />
        <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight">
          Tournez la roue Nüa Café
        </h1>
        <p className="mt-3 text-[#7C6E64]">
          Tentez de gagner une gourmandise à déguster chez nous
        </p>

        {/* Mobile et tablette : carte vers le jeu plein écran.
            Un iframe tactile piégerait le défilement de la page. */}
        <a
          href={JEU_PLEIN_ECRAN}
          aria-label="Jouer à la roue Nüa Café en plein écran"
          className="group mt-8 flex w-full flex-col items-center gap-5 rounded-[2rem] border border-[#2A1F1A]/10 bg-[#FBF8F3] px-6 py-8 shadow-xl transition hover:shadow-2xl lg:hidden"
        >
          <span className="relative block h-52 w-52">
            <span className="block h-full w-full rounded-full bg-[conic-gradient(#8B6A4F_0_60deg,#9A8B7A_60deg_120deg,#7D8F5C_120deg_180deg,#9A8B7A_180deg_240deg,#B08968_240deg_300deg,#5A3E2B_300deg_360deg)] shadow-inner ring-8 ring-[#5A3E2B]" />
            <span className="absolute left-1/2 top-1/2 block h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2A1F1A] ring-4 ring-[#FBF8F3]" />
            <span className="absolute -top-1 left-1/2 block h-0 w-0 -translate-x-1/2 border-x-[10px] border-t-[16px] border-x-transparent border-t-[#2A1F1A]" />
          </span>
          <span className="inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#2A1F1A] px-8 font-semibold text-[#FBF8F3] transition group-hover:bg-[#8B6A4F]">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path d="M10 8.5v7l6-3.5z" fill="currentColor" />
            </svg>
            Jouer
          </span>
          <span className="text-sm text-[#7C6E64]">
            Le jeu s&apos;ouvre en plein écran
          </span>
        </a>

        {/* Ordinateur : jeu intégré, la souris fait défiler sans gêne. */}
        <div className="mt-8 hidden w-full overflow-hidden rounded-[2rem] border border-[#2A1F1A]/10 bg-[#FBF8F3] shadow-xl lg:block">
          <iframe
            src={JEU_PLEIN_ECRAN}
            title="Roue Nüa Café — jeu"
            className="block aspect-[9/16] w-full"
            allow="fullscreen; web-share"
          />
        </div>

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#2A1F1A] px-8 font-semibold text-[#FBF8F3] transition hover:bg-[#8B6A4F]"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
            <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
          </svg>
          Suivre Nüa Café sur Instagram
        </a>

        <p className="mt-10 text-sm text-[#7C6E64]">
          Démo BNG Digital Agency pour Nüa Café
        </p>
      </section>
    </div>
  );
}
