import { defineDocumentType } from "contentlayer/source-files";

import { bundleMDX } from "mdx-bundler";
import { tocPlugin } from "../plugins";
import * as utils from "../utils";

export type PostHeading = {
  level: 1 | 2 | 3;
  title: string;
};

export type PostMeta = {
  order: number;
  slug: string;
};

export default defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the Post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the Post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the Post",
      required: true,
    },
    backpic: {
      type: "string",
      description: "The back image of the Post",
      required: false,
    },
  },
  computedFields: {
    route: {
      type: "string",
      description: "The route path of the page relative to site root.",
      resolve: (Post) =>
        Post._raw.flattenedPath
          // remove locale suffix
          .split(".")[0]
          .split("/")
          // skip 'Posts'
          .slice(1)
          // skip 'index' with locale suffix
          .filter((name: string) => name.match(/^index$/) === null)
          // replace order prefix
          .map((name: string) => name.replace(/^\d+-/, ""))
          .join("/"),
    },
    locale: {
      type: "string",
      description: "The locale of the Post",
      resolve: utils.getLocale,
    },
    meta: {
      type: "json",
      description: "The slugs meta of the Post",
      resolve: (Post) =>
        Post._raw.flattenedPath
          // remove locale suffix
          .split(".")[0]
          .split("/")
          // skip 'Posts' prefix
          .slice(1)
          // skip 'index' with locale suffix
          .filter((name: string) => name.match(/^index$/) === null)
          .map((name) => {
            const reg = /^(\d+)?-?([a-z0-9\-]+)?$/;
            const [, order = 0, slug] = name.match(reg) ?? [];

            if (!slug) throw new Error(`Invalid slug: ${name}`);

            return {
              order: Number(order),
              slug,
            };
          }),
    },
    headings: {
      type: "json",
      resolve: async (Post) => {
        const headings: PostHeading[] = [];

        await bundleMDX({
          source: Post.body.raw,
          mdxOptions: (opts) => {
            opts.remarkPlugins = [
              ...(opts.remarkPlugins ?? []),
              tocPlugin(headings),
            ];
            return opts;
          },
        });

        return [{ level: 1, title: Post.title }, ...headings];
      },
    },
    last_edited: { type: "date", resolve: utils.getLastEditedDate },
  },
  extensions: {},
}));
