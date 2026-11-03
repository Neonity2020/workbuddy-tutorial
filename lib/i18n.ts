/**
 * Fumadocs UI 的中文文案。
 * 键名格式为 `原文(使用位置)(aria-label)`，由 fumadocs-ui 内置的 keys 列表定义。
 */
export const zhTranslations: Record<string, string> = {
  'Search(search trigger)': '搜索文档',
  'Search(search dialog)': '搜索',
  'Open Search(search trigger)(aria-label)': '打开搜索',
  'Close Search(search dialog)(aria-label)': '关闭搜索',
  'No results found(search dialog)': '没有找到相关内容',
  'Search failed(search dialog)': '搜索失败',
  'Search failed, showing results for {query}(search dialog)': '搜索失败，正在显示「{query}」的结果',

  'On this page(table of contents)': '本页目录',
  'No Headings(table of contents)': '本页暂无标题',
  'Table of Contents(inline table of contents)': '目录',

  'Previous Page(pagination)': '上一篇',
  'Next Page(pagination)': '下一篇',
  'Last updated on(page footer)': '最后更新于',
  'Edit on GitHub(edit page)': '在 GitHub 编辑',

  'Copy Markdown(page actions)': '复制 Markdown',
  'Copied Markdown(page actions)': '已复制 Markdown',
  'View as Markdown(page actions)': '查看 Markdown',
  'Open(page actions)': '打开',
  'Options(aria-label)': '更多操作',

  'Copy Text(code block)(aria-label)': '复制代码',
  'Copied Text(code block)(aria-label)': '已复制',
  'Copy Link(accordion)(aria-label)': '复制链接',
  'Copied Link(accordion)(aria-label)': '已复制',
  'Copy Anchor Link(heading anchor)(aria-label)': '复制锚点链接',
  'Copied Anchor Link(heading anchor)(aria-label)': '已复制',

  'Toggle Theme(theme switcher)(aria-label)': '切换主题',
  'Theme(site menu)': '主题',
  'Light(theme switcher)(aria-label)': '浅色',
  'Dark(theme switcher)(aria-label)': '深色',
  'System(theme switcher)(aria-label)': '跟随系统',

  'Open Sidebar(sidebar)(aria-label)': '展开侧边栏',
  'Close Sidebar(sidebar)(aria-label)': '收起侧边栏',
  'Collapse Sidebar(sidebar)(aria-label)': '折叠侧边栏',
  'Show Sidebar(sidebar)': '显示侧边栏',
  'Hide Sidebar(sidebar)': '隐藏侧边栏',
  'Toggle Menu(home layout header)(aria-label)': '切换菜单',

  'Page Not Found(404 not found page)': '页面不存在',
  'Back to Home(404 not found page)': '返回首页',
  'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 not found page)':
    '你要找的页面可能已被移除、改名，或暂时无法访问。',

  'Choose a language(language switcher)': '选择语言',
  'Choose a language(language switcher)(aria-label)': '选择语言',
  'Language(language switcher)': '语言',
};
