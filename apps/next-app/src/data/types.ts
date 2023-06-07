// Profile Page Data

/// Enums Data
export enum EStackFullNames {
  ELECTRON = 'Electron',
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  PYTHON = 'Python',
  CSHARP = 'C# (csharp)',
  RUST = 'Rust',
  GO = 'Golang (Go)',
  PHP = 'PHP',
  HTML = 'HTML',
  CSS = 'CSS',
  REACT = 'ReactJs',
  VUE = 'VueJs',
  SOLID_JS = 'SolidJs',
  TAILWIND = 'TailwindCSS',
  CHAKRA = 'Chakra UI',
  FIGMA = 'Figma',
  NODE_JS = 'NodeJs',
  EXPRESS = 'ExpressJs',
  NEST_JS = 'NestJs',
  NEXT_JS = 'NextJs',
  REMIX = 'Remix',
  ASTRO = 'Astro',
  NUXT = 'Nuxt',
  GRAPHQL = 'GraphQL',
  APOLLO = 'ApolloGQL',
  MONGODB = 'MongoDB',
  POSTGRES = 'PostgreSQL',
  DOCKER = 'Docker',
  VITE = 'Vite',
  DOCKER_SWARM = 'Docker Swarm',
  VITEST = 'Vitest',
  KUBERNETES = 'Kubernetes',
  GIT = 'Git/Github',
  MVC = 'MVC',
  REST = 'REST API',
  CI_CD = 'Github Actions (CI/CD)',
}

export enum EStackShortNames {
  ELECTRON = 'Electron',
  JAVASCRIPT = 'JS',
  TYPESCRIPT = 'TS',
  PYTHON = 'Python',
  CSHARP = 'C#',
  RUST = 'Rust',
  GO = 'Go',
  PHP = 'PHP',
  HTML = 'HTML',
  CSS = 'CSS',
  REACT = 'React',
  VUE = 'Vue',
  SOLID_JS = 'Solid',
  TAILWIND = 'Tailwind',
  CHAKRA = 'Chakra',
  FIGMA = 'Figma',
  NODE_JS = 'Node',
  EXPRESS = 'Express',
  NEST_JS = 'Nest',
  NEXT_JS = 'Next',
  REMIX = 'Remix',
  ASTRO = 'Astro',
  NUXT = 'Nuxt',
  GRAPHQL = 'GraphQL',
  APOLLO = 'Apollo',
  MONGODB = 'Mongo',
  POSTGRES = 'Postgres',
  DOCKER = 'Docker',
  VITE = 'Vite',
  DOCKER_SWARM = 'Swarm',
  VITEST = 'Vitest',
  KUBERNETES = 'Kub',
  GIT = 'Git',
  MVC = 'MVC',
  REST = 'REST',
  CI_CD = 'CI/CD',
}

export enum EStackCategories {
  PROGRAMMING_LANGS = 'programming langs',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  TOOLS = 'tools',
  MOBILE = 'mobile apps',
  DESKTOP = 'desktop apps',
}

export enum EStackThemes {
  DEFAULT = 'default',
  DEFAULT_TEAL = 'default_teal',
  DEFAULT_ORANGE = 'default_orange',
  PASSIVE = 'passive',
}

export enum ESiteNavNames {
  TOP_NAV = 'main-top-nav',
  FOOTER_NAV = 'main-footer-nave',
  PROJECT_DETAILS_NAV = 'project-details-page-nav',
}

export enum EDetailsPageImageThemes {
  OSX = 'OSX',
}

export enum EProjectCategories {
  OUTDOOR = 'Outdoor Activities',
  PERSONAL_FINANCE = 'personal finance',
  E_COMMERCE = 'E-commerce',
  PRODUCTIVITY = 'productivity',
  FITNESS = 'Health & Fitness',
  OTHERS = 'others',
}

export enum EWorkAvailability {
  AVAILABLE = 'Open For Work',
  UN_AVAILABLE = 'currently not available',
  AVAILABLE_PART_TIME = 'part time only',
  AVAILABLE_REMOTE = 'Remote Only',
}

