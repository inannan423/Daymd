import Link from "next/link";
import configs from "../daymd.config";
function Heros() {
  return (
    <div
      class="hero mt-2 min-h-screen"
      style={{
        background:
          "url(https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/BK@1.5x.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="left-0 z-0 hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">{configs.heroText}</h1>
          <p class="z-0 mb-5">{configs.heroContent}</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return <Heros />;
}
