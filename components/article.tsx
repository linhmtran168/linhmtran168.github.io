import Head from 'next/head';
import { ReactNode } from 'react';
import * as React from 'react';
import ArticleType from '../types/article';
import { DiscussionEmbed } from 'disqus-react';
import ArticleContent from './articleContent';

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

  return (
    <article className="w-full">
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className="flex-col">
        <div className="border-b layout-separator pb-1 flex flex-row items-baseline justify-between">
          <p className="text-3xl">{article.title}</p>
          {article.date && <p className="italic font-thin">{article.date}</p>}
        </div>

        {children ? children : <ArticleContent content={article.content!} />}

        <div className="mt-12 border-t layout-separator pt-1">
          <DiscussionEmbed shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME!} config={disqusConf} />
        </div>
      </div>
    </article>
  );
};

export default Article;
