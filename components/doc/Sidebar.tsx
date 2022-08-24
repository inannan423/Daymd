import type React from "react";
import cn from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaGithubAlt } from "react-icons/fa";

// import {
//   Logo,
//   LocaleSwitcher,
//   ModeSwitcher,
//   ExternalLink,
//   MadeBy,
// } from "../app";
import { IconJuejin } from "../icons";
import { Search } from "./Search";
import { Tree } from "./Tree";
import { TNode } from "../../utils/generate-docs-tree";

export const Sidebar: React.FC<{ tree: TNode[] }> = ({ tree }) => {
  const { t } = useTranslation("common");

  const links = [
    {
      href: "/posts",
      label: t("navigation.posts"),
    },
    {
      href: "/wow",
      label: t("navigation.wow"),
    },
    {
      href: "/readme",
      label: t("navigation.readme"),
    },
  ];
  return (
    <aside
      className={cn(
        "flex flex-col max-w-xs w-full border-r",
        "border-r-gray-200/70 dark:border-r-gray-800"
      )}
    >
      <div className={cn("flex flex-col space-y-4 pl-8 pr-4 py-4")}>
        <div className={cn("flex items-center justify-between")}>
          {/* <Logo /> */}
          <div className={cn("space-x-1 text-lg")}>
            {/* <LocaleSwitcher /> */}
            {/* <ModeSwitcher /> */}
          </div>
        </div>
        <nav
          className={cn(
            "flex items-center py-2 rounded-md",
            "shadow-inner-light dark:shadow-inner-dark",
            "divide-x-2 divide-gray-200/80 dark:divide-gray-800",
            "bg-gray-200/60 dark:bg-gray-800/60"
          )}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "flex-1 leading-normal text-sm text-center",
                  "hover:text-theme-500 dark:hover:text-theme-500"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
      <hr className={cn("border-gray-200/70 dark:border-gray-800")} />
      <div className={cn("flex flex-col pl-8 pr-4 py-4")}>
        <Search />
      </div>
      <hr className={cn("border-gray-200/70 dark:border-gray-800")} />
      <div className="grow flex flex-col space-y-4 pl-8 pr-4 py-4 overflow-y-hidden">
        <nav className={cn("relative grow overflow-y-scroll scrollbar")}>
          <Tree tree={tree} level={0} />
        </nav>
        <div className={cn("flex flex-col items-center space-y-2")}>
          <div className={cn("flex space-x-6")}>
            {/* <ExternalLink
              href="https://github.com/chioio"
              className={cn("row-span-3 flex items-center justify-center")}
            >
              <FaGithubAlt className={cn("w-6 h-6", "hover:text-theme-500")} />
            </ExternalLink>
            <ExternalLink
              href="https://juejin.cn/user/1521379825688637"
              className={cn("row-span-3 flex items-center justify-center")}
            >
              <IconJuejin className={cn("w-6 h-6", "hover:text-theme-500")} />
            </ExternalLink> */}
          </div>
          {/* <MadeBy /> */}
        </div>
      </div>
    </aside>
  );
};
