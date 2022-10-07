import fs from 'fs';
import path from 'path';
import ArticleType from '../types/article';
import { parseISO, format } from 'date-fns';
import convertMdx from './convertMdx';

const articlesDir = path.join(process.cwd(), '_posts');

function getArticleSlug(fileName: string): string[] {
  const re = /^(\d{4})-(\d{2})-(\d{2})-([a-z0-9\\-]+)\.mdx$/;
  const matches = fileName.match(re);
  return matches ? matches.slice(1) : [];
}

export function getAllArticleSlugs(): string[][] {
  return fs
    .readdirSync(articlesDir)
    .sort((a, b) => (a < b ? 1 : -1))
    .map(getArticleSlug);
}

export async function getArticleBySlug(slug: string[], excludeContent: boolean = false): Promise<ArticleType> {
  const fileName = `${slug.join('-')}.mdx`; 
  const fullPath = path.join(articlesDir, fileName);
  const content = await convertMdx(fs.readFileSync(fullPath, 'utf-8'));
  const uri = slug.map(encodeURIComponent).join('/');

  const article: ArticleType = {
    title: content.frontmatter!.title,
    slug,
    uri,
    date: format(parseISO(content.frontmatter!.date), 'yyyy/MM/dd'),
  };

  if (!excludeContent) {
    article.content = content;
  }

  return article;
}

export async function getAllArticleMetas(): Promise<ArticleType[]> {
  const articles = await Promise.all(
    getAllArticleSlugs().map((slug) => getArticleBySlug(slug, true))
  );
  return articles.sort((a1, a2) => (a1.date! > a2.date! ? -1 : 1));
}
