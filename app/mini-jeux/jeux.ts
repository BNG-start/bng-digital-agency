// Démos hébergées dans public/jeux/<slug>/.
// Stack Rush : npm run export:site dans games/stack-rush (dossiers burger, cake, coffee).
// La roue : games/spin-wheel. Le grattage : games/scratch-card.

export interface DemoJeu {
  slug: string;
  name: string;
  short: string;
  emoji: string;
  sector: string;
  desc: string;
  color: string;
  href: string;
}

export interface FamilleJeu {
  id: string;
  name: string;
  short: string;
  emoji: string;
  desc: string;
  /** Phrase sous le téléphone : comment jouer. */
  aide: string;
  color: string;
  demos: DemoJeu[];
}

export const catalogue: FamilleJeu[] = [
  {
    id: 'stack',
    name: 'Stack Rush',
    short: 'Stack',
    emoji: '🏗️',
    desc: 'Empilez les étages le plus haut possible. Idéal pour un défi entre amis.',
    aide: 'Touchez l’écran (ou Espace) pour lâcher le bloc.',
    color: '#e07a3d',
    demos: [
      {
        slug: 'burger',
        name: 'Burger Stack',
        short: 'Burger',
        emoji: '🍔',
        sector: 'Fast-food & restaurants',
        desc: 'Empilez le burger le plus haut : pain, steak, salade, fromage.',
        color: '#e07a3d',
        href: '/jeux/burger/index.html',
      },
      {
        slug: 'cake',
        name: 'Cake Stack',
        short: 'Cake',
        emoji: '🎂',
        sector: 'Pâtisseries & boulangeries',
        desc: 'Montez la pièce montée la plus haute sans rater un étage.',
        color: '#e94591',
        href: '/jeux/cake/index.html',
      },
      {
        slug: 'coffee',
        name: 'Coffee Stack',
        short: 'Coffee',
        emoji: '☕',
        sector: 'Cafés & coffee shops',
        desc: 'Empilez les tasses. Démo en anglais, pour vos clients internationaux.',
        color: '#c08552',
        href: '/jeux/coffee/index.html',
      },
    ],
  },
  {
    id: 'roue',
    name: 'Spin Wheel',
    short: 'Roue',
    emoji: '🎡',
    desc: 'Une roue de lots. Le joueur tourne et repart avec un code à montrer en caisse.',
    aide: 'Touchez TOURNER, glissez la roue, ou appuyez sur Espace.',
    color: '#9f1239',
    demos: [
      {
        slug: 'roue-pizza',
        name: 'Pizza Roma',
        short: 'Pizza',
        emoji: '🍕',
        sector: 'Pizzerias',
        desc: 'Tournez la roue : pizza offerte, réduction ou boisson.',
        color: '#9f1239',
        href: '/jeux/roue-pizza/index.html',
      },
      {
        slug: 'roue-fashion',
        name: 'Atelier Mode',
        short: 'Mode',
        emoji: '👗',
        sector: 'Boutiques de mode',
        desc: 'Une roue pour une réduction, un accessoire ou la livraison.',
        color: '#9d174d',
        href: '/jeux/roue-fashion/index.html',
      },
      {
        slug: 'roue-coffee',
        name: 'Daily Grind',
        short: 'Coffee',
        emoji: '☕',
        sector: 'Cafés · démo en anglais',
        desc: 'Spin the wheel and win a coffee treat. Version anglaise.',
        color: '#9a3412',
        href: '/jeux/roue-coffee/index.html',
      },
    ],
  },
  {
    id: 'gratte',
    name: 'Scratch & Win',
    short: 'Grattage',
    emoji: '🎟️',
    desc: 'Une carte à gratter. Trois symboles identiques, et le lot est gagné.',
    aide: 'Grattez avec le doigt ou la souris. Les flèches et Espace marchent aussi.',
    color: '#db2777',
    demos: [
      {
        slug: 'gratte-burger',
        name: 'Burger Corner',
        short: 'Burger',
        emoji: '🍔',
        sector: 'Fast-food',
        desc: 'Trois cases : trois symboles identiques, et le burger est gagné.',
        color: '#c2410c',
        href: '/jeux/gratte-burger/index.html',
      },
      {
        slug: 'gratte-beauty',
        name: 'Institut Belle',
        short: 'Beauté',
        emoji: '💅',
        sector: 'Salons de beauté',
        desc: 'Un jeu à gratter pour un soin, un vernis ou une réduction.',
        color: '#be185d',
        href: '/jeux/gratte-beauty/index.html',
      },
      {
        slug: 'gratte-bakery',
        name: 'Boulangerie Alma',
        short: 'Boulangerie',
        emoji: '🥐',
        sector: 'Boulangeries',
        desc: 'Grattez et tentez un café, un croissant ou un gâteau.',
        color: '#b45309',
        href: '/jeux/gratte-bakery/index.html',
      },
    ],
  },
];

/** Toutes les démos, dans l’ordre du catalogue. */
export const miniJeux: DemoJeu[] = catalogue.flatMap((jeu) => jeu.demos);
