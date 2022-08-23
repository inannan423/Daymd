import Link from "next/link";
import { useEffect } from "react";
import configs from "../daymd.config";
import { Feter } from "./Feter";
const PageData = {
  headTitle: "Get it all done",
  headTitle1: "with detailed APIs",
  headTitleChinese: "您只需要负责填空，请把剩下的全部交给我",
};

function Zhanwei() {
  return <div className="w-screen h-52"></div>;
}

function Title() {
  return (
    <div className="w-screen h-10 flex justify-center items-center">
      <span className="w-30 colorful  text-center font-black text-7xl">
        {PageData.headTitle} <br />
        {PageData.headTitle1} <br />
        <p className="text-3xl">{PageData.headTitleChinese}</p>
      </span>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

function BigMax() {
  return (
    <div className="bigMax mt-36">
      <img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/ProductWe1253.png" />
    </div>
  );
}

function StartButton() {
  return (
    <div className="w-screen h-10 flex justify-center items-center">
      <button className="startbtn">
        <span></span>
        <span></span>
        <span></span>
        <span></span> Get Start
      </button>
    </div>
  );
}

export function CoolHead() {
  return (
    <div>
      <Zhanwei />
      <Title />
      <BigMax />
      <Feter />
      <StartButton />
    </div>
  );
}
