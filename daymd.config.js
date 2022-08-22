// 全局API接口
const configs = {
  // 网站名称
  title: "Daymd.",
  // 大文字
  heroText: "Do it all with API.",
  // 大文字下的说明文字
  heroContent:
    "A blog site builder built with React.js, Tailwind, DaisyUI, Contentlayer. Almost everything can be configured via the API interface. Get started quickly with zero basics.",
  // 标签图标
  favicon:
    "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daymd_logo.svg",
  // Hero的背景图片,使用 https://api.maho.cc/random-img/pc.php 接口可以每刷新一次得到不同的二次元背景，详见文档
  heroBg: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/BK@1.5x.png",
  // 导航栏的选项
  navItems: [
    {
      name: "About",
      to: "",
    },
    {
      name: "Theme",
      to: "",
    },
    // ...可以继续添加
  ],
  // 导航栏上面的图标，建议使用 svg 格式，外链
  // Todo
  navIcons: [
    {
      icon: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/githubLogo.svg",
      to: "",
    },
  ],
  // 选用的主题
  themeSelect: [
    {
      theme: "forest",
    },
    {
      theme: "dark",
    },
    {
      theme: "light",
    },
    {
      theme: "night",
    },
    // ...可以继续添加
  ],
};

module.exports = configs;
