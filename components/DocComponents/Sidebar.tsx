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
      className={cn(
        "hidden xl:flex sticky border-r-2 border-opacity-25 border-blue-100 max-h-screen    flex-col "
      )}
    >
      {/* 搜索 */}
      {/* <div className={cn("flex flex-col pl-6 pr-4 py-4")}>
        <SearchIn />
      </div> */}
      <div className="grow flex flex-col space-y-4 pl-2 pr-2 py-2 overflow-y-hidden">
        <nav
          className={cn("z-0 w-64 relative grow overflow-y-scroll scrollbar")}
        >
          <Tree tree={tree} level={0} />
        </nav>
        <div className={cn("flex flex-col items-center space-y-2")}>
          <div className={cn("flex space-x-6")}></div>
        </div>
      </div>
    </aside>
  );
};