export enum EPagesTemplateTypes {
  HOME = 'home',
  PROJECT_DETAILS_PAGE = 'project details page',
  PROJECTS = 'projects',
  TERMS = 'terms',
  PRIVACY_POLICY = 'privacy policy',
  ABOUT = 'about',
  CONTACT = 'contact us',
  RESOURCES = 'resources',
  BLOG = 'blog',
}

export enum EHomePageSections {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  FAV = 'favProjects',
  CONTACT = 'contact',
  SKILLS = 'skills',
}

export enum EDetailPageSections {
  HERO = 'hero',
  THE_CHALLENGE = 'theChallenge',
  GALLERY = 'gallery',
  SUMMARY = 'summary',
  CTA = 'cta',
}

export enum EGeneralComponents {
  CTA = 'cta',
  NAV = 'navigation',
  FOOTER = 'footer',
  APP_SETTINGS = 'app settings',
}

export enum EAppSettingsIsProtectedContentNames {
  /// SETTINGS CONTENT
  TOOLS = 'tools',
  MEDIA = 'media',
  MAILING_SERVICES = 'mailingServices',
  GENERAL_SETTINGS = 'generalSettings',
  GOOGLE = 'google',
  PROFILE = 'profile',

  /// COMPONENTS
  CTA_CONFIG = 'ctaConfig',
  FOOTER_CONFIG = 'footerConfig',
  MAIN_NAV_CONFIG = 'mainNavConfig',
}

export enum EAppSettingsIsProtectedVariants {
  COMPONENT = 'data',
  CONTENT = 'content',
}

/// Nav
export interface INavLink {
  id: string
  title: string
  link: string
  icon?: string
  pageId?: string
  description?: string
  pageRef?: Pick<IPageNav, 'id'>
}

export interface IPageNav {
  id: string
  name: ESiteNavNames // drop down menu
  navLinksRef: Array<Pick<INavLink, 'id'>> | Array<INavLink>
  description?: string
}

/// Gallery - requires a full uploading gallery
export interface IGallery {
  id: string
  alt: string
  title: string
  fileName: string /// can be image or a pdf file
  largeImgPrefix?: string // i.e ${fileName}@2x.jpg
  overlayColor?: string // dropdown ref theme colors applies only to images
  description?: string
}

/// Setup of the stack
export interface IProjectTag {
  id: string
  tagName: string
  fullTagName: string
  colorTheme: string
}

export interface IStackThemes {
  id: string
  name: EStackThemes
  description?: string
}

export interface IStackCategory {
  id: string
  name: EStackCategories
  description?: string
}

export interface IStack {
  id: string
  name: EStackFullNames
  homePageUrl: string
  icon: string
  isHidden: boolean
  category: string | Pick<IStackCategory, 'id'> | EStackCategories // rel to stacks categories
  theme?: Pick<IStackThemes, 'id'> | EStackThemes // rel to stack themes
  isActive?: boolean

  /// Instead of storing a separate data, we store an alternate tag name
  tagName: EStackShortNames // short version of the stack name if it is longer
  tagColorTheme: string // color picker + predefined colors
  description?: string
}

/// Projects
/// textContent
/// 💡to separate list with paragraphs use <-- list --> / <-- text --> then use an algo to split the text and process the content
/// 💡for stacks, push them to the context then split them based on all stacks
/// Project details content
// export interface IProjectsCategory {
//   id: string
//   name: ECommonProjectCategories
//   description?: string
// }

export type TCardSlimGalleryData = Pick<IGallery, 'fileName' | 'alt'>

export type TPickedProjectsCard =
  | Pick<IProject, 'id' | 'title' | 'slug' | 'tags'> & TCardSlimGalleryData

export type TProjectStackData =
  | Array<Pick<IStack, 'id'>>
  | { [key: string]: Array<IStack> }

export type TProjectText = string | [[[key: string], string]]

export interface IProjectsCategory {
  id: string
  name: EProjectCategories
  description?: string
}

export interface IProject {
  id: string
  slug: string
  title: string /// or {name: string, sub: string},
  category: IProjectsCategory
  isPicked?: boolean
  liveLink: string

  /// Text content
  excerpt: string
  introSummaryText: TProjectText
  goalsText: TProjectText
  textStacksText: TProjectText
  challengesText: TProjectText
  lessonsText: TProjectText

  /// Images
  cardImgId: Pick<IGallery, 'id'> | string
  introLgImg: TCardSlimGalleryData
  footerLgImg: TCardSlimGalleryData

