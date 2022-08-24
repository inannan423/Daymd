import { Locale } from '../typings'
import { DocumentGen } from 'contentlayer/core'

export type GeneratePaths = {
  params: {
    slug: string | string[]
  }
  locale: Locale
}[]

export function generatePaths<T extends { order?: number; slug: string }>(
  docs: DocumentGen[],
  locale: Locale
): GeneratePaths {
  // Deduplicate meta data
  const meta = Array.from(
    new Set(docs.map((d) => d.meta).map((m) => JSON.stringify(m)))
  ).map((m) => JSON.parse(m)) as T[] | [T[]]

  return meta.map((m: T | T[]) => ({
    params: {
      slug: Array.isArray(m) ? m.map(({ slug }) => slug) : m.slug,
    },
    locale,
  }))
}
