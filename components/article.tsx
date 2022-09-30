import Head from 'next/head';
import { ReactNode, useState, useEffect, Fragment } from 'react';
import { run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import ArticleType from '../types/article';
import articleStyle from './article.module.css';
import { DiscussionEmbed } from 'disqus-react';
import 'highlight.js/styles/github.css';
import 'katex/dist/katex.css';

type ArticleProp = {
  children?: ReactNode;
  article: ArticleType;
};

const Article = ({ children, article }: ArticleProp): JSX.Element => {
  const pageUri = children ? article.uri : `blog/${article.uri}`;
  const disqusConf = {
    url: `${process.env.NEXT_PUBLIC_URL}/${pageUri}`,
    title: article.title,
    identifier: pageUri
  };

  const [mdxModule, setMdxModule] = useState<any>();
  const Content = mdxModule ? mdxModule.default : Fragment;

  useEffect(() => {
    (async () => {
      setMdxModule(await run(article.content!, runtime));
    })();
  }, [article.content]);

  return (
    <article className="w-full">
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className="flex-col">
        <div className="border-b layout-separator pb-1 flex flex-row items-baseline justify-between">
          <p className="text-3xl">{article.title}</p>
          {article.updatedTime && <p className="italic font-thin">{article.updatedTime}</p>}
        </div>
        {children ? (
          children
        ) : (
          <div className={articleStyle['markdown']}>
            <Content />
          </div>
        )}

        <div className="mt-12 border-t layout-separator pt-1">
          <DiscussionEmbed shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME!} config={disqusConf} />
        </div>
      </div>
    </article>
  );
};

export default Article;