  /// Relations to other data types
  introStacks: TProjectStackData // dropdown - ref to stacks
  stacks: TProjectStackData // dropdown - ref to stacks
  tags: Array<IProjectTag>
  gallery: Array<IGallery> // dropdown - ref to stacks
  galleryPrevPrefix?: string // a gallery preview image prefix
}

/// select field

/// Own section to manage icons
export interface ISocialLink {
  id: string
  icon: string
  title: string
  link: string
  isHidden: boolean
}

/// Contact Form Data
export interface IContact {
  id: string
  fullName: string
  email: string
  mainTopic: string
  message: string
}

/// Login Form Data
export interface ILogin {
  email: string
  password: string
}

/// Pages, site Config, and Components
export interface IGenericPageData {
  theme: { [key: string]: any }
  content: { [key: string]: any } // deferent page sections
  meta?: { description: string; [key: string]: any }
  data?: { [key: string]: any }
}

export interface IGenericComponentData {
  content: { [key: string]: any }
  data?: { [key: string]: any }
  theme?: { [key: string]: any }
}

export interface IPage {
  id: string
  templateType: EPagesTemplateTypes | string
  templateContent: IHomePageData | IProjectDetailsPageData /// json object - homePage, details page, etc
}

/// individual pages types
export interface IPageHome extends IPage {
  templateContent: IHomePageData
}

export interface IPageProjectDetails extends IPage {
  templateContent: IProjectDetailsPageData
}

export interface IComponent {
  id: string
  templateType: EGeneralComponents | string
  templateContent:
    | IAppSetting
    | ICtaComponentData
    | IFooterComponentData
    | INavComponentData

  /// json object - homePage, details page, etc
}

export interface IComponentAppSettings extends IComponent {
  templateContent: IAppSetting
}

export interface IComponentCta extends IComponent {
  templateContent: ICtaComponentData
}

export interface IComponentFooter extends IComponent {
  templateContent: IFooterComponentData
}

export interface IComponentNav extends IComponent {
  templateContent: INavComponentData
}

/// SiteWide Config
// 1. Google config
// 2. Fonts Config
//    - Font Family
//    - Font Sizes
// 3. Colors/Site Theme
//    - main color pallette
//    - Accent color Pallette
//    - Dark Theme color match
// 4. Social Icons
// 5. Site Nav Settings
// 6. Profile Image settings
export interface IAppSetting extends IGenericComponentData {
  data: {
    ctaConfig: ICtaComponentData
    footerConfig: IFooterComponentData
    mainNavConfig: INavComponentData
  }
  theme: {
    fontFamily: string
    primaryThemeColor: string
    accentThemeColor: string
    darkThemeColor?: string
  }
  content: {
    generalSettings: {
      isProtected: boolean
      siteTitle: string
      tagLine: string
      adminEmail: string
      blogBio?: string
      projectsBio?: string
    }
    tools?: {
      isProtected: boolean
      import: any
      export: any
      redirects: any
    }
    media?: {
      isProtected: boolean
      allowSizing: boolean
      thumbnailSize: { width: number; height: number; allowCrop: boolean }
      mediumSize: { maxW: number; maxH: number }
      largeSize: { maxW: number; maxH: number }
      imageUploadDefaultDir: string
      filesUploadDefaultDir: string
      organizeFiles: 'month-year' | 'fileType'
    }
    mailingServices?: {
      isProtected: boolean
      mainServer?: string
      port: number
      login: string
      password: string
    }

    google?: {
      isProtected: boolean
      googleId: string
      searchConsoleConfig: string
      googleTagsId: string
    }
    profile: {
      isProtected: boolean
      name: string
      tagLine: string
      bio: string
      profileImg: Pick<IGallery, 'id'> | string
      cv: Pick<IGallery, 'id'> | string // pdf file editable
      cvUrl?: string // page hosting my cv, printable and downloadable
    }
  }
}

