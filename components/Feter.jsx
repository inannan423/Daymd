import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import configs from "../daymd.config";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "零基础上手",
    file: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/banner1.png",
  },
  {
    title: "高度自定义",
    file: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/banner2.png",
  },
  {
    title: "迅速部署上线",
    file: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/banner3.png",
  },
];

function Feature({ file, title, description }) {
  return (
    <div className="flex flex-col hover:opacity-70 transition duration-500 ease-in-out">
      <div className="text--center">
        <img src={file} alt="banner" />
      </div>
      <div className="text-center">
        <h3 className="text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function Feter() {
  return (
    <div>
      <div className="w-screen h-10 flex justify-center items-center">
        <span className="mb-20 w-30 text-center font-black text-5xl">
          Daymd's Feature
        </span>
      </div>
      <div className="w-screen mb-10  h-30 flex space-x-4 justify-center items-center">
        <div className="flex gap-x55 ">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
