import type React from "react";
import cn from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaGithubAlt } from "react-icons/fa";

import { IconJuejin } from "../icons";
import { SearchIn } from "./SearchIn";
import { PostIndexTree } from "./PostIndexTree";
import { TNode } from "../../utils/generate-posts-tree";

export const PostIndexBar: React.FC<{ tree: TNode[] }> = ({ tree }) => {
  const { t } = useTranslation("common");
  return <PostIndexTree tree={tree.reverse()} level={0} />;
};
