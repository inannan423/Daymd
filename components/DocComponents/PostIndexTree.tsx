import type React from "react";
import { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import Parallax from "react-rellax";
import { motion, Variants } from "framer-motion";
import moment from "moment";
import { FaChevronRight } from "react-icons/fa";
import { TNode } from "../../utils/generate-posts-tree";
import { useMount } from "react-use";

interface TreeProps {
  tree: TNode[];
  level: number;
}

export const PostIndexTree: React.FC<TreeProps> = ({ tree, level }) => (
  <ul
    className={cn(
      "relative space-y-2",
      level > 0 ? "ml-4 text-base" : "text-lg"
    )}
  >
    {tree &&
      tree.map((node, index) => (
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
        desc={node.desc}
        title={node.title}
        date={node.date}
        backpic={node.backpic}
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
          <PostIndexTree tree={node.children} level={level + 1} />
        </motion.div>
      )}
    </li>
  );
};

interface TreeNodeLinkProps {
  desc: string;
  date: string;
  title: string;
  backpic?: string;
  route: string;
  level: number;
  activeRoute: string;
  collapsible: boolean;
  uncollapsed: boolean;
  onClick: () => void;
}

const TreeNodeLink: React.FC<TreeNodeLinkProps> = ({
  title,
  desc,
  date,
  route,
  backpic,
  level,
  activeRoute,
  collapsible,
  uncollapsed,
  onClick,
}) => (
  <Link href={route}>
    <div className="w-full cursor-pointer my-2">
      <div
        style={{ backgroundImage: backpic }}
        className="bg-base-100 hover:opacity-80 transition-all duration-1000 ease-in-out bg-no-repeat bg-cover card h-42   shadow-xl image-full"
      >
        <div className="card-body w-full">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p className="text-sm font-mono">
            {moment(date).format("YYYY-MM-DD")}
          </p>
          <p className="text-base">{desc}</p>
        </div>
      </div>
    </div>
  </Link>
);
