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
    role: 'Game Programmer',
    period: 'Nov 2025 — Present · Full-time, remote',
    body: 'Selected project: ZORT (Steam/PC). Expanding the Mirror netcode, programming enemy AI and optimizing core systems with high-performance C# for the game\'s Chapter 4 update. ZORT is a Londer Software title — this is my contribution to it, not my own game.',
    tags: ['Unity', 'Mirror', 'C#', 'Optimization'],
  },
  {
    org: 'Heavyworks Games',
    role: 'Founder & Solo Developer',
    period: 'Sep 2021 — Present · Own company',
    body: 'My own one-person studio — my own titles and IP only, no client work. Food Cart Simulator shipped on Steam under it, with further titles in development, alongside my own libraries and the engine prototypes that led to Ballistic Engine.',
    tags: ['Unity', 'Steam', '.NET', 'Engine'],
  },
  {
    org: 'Freelance / outsourced',
    role: 'Unity Developer for other studios',
    period: '2024 — Present · Contract, remote',
    body: 'Paid development on games that belong to other people — none of these are my products, and my credit covers only the part I was hired for. On GOOD LUCK (Steam) that was converting the existing single-player build to multiplayer with Netcode for GameObjects and Steam Relay through Facepunch Steamworks.',
    tags: ['Unity', 'NGO', 'Steamworks'],
  },
  {
    org: 'Task+ Studios',
    role: 'Unity Developer',
    period: 'Sep 2024 — Feb 2025 · Freelance, remote',
    body: 'Outsourced core systems work on Chained in the Backrooms — the studio\'s 1–4 player co-op Steam title, not mine: multiplayer system integrations, player movement controllers and optimization of network-heavy gameplay loops.',
    tags: ['Unity', 'Netcode', 'Steamworks'],
  },
  {
    org: 'UBIT Bilgi Teknolojileri',
    role: 'Software Developer Intern',
    period: 'Sep 2023 — Oct 2023 · Internship, İstanbul',
    body: 'Small web applications in PHP and HTML. Useful for understanding how the web fits together, and the reason I committed to low-level systems and high-performance programming instead.',
    tags: ['PHP', 'HTML'],
  },
];
