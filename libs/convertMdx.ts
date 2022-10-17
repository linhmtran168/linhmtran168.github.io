import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import { bundleMDX  } from 'mdx-bundler';

export default async function convertMdx(rawContent: string) {
  return await bundleMDX({
    source: rawContent,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm, remarkMath]
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeKatex, rehypeHighlight]
      return options
    }
  })
}
