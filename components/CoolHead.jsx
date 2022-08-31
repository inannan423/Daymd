import Link from "next/link";
import { useEffect } from "react";
import Parallax from "react-rellax";
import configs from "../daymd.config";
import { Feter } from "./Feter";
import { Poweredby } from "./Powerby";
const PageData = {
  headTitle: "Get it all done",
  headTitle1: "with detailed APIs",
  headTitleChinese: "您只需负责填空，剩下的全交给我",
};

function Zhanwei() {
  return <div className="w-auto h-32"></div>;
}

function Title() {
  return (
    <div className="md:w-auto h-30 overflow-hidden flex justify-center items-center">
      <span className="colorful pl-5 pr-5 text-center font-black text-7xl">
        {PageData.headTitle} <br />
        {PageData.headTitle1} <br />
        <p className="text-3xl">{PageData.headTitleChinese}</p>
      </span>
      <div className="overflow-hidden">
        <div className="circle1"></div>
        {/* <div class="csize absolute bg-blue-600 leftmax top-1 opacity-30 rounded-full blur-3xl -z-10"></div>
        <div class="csize absolute bg-purple-500 rightmax top-1 opacity-30 rounded-full blur-3xl -z-10"></div> */}
      </div>
    </div>
  );
}

function BigMax() {
  return (
    <div className="bigMax h-auto z-50 mt-28 mb-48">
      <img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/ProductWe1253.png" />
    </div>
  );
}

function Coding() {
  return (
    <div>
      <div className="w-screen mb-20  h-10 flex justify-center items-center">
        <span className="mb-20 mt-16  w-30 text-center font-black largetext">
          核心理念
        </span>
      </div>
      <div class="m-5 gap-20 mb-20  flex flex-wrap justify-center items-center overflow-hidden">
        <div class="h-max w-max  mockup-code">
          <pre data-prefix="0">
            <code>title: "Daymd.", </code>
          </pre>
          <pre data-prefix="1" class="text-warning">
            <code>heroMode: 0, </code>
          </pre>
          <pre data-prefix="2" class="text-success">
            <code>isNavLogo: 1, </code>
          </pre>
          <pre data-prefix="3" class="text-warning">
            <code>heroButton: "Get Start", </code>
          </pre>
          <pre data-prefix="4" class="text-success">
            <code>heroButtonLink: "/posts/change-me", </code>
          </pre>
          <pre data-prefix="5" class="text-warning">
            <code>favicon: "https://jetzihan-img/daymd_logo1.svg", </code>
          </pre>
        </div>
        <div class="card h-52 w-96  bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">“设置式” 构建</h2>
            <p>
              就像手机设置一样，对不同的选项进行设置，就能达到你想要的结果。
            </p>
            <div class="card-actions justify-end">
              <Link href="/docs/api">
                <button class="btn">查看 API</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StartButton() {
  return (
    <Link href={"/docs"}>
      <div className="w-screen h-10 flex justify-center items-center">
        <button className="startbtn">
          <span></span>
          <span></span>
          <span></span>
          <span></span> Get Start
        </button>
      </div>
    </Link>
  );
}

function Codebox() {
  return (
    <div>
      <div className="w-screen mb-20  h-10 flex justify-center items-center">
        <span className="mb-20 mt-16  w-30 text-center font-black largetext">
          在 <code>daymd.config.js</code> 中搞定一切
        </span>
      </div>
      <div className=" flex items-center justify-center">
        <iframe
          src="https://stackblitz.com/edit/nextjs-pwpp3i?embed=1&file=daymd.config.js&theme=dark"
          style={{
            width: "100%",
            height: "600px",
            border: "0",
            borderRadius: "8px",
            overflow: "hidden",
          }}
          className="shadow-lg w-9/12 ml-20 mr-20 mb-20 rounded-2xl"
          title="loving-snowflake-l2gcdv"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}

export function CoolHead() {
  return (
    <div>
      <Zhanwei />
      {/* <Parallax> */}
      <Title />
      {/* </Parallax> */}
      <Parallax speed={-1}>
        <BigMax />
      </Parallax>

      <Feter />
      <Coding />
      <Codebox />
      <StartButton />
      <div className="w-screen h-84 p-5 justify-center items-center">
        <Poweredby />
      </div>
    </div>
  );
}
