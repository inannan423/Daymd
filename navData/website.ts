import { Friends } from "./friend";
export interface Website {
  name: string;
  logo: string;
  desc?: string;
  href: string;
  tags?: string[];
}

export interface WebsiteCategory {
  name: string;
  websites: Website[];
}

const friends: Website[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  };
});

export const websiteData: WebsiteCategory[] = [
  {
    name: "友链",
    websites: friends,
  },

  {
    name: "工具",
    websites: [
      {
        name: "CodePen",
        desc: "前端创意大本营",
        logo: "https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico",
        href: "https://codepen.io/",
        tags: ["在线编码", "开发平台"],
      },
      {
        name: "Codesandbox",
        desc: "在线编码代码沙盒",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220806212946.png",
        href: "https://codesandbox.io/?from-app=1",
        tags: ["在线编码", "开发平台"],
      },
      {
        name: "stackblitz",
        desc: "针对 Web 开发者的在线 IDE",
        logo: "https://c.staticblitz.com/assets/pwa-icon-f559737e5eae9b3544e5cc1291118bf758ee20873d496f1ce2052859fb3b72d6.png",
        href: "https://stackblitz.com/",
        tags: ["在线编码", "开发平台"],
      },
    ],
  },
  {
    name: "代码托管",
    websites: [
      {
        name: "GitHub",
        desc: "全球最大的软件项目托管平台，发现优质开源项目",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/iconify-akar-icons_github-fill.png",
        href: "https://github.com/",
        tags: ["GitHub", "代码托管", "项目源码", "社区"],
      },
      {
        name: "Vercel",
        desc: "自动部署",
        logo: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        href: "https://vercel.com/",
        tags: ["代码托管"],
      },
      {
        name: "Netlify",
        desc: "自动部署、CDN加速",
        logo: "https://www.netlify.com/v3/static/favicon/apple-touch-icon.png",
        href: "https://www.netlify.com/",
        tags: ["代码托管"],
      },
    ],
  },
  {
    name: "前端",
    websites: [
      {
        name: "React",
        desc: "用于构建用户界面的 JavaScript 库",
        logo: "https://reactjs.org/favicon.ico",
        href: "https://reactjs.org",
        tags: ["前端", "React", "框架"],
      },
      {
        name: "Angular",
        desc: "前端老牌Javascript库",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/angular.png",
        href: "https://angular.cn/",
        tags: ["前端", "Angular", "框架"],
      },
      {
        name: "JSchallenger",
        desc: "在线闯关学习JavaScript",
        logo: "https://www.jschallenger.com/favicon.png",
        href: "https://www.jschallenger.com/",
        tags: ["前端", "JavaScript"],
      },

      {
        name: "Next.js",
        desc: "Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置。",
        logo: "https://nextjs.org/static/favicon/favicon.ico",
        href: "https://nextjs.org/",
        tags: ["前端", "React", "框架"],
      },
      {
        name: "Contentlayer",
        desc: "Nextjs的文档资源解析",
        logo: "https://www.contentlayer.dev/favicon/apple-touch-icon-57x57.png",
        href: "https://www.contentlayer.dev/",
        tags: ["前端", "React"],
      },

      {
        name: "Electron",
        desc: "使用 JavaScript ，HTML 和 CSS 构建跨平台的桌面应用程序",
        logo: "https://github.githubassets.com/images/icons/emoji/electron.png",
        href: "https://www.electronjs.org/",
        tags: ["跨平台", "React"],
      },
      {
        name: "Flutter",
        desc: "为所有屏幕创造精彩",
        logo: "https://flutter.cn/assets/images/cn/flutter-320px.png",
        href: "https://flutter.cn/",
        tags: ["跨平台", "React"],
      },
    ],
  },
  {
    name: "Vue.js",
    websites: [
      {
        name: "Vue.js 3.0",
        desc: "渐进式 JavaScript 框架",
        logo: "https://vuejs.org/logo.svg",
        href: "https://staging-cn.vuejs.org/",
        tags: ["前端", "Vue", "框架"],
      },
      {
        name: "Vue.js 2.0",
        desc: "渐进式 JavaScript 框架",
        logo: "https://vuejs.org/logo.svg",
        href: "https://cn.vuejs.org/v2/guide/",
        tags: ["前端", "Vue", "框架"],
      },
      {
        name: "Nuxt.js",
        desc: "使用 NuxtJS 充满信心地构建您的下一个 Vue.js 应用程序。 一个 开源 框架，让 Web 开发变得简单而强大。",
        logo: "https://nuxtjs.org/_nuxt/icons/icon_64x64.a3b4ce.png",
        href: "https://nuxtjs.org/",
        tags: ["前端", "Vue", "文档", "框架"],
      },
      {
        name: "Element",
        desc: "基于 Vue，面向设计师和开发者的组件库",
        logo: "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
        href: "https://element.eleme.cn/#/zh-CN",
        tags: ["前端", "Vue", "组件库"],
      },
      {
        name: "VbenAdmin",
        desc: "Vben是一个基于Vue3、Vite、TypeScript等最新技术栈开发的后台管理框架",
        logo: "https://vvbin.cn/doc-next/logo.png",
        href: "https://vvbin.cn/doc-next/",
        tags: ["前端", "Vue", "后台", "项目"],
      },
      {
        name: "Vite",
        desc: "下一代的前端工具链，为开发提供极速响应",
        logo: "https://www.vitejs.net/logo.svg",
        href: "https://www.vitejs.net/",
        tags: ["前端", "Vue", "框架"],
      },
      {
        name: "Vitest",
        desc: "一个 Vite 原生单元测试框架。它很快！",
        logo: "https://vitest.dev/favicon.ico",
        href: "https://cn.vitest.dev/",
        tags: ["前端", "Vue", "框架"],
      },
      {
        name: "GIN-VUE-ADMIN",
        desc: "一款基于GIN+VUE+ElementUI开发的全栈基础开发平台",
        logo: "https://www.gin-vue-admin.com/favicon.ico",
        href: "https://www.gin-vue-admin.com/",
        tags: ["前端", "Vue", "admin"],
      },
      {
        name: "View Design",
        desc: "基于 Vue.js 3 的企业级 UI 组件库和前端解决方案",
        logo: "https://file.iviewui.com/view-design-logo.png",
        href: "https://www.iviewui.com/",
        tags: ["前端", "Vue"],
      },
    ],
  },
  {
    name: "CSS",
    websites: [
      {
        name: "CSS参考-MDN",
        desc: "MDN的CSS参考手册",
        logo: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
        href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference",
        tags: ["Css", "教程"],
      },
      {
        name: "daisyUI",
        desc: "he most popular, free and open-source Tailwind CSS component library",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/juhua.png",
        href: "https://daisyui.com/",
        tags: ["Css", "教程"],
      },
      {
        name: "Tailwind",
        desc: "无需离开您的HTML，即可快速建立现代网站。",
        logo: "https://www.tailwindcss.cn/favicon-32x32.png",
        href: "https://www.tailwindcss.cn/",
        tags: ["Css", "教程"],
      },
      {
        name: "Rellax",
        desc: "纯js轻量级滚动视觉差特效插件。",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220824091151.png",
        href: "https://dixonandmoe.com/rellax/",
        tags: ["Css", "教程"],
      },
      {
        name: "神奇UI样式",
        desc: "Universe of UI elements tohelp you stand out",
        logo: "https://uiverse.io/static/media/framed.0ab7be76.svg",
        href: "https://uiverse.io/buttons",
        tags: ["Css", "教程"],
      },
      {
        name: "CSS-Inspiration",
        desc: "CSS灵感",
        logo: "https://csscoco.com/inspiration/images/logo2.png",
        href: "https://csscoco.com/inspiration/#/",
        tags: ["Css", "教程"],
      },
      {
        name: "Animate.css",
        desc: "超好用的css动效库",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/an-css.png",
        href: "https://animate.style/",
        tags: ["CSS"],
      },
      {
        name: "Bounce.js",
        desc: "可视化css代码生成器",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/sqr.png",
        href: "http://www.htmleaf.com/Demo/201502231412.html",
        tags: ["css"],
      },
      {
        name: "Ripple.wxss",
        desc: "微信小程序动效库",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/ripple.png",
        href: "https://github.com/jeasonstudio/Ripples.wxss",
        tags: ["css"],
      },
      {
        name: "w3schools css 教程",
        desc: "w3schools 从基础到高级的CSS教程",
        logo: "https://www.w3schools.com/favicon.ico",
        href: "https://www.w3schools.com/css",
        tags: ["Css", "样式"],
      },
      {
        name: "ToolBox",
        desc: "css效果可视化编辑器:玻璃、拟物",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220816084636.png",
        href: "http://santhoshsivan.com/toolbox.html",
        tags: ["css"],
      },
    ],
  },
  {
    name: "编程语言",
    websites: [
      {
        name: "Spring",
        desc: "Spring makes Java reactive",
        logo: "https://spring.io/images/icon-spring-edf462fec682b9d48cf628eaf9e19521.svg",
        href: "https://spring.io/",
        tags: ["编程"],
      },
      {
        name: "Golang",
        desc: "Golang学习文档",
        logo: "https://tour.go-zh.org/favicon.ico",
        href: "https://tour.go-zh.org/welcome/1",
        tags: ["编程"],
      },
      {
        name: "Java全栈汇总",
        desc: "Java学习文档",
        logo: "https://pdai.tech/favicon.ico",
        href: "https://pdai.tech/",
        tags: ["编程"],
      },
      {
        name: "LeetCode",
        desc: "算法刷题必备站",
        logo: "https://leetcode.cn/favicon.ico",
        href: "https://leetcode.cn/",
        tags: ["编程"],
      },
      {
        name: "Python",
        desc: "Python学习站",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/py.png",
        href: "https://python123.io/",
        tags: ["编程"],
      },
      {
        name: "MySql",
        desc: "MySql学习站",
        logo: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/mysql.png",
        href: "https://www.w3cschool.cn/mysql/",
        tags: ["编程"],
      },
      {
        name: "Dart",
        desc: "Dart 是一个为全平台构建快速应用的客户端优化的编程语言。",
        logo: "https://files.flutter-io.cn/flutter-cn/landing/ea027b4b573d9e8acfdc.svg",
        href: "https://dart.cn/",
        tags: ["编程"],
      },
      {
        name: "algorithm-visualizer",
        desc: "数据结构可视化。",
        logo: "https://algorithm-visualizer.org/favicon.png",
        href: "https://algorithm-visualizer.org/",
        tags: ["编程"],
      },
    ],
  },
  {
    name: "接口测试",
    websites: [
      {
        name: "Apifox",
        desc: "API 文档、API 调试、API Mock、API 自动化测试",
        logo: "https://cdn.apifox.cn/logo/apifox-logo-512.png",
        href: "https://www.apifox.cn/",
        tags: ["端口测试"],
      },
      {
        name: "Apipost",
        desc: "支持团队协作、可直接生成文档的API调试、管理工具",
        logo: "https://img.cdn.apipost.cn/statics/www/img/favicon.ico",
        href: "https://www.apipost.cn/",
        tags: ["端口测试"],
      },
    ],
  },
];
