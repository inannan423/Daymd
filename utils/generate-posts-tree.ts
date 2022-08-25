import { Post } from '../.contentlayer/generated'
import { PostMeta } from '../src/contentlayer/types/post'
import configs from '../daymd.config'

export type TNode = {
  title: string
  route: string
  children: Array<TNode>
  
}

export function generatePostsTree(
  docs: Post[],
  parentSlugs: string[] = []
): Array<TNode> {
  const level = parentSlugs.length

  const tree = docs
    // leveled docs
    .filter(
      (d) =>
        d.meta.length === level + 1 &&
        d.meta
          .map((m: PostMeta) => m.slug)
          .join('/')
          .startsWith(parentSlugs.join('/'))
    )
    // sort by order
    .sort((a, b) => a.meta[level].order - b.meta[level].order)
    // generate tree
    .map<TNode>((doc) => ({
      title: doc.title,
      route: '/posts/' + doc.meta.map((m: PostMeta) => m.slug).join('/'),
      children: generatePostsTree(
        docs,
        doc.meta.map((m: PostMeta) => m.slug)
      ),
    }))

  if (level === 0) {
    return [
      {
        title: configs.postPageTitle,
        route: '/posts',
        children: [],
      },
      ...tree,
    ]
  }
  return tree
}
