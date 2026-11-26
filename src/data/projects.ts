export interface FlagshipProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  platform: string;
  stack: string;
  version?: string;
  license?: string;
  primaryUrl: string;
  primaryLabel: string;
  repoUrl: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  accent: 'vermilion' | 'cobalt' | 'sage' | 'amber';
}

export interface UtilityTool {
  id: string;
  name: string;
  kind: string;
  summary: string;
  version?: string;
  license?: string;
  installCmd?: string;
  repoUrl: string;
}

export const PROFILE = {
  name: 'Weizhi Wang',
  handle: 'Popcornnnnnnnn',
  location: 'Shanghai, China',
  tagline: 'Building local-first developer tools, Apple apps, and reproducible AI workflows.',
  githubUrl: 'https://github.com/Popcornnnnnnnn',
  linkedinUrl: 'https://www.linkedin.com/in/weizhi-wang-dev/',
  briefUrl: 'https://brief.popcornnn.xyz/',
  briefFeedUrl: 'https://brief.popcornnn.xyz/feed.json',
  earprintUrl: 'https://earprint.popcornnn.xyz/',
  watchpostUrl: 'https://watchpost.popcornnn.xyz/',
  phone3dUrl: 'https://phone3d.popcornnn.xyz/',
};

export const FALLBACK_BRIEF = {
  date: '2026-11-23',
  title: 'Perplexity Pacing and Prompt Supply-Chain Leaks',
  summary:
    'Daily technical wire covering AI engineering, security advisories, and open-source tools — backed by commit-pinned inputs and a fail-closed privacy gate.',
  url: 'https://brief.popcornnn.xyz/',
};

export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: 'daily-brief',
    name: 'Daily Brief',
    tagline: 'Morning technical broadsheet & collection engine',
    description:
      'Zero-dependency Python collectors, SpecPack v0.2 editorial invariants, and an Astro light-mode publication built from verified primary sources every morning.',
    platform: 'Web · Pipeline',
    stack: 'Python + Astro 5',
    license: 'MIT',
    primaryUrl: 'https://brief.popcornnn.xyz/',
    primaryLabel: 'Read live brief',
    repoUrl: 'https://github.com/Popcornnnnnnnn/daily-brief',
    secondaryUrl: 'https://github.com/Popcornnnnnnnn/daily-brief',
    secondaryLabel: 'Source',
    accent: 'vermilion',
  },
  {
    id: 'earprint',
    name: 'Earprint',
    tagline: '3D collectible headphone cards from Apple Health',
    description:
      '100% on-device iOS app turning Apple Health listening history for all Bluetooth headphones into interactive 3D cards, 2026 Wrapped reels, Live Activities, and 28-day rings.',
    platform: 'iOS · 18+',
    stack: 'SwiftUI + RealityKit',
    primaryUrl: 'https://earprint.popcornnn.xyz/',
    primaryLabel: 'Visit microsite',
    repoUrl: 'https://github.com/Popcornnnnnnnn/earprint',
    secondaryUrl: 'https://github.com/Popcornnnnnnnn/earprint',
    secondaryLabel: 'Source',
    accent: 'cobalt',
  },
  {
    id: 'watchpost',
    name: 'Watchpost',
    tagline: 'Headless local background bridge for your coding agent',
    description:
      'Local-first background bridge for AI coding agents featuring draft-first triage, Quiet Hours, cross-channel SQLite memory, and 10 native platforms.',
    platform: 'Daemon · CLI',
    stack: 'Python + SQLite',
    version: 'v0.4.0',
    license: 'Apache-2.0',
    primaryUrl: 'https://watchpost.popcornnn.xyz/',
    primaryLabel: 'Visit microsite',
    repoUrl: 'https://github.com/Popcornnnnnnnn/watchpost',
    secondaryUrl: 'https://github.com/Popcornnnnnnnn/watchpost',
    secondaryLabel: 'Source',
    accent: 'sage',
  },
  {
    id: 'phone-3d-ui-studio',
    name: 'Phone 3D UI Studio',
    tagline: 'Zero-install 3D iPhone UI showcase & Elastic Tray playground',
    description:
      'Browser-playable 120 Hz Rapier physics playground and interactive 3D iPhone UI showcase — play solo on mobile, scan a QR code to pair over WebRTC, or use local ARKit 6DoF.',
    platform: 'Web · 3D',
    stack: 'Three.js + Rapier',
    primaryUrl: 'https://phone3d.popcornnn.xyz/',
    primaryLabel: 'Play online',
    repoUrl: 'https://github.com/Popcornnnnnnnn/phone-3d-ui-studio',
    secondaryUrl: 'https://github.com/Popcornnnnnnnn/phone-3d-ui-studio',
    secondaryLabel: 'Source',
    accent: 'amber',
  },
  {
    id: 'word-tail',
    name: 'WordTail',
    tagline: 'Zero-LLM inline ghost-text autocomplete & Studio for macOS',
    description:
      'Instant native macOS typing completion with 6 domain vocabulary packs, parameterized snippets, per-app profiles, bilingual CJK–English smart spacing, and Typing Wrapped.',
    platform: 'macOS',
    stack: 'Swift',
    version: 'v0.9.1',
    license: 'MIT',
    primaryUrl: 'https://github.com/Popcornnnnnnnn/word-tail',
    primaryLabel: 'View on GitHub',
    repoUrl: 'https://github.com/Popcornnnnnnnn/word-tail',
    secondaryUrl: 'https://github.com/Popcornnnnnnnn/word-tail/releases',
    secondaryLabel: 'Releases',
    accent: 'sage',
  },
  {
    id: 'port-tools',
    name: 'Port Tools',
    tagline: 'Map localhost ports to projects and running apps',
    description:
      'Local-first macOS menu-bar utility that translates raw listening sockets into readable repository names, frameworks, and one-click actions.',
    platform: 'macOS',
    stack: 'Go + Swift',
    version: 'v1.0.6',
    primaryUrl: 'https://github.com/Popcornnnnnnnn/port-tools',
    primaryLabel: 'View on GitHub',
    repoUrl: 'https://github.com/Popcornnnnnnnn/port-tools',
    secondaryUrl: 'https://github.com/Popcornnnnnnnn/port-tools/releases',
    secondaryLabel: 'Releases',
    accent: 'amber',
  },
  {
    id: 'specpack',
    name: 'SpecPack',
    tagline: 'Open-source the recipe, not only the compiled artifact',
    description:
      'A portable pack format combining spec, dead-end decisions, goldens, tests, and evals so coding agents can rebuild small software cleanly.',
    platform: 'AI Tooling',
    stack: 'Python',
    license: 'MIT',
    primaryUrl: 'https://github.com/Popcornnnnnnnn/specpack',
    primaryLabel: 'Read the spec',
    repoUrl: 'https://github.com/Popcornnnnnnnn/specpack',
    accent: 'cobalt',
  },
  {
    id: 'personal-skills',
    name: 'Personal Skills',
    tagline: 'Reusable working methods and guardrails for coding agents',
    description:
      'Modular agent skills keeping shared workflows open-source while isolating private profiles, endpoints, and machine preferences out of Git.',
    platform: 'AI Tooling',
    stack: 'Python + Markdown',
    license: 'MIT',
    primaryUrl: 'https://github.com/Popcornnnnnnnn/personal-skills',
    primaryLabel: 'Browse skills',
    repoUrl: 'https://github.com/Popcornnnnnnnn/personal-skills',
    accent: 'vermilion',
  },
];

