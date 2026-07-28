export type Game = {
  title: string;
  role: string;
  description: string;
  platform: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const games: Game[] = [
  {
    title: 'ZORT',
    role: 'Developer',
    description:
      'Networking systems, server/client integrated AI and core gameplay mechanics on a Unity + Mirror multiplayer title.',
    platform: 'Steam / PC',
    tags: ['Unity', 'Mirror', 'Multiplayer'],
    href: 'https://store.steampowered.com/app/3121110/Zort/',
    featured: true,
  },
  {
    title: 'Dirty Street Food Simulator',
    role: 'Solo developer',
    description: 'Developed entirely on my own from start to finish in Unity, published on Steam.',
    platform: 'Steam / PC',
    tags: ['Unity', 'Solo'],
    href: 'https://store.steampowered.com/app/3647140/Dirty_Street_Food_Simulator/',
    featured: true,
  },
  {
    title: 'GOOD LUCK',
    role: 'Freelance developer',
    description:
      'Multiplayer conversion of a single-player Unity game — online functionality via Netcode for GameObjects, with Steam Relay through Facepunch Steamworks.',
    platform: 'Steam / PC',
    tags: ['Unity', 'NGO', 'Steam Relay'],
    href: 'https://store.steampowered.com/app/3657240/Good_Luck/',
  },
  {
    title: 'Chained in the Backrooms',
    role: 'Freelance developer',
    description: 'Performance optimization, Steam integration and gameplay programming.',
    platform: 'Steam / PC',
    tags: ['Unity', 'Optimization'],
    href: 'https://store.steampowered.com/app/3060170/Chained_in_the_Backrooms/',
  },
  {
    title: 'Parking 3D',
    role: 'Programmer',
    description:
      'All programming on a 3D car parking game — gameplay mechanics, ads integration and localization. Reached around 50K downloads before it was removed from the Play Store.',
    platform: 'Android',
    tags: ['Unity', 'Mobile', '~50K downloads'],
    href: 'https://oxygenbutbeta.itch.io/car-parking',
  },
  {
    title: 'Magic Match',
    role: 'Developer',
    description:
      'Match-3 game built on a performance-focused, scalable architecture with optimized redraws.',
    platform: 'Mobile',
    tags: ['Unity', 'Match-3'],
    href: 'https://www.youtube.com/shorts/-LihjWgjrIc',
  },
  {
    title: 'Puzzle Harmony',
    role: 'Developer',
    description:
      'Performance-optimized puzzle game with a scriptable architecture, minimized redraws and no collision calculations.',
    platform: 'Mobile',
    tags: ['Unity', 'Puzzle'],
    href: 'https://www.youtube.com/shorts/RBGhKy-dH5k',
  },
];
