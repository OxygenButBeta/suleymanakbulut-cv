export type Game = {
  title: string;
  role: string;
  scope: string;
  description: string;
  platform: string;
  tags: string[];
  href?: string;
  cover?: string;
  featured?: boolean;
};

export const games: Game[] = [
  {
    title: 'ZORT',
    role: 'Developer — team project',
    scope: 'Networking, server/client AI, gameplay',
    description:
      'Joined the existing team at chapter four. I own the networking systems, the server/client integrated AI and core gameplay mechanics on a Unity + Mirror multiplayer title.',
    platform: 'Steam / PC',
    tags: ['Unity', 'Mirror', 'Multiplayer'],
    href: 'https://store.steampowered.com/app/3121110/Zort/',
    cover: '/media/games/zort.jpg',
    featured: true,
  },
  {
    title: 'Food Cart Simulator',
    role: 'Solo developer',
    scope: 'Everything',
    description: 'Developed entirely on my own from start to finish in Unity, published on Steam.',
    platform: 'Steam / PC',
    tags: ['Unity', 'Solo'],
    href: 'https://store.steampowered.com/app/3647140/Dirty_Street_Food_Simulator/',
    cover: '/media/games/food-cart-simulator.jpg',
    featured: true,
  },
  {
    title: 'Good Luck',
    role: 'Freelance developer',
    scope: 'Multiplayer conversion',
    description:
      'Converted a single-player Unity game to multiplayer — online functionality via Netcode for GameObjects, with Steam Relay through Facepunch Steamworks.',
    platform: 'Steam / PC',
    tags: ['Unity', 'NGO', 'Steam Relay'],
    href: 'https://store.steampowered.com/app/3657240/Good_Luck/',
    cover: '/media/games/good-luck.jpg',
  },
  {
    title: 'Chained in the Backrooms',
    role: 'Freelance developer',
    scope: 'Optimization, Steam integration',
    description: 'Performance optimization, Steam integration and gameplay programming.',
    platform: 'Steam / PC',
    tags: ['Unity', 'Optimization'],
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
    href: 'https://www.youtube.com/shorts/RBGhKy-dH5k',
  },
];
