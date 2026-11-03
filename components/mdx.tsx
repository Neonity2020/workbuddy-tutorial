import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step as FumadocsStep, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';

/**
 * 官方 Step 只渲染容器，不支持标题。
 * 这里补一个带标题的版本，让内容里的 <Step title="..."> 能正常显示。
 */
function Step({ title, children }: { title?: string; children?: ReactNode }) {
  return (
    <FumadocsStep>
      {title ? <p className="mb-1 font-semibold text-fd-foreground">{title}</p> : null}
      {children}
    </FumadocsStep>
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Steps,
    Step,
    Tabs,
    Tab,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
