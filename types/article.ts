import { MDXRemoteSerializeResult } from "next-mdx-remote";

type ArticleType = {
  slug?: string[];
  uri: string;
  title: string;
  date?: string;
  content?: MDXRemoteSerializeResult;
};

export default ArticleType;
