import { toMarkdown } from 'mdast-util-to-markdown'
import { mdxToMarkdown } from 'mdast-util-mdx'
import type * as unified from 'unified'
import { DocHeading } from '../types/doc'

export const tocPlugin =
  (headings: DocHeading[]): unified.Plugin =>
  () => {
    return (node: any) => {
      for (const element of node.children.filter(
        (_: any) => _.type === 'heading' || _.name === 'OptionsTable'
      )) {
        if (element.type === 'heading') {
          const title = toMarkdown(
            { type: 'paragraph', children: element.children },
            { extensions: [mdxToMarkdown()] }
          )
            .trim()
            .replace(/<.*$/g, '')
            .replace(/\\/g, '')
            .trim()
          headings.push({ level: element.depth, title })
        } else if (element.name === 'OptionsTable') {
          element.children
            .filter((_: any) => _.name === 'OptionTitle')
            .forEach((optionTitle: any) => {
              optionTitle.children
                .filter((_: any) => _.type === 'heading')
                .forEach((heading: any) => {
                  const title = toMarkdown(
                    { type: 'paragraph', children: heading.children },
                    { extensions: [mdxToMarkdown()] }
                  )
                    .trim()
                    .replace(/<.*$/g, '')
                    .replace(/\\/g, '')
                    .trim()
                  headings.push({ level: heading.depth, title })
                })
            })
        }
      }
    }
  }
