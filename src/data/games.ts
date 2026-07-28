export type Game = {
  title: string;
  role: string;
  scope: string;
  description: string;
  platform: string;
  tags: string[];
  group: 'own' | 'contributed' | 'earlier';
  studio?: string;
  href?: string;
  cover?: string;
  featured?: boolean;
};

export const games: Game[] = [
  {
    title: 'ZORT',
    role: 'Game Programmer at Londer Software',
    scope: 'Netcode, enemy AI, core system optimization',
    description:
      "A Londer Software title, not mine — I came onto the existing team for the Chapter 4 update. My part: expanding the Mirror netcode, programming the enemy AI and optimizing core systems with high-performance C#.",
    platform: 'Steam / PC',
    tags: ['Unity', 'Mirror', 'Multiplayer'],
    group: 'contributed',
    studio: 'Londer Software',
    href: 'https://store.steampowered.com/app/3121110/Zort/',
    cover: '/media/games/zort.jpg',
    featured: true,
  },
  {
    title: 'Food Cart Simulator',
    role: 'Solo developer',
    scope: 'Everything',
    description:
      'Developed entirely on my own from start to finish in Unity and published on Steam under my own studio, Heavyworks Games.',
    platform: 'Steam / PC',
    tags: ['Unity', 'Solo'],
    group: 'own',
    studio: 'Heavyworks Games',
    href: 'https://store.steampowered.com/app/3647140/Dirty_Street_Food_Simulator/',
    cover: '/media/games/food-cart-simulator.jpg',
    featured: true,
  },
  {
    title: 'Good Luck',
    role: 'Freelance developer',
    scope: 'Multiplayer conversion',
    description:
      "Someone else's game, hired for one job: converting the existing single-player Unity build to multiplayer — online functionality via Netcode for GameObjects, with Steam Relay through Facepunch Steamworks.",
    platform: 'Steam / PC',
    tags: ['Unity', 'NGO', 'Steam Relay'],
    group: 'contributed',
    href: 'https://store.steampowered.com/app/3657240/Good_Luck/',
    cover: '/media/games/good-luck.jpg',
  },
  {
    title: 'Chained in the Backrooms',
    role: 'Freelance developer',
    scope: 'Multiplayer systems, controllers, optimization',
    description:
      "Not my game — freelance work through Task+ Studios on a 1–4 player co-op title: multiplayer system integrations, player movement controllers, Steam integration and optimization of network-heavy gameplay loops.",
    platform: 'Steam / PC',
    tags: ['Unity', 'Netcode', 'Optimization'],
    group: 'contributed',
    studio: 'Task+ Studios',
    href: 'https://store.steampowered.com/app/3060170/Chained_in_the_Backrooms/',
    cover: '/media/games/chained-backrooms.jpg',
  },
  {
    title: 'Parking 3D',
    role: 'Programmer',
    scope: 'All programming',
    description:
      'Gameplay mechanics, ads integration and localization on a 3D car parking game. Reached around 50K downloads before it was removed from the Play Store.',
    platform: 'Android',
    tags: ['Unity', 'Mobile', '~50K downloads'],
    group: 'earlier',
    href: 'https://oxygenbutbeta.itch.io/car-parking',
  },
  {
    title: 'Magic Match',
    role: 'Developer',
    scope: 'Architecture, gameplay',
    description:
      'Match-3 game built on a performance-focused, scalable architecture with optimized redraws.',
    platform: 'Mobile',
    tags: ['Unity', 'Match-3'],
    group: 'earlier',
    href: 'https://www.youtube.com/shorts/-LihjWgjrIc',
  },
  {
    title: 'Puzzle Harmony',
    role: 'Developer',
    scope: 'Architecture, gameplay',
    description:
      'Performance-optimized puzzle game with a scriptable architecture, minimized redraws and no collision calculations.',
    platform: 'Mobile',
    tags: ['Unity', 'Puzzle'],
    group: 'earlier',
    href: 'https://www.youtube.com/shorts/RBGhKy-dH5k',
  },
];
