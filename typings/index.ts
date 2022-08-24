export enum Themed {
  light = 'LIGHT',
  dark = 'DARK',
}

export enum Locale {
  EN = 'en',
  ZH = 'zh',
}

export type Reducers<S, A, Types extends number | string | symbol> = {
  [P in Types]: (draft: S, action: Extract<A, { type: P }>) => void
}
