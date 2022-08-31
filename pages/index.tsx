// import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
// import { allPosts, Post } from "contentlayer/generated";
import { Hero } from "../components/Hero";
import { CoolHead } from "../components/CoolHead";
import Parallax from "react-rellax";
import { NavBar } from "../components/NavBar";
import { BlogListIndex } from "../components/BlogListIndex";
import React from "react";
// import { NavBar } from "../../components/NavBar";
import { useState } from "react";
import cn from "classnames";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMDXComponent } from "next-contentlayer/hooks";
// import { WarningBox } from "../../components/DocComponents"
import moment from "moment";
import Link from "next/link";
import configs from "../daymd.config";
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
} from "../components/DocComponents";
import { generatePaths } from "../utils/generate-paths";
import { PostHeading, PostMeta } from "../src/contentlayer/types/post";
import { allPosts, Post } from "../.contentlayer/generated/index";
import { generatePostsTree, TNode } from "../utils/generate-posts-tree";
import { titleToSlug } from "../utils/title-to-slug";
import { Locale } from "../typings";
let Path1 = "";
// export const getStaticPaths: GetStaticPaths = async () => ({
//   paths: [
//     ...generatePaths<PostMeta>(allPosts, Locale.EN),
//     ...generatePaths<PostMeta>(allPosts, Locale.ZH),
//   ],
//   fallback: false,
// });

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
  console.log("🎉Built with daymd:https://daymd.netlify.app");
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "docs"])),
      doc,
      tree,
      crumbs,
    },
  };
};

export default function DocsPage({ doc, tree, crumbs }) {
  return (
    <div className="md:box-content mx-auto">
      <div className="fixed z-50">
        <NavBar />
      </div>

      <Hero />
      <div style={{ display: configs.heroMode === 3 ? "" : "none" }}>
        <BlogListIndex tree={tree} />
      </div>
      {/* <CoolHead /> */}
    </div>
  );
}
