// import { shuffle } from '../utils/jsUtils'

export type Friend = {
  title: string;
  description?: string;
  website: string;
  avatar?: any;
};

export const Friends: Friend[] = [
  {
    title: "Jetzihan",
    description: "Daymd 作者的个人网站",
    website: "https://jetzihan.netlify.app/",
    avatar: "https://avatars.githubusercontent.com/u/83146544?v=4",
  },
];

export function sortFriend() {
  let result = Friends;
  return result;
}
