import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Hero } from "../components/Hero";
import { CoolHead } from "../components/CoolHead";
import Parallax from "react-rellax";
import { NavBar } from "../components/NavBar";
// import {FloatingActionButton} from 'material-ui';
// import {Back2Top} from 'react-back2top';

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

// function PostCard(post: Post) {
//   return (
//     <div className="mb-8 w-3/4 mockup-code bg-primary">
//       <div className="p-5">
//         <h2 className="text-xl">
//           <Link href={post.url}>
//             <a className="	hover:text-base-content text-primary-content transition duration-500 ease-in-out">
//               {post.title}
//             </a>
//           </Link>
//         </h2>
//         <time
//           dateTime={post.date}
//           className="text-secondary-content block text-xs  mb-2"
//         >
//           {format(parseISO(post.date), "LLLL d, yyyy")}
//         </time>
//         <div
//           className="text-secondary-content italic text-sm Text-Limit"
//           dangerouslySetInnerHTML={{ __html: post.description }}
//         ></div>
//       </div>
//     </div>
//   );
// }

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="md:box-content mx-auto">
      <div className="fixed z-50">
        <NavBar />
      </div>

      <Hero />
      <CoolHead />
      {/* <div className="flex flex-col items-center mt-20">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div> */}
    </div>
  );
}
