import { RightAuthor } from "./RightAuthor";
import { Tree } from "./DocComponents/Tree";
import { PostSidebar } from "./DocComponents/PostSidebar";
import { generatePaths } from "../utils/generate-paths";
import { PostHeading, PostMeta } from "../src/contentlayer/types/post";
import { allPosts, Post } from "../.contentlayer/generated/index";
import { generatePostsTree, TNode } from "../utils/generate-posts-tree";
import { titleToSlug } from "../utils/title-to-slug";
import Parallax from "react-rellax";
import { Locale } from "../typings";
import configs from "../daymd.config";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { PostIndexBar } from "./DocComponents/PostIndexBar";
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
      doc,
      tree,
      crumbs,
    },
  };
};

function BlogBack() {
  return (
    <div
      className="z-10 bg-opacity-40 w-screen h-96 flex justify-center items-center"
      style={{
        backgroundImage: configs.theme2Setting.topImg,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Parallax data-rellax-speed="7">
        <div className="text-5xl font-bold text-current text-base-100">
          {configs.heroText}
        </div>
      </Parallax>{" "}
    </div>
  );
}
export default function BlogListItem({
  doc,
  tree,
  crumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="my-2">
      <div
        style={{ backgroundImage: "url(https://placeimg.com/400/225/arch)" }}
        className="bg-no-repeat bg-cover card h-42 w-full bg-base-100 shadow-xl image-full"
      >
        <div className="card-body">
          <h2 className="card-title">{doc.title}</h2>
          <p>{doc.excerpt}</p>
        </div>
      </div>
    </div>
  );
}

export const BlogListIndex: React.FC<{ tree: TNode[] }> = ({ tree }) => (
  <div className="flex flex-col">
    <BlogBack />
    <div className="mx-10 w-screen px-20 my-5 grid gap-4 grid-cols-6 grid-flow-col auto-cols-3">
      <div className="col-span-4">
        <PostIndexBar tree={tree} />
      </div>
      <div className="sticky">
        <RightAuthor />
      </div>
    </div>
  </div>
);
