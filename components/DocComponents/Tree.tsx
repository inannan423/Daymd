import type React from "react";
import { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion, Variants } from "framer-motion";

import { FaChevronRight } from "react-icons/fa";
import { TNode } from "../../utils/generate-docs-tree";
import { useMount } from "react-use";

interface TreeProps {
  tree: TNode[];
  level: number;
}

export const Tree: React.FC<TreeProps> = ({ tree, level }) => (
  <ul
    className={cn(
      "relative space-y-2",
      level > 0 ? "ml-4 text-base" : "text-lg"
    )}
  >
    {tree.map((node, index) => (
      <TNodes key={index} node={node} level={level} />
    ))}
  </ul>
);

interface TreeNodeProps {
  node: TNode;
  level: number;
}

const TNodes: React.FC<TreeNodeProps> = ({ node, level }) => {
  const { asPath } = useRouter();
  // When page loaded, check the expand navigation.
  const [activeRoute] = asPath.match(/^([\/\w\-]+)/) || [];
  const isNodeUncollapsed =
    // level 1
    activeRoute === node.route ||
    // level 2
    activeRoute.split("/").slice(0, 3).join("/") === node.route ||
    // level 3
    activeRoute.split("/").slice(0, 4).join("/") === node.route;

  const [uncollapsed, setUncollapsed] = useState(isNodeUncollapsed);

  // When click the level 2 cate, keep the level 1 expanded.
  const cateRouteEqualed =
    activeRoute.split("/").slice(0, 3).join("/") ===
    node.route.split("/").slice(0, 3).join("/");

  const [variants, setVariants] = useState<Variants>();

  useMount(() => {
    setVariants({
      visible: {
        height: "min-content",
        opacity: 1,
        transition: { duration: 0.3 },
      },
      hidden: {
        height: 0,
        opacity: 0,
      },
    });
  });

  return (
    <li className={cn("relative")}>
      <TreeNodeLink
        title={node.title}
        route={node.route}
        level={level}
        activeRoute={activeRoute}
        collapsible={node.children.length > 0}
        // Make the level 2 uncollapsed change by click, and level 1 uncollapsed by path change.
        uncollapsed={cateRouteEqualed && uncollapsed}
        onClick={() => setUncollapsed(level === 0 || !uncollapsed)}
      />
      {node.children.length > 0 && cateRouteEqualed && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate={uncollapsed ? "visible" : "hidden"}
          className={cn(
            "mt-2",
            // Remove animation when locale changed.
            uncollapsed || "h-0 opacity-0 duration-0"
          )}
        >
          <Tree tree={node.children} level={level + 1} />
        </motion.div>
      )}
    </li>
  );
};

interface TreeNodeLinkProps {
  title: string;
  route: string;
  level: number;
  activeRoute: string;
  collapsible: boolean;
  uncollapsed: boolean;
  onClick: () => void;
}

const TreeNodeLink: React.FC<TreeNodeLinkProps> = ({
  title,
  route,
  level,
  activeRoute,
  collapsible,
  uncollapsed,
  onClick,
}) => (
  <Link href={route}>
    <a className="z-0" onClick={onClick}>
      <span
        className={cn(
          "flex font-semibold antialiased transition-all duration-500 ease-in-out text-base z-0 items-center justify-between px-3 py-1 rounded-md",
          route === activeRoute
            ? " text-theme-500 dark:text-theme-500 bg-primary bg-opacity-20 dark:bg-theme-500/10"
            : "hover:bg-gray-200/40 hover:dark:bg-gray-800/40",
          !collapsible && level > 0 ? "font-light" : "py-1"
        )}
      >
        {title}
        {collapsible && (
          <FaChevronRight
            className={cn(
              "shrink-0 text-sm transition-transform duration-300",
              route === activeRoute
                ? "text-theme-500 dark:text-theme-500"
                : "text-gray-300 dark:text-gray-500",
              uncollapsed && "rotate-90"
            )}
          />
        )}
      </span>
    </a>
  </Link>
);
