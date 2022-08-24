import type React from "react";
import cn from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaGithubAlt } from "react-icons/fa";

import { IconJuejin } from "../icons";
import { SearchIn } from "./SearchIn";
import { Tree } from "./Tree";
import { TNode } from "../../utils/generate-docs-tree";

export const Sidebar: React.FC<{ tree: TNode[] }> = ({ tree }) => {
  const { t } = useTranslation("common");
  return (
    <aside
      className={cn("sticky  max-h-screen  flex  flex-col max-w-xs w-full ")}
    >
      {/* 搜索 */}
      {/* <div className={cn("flex flex-col pl-6 pr-4 py-4")}>
        <SearchIn />
      </div> */}
      <div className="grow flex flex-col space-y-4 pl-4 pr-4 py-4 overflow-y-hidden">
        <nav className={cn("relative grow overflow-y-scroll scrollbar")}>
          <Tree tree={tree} level={0} />
        </nav>
        <div className={cn("flex flex-col items-center space-y-2")}>
          <div className={cn("flex space-x-6")}></div>
        </div>
      </div>
    </aside>
  );
};
