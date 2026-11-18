import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tournez la roue Nüa Café',
  description: 'Tentez de gagner une gourmandise à déguster chez nous.',
};

const INSTAGRAM = 'https://www.instagram.com/nuacafe.bko';

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

        <div className="mt-8 w-full overflow-hidden rounded-[2rem] border border-[#2A1F1A]/10 bg-[#FBF8F3] shadow-xl">
          <iframe
            src="/jeux/roue-nua-cafe/index.html"
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