/// Home Page Global Settings
export interface IHomePageData extends IGenericPageData {
  data: {
    pickedProjects: Array<TPickedProjectsCard>
    favProject: Array<IGallery>
    navData: Array<INavLink> | []
    aboutSocialIcons: Array<ISocialLink> | Array<Pick<ISocialLink, 'id'>>
    contactSocialIcons: Array<ISocialLink> | Array<Pick<ISocialLink, 'id'>>
    techStacks: Array<IStack> | []
  }
  meta: {
    description: string
    tagLine?: string
  }
  theme: {
    colorTheme?: string
    fontFamily?: string
    nav: ESiteNavNames
  }
  content: {
    hero: {
      isShown: boolean
      salutationText: string
      headerTitleMain: string
      headerTitleSub: string
      headerText: string
      moreButtonText: string
      moreButtonLink: string
      profileImage: string
    }
    about: {
      isShown: boolean
      titleMain: string
      titleSub: string
      subTitle: string
      aboutText: string
      contactButtonText: string
      contactButtonLink: string
      videoLink: string
      videoSplashImg?: string
      detailsTitle: string
      detailsNameTitle: string
      detailsNameText: string
      detailsWorkAvailabilityTitle: string
      detailsWorkAvailabilityText: EWorkAvailability // dropdown
      detailsLocationTitle: string
      detailsLocationText: string
      detailsSocialTitle: string
    }
    projects: {
      isShown: boolean
      titleMain: string
      titleSub: string
      subTitle: string
      mainImg: string
      mainImgAlt: string
      viewAllButtonText: string
      viewAllButtonLink: string
    }
    favProject: {
      isShown: boolean
      titleMain: string
      titleSub: string
      summaryText: string
      moreDetailsButtonText: string
      visitProjectButtonText: string
    }
    skills: {
      isShown: boolean
      titleMain: string
      titleSub: string
      subTitle: string
      progsLangTitle: string
      frontendTitle: string
      backendTitle: string
      toolsTitle: string
      desktopMobileTitle: string
      notesTitle: string
      notesActiveText: string
      notesPassiveText: string
      notesBottomText?: string
      notesListText?: string
    }
    contact: {
      isShown: boolean
      titleMain: string
      textTitle: string
      blogText: string
      blogLink?: string
      contactIcon: string
      contactText: string
      contactNo: string
      socialIntoText: string
      favSocial: string
      socialText: string
      socialHintText: string
      socialTitle: string
      // socialIcons: Array<ISocialLinks> // dropdown
    }
  }
}

/// Details Page Global Settings
export interface IProjectDetailsPageData extends IGenericPageData {
  data: {
    navData: Array<INavLink> | []
    projectData: IProject | null
  }
  meta: {
    description: string
  }
  theme: {
    colorTheme?: string
    fontFamily?: string
    largeImageTheme: EDetailsPageImageThemes
    nav: ESiteNavNames
  }
  content: {
    hero: {
      isShown: boolean
      stacksTitle: string
      stacksButtonText: string
      stacksButtonLink: string
      introTextTitle: string
      introButtonText: string
    }
    theChallenge: {
      isShown: boolean
      headerTitleMain: string
      headerTitleSub: string
      goalsTitle: string
      stacksTitle: string
    }
    gallery: {
      isShown: boolean
      headerTitleMain: string
      headerTitleSub: string
    }
    summary: {
      isShown: boolean
      headerTitleMain: string
      headerTitleSub: string
      challengesTitle: string
      lessonsTitle: string
    }
    cta: {
      isShown: boolean
      headerTitle: string
      paginationPrevText: string
      paginationNextText: string
    }
  }
}

/// @INFO: Main Components
// 1. CTA
// 2. Footer
// 3. Navigation

// - CTA Component
export interface ICtaComponentData extends IGenericComponentData {
  theme: {
    isProtected: boolean
    colorTheme?: string
    fontFamily?: string
  }
  content: {
    title: string
    ctaText: string
    contactButtonText: string
    contactButtonLink: string
  }
}

// - FOOTER Component
export interface IFooterComponentData extends IGenericComponentData {
  data: {
    nav: Array<INavLink>
  }
  theme: {
    isProtected: boolean
    colorTheme?: string
    fontFamily?: string
  }
  content: {
    logoText: string
    logoImg?: string
    copyrightText: string
  }
}

// - Nav Component
export interface INavComponentData extends IGenericComponentData {
  theme: {
    isProtected: boolean
  }
  content: {
    logoText: string
    logoImg?: IGallery | string
  }
}
