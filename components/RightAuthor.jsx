import Link from "next/link";
import configs from "../daymd.config";
import { ReactNebula } from "@flodlc/nebula";

function RightComp() {
  return (
    <div className="xl:block hidden cardf  justify-center  my-2 shadow-xl w-64 rounded-lg h-min border-2 border-primary">
      <figure class="flex justify-center pt-10  ">
        <div class="avatar items-center">
          <div class="item-center w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={configs.theme2Setting.avatar} />
          </div>
        </div>
      </figure>
      <div class="card-body pt-3 items-center text-center">
        <h2 class="card-title">{configs.theme2Setting.authorName}</h2>
        <div class="btn-group">
          <Link href="/docs">
            <button class="btn btn-outline btn-primary btn-sm w-14 ">
              {configs.theme2Setting.zhan ? "文档" : "Docs"}
            </button>
          </Link>
          <Link href="/posts">
            <button class="btn btn-outline btn-primary btn-sm w-14">
              {configs.theme2Setting.zhan ? "博客" : "Blog"}
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center ">
          {configs.theme2Setting.techLinks.map((props, idx) => (
            <div key={idx} {...props} className={`my-1 badge  ${props.styles}`}>
              {props.tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="p-1 xl:flex flex-wrap hidden items-center  justify-center  my-2 shadow-xl w-64 rounded-lg h-min border-2 border-primary">
      {configs.theme2Setting.socialIcons.map((props, idx) => (
        <a
          className="px-1"
          href={props.link}
          key={idx}
          {...props}
          target={"_blank"}
        >
          <button class="btn btn-ghost btn-square">
            <img className="h-6" src={props.svgPath} alt={props.name} />
          </button>
        </a>
      ))}
    </div>
  );
}

function MyWords() {
  return (
    <div className="p-1 xl:flex flex-wrap hidden items-center  justify-center  my-2 shadow-xl w-64 rounded-lg h-min border-2 border-primary">
      <p className="text-sm p-4">{configs.theme2Setting.Words}</p>
    </div>
  );
}

export function RightAuthor() {
  return (
    <div className="sticky top-20">
      <RightComp />
      <MyWords />
      <SocialLinks />
    </div>
  );
}
