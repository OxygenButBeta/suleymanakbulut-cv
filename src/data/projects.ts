export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  video?: string;
  group: 'tools' | 'systems' | 'apps';
};

export const projects: Project[] = [
  {
    name: 'Oxygen Code',
    description:
      'Desktop AI coding editor for NVIDIA NIM models — chat and agentic modes, diff-reviewed file edits, command execution, a git panel and 120+ models.',
    tags: ['Electron', 'React', 'TypeScript'],
    href: 'https://github.com/OxygenButBeta/oxygen-code',
    group: 'apps',
  },
  {
    name: 'Oxygen Forge',
    description:
      'Framework-agnostic TypeScript toolkit for AI desktop apps: typed NIM streaming client, model-agnostic agent loop with tool calling, workspace fs, git tooling and Windows-safe process spawning.',
    tags: ['TypeScript', 'Agent loop', 'Tooling'],
    href: 'https://github.com/OxygenButBeta/oxygen-forge',
    group: 'apps',
  },
  {
    name: 'O2.Horizon',
    description:
      'Cell-based world streaming for Unity — stream the view, keep the logic resident. Shipped as a UPM package.',
    tags: ['Unity', 'Streaming', 'UPM'],
    href: 'https://github.com/OxygenButBeta/O2.Horizon',
    group: 'systems',
  },
  {
    name: 'O2 Exposer',
    description:
      'Lightweight, high-performance .NET library for fast runtime access to object fields and properties without slow reflection calls. Built for serialization, debugging and runtime editing.',
    tags: ['.NET', 'Reflection-free', 'Performance'],
    href: 'https://github.com/OxygenButBeta/O2-Exposer',
    group: 'systems',
  },
  {
    name: 'O2 Editor Tools',
    description:
      'Unity toolkit of the things you rebuild on every project: hierarchy highlighting, fast scene switching, a validator for unassigned fields and missing scripts, script templates and categorized prefab access.',
    tags: ['Unity', 'Editor'],
    href: 'https://github.com/OxygenButBeta/O2-Unity-Editor',
    group: 'tools',
  },
  {
    name: 'O2 In-Game Console',
    description:
      'Attribute-driven debug console for Unity. Built on the Reflection API, it discovers scene objects and registers command methods at runtime, with real-time execution and proper exception handling.',
    tags: ['Unity', 'Attributes', 'Debug'],
    href: 'https://github.com/OxygenButBeta/O2-InGame-Console-For-Unity',
    group: 'tools',
  },
  {
    name: 'O2 Auto Asset Mapper',
    description:
      'Maps Unity assets to enums through ScriptableObjects and Addressables, with generated code, runtime caching and editor integration — so asset references stop being magic strings.',
    tags: ['Unity', 'Addressables', 'Codegen'],
    href: 'https://github.com/OxygenButBeta/O2-Unity-Auto-Asset-Mapper',
    group: 'tools',
  },
  {
    name: 'O2.Flux',
    description: 'A chill, semi-automatic service locator for Unity.',
    tags: ['Unity', 'DI'],
    href: 'https://github.com/OxygenButBeta/O2.Flux',
    group: 'tools',
  },
  {
    name: 'SafeStructs.Net',
    description:
      'Lightweight memory obfuscation for .NET and Unity. Stores struct types behind XOR encryption to make values harder to find with memory scanners — designed for performance, explicitly not for cryptographic security.',
    tags: ['.NET', 'Unity', 'Anti-cheat'],
    href: 'https://github.com/OxygenButBeta/Safe-Structs-Obfuscation',
    group: 'systems',
  },
  {
    name: 'LuminaDSL',
    description:
      'A small DSL for modular OpenGL shader development — reusable libraries and full programs with #include, #define and conditional blocks.',
    tags: ['C#', 'OpenGL', 'DSL'],
    href: 'https://github.com/OxygenButBeta/LuminaDSL',
    group: 'systems',
  },
  {
    name: 'OxygenEngine',
    description:
      'The engine before Ballistic: a Unity-inspired OpenGL engine in C# and OpenTK with a component system, GUID-based asset management, an input system and an ImGui editor.',
    tags: ['C#', 'OpenGL', 'OpenTK', 'ImGui'],
    href: 'https://github.com/OxygenButBeta/OxygenEngine',
    video: 'https://www.youtube.com/watch?v=yMBfimqNBg0',
    group: 'systems',
  },
  {
    name: 'OLANG',
    description:
      'A toy language interpreter written to get better at AST work. Its own README calls it shitty; it was never the point.',
    tags: ['C#', 'Interpreter', 'AST'],
    href: 'https://github.com/OxygenButBeta/OLANG',
    group: 'systems',
  },
  {
    name: 'DOTS Particle System',
    description:
      'Physics-driven particle system built entirely on Unity DOTS — a custom physics solver on the C# Job System running multi-threaded across tens of thousands of particles.',
    tags: ['Unity', 'DOTS', 'Job System'],
    video: 'https://www.youtube.com/watch?v=LL2eDh-g0cI',
    group: 'systems',
  },
  {
    name: 'Real-Time Hand Tracking',
    description:
      'Turns recorded or live hand movement into physics-interacting hand animation. OpenCV and MediaPipe detect joint positions in Python and stream them over UDP to a C# server in Unity.',
    tags: ['Unity', 'Python', 'OpenCV', 'UDP'],
    video: 'https://www.youtube.com/watch?v=nwpWyOuYvZs',
    group: 'systems',
  },
];
