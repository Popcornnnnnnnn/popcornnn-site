# Popcornnn — 个人工作室

[English](README.md) · **简体中文**

**Weizhi Wang**（`@Popcornnnnnnnn`）的个人工作室主页与公开项目索引，站点地址：[popcornnn.xyz](https://popcornnn.xyz)。

基于 Astro 5、Tailwind CSS v4 与本地托管的可变字体（`Fraunces`、`Inter`、`JetBrains Mono`）构建，将静态项目目录与浏览器实时拉取的 [`https://brief.popcornnn.xyz/feed.json`](https://brief.popcornnn.xyz/feed.json) 结合展示。

## 本地开发

```sh
pnpm install
pnpm dev
```

构建生产环境产物：

```sh
pnpm build
```

## 部署（Cloudflare Pages）

- **生产分支：** `main`
- **构建命令：** `pnpm build`
- **输出目录：** `dist`
- **环境变量：** `NODE_VERSION=22`、`PNPM_VERSION=12`、`SITE_URL=https://popcornnn.xyz`

## 许可证

MIT — 详见 [LICENSE](LICENSE)。
