import type React from "react";
import { createContext, useEffect, useState } from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";

// import { Sandpack, SandpackToggle } from "../sandpack";
import { PostHeading } from "../../src/contentlayer/types/post";
import { motion } from "framer-motion";
import { titleToSlug } from "../../utils/title-to-slug";
import configs from "../../daymd.config";
export const AsideContext = createContext<{ showSide: boolean }>({
  showSide: false,
});

export const Aside: React.FC<{
  children: (showSide: boolean) => React.ReactNode;
}> = ({ children }) => {
  const [showSide, setshowSide] = useState(false);

  return (
    <AsideContext.Provider value={{ showSide }}>
      {children(showSide)}
      {/* <SandpackToggle toggle={() => setshowSide(!showSide)} /> */}
    </AsideContext.Provider>
  );
};

type AsidesProps<T> = {
  visible: boolean;
} & T;

export const HeadingsAside: React.FC<
  AsidesProps<{
    headings: PostHeading[];
    active: number;
  }>
> = ({ headings, active }) => {
  const { t } = useTranslation("docs");
  const [current, setCurrent] = useState(active);

  useEffect(() => setCurrent(active), [active]);

  return (
    <div
      style={{ position: "sticky", top: "0" }}
      className={cn(
        " h-min  mt-10 space-y-4 px-6 py-4 w-64  border-l-2 border-opacity-25 border-blue-100"
      )}
    >
      <h3 className={cn(" uppercase font-bold text-content")}>
        {configs.rightContentText}
      </h3>
      <nav className={cn("grow h-screen overflow-y-scroll overscroll-auto")}>
        <ul className={cn("space-y-1.5 ")}>
          {headings.length &&
            [...headings]
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
                      "px-3 py-1 w-full transition-all ease-in-out duration-600 rounded-md text-sm",
                      i === current
                        ? "text-theme-500   text-primary  "
                        : "hover:bg-primary/40 ",
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
    </div>
  );
};
