import {
  EStackCategories,
  EStackFullNames,
  EStackShortNames,
  EStackThemes,
  IStack,
} from '@data/types'

export const stacks: Array<IStack> = [
  {
    id: 's1',
    name: EStackFullNames.ELECTRON,
    homePageUrl: 'https://www.electronjs.org/',
    category: EStackCategories.DESKTOP,
    isActive: true,
    isHidden: false,
    icon: 'electron',
    theme: EStackThemes.DEFAULT,
    tagName: EStackShortNames.ELECTRON,
    tagColorTheme: 'blue.100',
  },
  {
    id: 's2',
    name: EStackFullNames.JAVASCRIPT,
    homePageUrl: 'https://tc39.es/',
    category: EStackCategories.PROGRAMMING_LANGS,
    isActive: true,
    icon: 'js',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.JAVASCRIPT,
    tagColorTheme: 'yellow.100',
  },
  {
    id: 's3',
    name: EStackFullNames.TYPESCRIPT,
    homePageUrl: 'https://www.typescriptlang.org/',
    category: EStackCategories.PROGRAMMING_LANGS,
    isActive: true,
    icon: 'js',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.TYPESCRIPT,
    tagColorTheme: 'purple.200',
  },
  {
    id: 's4',
    name: EStackFullNames.PYTHON,
    homePageUrl: 'https://www.python.org/',
    category: EStackCategories.PROGRAMMING_LANGS,
    isActive: true,
    icon: 'py',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.PYTHON,
    tagColorTheme: 'blue.200',
  },
  {
    id: 's5',
    name: EStackFullNames.CSHARP,
    homePageUrl: 'https://go.dev/',
    category: EStackCategories.PROGRAMMING_LANGS,
    isActive: true,
    icon: 'c#',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.CSHARP,
    tagColorTheme: 'blue.100',
  },
  {
    id: 's6',
    name: EStackFullNames.RUST,
    homePageUrl: 'https://www.rust-lang.org/',
    category: EStackCategories.PROGRAMMING_LANGS,
    isActive: true,
    icon: 'rust',
    theme: EStackThemes.DEFAULT,
    isHidden: true,
    tagName: EStackShortNames.RUST,
    tagColorTheme: 'red.200',
  },

  {
    id: 's7',
    name: EStackFullNames.GO,
    homePageUrl: 'https://go.dev/',
    category: EStackCategories.PROGRAMMING_LANGS,
    isActive: true,
    icon: 'go',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.GO,
    tagColorTheme: 'purple.200',
  },
  {
    id: 's8',
    name: EStackFullNames.PHP,
    homePageUrl: 'https://www.php.net/',
    category: EStackCategories.PROGRAMMING_LANGS,
    isActive: false,
    icon: 'php',
    theme: EStackThemes.PASSIVE,
    isHidden: false,
    tagName: EStackShortNames.PHP,
    tagColorTheme: 'green.100',
  },
  {
    id: 's9',
    name: EStackFullNames.HTML,
    homePageUrl: 'https://www.w3.org/html/',
    category: EStackCategories.FRONTEND,
    isActive: true,
    icon: 'html',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.HTML,
    tagColorTheme: 'cyan.100',
  },
  {
    id: 's10',
    name: EStackFullNames.CSS,
    homePageUrl: 'https://www.w3.org/Style/CSS/Overview.en.html',
    category: EStackCategories.FRONTEND,
    isActive: true,
    icon: 'css',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.CSS,
    tagColorTheme: 'blue.200',
  },
  {
    id: 's11',
    name: EStackFullNames.REACT,
    homePageUrl: 'https://react.dev/',
    category: EStackCategories.FRONTEND,
    isActive: true,
    icon: 'react',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.REACT,
    tagColorTheme: 'purple.200',
  },
  {
    id: 's12',
    name: EStackFullNames.VUE,
    homePageUrl: 'https://vuejs.org/',
    category: EStackCategories.FRONTEND,
    isActive: true,
    icon: 'vue',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.VUE,
    tagColorTheme: 'teal.200',
  },
  {
    id: 's13',
    name: EStackFullNames.SOLID_JS,
    homePageUrl: 'https://www.solidjs.com/',
    category: EStackCategories.FRONTEND,
    isActive: true,
    icon: 'solid',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.SOLID_JS,
    tagColorTheme: 'gray.200',
  },
  {
    id: 's14',
    name: EStackFullNames.TAILWIND,
    homePageUrl: 'https://tailwindcss.com/',
    category: EStackCategories.FRONTEND,
    isActive: true,
    icon: 'tailwind',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.TAILWIND,
    tagColorTheme: 'cyan.200',
  },
  {
    id: 's15',
    name: EStackFullNames.CHAKRA,
    homePageUrl: 'https://chakra-ui.com/',
    category: EStackCategories.FRONTEND,
    isActive: true,
    icon: 'chakra',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.CHAKRA,
    tagColorTheme: 'purple.200',
  },
  {
    id: 's16',
    name: EStackFullNames.FIGMA,
    homePageUrl: 'https://www.figma.com/',
    category: EStackCategories.FRONTEND,
    isActive: true,
    icon: 'figma',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.FIGMA,
    tagColorTheme: 'red.200',
  },
  {
    id: 's17',
    name: EStackFullNames.NODE_JS,
    homePageUrl: 'https://nodejs.org/en/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'nodejs',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.NODE_JS,
    tagColorTheme: 'green.200',
  },
  {
    id: 's18',
    name: EStackFullNames.EXPRESS,
    homePageUrl: 'https://expressjs.com/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'express',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.EXPRESS,
    tagColorTheme: 'pink.100',
  },
  {
    id: 's19',
    name: EStackFullNames.NEST_JS,
    homePageUrl: 'https://nestjs.com/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'nestjs',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.TYPESCRIPT,
    tagColorTheme: 'orange.100',
  },
  {
    id: 's20',
    name: EStackFullNames.NEXT_JS,
    homePageUrl: 'https://nextjs.org/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'nextjs',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.TYPESCRIPT,
    tagColorTheme: 'purple.100',
  },
  {
    id: 's21',
    name: EStackFullNames.REMIX,
    homePageUrl: 'https://remix.run/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'remix',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.REMIX,
    tagColorTheme: 'pink.100',
  },
  {
    id: 's22',
    name: EStackFullNames.ASTRO,
    homePageUrl: 'https://astro.build/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'astro',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.TYPESCRIPT,
    tagColorTheme: 'red.100',
  },
  {
    id: 's23',
    name: EStackFullNames.NUXT,
    homePageUrl: 'https://nuxt.com/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'nuxt',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.NUXT,
    tagColorTheme: 'blue.100',
  },
  {
    id: 's24',
    name: EStackFullNames.GRAPHQL,
    homePageUrl: 'https://graphql.org/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'graphql',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.GRAPHQL,
    tagColorTheme: 'cyan.100',
  },
  {
    id: 's25',
    name: EStackFullNames.APOLLO,
    homePageUrl: 'https://www.apollographql.com/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'apollo',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.APOLLO,
    tagColorTheme: 'blue.100',
  },
  {
    id: 's26',
    name: EStackFullNames.MONGODB,
    homePageUrl: 'https://www.mongodb.com/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'mongodb',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.MONGODB,
    tagColorTheme: 'yellow.200',
  },
  {
    id: 's27',
    name: EStackFullNames.POSTGRES,
    homePageUrl: 'https://www.postgresql.org/',
    category: EStackCategories.BACKEND,
    isActive: true,
    icon: 'postgres',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.POSTGRES,
    tagColorTheme: 'gray.200',
  },
  {
    id: 's28',
    name: EStackFullNames.DOCKER,
    homePageUrl: 'https://www.docker.com/',
    category: EStackCategories.TOOLS,
    isActive: true,
    icon: 'docker',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.DOCKER,
    tagColorTheme: 'green.200',
  },
  {
    id: 's29',
    name: EStackFullNames.VITE,
    homePageUrl: 'https://vitejs.dev/',
    category: EStackCategories.TOOLS,
    isActive: true,
    icon: 'vite',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.VITE,
    tagColorTheme: 'pink.100',
  },
  {
    id: 's30',
    name: EStackFullNames.DOCKER_SWARM,
    homePageUrl: 'https://docs.docker.com/engine/swarm/',
    category: EStackCategories.TOOLS,
    isActive: true,
    icon: 'swarm',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.DOCKER_SWARM,
    tagColorTheme: 'yellow.200',
  },
  {
    id: 's31',
    name: EStackFullNames.VITEST,
    homePageUrl: 'https://vitest.dev/',
    category: EStackCategories.TOOLS,
    isActive: true,
    icon: 'vitest',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.VITEST,
    tagColorTheme: 'cyan.200',
  },
  {
    id: 's32',
    name: EStackFullNames.KUBERNETES,
    homePageUrl: 'https://kubernetes.io/',
    category: EStackCategories.TOOLS,
    isActive: true,
    icon: 'k8s',
    theme: EStackThemes.DEFAULT,
    isHidden: true,
    tagName: EStackShortNames.KUBERNETES,
    tagColorTheme: 'blue.50',
  },
  {
    id: 's33',
    name: EStackFullNames.GIT,
    homePageUrl: 'https://github.com/',
    category: EStackCategories.TOOLS,
    isActive: true,
    icon: 'git',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.GIT,
    tagColorTheme: 'teal.200',
  },

  {
    id: 's34',
    name: EStackFullNames.MVC,
    homePageUrl: '#',
    category: EStackCategories.TOOLS,
    isActive: true,
    icon: 'mvc',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.MVC,
    tagColorTheme: 'blue.50',
  },

  {
    id: 's35',
    name: EStackFullNames.REST,
    homePageUrl: '#',
    category: EStackCategories.TOOLS,
    isActive: true,
    icon: 'rest',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.REST,
    tagColorTheme: 'gray.50',
  },
  {
    id: 's36',
    name: EStackFullNames.CI_CD,
    homePageUrl: 'https://github.com/features/actions',
    category: EStackCategories.TOOLS,
    isActive: true,
    icon: 'ci-cd',
    theme: EStackThemes.DEFAULT,
    isHidden: false,
    tagName: EStackShortNames.CI_CD,
    tagColorTheme: 'orange.300',
  },
]
