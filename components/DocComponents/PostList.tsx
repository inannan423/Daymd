import { PostTree } from "./PostTree";
import { TNode } from "../../utils/generate-docs-tree";
export const PostList: React.FC<{ tree: TNode[] }> = ({ tree }) => {
  console.log("WW" + tree);
  return <PostTree tree={tree} level={0} />;
};