export const UTILITY_TOOLS: UtilityTool[] = [
  {
    id: 'feishu-doc-grabber',
    name: 'Feishu Doc Grabber',
    kind: 'CLI · JavaScript',
    summary: 'Local, integrity-aware exporter turning Feishu and Lark cloud docs into offline files.',
    version: 'v1.4.0',
    installCmd: 'brew install Popcornnnnnnnn/tap/feishu-grab',
    repoUrl: 'https://github.com/Popcornnnnnnnn/feishu-doc-grabber',
  },
  {
    id: 'linkget',
    name: 'Linkget',
    kind: 'CLI · Python',
    summary: 'Save images and videos directly from links into macOS Photos or a target directory.',
    version: 'v0.3.0',
    installCmd: 'brew install Popcornnnnnnnn/tap/linkget',
    repoUrl: 'https://github.com/Popcornnnnnnnn/linkget',
  },
  {
    id: 'wechat-mcp',
    name: 'WeChat MCP',
    kind: 'MCP · Python',
    summary: 'Unified macOS WeChat MCP server, SQLite database decryptor, and local history API.',
    version: 'v0.1.0',
    license: 'GPL-3.0',
    repoUrl: 'https://github.com/Popcornnnnnnnn/wechat-mcp',
  },
  {
    id: 'photo-search',
    name: 'Photo Search',
    kind: 'App · Swift',
    summary: 'Local-first semantic search over your own Apple Photos library on macOS.',
    repoUrl: 'https://github.com/Popcornnnnnnnn/photo-search',
  },
  {
    id: 'homebrew-tap',
    name: 'Homebrew Tap',
    kind: 'Packaging · Ruby',
    summary: 'Official Homebrew distribution tap housing formulae for feishu-grab and linkget.',
    installCmd: 'brew tap Popcornnnnnnnn/tap',
    repoUrl: 'https://github.com/Popcornnnnnnnn/homebrew-tap',
  },
];
