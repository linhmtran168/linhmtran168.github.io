import Article from '../components/article';
import Layout from '../components/layout';

export default function About(): JSX.Element {
  return (
    <Layout>
      <Article article={{ title: 'About' }}>
        <div className="mt-8">
          <p>A lazy developer and a day dreamer. That’s all, folks :)</p>
        </div>
      </Article>
    </Layout>
  );
}
