export type WorkLink = { label: string; href: string };
export type Shot = { src: string; alt: string; caption: string; w: number; h: number };

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  kind: string;
  role: string;
  scope: string;
  credit?: string;
  status: string;
  summary: string;
  blurb: string;
  stack: string[];
  cover?: Shot;
  gallery?: Shot[];
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
    scope: 'Everything — renderer, editor, asset pipeline, scripting, netcode',
    status: 'In active development',
    summary:
      'A .NET 9 game engine built from nothing: GPU-driven DirectX 12 renderer with hardware ray-traced global illumination, a full ImGui editor, Unity-style asset pipeline, C# hot-reload scripting, and a headless CLI that lets an agent drive the editor.',
    blurb:
      'GPU-driven DX12 renderer with hardware ray-traced GI, an ImGui editor, hot-reloadable C# scripting and a headless agent surface.',
    stack: ['C#', '.NET 9', 'DirectX 12', 'DXR', 'HLSL', 'BepuPhysics 2', 'ImGui', 'Roslyn'],
    cover: {
      src: '/media/ballistic/suntemple-aerial.jpg',
      alt: 'Aerial view of the Sun Temple scene rendered in Ballistic Engine',
      caption: 'Sun Temple — hardware ray-traced global illumination',
      w: 2000,
      h: 952,
    },
    gallery: [
      {
        src: '/media/ballistic/suntemple-dome-interior.jpg',
        alt: 'Ray-traced interior of the Sun Temple dome',
        caption: 'Dome interior — indirect light only, no baked lightmaps',
        w: 2000,
        h: 970,
      },
      {
        src: '/media/ballistic/suntemple-dome-exterior.jpg',
        alt: 'Sun Temple dome exterior with volumetric lighting',
        caption: 'Dome exterior — multi-bounce radiosity and volumetric fog',
        w: 2000,
        h: 974,
      },
      {
        src: '/media/ballistic/suntemple-statue-backlit.jpg',
        alt: 'Backlit statue showing indirect lighting and shadowing',
        caption: 'Backlit statue — indirect light carried by the surface cache',
        w: 2000,
        h: 1028,
      },
      {
        src: '/media/ballistic/editor-overview.jpg',
        alt: 'Ballistic Engine ImGui editor with scene hierarchy and inspector panels',
        caption: 'The editor — ImGui, docked panels, live scene',
        w: 2000,
        h: 1038,
      },
    ],
    highlights: [
      { value: 'DXR', label: 'Hardware ray-traced GI' },
      { value: 'GPU-driven', label: 'ExecuteIndirect submission' },
      { value: 'Ctrl+R', label: 'Script reload mid-play' },
    ],
    sections: [
      {
        heading: 'Why',
        body: "Using an engine teaches you an engine's API. Writing one teaches you the machine underneath it. Ballistic is the project where I stopped treating the renderer, the asset pipeline and the scripting layer as black boxes and rebuilt each of them myself, in C#, on a modern explicit graphics API.",
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
    links: [{ label: 'GitHub', href: 'https://github.com/OxygenButBeta/Ballistic-Engine' }],
  },
  {
    slug: 'zort',
    title: 'ZORT',
    subtitle: 'Netcode, enemy AI and optimization on a live Steam title',
    kind: 'Londer Software title',
    role: 'Game Programmer at Londer Software',
    scope: 'Mirror netcode, enemy AI, core system optimization',
    credit:
      'ZORT is a Londer Software title — not my game and not my IP. I was hired onto the existing team as a game programmer for its Chapter 4 update; everything below is my own contribution, not a claim over the project as a whole.',
    status: 'Released on Steam',
    summary:
      'A Unity and Mirror-based multiplayer title I joined for its Chapter 4 update as a game programmer, expanding the netcode, programming the enemy AI and optimizing core systems in high-performance C#.',
    blurb:
      "Londer Software's Unity + Mirror multiplayer title. I came in for the Chapter 4 update: expanding the netcode, programming the enemy AI and optimizing core systems.",
    stack: ['Unity', 'Mirror', 'C#'],
    cover: {
      src: '/media/games/zort.jpg',
      alt: 'ZORT store artwork',
      caption: 'ZORT — store artwork © the ZORT team',
      w: 460,
      h: 215,
    },
    highlights: [
      { value: 'Chapter 4', label: 'Joined mid-production' },
      { value: 'Mirror', label: 'Netcode stack' },
      { value: 'C#', label: 'High-performance passes' },
    ],
    sections: [
      {
        heading: 'Context',
        body: 'ZORT was already in production when I joined, at its fourth chapter. Coming into a live multiplayer codebase means the constraint is never a blank page — it is matching the conventions already in the project while making the network layer hold up under features it was not originally designed for.',
      },
      {
        heading: 'My contribution',
        bullets: [
          'Expanding the Mirror netcode to carry features it was not originally scoped for.',
          'Programming the enemy AI so behaviour stays authoritative on the server and still reads correctly on every client.',
          'Optimizing core systems with high-performance C# — allocation-free hot paths over per-frame garbage.',
        ],
      },
    ],
    links: [{ label: 'Steam', href: 'https://store.steampowered.com/app/3121110/Zort/' }],
  },
  {
    slug: 'food-cart-simulator',
    title: 'Food Cart Simulator',
    subtitle: 'A commercial Steam release built end to end, alone',
    kind: 'My own game',
    role: 'Solo developer — Heavyworks Games',
    scope: 'Everything — gameplay, systems, content, build, store release',
    credit:
      'My own title, published under Heavyworks Games — my one-person studio. Built from start to finish by me.',
    status: 'Released on Steam',
    summary:
      'A PC simulation game I developed entirely on my own from start to finish in Unity, and shipped on Steam under my own studio, Heavyworks Games.',
    blurb:
      'Solo-developed PC title, start to finish in Unity — gameplay, systems, build and store release.',
    stack: ['Unity', 'C#', 'Steamworks'],
    cover: {
      src: '/media/games/food-cart-simulator.jpg',
      alt: 'Food Cart Simulator store artwork',
      caption: 'Food Cart Simulator on Steam',
      w: 460,
      h: 215,
    },
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
    slug: 'o2-horizon',
    title: 'O2.Horizon',
    subtitle: 'Cell-based world streaming for Unity — stream the view, keep the logic resident',
    kind: 'Open-source package',
    role: 'Author',
    scope: 'Grid solver, runtime state machine, bake pipeline, editor tooling',
    status: 'Released as a UPM package',
    summary:
      'A Unity world streamer that separates presentation from simulation: static meshes, colliders and terrain move in and out of grid cells around the player, while gameplay logic, netcode and persistent state stay resident and untouched.',
    blurb:
      'Grid-cell streaming for Unity — meshes, colliders and terrain page in around the player while simulation, netcode and state stay resident.',
    stack: ['Unity 6', 'C#', 'Addressables', 'UI Toolkit'],
    cover: {
      src: '/media/horizon.svg',
      alt: 'Diagram of a cell grid around a streaming source: loaded cells, cells kept by hysteresis, and unloaded cells',
      caption: 'Load radius, keep radius and the hysteresis band between them',
      w: 640,
      h: 360,
    },
    highlights: [
      { value: '2 modes', label: 'Virtual iteration, baked shipping' },
      { value: 'Budgeted', label: 'Per-frame load / unload' },
      { value: 'MIT', label: 'com.o2.horizon on UPM' },
    ],
    sections: [
      {
        heading: 'The split',
        body: 'Most streaming setups unload the whole GameObject and take the simulation down with it — the NPC stops thinking, the NetworkObject disappears, saved state evaporates. Horizon draws the line differently: presentation is streamable, logic is resident. Static meshes, colliders and terrain page in and out of grid cells; scripts, networking and persistent state never leave the scene.',
      },
      {
        heading: 'Runtime',
        bullets: [
          'StreamWorld defines the grid origin and cell size; StreamSource marks whatever drives loading — camera, vehicle, anything — and can be flagged Critical to bypass load budgets.',
          'StreamSetSolver resolves desired, keep and critical cell sets from separate load / unload / critical radii, with hysteresis so a source sitting on a cell border does not thrash.',
          'WorldStreamerCore is a state machine over per-frame load and unload budgets, with Pin / Unpin for cells that must stay put, and ICellRequestProvider for custom request sources.',
        ],
      },
      {
        heading: 'Baking',
        bullets: [
          'Virtual mode streams unbaked content with SetActive so the grid is usable while the level is still being built.',
          'Baked mode writes Addressables cell scenes for production; both modes run the same solver, so behaviour does not change between iteration and shipping.',
          'The bake is non-destructive — the source scene stays intact and a build processor strips it at compile time. Per-cell processors are pluggable: GPU instancing, shader warmup, mesh combining.',
        ],
      },
      {
        heading: 'The parts a naive grid misses',
        bullets: [
          'Predictive corridor requests preload cells along a known path — a rail spline, for instance — instead of reacting after the source has already arrived.',
          'The dynamic-object ledger freezes moved objects into records keyed by source prefab GUID when a cell unloads, and thaws them at their original pose and state when it comes back.',
          'The terrain tiler splits oversized terrains into grid-aligned tiles and stitches neighbour LODs so seams do not show at tile boundaries.',
        ],
      },
      {
        heading: 'Kept honest',
        body: 'An EditMode suite (O2.Horizon.Tests) covers the grid math, solver behaviour, the state machine and the ledger. Bake staleness is tracked from a content hash and surfaced in the editor as UP TO DATE / STALE / UNBAKED — so a stale bake is a label you can see, not a bug you ship.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/OxygenButBeta/O2.Horizon' }],
  },
];
