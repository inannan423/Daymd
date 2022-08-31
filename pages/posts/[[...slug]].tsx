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
  WarningBox,
  Card,
  Warn,
  Example,
  Tips,
  Note,
  Danger,
  PostSidebar,
  HeadSidebar,
  To,
  Collapses,
} from "../../components/DocComponents";
import { generatePaths } from "../../utils/generate-paths";
import { PostHeading, PostMeta } from "../../src/contentlayer/types/post";
import { allPosts, Post } from "../../.contentlayer/generated/index";
import { generatePostsTree, TNode } from "../../utils/generate-posts-tree";
import { titleToSlug } from "../../utils/title-to-slug";
import { Locale } from "../../typings";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    ...generatePaths<PostMeta>(allPosts, Locale.EN),
    ...generatePaths<PostMeta>(allPosts, Locale.ZH),
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  {
    doc: Post;
    tree: Array<TNode>;
    crumbs: Array<{ title: string; route: string }>;
  },
  { slug?: string[] }
> = async (context) => {
  const [params, locale] = [context.params, context.locale];

  const pageRoute = params?.slug?.join("/") ?? "";

  const map: { [key: string]: number } = {};
  const localeDocs = allPosts
    .sort((a) => (a.locale === locale ? -1 : 1))
    .filter((d) => (map[d.route] ? 0 : (map[d.route] = 1)));

  const doc = localeDocs.find((d) => d.route === pageRoute)!;

  const crumb = {
    title: "",
    route: "",
  };

  const crumbs = [
    {
      route: "/posts",
      title: configs.postPageTitle,
    },
    ...doc.meta.map(({ slug }: PostMeta) => {
      crumb.route += crumb.route === "" ? slug : "/" + slug;
      const title = localeDocs.find((d) => d.route === crumb.route)?.title;
      // Path1 = crumb.route;
      return { route: "/posts/" + crumb.route, title };
    }),
  ];

  const tree = generatePostsTree(localeDocs);

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
    To,
  };

  const handleScroll = () => {
    let cur = 0;

    doc.headings.map((h: PostHeading, i: number) => {
      const slug = titleToSlug(h.title);
      const el = document.getElementById(slug);
      if (el && el.getBoundingClientRect().top < 130) cur = i;
    });

    setActive(cur);
  };

  return (
    <div className="flex flex-col">
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
      <div className={cn(" h-full grow flex flex-row w-screen ")}>
        {/* 笔记页面列表 */}
        <div style={{ position: "sticky", top: "0" }}>
          <PostSidebar tree={tree} />
        </div>
        {/* 文章容器 */}
        <article
          onScrollCapture={handleScroll}
          className={cn("markdown grow flex flex-col  w-min")}
        >
          <header className={cn("px-10 pt-4")}>
            {/* <Breadcrumbs crumbs={crumbs} /> */}
            <HeadSidebar tree={tree} />
          </header>
          {/* 不显示面包屑时的占位 */}
          <div
            style={{
              height: "20px",
            }}
          ></div>
          <main
            className={cn("relative h-max grow px-10 pb-10 max-w-none w-full ")}
          >
            <h1 className={cn("leading-snug  text-4xl font-semibold")}>
              {doc.title}
            </h1>
            <div className="mt-3 mb-3 bottom-1  flex-wrap w-full h-min flex justify-between bg-accent bg-opacity-25 rounded-lg">
              <div className="p-2 ml-2 font-mono font-semibold italic ">
                {configs.postTimeText}
                {moment(doc.date).format("YYYY-MM-DD")}
              </div>
            </div>
            <MDXContent components={MDXComponents} />
          </main>
        </article>
        <div
          className="w-64 sticky  hidden xl:flex"
          style={{ display: configs.ifPostRightBar ? "" : "none" }}
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
