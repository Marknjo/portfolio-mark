import { GridItem, HStack, Heading, SystemStyleObject } from '@chakra-ui/react'
import { ISkillsCard, SkillThemes, SkillsCard, SkillsCategory } from 'ui'

const progLangs: Array<ISkillsCard> = [
  {
    name: 'JavaScript',
    homePage: 'https://tc39.es/',
    category: SkillsCategory.PROGRAMMING_LANGS,
    active: true,
    icon: 'js',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'TypeScript',
    homePage: 'https://www.typescriptlang.org/',
    category: SkillsCategory.PROGRAMMING_LANGS,
    active: true,
    icon: 'js',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Python',
    homePage: 'https://www.python.org/',
    category: SkillsCategory.PROGRAMMING_LANGS,
    active: true,
    icon: 'py',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'C# (csharp)',
    homePage: 'https://go.dev/',
    category: SkillsCategory.PROGRAMMING_LANGS,
    active: true,
    icon: 'c#',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Rust',
    homePage: 'https://www.rust-lang.org/',
    category: SkillsCategory.PROGRAMMING_LANGS,
    active: true,
    icon: 'rust',
    theme: SkillThemes.DEFAULT,
    isHidden: true,
  },
  {
    name: 'Golang (Go)',
    homePage: 'https://go.dev/',
    category: SkillsCategory.PROGRAMMING_LANGS,
    active: true,
    icon: 'go',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'PHP',
    homePage: 'https://www.php.net/',
    category: SkillsCategory.PROGRAMMING_LANGS,
    active: false,
    icon: 'php',
    theme: SkillThemes.PASSIVE,
    isHidden: false,
  },
  {
    name: 'HTML',
    homePage: 'https://www.w3.org/html/',
    category: SkillsCategory.FRONTEND,
    active: true,
    icon: 'html',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'CSS',
    homePage: 'https://www.w3.org/Style/CSS/Overview.en.html',
    category: SkillsCategory.FRONTEND,
    active: true,
    icon: 'css',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'React',
    homePage: 'https://react.dev/',
    category: SkillsCategory.FRONTEND,
    active: true,
    icon: 'react',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'VueJs',
    homePage: 'https://vuejs.org/',
    category: SkillsCategory.FRONTEND,
    active: true,
    icon: 'vue',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'SolidJs',
    homePage: 'https://www.solidjs.com/',
    category: SkillsCategory.FRONTEND,
    active: true,
    icon: 'solid',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Tailwind',
    homePage: 'https://tailwindcss.com/',
    category: SkillsCategory.FRONTEND,
    active: true,
    icon: 'tailwind',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Chakra UI',
    homePage: 'https://chakra-ui.com/',
    category: SkillsCategory.FRONTEND,
    active: true,
    icon: 'chakra',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Figma',
    homePage: 'https://www.figma.com/',
    category: SkillsCategory.FRONTEND,
    active: true,
    icon: 'figma',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'NodeJs',
    homePage: 'https://nodejs.org/en/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'nodejs',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'ExpressJs',
    homePage: 'https://expressjs.com/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'express',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'NestJs',
    homePage: 'https://nestjs.com/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'nestjs',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'NextJs',
    homePage: 'https://nextjs.org/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'nextjs',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Remix',
    homePage: 'https://remix.run/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'remix',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Astro',
    homePage: 'https://astro.build/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'astro',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Nuxt',
    homePage: 'https://nuxt.com/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'nuxt',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'GraphQL',
    homePage: 'https://graphql.org/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'graphql',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'ApolloGQL',
    homePage: 'https://www.apollographql.com/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'apollo',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'MongoDB',
    homePage: 'https://www.mongodb.com/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'mongodb',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'PostgreSQL',
    homePage: 'https://www.postgresql.org/',
    category: SkillsCategory.BACKEND,
    active: true,
    icon: 'postgres',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Docker',
    homePage: 'https://www.docker.com/',
    category: SkillsCategory.TOOLS,
    active: true,
    icon: 'docker',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Vite',
    homePage: 'https://vitejs.dev/',
    category: SkillsCategory.TOOLS,
    active: true,
    icon: 'vite',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Docker Swarm',
    homePage: 'https://docs.docker.com/engine/swarm/',
    category: SkillsCategory.TOOLS,
    active: true,
    icon: 'swarm',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Vitest',
    homePage: 'https://vitest.dev/',
    category: SkillsCategory.TOOLS,
    active: true,
    icon: 'vitest',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Kubernetes',
    homePage: 'https://kubernetes.io/',
    category: SkillsCategory.TOOLS,
    active: true,
    icon: 'k8s',
    theme: SkillThemes.DEFAULT,
    isHidden: true,
  },
  {
    name: 'Git/Github',
    homePage: 'https://github.com/',
    category: SkillsCategory.TOOLS,
    active: true,
    icon: 'git',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },

  {
    name: 'MVC',
    homePage: '#',
    category: SkillsCategory.TOOLS,
    active: true,
    icon: 'mvc',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },

  {
    name: 'REST API',
    homePage: '#',
    category: SkillsCategory.TOOLS,
    active: true,
    icon: 'rest',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Github Actions (CI/CD)',
    homePage: 'https://github.com/features/actions',
    category: SkillsCategory.TOOLS,
    active: true,
    icon: 'ci-cd',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
]

interface IProps {
  category: SkillsCategory
  headingText: string
  mainStylesOverrides?: SystemStyleObject
  headingStylesOverrides?: SystemStyleObject
}

/**
 * Card for programming languages I have worked with
 */
const SkillsCategoryContainer = ({
  headingText,
  category,
  mainStylesOverrides = {},
  headingStylesOverrides = {},
}: IProps) => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r3-start/r3-end',
    gridColumn: 'content-start/content-end',
    justifyContent: 'start',
    gap: '4',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    // Visual
    border: '1px solid',
    borderColor: 'blackAlpha.100',
    boxShadow: 'base',
    py: '8',
    px: '2',
    borderRadius: 'md',
    backgroundColor: 'orange.50',

    // Overrides
    ...mainStylesOverrides,
  }
  const h4HeadingStyles: SystemStyleObject = {
    // Visual
    borderBottom: '2px solid',
    borderColor: 'orange.200',
    pb: '2',
    width: '100%',
    textAlign: 'center',
    fontSize: '2xl',
    color: 'orange.900',
    mb: '4',

    // Overrides
    ...headingStylesOverrides,
  }

  return (
    <GridItem sx={mainStyles}>
      <Heading as="h4" sx={h4HeadingStyles}>
        {headingText}
      </Heading>

      <HStack gap="4" flexWrap="wrap">
        {progLangs.map(
          lang =>
            !lang.isHidden &&
            lang.category === category && (
              <SkillsCard key={lang.name} skill={lang} showBadge />
            ),
        )}
      </HStack>
    </GridItem>
  )
}

export default SkillsCategoryContainer
