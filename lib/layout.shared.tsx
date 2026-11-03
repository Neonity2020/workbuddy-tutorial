import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, siteConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <span className="flex size-6 items-center justify-center rounded-md bg-fd-primary text-[13px] font-bold text-fd-primary-foreground">
            W
          </span>
          <span className="tracking-tight">{appName}</span>
        </span>
      ),
    },
    links: [
      { text: '教程', url: '/docs' },
      { text: '官网', url: siteConfig.officialSite, external: true },
      { text: '官方文档', url: siteConfig.officialDocs, external: true },
    ],
  };
}
