export const site = {
  name: 'Süleyman Akbulut',
  role: 'Game & Systems Developer',
  url: 'https://www.suleymanakbulut.cv',
  email: 'suleymanakblt77@gmail.com',
  tagline:
    'C# / .NET and Unity developer with five years of experience shipping commercial games and building the systems underneath them — multiplayer architecture, editor tooling, real-time renderers and performance-oriented libraries.',
  metaDescription:
    'Süleyman Akbulut — Game & Systems Developer. C#/.NET and Unity: shipped Steam titles, multiplayer netcode, editor tooling, a DirectX 12 ray-traced engine and zero-allocation .NET libraries.',
  links: {
    github: 'https://github.com/OxygenButBeta',
    linkedin: 'https://www.linkedin.com/in/s%C3%BCleymanakblt77/',
  },
} as const;

export const focusAreas = [
  {
    title: 'Real-Time Rendering',
    body: 'GPU-driven DirectX 12 pipelines, hardware ray tracing, radiance caching and the usual post stack — GTAO, SSR, volumetric fog, TAA. OpenGL before that.',
    tags: ['DirectX 12', 'DXR', 'HLSL', 'OpenGL'],
  },
  {
    title: 'Multiplayer & Netcode',
    body: 'Server-authoritative replication, delta serialization and bit-packed state sync. Shipped on Mirror, Netcode for GameObjects and Steam Relay.',
    tags: ['Mirror', 'NGO', 'Steamworks', 'LiteNetLib'],
  },
  {
    title: 'Engines & Architecture',
    body: 'Strict dependency layering, ECS, asset pipelines with GUID-based references, hot-reloadable scripting and editors built on ImGui.',
    tags: ['.NET 9', 'ECS', 'ImGui', 'AssemblyLoadContext'],
  },
  {
    title: 'Performance-Oriented .NET',
    body: 'Zero-allocation APIs, ref structs, Roslyn source generators and DOTS/Job System work — measured with BenchmarkDotNet rather than guessed at.',
    tags: ['ref struct', 'Roslyn', 'DOTS', 'BenchmarkDotNet'],
  },
] as const;
