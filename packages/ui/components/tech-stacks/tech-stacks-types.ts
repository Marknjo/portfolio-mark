export enum StackCategory {
  PROGRAMMING_LANGS = 'programming langs',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  TOOLS = 'tools',
  MOBILE = 'mobile apps',
  DESKTOP = 'desktop apps',
}

export interface IStack {
  name: string
  homePage: string
  icon: string
  category: StackCategory
  isHidden: boolean // allows to a skill to be hidden from displaying on the UI
  active?: boolean // a config to show if I am still using the skill/I have used the skill in the past but not actively using it
  theme?: StackThemes // allows customization of card colors: font color, border color and background color
}

export enum StackThemes {
  DEFAULT = 'default',
  DEFAULT_TEAL = 'default_teal',
  DEFAULT_ORANGE = 'default_orange',
  PASSIVE = 'passive',
}

export enum StackingWrapperMode {
  H = 'h',
  V = 'v',
}

export enum TitleStyles {
  SM = 'sm',
  NORMAL = 'normal',
  SM_BADGE = 'sm-with-badge',
  NORMAL_BADGE = 'normal-with-badge',
}

export enum AlignPosition {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}
