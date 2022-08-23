import { defineDocumentType } from 'contentlayer/source-files'

import { bundleMDX } from 'mdx-bundler'
import { tocPlugin } from '../plugins'
import * as utils from '../utils'

export type DocHeading = {
  level: 1 | 2 | 3
  title: string
}

export type DocMeta = {
  order: number
  slug: string
}

export default defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the document',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The excerpt of the document',
      required: true,
    },
  },
  computedFields: {
    route: {
      type: 'string',
      description: 'The route path of the page relative to site root.',
      resolve: (doc) =>
        doc._raw.flattenedPath
          // remove locale suffix
          .split('.')[0]
          .split('/')
          // skip 'docs'
          .slice(1)
          // skip 'index' with locale suffix
          .filter((name: string) => name.match(/^index$/) === null)
          // replace order prefix
          .map((name: string) => name.replace(/^\d+-/, ''))
          .join('/'),
    },
    locale: {
      type: 'string',
      description: 'The locale of the document',
      resolve: utils.getLocale,
    },
    meta: {
      type: 'json',
      description: 'The slugs meta of the document',
      resolve: (doc) =>
        doc._raw.flattenedPath
          // remove locale suffix
          .split('.')[0]
          .split('/')
          // skip 'docs' prefix
          .slice(1)
          // skip 'index' with locale suffix
          .filter((name: string) => name.match(/^index$/) === null)
          .map((name) => {
            const reg = /^(\d+)?-?([a-z0-9\-]+)?$/
            const [, order = 0, slug] = name.match(reg) ?? []

            if (!slug) throw new Error(`Invalid slug: ${name}`)

            return {
              order: Number(order),
              slug,
            }
          }),
    },
    headings: {
      type: 'json',
      resolve: async (doc) => {
        const headings: DocHeading[] = []

        await bundleMDX({
          source: doc.body.raw,
          mdxOptions: (opts) => {
            opts.remarkPlugins = [
              ...(opts.remarkPlugins ?? []),
              tocPlugin(headings),
            ]
            return opts
          },
        })

        return [{ level: 1, title: doc.title }, ...headings]
      },
    },
    last_edited: { type: 'date', resolve: utils.getLastEditedDate },
  },
  extensions: {},
}))
