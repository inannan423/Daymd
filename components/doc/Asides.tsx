import type React from "react";
import { createContext, useEffect, useState } from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";

// import { Sandpack, SandpackToggle } from "../sandpack";
import { DocHeading } from "../../src/contentlayer/types/doc";
import { motion } from "framer-motion";
import { titleToSlug } from "../../utils/title-to-slug";
import configs from "../../daymd.config";
export const AsideContext = createContext<{ isSandpack: boolean }>({
  isSandpack: false,
});

export const Aside: React.FC<{
  children: (isSandpack: boolean) => React.ReactNode;
}> = ({ children }) => {
  const [isSandpack, setIsSandpack] = useState(false);

  return (
    <AsideContext.Provider value={{ isSandpack }}>
      {children(isSandpack)}
      {/* <SandpackToggle toggle={() => setIsSandpack(!isSandpack)} /> */}
    </AsideContext.Provider>
  );
};

type AsidesProps<T> = {
  visible: boolean;
} & T;

const variants = {
  visible: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    width: 0,
    transition: {
      duration: 1,
    },
  },
};

export const HeadingsAside: React.FC<
  AsidesProps<{
    headings: DocHeading[];
    active: number;
  }>
> = ({ headings, visible, active }) => {
  const { t } = useTranslation("docs");
  const [current, setCurrent] = useState(active);

  useEffect(() => setCurrent(active), [active]);

  return (
    <motion.aside
      variants={variants}
      initial={visible ? "visible" : "hidden"}
      animate={visible ? "visible" : "hidden"}
      className={cn("space-y-4 px-6 py-8 max-w-xs w-full")}
    >
      <h3 className={cn("uppercase font-medium")}>
        {configs.rightContentText}
      </h3>
      <nav className={cn("grow")}>
        <ul className={cn("space-y-1.5")}>
          {headings.length &&
            [{ level: 2, title: "Overview" }, ...headings]
              .filter((h) => h.level > 1)
              .map((h, i) => (
                <li
                  role="link"
                  key={i}
                  className={cn(
                    "relative flex",
                    ["", "", "", "pl-2", "pl-4", "pl-6", "pl-8"].map((pl, l) =>
                      h.level === l ? pl : ""
                    )
                  )}
                >
                  <a
                    href={`#${titleToSlug(h.title)}`}
                    className={cn(
                      "px-3 py-1 w-full rounded-md text-sm",
                      i === current
                        ? "text-theme-500 dark:text-theme-500 bg-theme-500/10 dark:bg-theme-500/10 duration-300"
                        : "hover:bg-gray-200/40 hover:dark:bg-gray-800/40",
                      h.level > 2 && "font-light"
                    )}
                    onClick={() => setCurrent(i)}
                  >
                    {h.title}
                  </a>
                </li>
              ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export const SandpackAside: React.FC<AsidesProps<{}>> = ({ visible }) => {
  return (
    <motion.aside
      variants={variants}
      initial={visible ? "visible" : "hidden"}
      animate={visible ? "visible" : "hidden"}
      className={cn("space-y-4 px-6 py-8 max-w-xl w-full")}
    >
      <h3 className={cn("space-x-2 uppercase font-medium")}>
        <i
          className={cn(
            "w-6 h-4",
            "before:inline-block before:w-2 before:h-3 before:border-2 before:border-black before:translate-y-[1px] before:translate-x-[1px]",
            "after:inline-block after:w-2 after:h-3 after:border-2 after:border-black after:-translate-y-[1px] after:-translate-x-[1px]"
          )}
        />
        <span>Sandpack</span>
      </h3>
      {/* <Sandpack /> */}
    </motion.aside>
  );
};
