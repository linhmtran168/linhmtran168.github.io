import Article from '../components/article';

export default function About(): JSX.Element {
  return (
    <Article article={{ title: 'About', uri: 'about' }}>
      <div className="mt-8">
        <p>A lazy developer and a day dreamer. That’s all, folks :)</p>
      </div>
    </Article>
  );
}
