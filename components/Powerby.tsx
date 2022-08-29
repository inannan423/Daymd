import type React from "react";
import cn from "classnames";

export const Poweredby: React.FC = () => (
  <div
    className={cn(
      "flex  flex-col flex-wrap mb-4 mt-10 justify-center items-center"
    )}
  >
    <p className={cn("mr-6 mt-5 text-xs text-center leading-relaxed")}>
      Powered by
    </p>
    <div className={cn("flex items-center flex-wrap")}>
      <a
        href="https://www.contentlayer.dev/"
        className={cn(
          "",
          "sm:w-64",
          "mx-2",
          "h-20",
          "transition",
          "duration-1000",
          "ease-in-out",
          "hover:opacity-60"
        )}
        target={"_blank"}
      >
        <img
          className="h-12 sm:h-20"
          src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/tailwindcss.svg"
          alt=""
        />
      </a>
      <a
        href="https://daisyui.com/"
        className={cn(
          "",
          "sm:w-64",
          "mx-2",
          "h-20",
          "transition",
          "duration-1000",
          "ease-in-out",
          "hover:opacity-60"
        )}
        target={"_blank"}
      >
        <img
          className="h-12 sm:h-20"
          src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daisyui.svg"
        />
      </a>
      <a
        href="https://nextjs.org/"
        className={cn(
          "text-center",
          "sm:w-64",
          "h-20",
          "transition",
          "duration-1000",
          "ease-in-out",
          "hover:opacity-60"
        )}
        target={"_blank"}
      >
        <img
          className="h-12 sm:h-20"
          src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/nexticon.svg"
        />
      </a>
      <a
        href="https://tailwindcss.com/"
        className={cn(
          "sm:w-64",
          "mx-2",
          "h-20",
          "transition",
          "duration-1000",
          "ease-in-out",
          "hover:opacity-60"
        )}
        target={"_blank"}
      >
        <img
          className="h-12 sm:h-20"
          src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/twindff.svg"
        />
      </a>
    </div>

    <a
      href="https://netlify.app"
      className={cn(
        "row-span-3 h-24 mt-3 flex items-center justify-center transition duration-1000 ease-in-out hover:opacity-60"
      )}
      target={"_blank"}
    >
      <img
        className="h-16 sm:h-24"
        src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/netlifyicon.svg"
      />
    </a>
  </div>
);
