import { defineDocumentType, makeSource } from "contentlayer/source-files";
import configs from "./daymd.config";
import PrettyCode from "rehype-pretty-code";

import { CONTENT_DIR } from "./src/configs/constants";
import DocType from "./src/contentlayer/types/doc";
import PostType from "./src/contentlayer/types/post";

// 代码高亮
const options = {
  theme: configs.mdCodeTheme,
  onVisitLine(node) {
    if (!node.children.length) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

export default makeSource({
  contentDirPath: CONTENT_DIR,
  documentTypes: [DocType, PostType],
  mdx: { rehypePlugins: [[PrettyCode, options]] },
});
