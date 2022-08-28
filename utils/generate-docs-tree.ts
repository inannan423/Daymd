import { Doc } from "../.contentlayer/generated";
import { DocMeta } from "../src/contentlayer/types/doc";
import configs from "../daymd.config";

export type TNode = {
  title: string;
  route: string;
  children: Array<TNode>;
};

export function generateDocsTree(
  docs: Doc[],
  parentSlugs: string[] = []
): Array<TNode> {
  const level = parentSlugs.length;

  const tree = docs
    // leveled docs
    .filter(
      (d) =>
        d.meta.length === level + 1 &&
        d.meta
          .map((m: DocMeta) => m.slug)
          .join("/")
          .startsWith(parentSlugs.join("/"))
    )
    // sort by order
    .sort((a, b) => a.meta[level].order - b.meta[level].order)
    // generate tree
    .map<TNode>((doc) => ({
      title: doc.title,
      route: "/docs/" + doc.meta.map((m: DocMeta) => m.slug).join("/"),
      children: generateDocsTree(
        docs,
        doc.meta.map((m: DocMeta) => m.slug)
      ),
    }));

  if (level === 0) {
    return [
      {
        title: configs.notePageTitle,
        route: "/docs",
        children: [],
      },
      ...tree,
    ];
  }
  return tree;
}
