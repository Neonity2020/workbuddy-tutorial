import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'WorkBuddy 教程';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const siteConfig = {
  name: appName,
  description:
    '一份把 WorkBuddy 真正用起来的教程：安装、任务、对话、权限、专家、技能、连接器与实战案例。',
  officialSite: 'https://www.workbuddy.cn',
  officialDocs: 'https://www.workbuddy.cn/docs/workbuddy/Overview',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
