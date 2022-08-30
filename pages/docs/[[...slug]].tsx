import React from "react";

import { NavBar } from "../../components/NavBar";
import { useState } from "react";
import cn from "classnames";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMDXComponent } from "next-contentlayer/hooks";
// import { WarningBox } from "../../components/DocComponents"
import moment from "moment";
import Link from "next/link";
import configs from "../../daymd.config";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

import {
  Aside,
  Breadcrumbs,
  SearchIn,
  H2,
  H3,
  H4,
  H5,
  H6,
  HeadingsAside,
  Card,
  Warn,
  Example,
  Tips,
  Note,
  Danger,
  Sidebar,
  HeadSidebar,
  To,
} from "../../components/DocComponents";
import { generatePaths } from "../../utils/generate-paths";
import { DocHeading, DocMeta } from "../../src/contentlayer/types/doc";
import { allDocs, Doc } from "../../.contentlayer/generated/index";
import { generateDocsTree, TNode } from "../../utils/generate-docs-tree";
import { titleToSlug } from "../../utils/title-to-slug";
import { Locale } from "../../typings";
import { ThemeChange } from "../../components/ThemeChange";
let Path1 = "";
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    ...generatePaths<DocMeta>(allDocs, Locale.EN),
    ...generatePaths<DocMeta>(allDocs, Locale.ZH),
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  {
    doc: Doc;
    tree: Array<TNode>;
    crumbs: Array<{ title: string; route: string }>;
  },
  { slug?: string[] }
> = async (context) => {
  const [params, locale] = [context.params, context.locale];

  const pageRoute = params?.slug?.join("/") ?? "";

  const map: { [key: string]: number } = {};
  const localeDocs = allDocs
    .sort((a) => (a.locale === locale ? -1 : 1))
    .filter((d) => (map[d.route] ? 0 : (map[d.route] = 1)));

  const doc = localeDocs.find((d) => d.route === pageRoute)!;

  const crumb = {
    title: "",
    route: "",
  };

  const crumbs = [
    {
      route: "/docs",
      title: configs.notePageTitle,
    },
    ...doc.meta.map(({ slug }: DocMeta) => {
      crumb.route += crumb.route === "" ? slug : "/" + slug;
      const title = localeDocs.find((d) => d.route === crumb.route)?.title;
      // Path1 = crumb.route;
      return { route: "/docs/" + crumb.route, title };
    }),
  ];

  const tree = generateDocsTree(localeDocs);

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "docs"])),
      doc,
      tree,
      crumbs,
    },
  };
};

export default function DocsPage({
  doc,
  tree,
  crumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // The active heading index
  const [active, setActive] = useState(0);
  const MDXContent = useMDXComponent(doc.body.code || "");

  const MDXComponents = {
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    Card,
    Warn,
    Example,
    Tips,
    Note,
    Danger,
    ThemeChange,
    To,
  };

  const handleScroll = () => {
    let cur = 0;

    doc.headings.map((h: DocHeading, i: number) => {
      const slug = titleToSlug(h.title);
      const el = document.getElementById(slug);
      if (el && el.getBoundingClientRect().top < 130) cur = i;
    });

    setActive(cur);
  };

  return (
    <div className="flex flex-col">
      {/* <div className={cn("h-32")}></div> */}
      <div
        className="-z-10 fixed bg-opacity-10 w-screen h-full flex justify-center items-center"
        style={{
          backgroundImage: configs.docPostBgImg,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* 添加透明遮罩 */}
        <div className="bg-base-100 bg-opacity-90 w-screen h-full flex justify-center items-center" />
        {/* <div></div> */}
      </div>
      <div style={{ zIndex: "1000" }} className="z-50 ">
        <NavBar />
      </div>
      <div className={cn("  min-h-screen grow flex flex-row w-screen ")}>
        {/* 笔记页面列表 */}
        <div style={{ position: "sticky", top: "0" }}>
          <Sidebar tree={tree} />
        </div>
        {/* 文章容器 */}
        <article
          onScrollCapture={handleScroll}
          className={cn("markdown grow flex flex-col  w-min")}
        >
          <header
            style={{ display: configs.ifBread ? "" : "none" }}
            className={cn("xl:block hidden px-10 pt-4")}
          >
            <Breadcrumbs crumbs={crumbs} />
          </header>
          <HeadSidebar tree={tree} />
          {/* 不显示面包屑时的占位 */}
          <div
            style={{
              height: "20px",
              display: configs.ifBread ? "none" : "block",
            }}
          ></div>
          <main
            className={cn(
              //overflow-y-scroll scrollbar-lg max-h-screen
              " h-max  grow px-10 pb-10 max-w-none w-full "
            )}
          >
            <h1 className={cn("leading-snug  text-4xl font-semibold")}>
              {doc.title}
            </h1>

            <MDXContent components={MDXComponents} />
            <div className="bottom-1 mt-20 flex-wrap w-full h-min flex justify-between bg-accent bg-opacity-25 rounded-lg">
              <div className="p-2 ml-2 font-mono font-semibold italic ">
                {configs.timeText}
                {moment(doc.date).format("YYYY-MM-DD")}
              </div>
              <a
                target={"_blank"}
                style={{ display: configs.ifDocLink ? "" : "none" }}
                href={configs.docLinkUrl}
              >
                <div className="cursor-pointer p-2 ml-2 mr-2 font-bold">
                  {configs.docLinkText}
                </div>
              </a>
            </div>
          </main>
        </article>
        <div
          className="h-full w-64 hidden xl:flex"
          style={{
            display: configs.ifRightBar ? "" : "none",
            position: "sticky",
            top: "0",
          }}
        >
          <Aside>
            {(isSandpack) => (
              <>
                <HeadingsAside
                  headings={doc.headings}
                  active={active}
                  visible={!isSandpack}
                />
              </>
            )}
          </Aside>
        </div>
      </div>
    </div>
  );
}
