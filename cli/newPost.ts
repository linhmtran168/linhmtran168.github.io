#!/usr/bin/env ts-node-script
import { format } from 'date-fns';
import yargs from 'yargs/yargs';
import fs from 'fs';

type CliOptions = { title: string, slug: string }

const options = yargs(process.argv.slice(2))
  .usage('Usage: -t <title> -cs <custom slug>')
  .option('title', { alias: 't', description: 'Post title', type: 'string'})
  .option('slug', { alias: 'cs', description: 'Custom slug for the post', type: 'string'})
  .demandOption(['title'])
  .strict()
  .parse() as CliOptions;

const title = options.title;
const postDate = format(new Date(), 'yyyy-mm-dd');
let slug = options.slug;

if (!slug) {
  slug = title
    .trim()
    .toLowerCase()
    .replace(/[^A-Z0-9]+/gi, '-');
}

const postContent = `---
layout: post
title: ${title} 
date: "${postDate}"
---
`;

const filePath = `./_posts/${postDate}-${slug}.md`;

if (fs.existsSync(filePath)) {
  console.log('A post with same title already existed');
  process.exit(1);
}

try {
  fs.writeFileSync(filePath, postContent);
  console.log(`${filePath} successfully created!`);
  process.exit(0);
} catch (err) {
  console.error(err);
  process.exit(1);
}
