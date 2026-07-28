export type WorkLink = { label: string; href: string };

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  kind: string;
  role: string;
  status: string;
  summary: string;
  blurb: string;
  stack: string[];
  highlights: { value: string; label: string }[];
  sections: { heading: string; body?: string; bullets?: string[] }[];
  links: WorkLink[];
};

export const work: Work[] = [
  {
    slug: 'ballistic-engine',
    title: 'Ballistic Engine',
    subtitle: 'A from-scratch C# engine with a ray-traced DirectX 12 renderer',
    kind: 'Engine',
    role: 'Solo developer',
    status: 'Active',
    summary:
      'A .NET 9 game engine built from nothing: GPU-driven DirectX 12 renderer with hardware ray-traced global illumination, a full ImGui editor, Unity-style asset pipeline, C# hot-reload scripting, and a headless CLI that lets an agent drive the editor.',
    blurb:
      'GPU-driven DX12 renderer with hardware ray-traced GI, an ImGui editor, hot-reloadable C# scripting and a headless agent surface.',
    stack: ['C#', '.NET 9', 'DirectX 12', 'DXR', 'HLSL', 'BepuPhysics 2', 'ImGui', 'Roslyn'],
    highlights: [
      { value: 'DXR', label: 'Hardware ray-traced GI' },
      { value: 'GPU-driven', label: 'ExecuteIndirect submission' },
      { value: 'Ctrl+R', label: 'Script reload mid-play' },
    ],
    sections: [
      {
        heading: 'Why',
        body: 'Using an engine teaches you an engine\'s API. Writing one teaches you the machine underneath it. Ballistic is the project where I stopped treating the renderer, the asset pipeline and the scripting layer as black boxes and rebuilt each of them myself, in C#, on a modern explicit graphics API.',
      },
      {
        heading: 'Rendering',
        bullets: [
          'Hardware ray-traced global illumination backed by a per-triangle surface cache — a radiance cache filled by a compute pass with direct lighting and multi-bounce radiosity.',
          'Fully GPU-driven geometry submission: compute frustum culling and Hi-Z occlusion culling feed whole-mesh ExecuteIndirect draws against bindless materials.',
          'Cascaded shadow maps, GTAO, screen-space reflections, volumetric fog, TAA and bloom.',
          'Upscaling and denoising through AMD FSR, Intel XeSS / OIDN and NVIDIA DLSS.',
        ],
      },
      {
        heading: 'Architecture',
        bullets: [
          'Strict one-directional dependency layering — Shared/ToolKit → Abstraction → Engine → Backend (DX12) / Physics — so no layer can reach upward.',
          'Third-party dependencies are quarantined behind the abstraction layer instead of leaking into engine code.',
          'Game code is plain C# compiled into a collectible AssemblyLoadContext; it reloads on window focus or Ctrl+R, without stopping play.',
        ],
      },
      {
        heading: 'Networking',
        bullets: [
          'Custom server-authoritative stack supporting offline, client, server and host topologies over LiteNetLib.',
          'A Roslyn source generator picks up [Networked] fields and emits delta serialization against a bit-packed BitReader / BitWriter.',
        ],
      },
      {
        heading: 'Agent surface',
        body: 'The headless CLI (bal) exposes the editor to automation: deterministic scripting, spatial queries via inline DXR RayQuery, G-buffer dumps and scene validation — everything returning JSON with meaningful exit codes.',
      },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/OxygenButBeta/Ballistic-Engine' },
    ],
  },
  {
    slug: 'zort',
    title: 'ZORT',
    subtitle: 'Networking and server-authoritative AI on a live Steam title',
    kind: 'Commercial game',
    role: 'Developer',
    status: 'Released on Steam',
    summary:
      'A Unity and Mirror-based multiplayer title I joined during its fourth chapter, responsible for the networking layer, server/client integrated AI and core gameplay mechanics.',
    blurb:
      'Unity + Mirror multiplayer. Networking systems, server/client integrated AI and core gameplay mechanics.',
    stack: ['Unity', 'Mirror', 'C#'],
    highlights: [
      { value: 'Chapter 4', label: 'Joined mid-production' },
      { value: 'Mirror', label: 'Networking stack' },
      { value: 'Steam', label: 'Live title' },
    ],
    sections: [
      {
        heading: 'Context',
        body: 'ZORT was already in production when I joined, at its fourth chapter. Coming into a live multiplayer codebase means the constraint is never a blank page — it is matching the conventions already in the project while making the network layer hold up under features it was not originally designed for.',
      },
      {
        heading: 'What I own',
        bullets: [
          'Implementing robust networking systems on top of Unity and Mirror.',
          'Designing server/client integrated AI so behaviour stays authoritative on the server and still reads correctly on every client.',
          'Coding fundamental gameplay mechanics alongside the networking work.',
        ],
      },
    ],
    links: [
      { label: 'Steam', href: 'https://store.steampowered.com/app/3121110/Zort/' },
    ],
  },
  {
    slug: 'food-cart-simulator',
    title: 'Dirty Street Food Simulator',
    subtitle: 'A commercial Steam release built end to end, alone',
    kind: 'Commercial game',
    role: 'Solo developer',
    status: 'Released on Steam',
    summary:
      'A PC simulation game I developed entirely on my own from start to finish in Unity, and shipped on Steam.',
    blurb:
      'Solo-developed PC title, start to finish in Unity — gameplay, systems, build and store release.',
    stack: ['Unity', 'C#', 'Steamworks'],
    highlights: [
      { value: 'Solo', label: 'Every discipline' },
      { value: 'Steam', label: 'Published' },
      { value: 'PC', label: 'Platform' },
    ],
    sections: [
      {
        heading: 'The whole pipeline',
        body: 'Shipping alone means there is nobody to hand the unglamorous parts to. Gameplay systems, content, build configuration, store setup and release all landed on the same desk — which is exactly why it is the project that taught me the most about scope, not about code.',
      },
      {
        heading: 'Takeaway',
        body: 'Writing systems is the easy half. Deciding what not to build, and finishing the last ten percent that players actually notice, is the half that gets a game onto a store page.',
      },
    ],
    links: [
      {
        label: 'Steam',
        href: 'https://store.steampowered.com/app/3647140/Dirty_Street_Food_Simulator/',
      },
    ],
  },
  {
    slug: 'bitbolt',
    title: 'BitBolt',
    subtitle: 'Zero-allocation bit manipulation for .NET',
    kind: 'Open-source library',
    role: 'Author',
    status: 'Maintained',
    summary:
      'A .NET library for packing state into bits without the usual mess of manual shifting — eight flags per byte, live handles into the source data, and no heap allocations anywhere on the hot path.',
    blurb:
      'Eight flags per byte, live BitHandle references, fluent Bind().To() API and zero GC pressure — benchmarked against raw bit-shifting.',
    stack: ['C#', '.NET', 'ref struct', 'BenchmarkDotNet'],
    highlights: [
      { value: '8×', label: 'Denser than one bool per byte' },
      { value: '0 B', label: 'Heap allocation' },
      { value: '16 B', label: 'BitHandle struct size' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'In state synchronization every byte on the wire costs you. A C# bool occupies a full byte to carry one bit of information. Packing them by hand — val |= 1 << 5 — fixes the bandwidth and breaks the readability: the intent disappears into shift arithmetic, and the bugs it produces are the silent kind.',
      },
      {
        heading: 'The approach',
        bullets: [
          'A fluent binding API — NetworkFlags.Bind(this).To(0) — replaces manual bitwise logic without delegates or boxing.',
          'BitHandle acts as a live reference to a specific bit and stays synchronized with the source data; it is a lean 16-byte struct aligned for 64-bit.',
          'BitPack64 holds 64 boolean flags in a single 64-bit field.',
          'No heap allocations, no boxing, no closures — the abstraction exists only at the type level.',
        ],
      },
      {
        heading: 'Measured, not assumed',
        body: 'BenchmarkDotNet, nanosecond scale, zero allocation across all three paths:',
        bullets: [
          'Manual raw bit-shift — 0.627 ns (baseline)',
          'BitRef — 1.397 ns (2.23×)',
          'BitHandle — 1.878 ns (3.00×)',
        ],
      },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/OxygenButBeta/BitBolt' },
    ],
  },
];

export const workBySlug = (slug: string) => work.find((w) => w.slug === slug);
