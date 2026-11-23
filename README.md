# Popcornnn — Personal Studio

Personal studio homepage and public project index for **Weizhi Wang** (`@Popcornnnnnnnn`) at [popcornnn.xyz](https://popcornnn.xyz).

Built with Astro 5, Tailwind CSS v4, and self-hosted variable typography (`Fraunces`, `Inter`, `JetBrains Mono`), pairing a static project catalog with a live browser fetch from [`https://brief.popcornnn.xyz/feed.json`](https://brief.popcornnn.xyz/feed.json).

## Local Development

```sh
pnpm install
pnpm dev
```

Build production output:

```sh
pnpm build
```

## Deployment (Cloudflare Pages)

- **Production branch:** `main`
- **Build command:** `pnpm build`
- **Build output directory:** `dist`
- **Environment variables:** `NODE_VERSION=22`, `PNPM_VERSION=12`, `SITE_URL=https://popcornnn.xyz`

## License

MIT — see [LICENSE](LICENSE).
