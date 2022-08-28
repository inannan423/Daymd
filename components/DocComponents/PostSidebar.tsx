import type React from "react";
import cn from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaGithubAlt } from "react-icons/fa";

import { IconJuejin } from "../icons";
import { SearchIn } from "./SearchIn";
import { PostTree } from "./PostTree";
import { TNode } from "../../utils/generate-docs-tree";

export const PostSidebar: React.FC<{ tree: TNode[] }> = ({ tree }) => {
  const { t } = useTranslation("common");
  return (
    <aside
      style={{ position: "sticky", top: "0" }}
      className={cn("hidden xl:flex sticky ml-9 mt-7 max-h-screen  flex-col ")}
    >
      <div className="grow flex flex-col space-y-4 pl-2 pr-2 py-2 overflow-y-hidden">
        <div className="text-lg font-black">最新博客</div>
        <nav
          className={cn("z-0 w-64 relative grow overflow-y-scroll scrollbar")}
        >
          <PostTree tree={tree.reverse()} level={0} />
        </nav>
        <div className={cn("flex flex-col items-center space-y-2")}>
          <div className={cn("flex space-x-6")}></div>
        </div>
      </div>
    </aside>
  );
};
