import React from "react";
import { useState } from "react";
import cn from "classnames";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMDXComponent } from "next-contentlayer/hooks";
import configs from "../../daymd.config";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

import {
  Aside,
  Breadcrumbs,
  H2,
  H3,
  H4,
  H5,
  H6,
  HeadingsAside,
  SandpackAside,
} from "../../components/doc";
import { generatePaths } from "../../utils/generate-paths";
import { DocHeading, DocMeta } from "../../src/contentlayer/types/doc";
import { allDocs, Doc } from "../../.contentlayer/generated/index";
import { generateDocsTree, TNode } from "../../utils/generate-docs-tree";
import { Sidebar } from "../../components/doc/Sidebar";
import { titleToSlug } from "../../utils/title-to-slug";
import { Locale } from "../../typings";

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
    <div>
      <div className={cn("h-20")}></div>
      <div className={cn("grow flex flex-row w-screen overflow-auto")}>
        {/* 笔记页面列表 */}
        <Sidebar tree={tree} />
        {/* 文章容器 */}
        <article
          onScrollCapture={handleScroll}
          className={cn("grow flex flex-col overflow-hidden")}
        >
          <header className={cn("px-10 pt-4")}>
            <Breadcrumbs crumbs={crumbs} />
          </header>
          <main
            className={cn(
              "relative grow px-16 pb-10 max-w-none w-full overflow-y-scroll scrollbar-lg",
              "prose dark:prose-invert",
              "prose-headings:font-medium"
            )}
          >
            <h1
              id="overview"
              className={cn("leading-snug text-5xl font-medium")}
            >
              {doc.title}
            </h1>
            <MDXContent components={MDXComponents} />
          </main>
        </article>
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
  );
}
