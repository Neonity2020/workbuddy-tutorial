# WorkBuddy 教程站

用 [Fumadocs](https://fumadocs.dev) + Next.js 搭建的 WorkBuddy 中文教程文档站。

## 技术栈

- Next.js 16（App Router）
- Fumadocs UI 16 / Fumadocs MDX 15
- Tailwind CSS 4

## 本地运行

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

生产构建：

```bash
pnpm build && pnpm start
```

> 若本机默认 npm 源缺少 fumadocs 的最新版本，安装时指定官方源：
> `pnpm install --registry=https://registry.npmjs.org`

## 目录结构

```text
app/
  (home)/            首页（自定义落地页）
  docs/              文档布局与页面渲染
  api/search/        全文搜索接口
  llms.txt/          LLM 友好的站点索引
  og/docs/           每页的 OG 分享图
content/docs/        教程内容（MDX）
   getting-started/  入门
   basics/           核心用法
   extend/           能力扩展
   practice/         实战案例
   advanced/         进阶技巧
lib/
  source.ts          内容源加载
  shared.ts          站点名、路由、分享信息
  layout.shared.tsx  导航与顶栏配置
  i18n.ts            Fumadocs UI 中文化文案
components/mdx.tsx   MDX 组件映射
```

## 写内容

在 `content/docs/` 下新建 `.mdx`：

```mdx
---
title: 页面标题
description: 一句话描述，用于 SEO 与搜索
icon: Rocket
---

正文……
```

顺序与分组由同目录的 `meta.json` 控制：

```json
{
  "title": "入门",
  "icon": "Rocket",
  "pages": ["installation", "first-task", "interface"]
}
```

图标取 [lucide](https://lucide.dev/icons) 的**规范名称**（如 `ChartColumn` 而非 `BarChart3`），别名在 Fumadocs 的 icons 映射里取不到。

## 可用组件

已注册：`Callout`、`Cards` / `Card`、`Tabs` / `Tab`、`Steps` / `Step`（支持 `title`）、`Files`、`Accordion`。

## 部署

任意支持 Next.js 的平台即可（Vercel、自建 Node 服务）。若要纯静态托管，需在 `next.config.mjs` 中开启 `output: 'export'`，并相应调整 `proxy.ts` 与搜索接口。
