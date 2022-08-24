import { defineDocumentType, defineNestedType } from 'contentlayer/source-files'

import { bundleMDX } from 'mdx-bundler'
import * as utils from '../utils'
import * as plugins from '../plugins'

export type PostHeading = {
  level: 1 | 2 | 3
  title: string
}

export type PostMeta = {
  slug: string
}

export default defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The excerpt of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    locale: {
      type: 'string',
      description: 'The locale of the post',
      resolve: utils.getLocale,
    },
    meta: {
      type: 'json',
      description: 'The slug meta of the post',
      resolve: (post) => ({
        slug: post._raw.flattenedPath
          .split('/')
          // skip '/posts/[year]' prefix
          .slice(-1)[0]
          .split('.')[0],
      }),
    },
    headings: {
      type: 'json',
      resolve: async (doc) => {
        const headings: PostHeading[] = []

        await bundleMDX({
          source: doc.body.raw,
          mdxOptions: (opts) => {
            opts.remarkPlugins = [
              ...(opts.remarkPlugins ?? []),
              plugins.tocPlugin(headings),
            ]
            return opts
          },
        })

        return [{ level: 1, title: doc.title }, ...headings]
      },
    },
  },
  extensions: {},
}))
