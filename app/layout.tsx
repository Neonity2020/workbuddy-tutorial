import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { ReactNode } from 'react';
import { siteConfig } from '@/lib/shared';
import { zhTranslations } from '@/lib/i18n';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen antialiased">
        <RootProvider
          theme={{ defaultTheme: 'light' }}
          i18n={{ locale: 'zh-CN', translations: zhTranslations }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
