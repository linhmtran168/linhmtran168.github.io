import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllArticleMetas } from '../libs/api';
import ArticleType from '../types/article';
import Link from 'next/link';

type Props = {
  articles: ArticleType[];
};

const Index = ({ articles }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>A Lazy Developer&lsquo;s blog</title>
      </Head>
      <div className="flex flex-col w-full">
        <p className="text-3xl border-b layout-separator leading-relaxed mb-4">All Posts</p>
        <ul>
          {articles.map((ale, i) => (
            <li key={i} className="mt-4">
              <Link as={`/blog/${ale.uri}`} href="/blog/[...slug]">
                <a className="hover:underline">
                  <h2>{ale.title}</h2>
                </a>
              </Link>
              <p className="text-sm italic leading-loose text-opacity-90">{ale.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllArticleMetas();

  return {
    props: { articles }
  };
};

export default Index;
