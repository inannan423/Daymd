import type React from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { Tree } from "./Tree";
import { TNode } from "../../utils/generate-docs-tree";
let isCollapsed = true;
export const Sidebar: React.FC<{ tree: TNode[] }> = ({ tree }) => {
  const { t } = useTranslation("common");
  const style = {
    collapsed: {
      display: "none",
    },
    expanded: {
      display: "flex",
    },
    buttonStyle: {
      display: "flex",
    },
  };
  return (
    <div style={{ position: "sticky", top: "0" }}>
      <aside
        className={cn(
          "xl:flex hidden sticky border-r-2 border-opacity-25 border-blue-100 max-h-screen    flex-col "
        )}

        // style={isCollapsed ? style.collapsed : style.expanded}
        // aria-expanded={true}
      >
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
    </div>
  );
};
