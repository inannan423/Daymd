// 格式化标题，使其符合 Url 标准
export const titleToSlug = (str: string) => {
  // let randomUrl=Math.random().toString(36).slice(-4);// 生成随机字符，避免重复slug
  let url = encodeURI(str);
  url.toLowerCase();
  return url.toLowerCase();
}