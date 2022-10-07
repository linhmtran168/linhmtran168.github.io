import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export default async function convertMdx(rawContent: string): Promise<MDXRemoteSerializeResult> {
  return await serialize(
    rawContent,
    {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex, rehypeHighlight],
        format: 'mdx',
      },
      parseFrontmatter: true
    }
  )
}
