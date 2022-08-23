// 全局API接口
const configs = {
  // 网站名称
  title: "Daymd.",
  // hero模式,0：不显示；1：背景图模式；2：宇宙模式;
  heroMode: 0,
  // 宇宙模式设置，限heroMode：2
  heroModeConfig: {
    // 星星数量，number，要求：<1000
    starsCount: 250,
    // 星星颜色,string
    starsColor: "#ffffff",
    // 星星旋转速度,number
    starsRotationSpeed: 3,
    // 彗星出现的频度，number，若值设置为0，隐藏彗星
    cometFrequence: 2,
    // 星云强度，number，即两侧颜色深度
    nebulasIntensity: 0,
    // 太阳系数量，number，若设置为0，隐藏
    sunScale: 1,
    // 行星数量，number，若设置为0，隐藏
    planetsScale: 1,
    // 太阳系轨道，number，要求<100
    solarSystemOrbite: 65,
    // 轨道速度，number
    solarSystemSpeedOrbit: 100,
  },
  // 大文字,限heroMode：1|2
  heroText: "Do it all with API.",
  // 大文字下的说明文字,限heroMode：1
  heroContent:
    "A blog site builder built with Next.js, Tailwind, DaisyUI, Contentlayer. Almost everything can be configured via the API interface. Get started quickly with zero basics.",
  // 标签图标
  favicon:
    "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daymd_logo1.svg",
  // 导航栏logo是否显示,0为不显示，1为显示
  isNavLogo: 1,
  // 导航栏logo图片链接
  navLogo:
    "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daymd_logo1.svg",
  // Hero的背景图片,限heroMode：1,使用 https://api.maho.cc/random-img/pc.php 接口可以每刷新一次得到不同的二次元背景，详见文档
  heroBg:
    "url(https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/BK@1.5x.png)",
  // Hero 按钮上的文字,限heroMode：1
  heroButton: "Get Start",
  // Hero 按钮跳转的 Link 链接,限heroMode：1
  heroButtonLink: "/posts/change-me",
  // Hero 按钮是否存在,1为存在，0为不存在,限heroMode：1
  isHeroButton: 1,
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
      name: "Github",
      icon: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/githubLogo.svg",
      to: "https://github.com/inannan423",
    },
    //... 可以继续添加
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
    // ...可以继续添加，请参考文档中的所有主题列表
  ],
  // 页脚链接
  FooterItems: [
    // 每一列
    {
      label: "Blog",
      // 列中的每一行
      items: [
        {
          key: 0,
          // 链接名称
          name: "Hello",
          // 链接地址
          to: "/posts/change-me",
          blank: 0,
        },
        {
          key: 1,
          name: "World",
          to: "/",
          blank: 1,
        },
        {
          key: 2,
          name: "Goods",
          to: "/",
          blank: 1,
        },
        // ... 可继续添加
      ],
    },
    {
      label: "TechStack",
      items: [
        {
          key: 0,
          name: "React",
          to: "/",
          blank: 1,
        },
        {
          key: 1,
          name: "Next.js",
          to: "/",
          blank: 1,
        },
        {
          key: 2,
          name: "Contentlayer",
          to: "/",
          blank: 1,
        },
        {
          key: 3,
          name: "DaisyUI",
          to: "/",
          blank: 1,
        },
        {
          key: 4,
          name: "Tailwind",
          to: "/",
          blank: 1,
        },
      ],
    },
    {
      label: "Links",
      items: [
        {
          key: 0,
          name: "Java",
          to: "/",
          blank: 1,
        },
        {
          key: 1,
          name: "Python",
          to: "/",
          blank: 1,
        },
        {
          key: 2,
          name: "JavaScript",
          to: "/",
          blank: 1,
        },
      ],
    },
    // ... 可继续添加
  ],
  // 是否支持主题切换，0为不支持，1为支持
  showTheme: 1,
  // 页脚 Logo
  footLogo:
    "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daymd_logo1.svg",
  // Logo下的加粗文字
  footText: "Daymd by Jetzihan.",
  // 加粗文字下的文字
  footTextNormal: "Made with ❤ by Chengzihan.",
  socialIcon: [
    {
      name: "bilibili",
      icon: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/bzhan.svg",
      to: "https://bilibili.com",
    },
    {
      name: "CSDN",
      icon: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/csdn.svg",
      to: "https://csdn.com",
    },
    {
      name: "稀土掘金",
      icon: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/xitujuejin.svg",
      to: "https://juejin.cn/",
    },
  ],
};

module.exports = configs;
