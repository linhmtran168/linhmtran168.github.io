import { getMDXComponent } from 'mdx-bundler/client';
import * as React from 'react';
import articleContentStyle from './articleContent.module.css';
import 'highlight.js/styles/github.css';
import 'katex/dist/katex.css';

const ArticleContent = ({ content }: { content: string }) => {
  const MdxComponent = React.useMemo(() => getMDXComponent(content), [content]);

  return (
    <div className={articleContentStyle['markdown']}>
      <MdxComponent />
    </div>
  );
};

export default ArticleContent;
