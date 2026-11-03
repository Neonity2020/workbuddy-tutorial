import Link from 'next/link';
import { ArrowRight, BookOpen, Bot, Clock, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/shared';

const features = [
  {
    icon: Sparkles,
    title: '十分钟跑通一个任务',
    desc: '选工作空间、写需求、验收产物，走完一次完整闭环，就知道它和聊天机器人的区别。',
    href: '/docs/getting-started/first-task',
  },
  {
    icon: BookOpen,
    title: '需求怎么说才准确',
    desc: '目标、输入、输出格式、约束四件事写清楚，返工次数直接砍半。含可直接抄的模板。',
    href: '/docs/basics/task',
  },
  {
    icon: Layers,
    title: '专家、技能、连接器',
    desc: '技能给手，专家给脑，专家团给人手。搞清三者的分工，就不会在错误的地方找答案。',
    href: '/docs/extend/expert',
  },
  {
    icon: Bot,
    title: '五条真实产线',
    desc: '文档、PPT、数据分析、网站、小程序。每篇都是一个能照着改的完整指令。',
    href: '/docs/practice/docx',
  },
  {
    icon: ShieldCheck,
    title: '权限边界讲明白',
    desc: '默认权限和完全访问差在哪，工作空间怎么设，弹窗到底该不该点确认。',
    href: '/docs/basics/permissions',
  },
  {
    icon: Clock,
    title: '让它自己定时干活',
    desc: '每日简报、每周汇总、定时数据整理，配好规则就不用再手动重复一遍。',
    href: '/docs/extend/automation',
  },
];

const chapters = [
  { name: '入门', desc: '装好、认识界面、跑通第一个任务', href: '/docs/getting-started/installation' },
  { name: '核心用法', desc: '描述任务、推进对话、管理任务、验收结果、管好权限', href: '/docs/basics/task' },
  { name: '能力扩展', desc: '专家、技能、连接器、资料库、定时任务、MCP', href: '/docs/extend/expert' },
  { name: '实战案例', desc: '文档、PPT、数据分析、网站、小程序', href: '/docs/practice/docx' },
  { name: '进阶技巧', desc: '提示词、记忆机制、常见问题排查', href: '/docs/advanced/prompt' },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fd-border">
        <div className="pointer-events-none absolute inset-0 brand-grid" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] brand-glow" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-20 pt-20 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/70 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-fd-primary" />
            面向真实工作场景的 AI 办公教程
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-fd-foreground sm:text-5xl md:text-6xl">
            把 WorkBuddy
            <span className="block bg-gradient-to-r from-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
              真正用起来
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-fd-muted-foreground sm:text-lg">
            从安装登录到专家、技能、连接器，再到文档、PPT、数据分析与上线应用。
            不堆功能介绍，只讲怎么把活干完。
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs/getting-started/first-task"
              className="group inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              十分钟上手
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
            >
              从头读起
            </Link>
          </div>

          <p className="mt-6 text-xs text-fd-muted-foreground">
            5 个章节 · 21 篇 · 全程中文
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group flex flex-col rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary/40 hover:bg-fd-accent/40"
            >
              <f.icon className="size-5 text-fd-primary" />
              <h3 className="mt-4 text-sm font-semibold text-fd-foreground">{f.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-fd-muted-foreground">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Chapters */}
      <section className="border-t border-fd-border bg-fd-muted/30">
        <div className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="text-xl font-semibold tracking-tight text-fd-foreground">教程目录</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">
            按顺序读是学习路径，按需跳读是工具书。
          </p>

          <ol className="mt-8 divide-y divide-fd-border border-y border-fd-border">
            {chapters.map((c, i) => (
              <li key={c.name}>
                <Link
                  href={c.href}
                  className="group flex items-center gap-5 py-4 transition-colors hover:text-fd-primary"
                >
                  <span className="w-6 shrink-0 font-mono text-sm text-fd-muted-foreground/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="w-24 shrink-0 text-sm font-medium text-fd-foreground group-hover:text-fd-primary">
                    {c.name}
                  </span>
                  <span className="flex-1 text-[13px] text-fd-muted-foreground">{c.desc}</span>
                  <ArrowRight className="size-4 shrink-0 text-fd-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-fd-primary" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-fd-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 text-xs text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.name} · 非官方教程，内容仅供参考</p>
          <div className="flex gap-4">
            <a href={siteConfig.officialSite} className="hover:text-fd-foreground">
              WorkBuddy 官网
            </a>
            <a href={siteConfig.officialDocs} className="hover:text-fd-foreground">
              官方文档
            </a>
            <Link href="/docs" className="hover:text-fd-foreground">
              教程首页
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
