import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Hero } from "../components/Hero";
import { CoolHead } from "../components/CoolHead";
import Parallax from "react-rellax";
import { NavBar } from "../components/NavBar";
import { BlogListIndex } from "../components/BlogListIndex";
export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="md:box-content mx-auto">
      <div className="fixed z-50">
        <NavBar />
      </div>

      <Hero />
      <BlogListIndex />
      {/* <CoolHead /> */}
    </div>
  );
}
