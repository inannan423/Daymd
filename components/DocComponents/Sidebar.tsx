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
      {/* <div
        onClick={() => ((isCollapsed = !isCollapsed), console.log(isCollapsed))}
        className="btn h4 btn-circle swap swap-rotate"
        style={style.buttonStyle}
      >
        <input type="checkbox" />

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </div> */}
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
