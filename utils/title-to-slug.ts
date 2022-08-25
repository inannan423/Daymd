export const titleToSlug = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
    .charCodeAt(0)  