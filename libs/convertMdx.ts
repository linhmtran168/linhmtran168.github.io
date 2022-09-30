import rehypeHighlight from 'rehype-highlight';
import { compile } from '@mdx-js/mdx';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';

export default async function convertMdx(rawContent: string): Promise<string> {
  return String(
    await compile(rawContent, {
      outputFormat: 'function-body',
      remarkPlugins: [remarkGfm, remarkMath, remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeKatex, rehypeHighlight]
    })
  );
}
