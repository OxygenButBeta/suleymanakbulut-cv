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
    body: 'My own one-person studio and the home of my independent titles, prototypes and libraries — Food Cart Simulator on Steam, the GOOD LUCK multiplayer conversion, BitBolt, a DOTS physics particle system and the engine prototypes that led to Ballistic Engine. Further titles are in development.',
    tags: ['Unity', 'Steam', '.NET', 'DOTS'],
  },
  {
    org: 'Task+ Studios',
    role: 'Unity Developer',
    period: 'Sep 2024 — Feb 2025 · Freelance, remote',
    body: 'Core systems work on Chained in the Backrooms, a 1–4 player co-op Steam title: multiplayer system integrations, player movement controllers and optimization of network-heavy gameplay loops.',
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
