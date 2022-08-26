import Link from "next/link";
import configs from "../daymd.config";
import { ReactNebula } from "@flodlc/nebula";
function StarHero() {
  return (
    <div class="w-screen h-screen">
      <ReactNebula />

      <ReactNebula
        config={{
          // 星星数量，number，要求：<1000
          starsCount: configs.heroModeConfig.starsCount,
          // 星星颜色,string
          starsColor: configs.heroModeConfig.starsColor,
          // 星星旋转速度,number
          starsRotationSpeed: configs.heroModeConfig.starsRotationSpeed,
          // 彗星出现的频度，number，若值设置为0，隐藏彗星
          cometFrequence: configs.heroModeConfig.cometFrequence,
          // 星云强度，number，即两侧颜色深度
          nebulasIntensity: configs.heroModeConfig.nebulasIntensity,
          // 太阳系数量，number，若设置为0，隐藏
          sunScale: configs.heroModeConfig.sunScale,
          // 行星数量，number，若设置为0，隐藏
          planetsScale: configs.heroModeConfig.planetsScale,
          // 太阳系轨道，number，要求<100
          solarSystemOrbite: configs.heroModeConfig.solarSystemOrbite,
          // 轨道速度，number
          solarSystemSpeedOrbit: configs.heroModeConfig.solarSystemSpeedOrbit,
        }}
      />
      <div class="text-neutral-content w-screen h-screen z-10 flex justify-center items-center font-black">
        <span class="flex justify-center antialiased  text-7xl text-indigo-500 z-10 object-center">
          {configs.heroText}
        </span>
      </div>
    </div>
  );
}
function Heros() {
  return (
    <div
      class="hero  min-h-screen"
      style={{
        background: configs.heroBg,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="left-0 z-0 hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">{configs.heroText}</h1>
          <p class="z-0 mb-5">{configs.heroContent}</p>
          <Link href={configs.heroButtonLink}>
            <button
              style={{
                display: configs.isHeroButton ? "" : "none",
              }}
              class="btn btn-primary"
            >
              {configs.heroButton}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  if (configs.heroMode === 0) {
    // 不显示背景
    return (
      <div style={{ display: "none" }}>
        <Heros />
      </div>
    );
  } else if (configs.heroMode === 1) {
    // 图片背景
    return <Heros />;
  } else if (configs.heroMode === 2) {
    // 宇宙背景
    return <StarHero />;
  }
}
