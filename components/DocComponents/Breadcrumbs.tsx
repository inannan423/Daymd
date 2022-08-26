import type React from "react";
import cn from "classnames";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbsProps {
  crumbs: Array<{ title: string; route: string }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <ul className="text-base flex h-10">
      <li
        className={cn(
          "flex px-1 items-center transition-all duration-500 ease-linear text-theme-500 hover:text-primary-focus"
        )}
      >
        <Link href={"/"}>
          <a className={cn("no-underline rounded-md uppercase font-medium ")}>
            主页
          </a>
        </Link>
        <FaChevronRight className={cn("pl-1 inline text-xs")} />
      </li>
      {crumbs.map((c, i) => (
        <li
          key={i}
          className={cn(
            "flex px-1 items-center transition-all duration-500 ease-linear text-theme-500 hover:text-primary-focus"
          )}
        >
          <Link href={c.route}>
            <a className={cn("no-underline rounded-md uppercase font-medium ")}>
              {c.title}
            </a>
          </Link>
          {i !== crumbs.length - 1 && (
            <FaChevronRight className={cn("pl-1 inline text-xs")} />
          )}
        </li>
      ))}
    </ul>
  );
};
