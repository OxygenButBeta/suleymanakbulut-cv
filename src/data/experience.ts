export type Experience = {
  org: string;
  role: string;
  period: string;
  body: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    org: 'Londer Software',
    role: 'Game Developer',
    period: '',
    body: 'Gameplay and systems programming on team projects.',
    tags: ['Unity', 'C#'],
  },
  {
    org: 'ZORT',
    role: 'Developer',
    period: '',
    body: 'Joined a live Unity + Mirror multiplayer title at its fourth chapter to own networking systems, server/client integrated AI and core gameplay mechanics.',
    tags: ['Mirror', 'Netcode', 'AI'],
  },
  {
    org: 'Freelance',
    role: 'Game Developer',
    period: '',
    body: 'Contract work on shipped Steam titles — multiplayer conversion with Netcode for GameObjects and Steam Relay on GOOD LUCK, performance optimization and Steam integration on Chained in the Backrooms.',
    tags: ['NGO', 'Steamworks', 'Optimization'],
  },
  {
    org: 'Independent',
    role: 'Developer & Open Source',
    period: '',
    body: 'Shipped a solo commercial title on Steam, and maintain a set of open-source .NET and Unity libraries alongside Ballistic Engine.',
    tags: ['Steam', '.NET', 'Engine'],
  },
];
