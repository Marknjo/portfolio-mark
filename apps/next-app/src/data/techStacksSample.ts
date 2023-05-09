export enum StackThemes {
  DEFAULT = 'default',
  DEFAULT_TEAL = 'default_teal',
  DEFAULT_ORANGE = 'default_orange',
  PASSIVE = 'passive',
}

export enum StackCategory {
  PROGRAMMING_LANGS = 'programming languages',
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

export enum StackNames {
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  PYTHON = 'Python',
  CSHARP = 'C# (csharp)',
  RUST = 'Rust',
  GO = 'Golang (Go)',
  PHP = 'PHP',
  HTML = 'HTML',
  CSS = 'CSS',
  REACT = 'React',
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

export const stacksSamp = new Map([
  [
    StackNames.JAVASCRIPT,
    {
      name: StackNames.JAVASCRIPT,
      homePage: 'https://tc39.es/',
      category: StackCategory.PROGRAMMING_LANGS,
      active: true,
      icon: 'js',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.TYPESCRIPT,
    {
      name: StackNames.TYPESCRIPT,
      homePage: 'https://www.typescriptlang.org/',
      category: StackCategory.PROGRAMMING_LANGS,
      active: true,
      icon: 'js',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.PYTHON,
    {
      name: StackNames.PYTHON,
      homePage: 'https://www.python.org/',
      category: StackCategory.PROGRAMMING_LANGS,
      active: true,
      icon: 'py',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.CSHARP,
    {
      name: StackNames.CSHARP,
      homePage: 'https://go.dev/',
      category: StackCategory.PROGRAMMING_LANGS,
      active: true,
      icon: 'c#',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.RUST,
    {
      name: StackNames.RUST,
      homePage: 'https://www.rust-lang.org/',
      category: StackCategory.PROGRAMMING_LANGS,
      active: true,
      icon: 'rust',
      theme: StackThemes.DEFAULT,
      isHidden: true,
    },
  ],
  [
    StackNames.GO,
    {
      name: StackNames.GO,
      homePage: 'https://go.dev/',
      category: StackCategory.PROGRAMMING_LANGS,
      active: true,
      icon: 'go',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.PHP,
    {
      name: StackNames.PHP,
      homePage: 'https://www.php.net/',
      category: StackCategory.PROGRAMMING_LANGS,
      active: false,
      icon: 'php',
      theme: StackThemes.PASSIVE,
      isHidden: false,
    },
  ],
  [
    StackNames.HTML,
    {
      name: StackNames.HTML,
      homePage: 'https://www.w3.org/html/',
      category: StackCategory.FRONTEND,
      active: true,
      icon: 'html',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.CSS,
    {
      name: StackNames.CSS,
      homePage: 'https://www.w3.org/Style/CSS/Overview.en.html',
      category: StackCategory.FRONTEND,
      active: true,
      icon: 'css',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.REACT,
    {
      name: StackNames.REACT,
      homePage: 'https://react.dev/',
      category: StackCategory.FRONTEND,
      active: true,
      icon: 'react',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.VUE,
    {
      name: StackNames.VUE,
      homePage: 'https://vuejs.org/',
      category: StackCategory.FRONTEND,
      active: true,
      icon: 'vue',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.SOLID_JS,
    {
      name: StackNames.SOLID_JS,
      homePage: 'https://www.solidjs.com/',
      category: StackCategory.FRONTEND,
      active: true,
      icon: 'solid',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.TAILWIND,
    {
      name: StackNames.TAILWIND,
      homePage: 'https://tailwindcss.com/',
      category: StackCategory.FRONTEND,
      active: true,
      icon: 'tailwind',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.CHAKRA,
    {
      name: StackNames.CHAKRA,
      homePage: 'https://chakra-ui.com/',
      category: StackCategory.FRONTEND,
      active: true,
      icon: 'chakra',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.FIGMA,
    {
      name: StackNames.FIGMA,
      homePage: 'https://www.figma.com/',
      category: StackCategory.FRONTEND,
      active: true,
      icon: 'figma',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.NODE_JS,
    {
      name: StackNames.NODE_JS,
      homePage: 'https://nodejs.org/en/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'nodejs',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.EXPRESS,
    {
      name: StackNames.EXPRESS,
      homePage: 'https://expressjs.com/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'express',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.NEST_JS,
    {
      name: StackNames.NEST_JS,
      homePage: 'https://nestjs.com/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'nestjs',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.NEXT_JS,
    {
      name: StackNames.NEXT_JS,
      homePage: 'https://nextjs.org/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'nextjs',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.REMIX,
    {
      name: StackNames.REMIX,
      homePage: 'https://remix.run/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'remix',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.ASTRO,
    {
      name: StackNames.ASTRO,
      homePage: 'https://astro.build/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'astro',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.NUXT,
    {
      name: StackNames.NUXT,
      homePage: 'https://nuxt.com/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'nuxt',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.GRAPHQL,
    {
      name: StackNames.GRAPHQL,
      homePage: 'https://graphql.org/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'graphql',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.APOLLO,
    {
      name: StackNames.APOLLO,
      homePage: 'https://www.apollographql.com/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'apollo',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.MONGODB,
    {
      name: StackNames.MONGODB,
      homePage: 'https://www.mongodb.com/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'mongodb',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.POSTGRES,
    {
      name: StackNames.POSTGRES,
      homePage: 'https://www.postgresql.org/',
      category: StackCategory.BACKEND,
      active: true,
      icon: 'postgres',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.DOCKER,
    {
      name: StackNames.DOCKER,
      homePage: 'https://www.docker.com/',
      category: StackCategory.TOOLS,
      active: true,
      icon: 'docker',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.VITE,
    {
      name: StackNames.VITE,
      homePage: 'https://vitejs.dev/',
      category: StackCategory.TOOLS,
      active: true,
      icon: 'vite',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.DOCKER_SWARM,
    {
      name: StackNames.DOCKER_SWARM,
      homePage: 'https://docs.docker.com/engine/swarm/',
      category: StackCategory.TOOLS,
      active: true,
      icon: 'swarm',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.VITEST,
    {
      name: StackNames.VITEST,
      homePage: 'https://vitest.dev/',
      category: StackCategory.TOOLS,
      active: true,
      icon: 'vitest',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.KUBERNETES,
    {
      name: StackNames.KUBERNETES,
      homePage: 'https://kubernetes.io/',
      category: StackCategory.TOOLS,
      active: true,
      icon: 'k8s',
      theme: StackThemes.DEFAULT,
      isHidden: true,
    },
  ],
  [
    StackNames.GIT,
    {
      name: StackNames.GIT,
      homePage: 'https://github.com/',
      category: StackCategory.TOOLS,
      active: true,
      icon: 'git',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],

  [
    StackNames.MVC,
    {
      name: StackNames.MVC,
      homePage: '#',
      category: StackCategory.TOOLS,
      active: true,
      icon: 'mvc',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],

  [
    StackNames.REST,
    {
      name: StackNames.REST,
      homePage: '#',
      category: StackCategory.TOOLS,
      active: true,
      icon: 'rest',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
  [
    StackNames.CI_CD,
    {
      name: StackNames.CI_CD,
      homePage: 'https://github.com/features/actions',
      category: StackCategory.TOOLS,
      active: true,
      icon: 'ci-cd',
      theme: StackThemes.DEFAULT,
      isHidden: false,
    },
  ],
])

export const pickStacksByCategory = (
  stacksNames: Array<StackNames>,
  stacks: Map<StackNames, IStack>,
) => {
  const foundStacks = new Map()

  stacksNames.forEach(stackName => {
    if (stacks.has(stackName)) {
      const foundStack = stacks.get(stackName)!

      if (foundStacks.has(foundStack.category)) {
        foundStacks.set(foundStack.category, [
          ...foundStacks.get(foundStack.category),
          foundStack,
        ])
      } else {
        foundStacks.set(foundStack.category, [foundStack])
      }
    }
  })

  return foundStacks
}

export const getStacks = (stacks: Map<StackNames, IStack>) => [
  ...stacks.values(),
]

export const getStacksNames = (stacks: Map<StackNames, IStack>) => [
  ...stacks.keys(),
]
