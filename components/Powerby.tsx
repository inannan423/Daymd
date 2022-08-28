import type React from "react";
import cn from "classnames";

export const Poweredby: React.FC = () => (
  <div
    className={cn(
      "xl:flex hidden w-screen flex-col flex-wrap mb-4 mt-10 justify-center items-center"
    )}
  >
    <p className={cn("mr-6 mt-5 text-xs text-center leading-relaxed")}>
      Powered by
    </p>
    <div className={cn("flex items-center flex-wrap")}>
      <a href="https://nextjs.org" className={cn("", "sm:w-64", "mx-2")}>
        <img
          src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/tailwindcss.svg"
          alt=""
        />
      </a>
      <a href="https://nextjs.org" className={cn("", "sm:w-64", "mx-2")}>
        <img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daisyui.svg" />
      </a>
      <a
        href="https://tailwindcss.com"
        className={cn("text-center", "sm:w-64")}
      >
        <img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/nexticon.svg" />
      </a>
      <a href="https://contentlayer.dev" className={cn("sm:w-64", "mx-2")}>
        <img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/twindff.svg" />
      </a>
    </div>

    <a
      href="https://vercel.com"
      className={cn("row-span-3 h-12 mt-1 flex items-center justify-center")}
    >
      <img
        className="h-16"
        src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/dployvercel.svg"
      />
    </a>
  </div>
);
