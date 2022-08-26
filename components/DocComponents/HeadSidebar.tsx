import type React from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { PostTree } from "./PostTree";
import { TNode } from "../../utils/generate-docs-tree";
import configs from "daymd.config";
import { Collapses } from "./Collapse";

export const HeadSidebar: React.FC<{ tree: TNode[] }> = ({ tree }) => {
  const { t } = useTranslation("common");
  return (
    //  {configs.smListName}
    <div className=" xl:hidden flex flex-col items-center">
      <Collapses>
        <nav
          className={cn("z-10 w-64 relative grow overflow-y-scroll scrollbar")}
        >
          <PostTree tree={tree} level={0} />
        </nav>
      </Collapses>
    </div>
  );
};
