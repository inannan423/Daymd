// 全局API接口
const configs = {
  // 网站名称
  title: "北依树洞",
  // hero模式,0：不显示；1：背景图模式；2：宇宙模式;3:博客模式;
  heroMode: 1,
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
  heroText: "心灵的些许输出",
  // 大文字下的说明文字,限heroMode：1
  heroContent: "by HanaHoshikawa",
  // 标签图标
  favicon:
    "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daymd_logo1.svg",
  // NavBar 的样式，参数值 1、2
  navTheme: 2,
  // 导航栏logo是否显示,0为不显示，1为显示
  isNavLogo: 0,
  // 博客创建时间，string，格式：YYYY-MM-DD
  buildTime: "2022-10-22",
  // 导航栏logo图片链接
  navLogo:
    "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/daymd_logo1.svg",
  // 导航栏透明度，bg-opacity-请不要修改，后面的数字越大越不透明，值为每10增加，范围0~100
  // 例如56、45等非整十的值无效
  // bg-opacity-xx后面可以添加其他 Tailwind 样式类
  navOpacity: "bg-opacity-10",
  // Hero的背景图片,限heroMode：1,使用 https://api.maho.cc/random-img/pc.php 接口可以每刷新一次得到不同的二次元背景，详见文档
  heroBg: "url(https://api.maho.cc/random-img/pc.php)",
  // Hero 按钮上的文字,限heroMode：1
  heroButton: "Welcome",
  // Hero 按钮跳转的 Link 链接,限heroMode：1
  heroButtonLink: "/posts/change-me",
  // 主页设置，限heroMode：3
  theme2Setting: {
    // 右边栏作者头像
    avatar:
      "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220710133634.png",
    // 背景图大小，1为顶部小图，2为整页图,3为混合模式
    backSize: 2,
    // 背景图链接，url不可省略
    topImg: "url(https://api.maho.cc/random-img/pc.php)",
    // 右边作者栏作者名称
    authorName: "Jetzihan",
    // 下面的按钮是否使用中文
    zhan: 1,
    // 技术栈
    techLinks: [
      {
        tech: "Vue",
        styles: "bg-green-200 text-green-900",
      },
      {
        tech: "React",
        styles: "bg-blue-200 text-blue-900",
      },
      {
        tech: "Python",
        styles: "bg-yellow-200 text-yellow-900",
      },
    ],
    // 个人格言
    Words: "风筝有风，海豚有海。",
    socialIcons: [
      {
        name: "GitHub",
        svgPath:
          "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/icon-github-1.svg",
        link: "https://github.com/inannan423",
      },
      {
        name: "掘金",
        svgPath:
          "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/icon-juejin-1.svg",
        link: "https://juejin.cn",
      },
      {
        name: "CSDN",
        svgPath:
          "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/icon-csdn-1.svg",
        link: "www.csdn.com",
      },
      {
        name: "bilibili",
        svgPath:
          "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/icon-bilibili-1.svg",
        link: "https://bilibili.com",
      },
      {
        name: "gitee",
        svgPath:
          "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/icon-gitee-1.svg",
        link: "www.gitee.com",
      },
      {
        name: "weibo",
        svgPath:
          "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/icon-wb-1.svg",
        link: "www.weibo.com",
      },
      {
        name: "Zhihu",
        svgPath:
          "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/icon-zh-1.svg",
        link: "www.weibo.com",
      },
      {
        name: "抖音",
        svgPath:
          "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/icon-dy-1.svg",
        link: "www.weibo.com",
      },
    ],
  },
  isHeroButton: 1,
  // 导航栏的选项
  navItems: [
    {
      name: "Docs",
      to: "/docs",
    },
    {
      name: "Blog",
      to: "/posts",
    },
    {
      name: "Nav",
      to: "/website",
    },
    // ...可以继续添加
  ],
  // 导航栏上面的图标，建议使用 svg 格式，外链
  // Todo
  navIcons: [
    {
      name: "Bilibili",
      icon: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/icon-bilibili-1.svg",
      to: "https://space.bilibili.com/287749826?spm_id_from=333.1007.0.0",
    },
    //... 可以继续添加
  ],
  // 选用的主题
  themeSelect: [
    {
      theme: "winter",
    },
    {
      theme: "forest",
    },
    {
      theme: "dark",
    },

    {
      theme: "night",
    },
    {
      theme: "cupcake",
    },
    {
      theme: "lofi",
    },
    // ...可以继续添加，请参考文档中的所有主题列表
  ],
  // 是否需要大页脚，1：需要，0：不需要
  ifFootItems: 1,
  // 大页脚不存在时，底部小页脚中是否需要切换Theme按钮，建议全页只保留一个主题切换按钮
  ifFootTheme: 0,
  // 页脚链接，ifFootItems: 1 才生效
  FooterItems: [
    // 每一列
    {
      label: "本站",
      // 列中的每一行
      items: [
        {
          key: 0,
          // 链接名称
          name: "文档",
          // 链接地址
          to: "/docs",
          blank: 0,
        },
        {
          key: 1,
          name: "博客",
          to: "/posts",
          blank: 0,
        },
        {
          key: 1,
          name: "快速链接",
          to: "/website",
          blank: 0,
        },
        // ... 可继续添加
      ],
    },
    {
      label: "技术支持",
      items: [
        {
          key: 0,
          name: "React",
          to: "https://react.docschina.org/",
          blank: 1,
        },
        {
          key: 1,
          name: "Next.js",
          to: "https://nextjs.org/",
          blank: 1,
        },
        {
          key: 2,
          name: "Contentlayer",
          to: "https://www.contentlayer.dev/",
          blank: 1,
        },
        {
          key: 3,
          name: "DaisyUI",
          to: "https://daisyui.com/",
          blank: 1,
        },
        {
          key: 4,
          name: "Tailwind",
          to: "https://tailwindcss.com/",
          blank: 1,
        },
      ],
    },
    {
      label: "链接",
      items: [
        {
          key: 0,
          name: "Jetzihan",
          to: "https://jetzihan.netlify.app",
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
  footTextNormal: "Made by HanaHoshikawa.",
  socialIcon: [
    {
      name: "bilibili",
      icon: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/bzhan.svg",
      to: "https://space.bilibili.com/287749826?spm_id_from=333.1007.0.0",
    },
  ],
  // 是否启用回到顶部按钮:1是，0否
  ifBackTop: 1,
  // 回到顶部按钮内的文字，您可以换成”Top“或者”🌵“甚至”❤“等字符
  backTopText: "↑",
  // 笔记页面设置 ************************************
  // 笔记页面标题,建议为tutorial、notes等
  notePageTitle: "介绍",
  // 笔记、博客右侧边粗体标题文字
  rightContentText: "Topics",
  // 是否显示面包屑,1：显示。0：不显示。
  ifBread: 1,
  // 是否显示右边主题栏,1：显示。0：不显示。
  ifRightBar: 1,
  // 在博客页面是否显示右边主题栏,1：显示。0：不显示。
  ifPostRightBar: 1,
  // 特殊卡片的标题文字，支持中英文和emoji
  cardsInDoc: {
    // "注意"卡片的固定文字显示，示例：”注意“、”Warning！“、”⚠“、”警告“
    Warning: "注意",
    Tip: "提示",
    Danger: "危险",
    Note: "笔记",
    Example: "举例",
  },
  // doc和post的背景图片，默认为空，即不显示
  // docPostBgImg: "url(https://api.maho.cc/random-img/pc.php)",
  docPostBgImg: "url(https://api.maho.cc/random-img/pc.php)",
  // 博客页面的标题
  postPageTitle: "我的博客",
  // Markdown中代码块主题样式
  /**
   * 可用主题：
   * 'monokai'
   * 'monokai'
   * 'nord'
   * 'one-dark-pro'
   * 'poimandres'
   * 'rose-pine-dawn'
   * 'rose-pine-moon'
   * 'rose-pine'
   * 'slack-dark'
   * 'slack-ochin'
   * 'solarized-dark'
   * 详见daymd文档
   */
  mdCodeTheme: "one-dark-pro",
  // Doc页面时间显示前面的文字
  timeText: "Last Updated:",
  // post页面时间显示前面的文字
  postTimeText: "Date:",
  // 文章底部是否显示附属链接,0为不显示
  ifDocLink: 1,
  // 文章底部的附属链接文字
  docLinkText: "文档地址",
  // 文章底部附属链接地址，你可以填写你的Github仓库，也可以为你的公众号引流
  docLinkUrl: "https://github.com/inannan423/Daymd/tree/main/content/docs",
  // 个人导航集合标题
  navTitle: "导航分类",
  // 是否显示 Banner 图片,1显示，0不显示
  ifNavBanner: 1,
  // 导航 Banner 图片链接
  navBanner:
    "url(https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/NavBanner.png)",
};

module.exports = configs;
