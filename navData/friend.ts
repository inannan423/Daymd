// import { shuffle } from '../utils/jsUtils'

export type Friend = {
  title: string
  description?: string
  website: string
  avatar?: any
}

export const Friends: Friend[] = [
  {
    title: '北林计协',
    description: '北京林业大学计算机与网络协会',
    website: 'https://bljx2022project.github.io/bljx_blog/',
    avatar: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/bljx.png',
  },
]

export function sortFriend() {
  let result = Friends

  // shuffle(result)
  return result
}
