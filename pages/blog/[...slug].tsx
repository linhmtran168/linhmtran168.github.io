import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import ErrorPage from 'next/error';
import { ParsedUrlQuery } from 'querystring';
import Article from '../../components/article';
import { getAllArticleSlugs, getArticleBySlug } from '../../libs/api';
import ArticleType from '../../types/article';

type Props = {
  article: ArticleType;
};

export default function Post({ article }: Props): JSX.Element {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return router.isFallback ? <h1>Loading..</h1> : <Article article={article} />;
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const article = await getArticleBySlug(params.slug);

  return {
    props: { article }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticleSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
