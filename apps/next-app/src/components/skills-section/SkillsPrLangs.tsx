import { GridItem, HStack, Heading, SystemStyleObject } from '@chakra-ui/react'
import { ISkillsCard, SkillThemes, SkillsCard } from 'ui'

const progLangs: Array<ISkillsCard> = [
  {
    name: 'JavaScript',
    homePage: 'https://tc39.es/',
    active: true,
    icon: 'js',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Python',
    homePage: 'https://www.python.org/',
    active: true,
    icon: 'py',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'C# (csharp)',
    homePage: 'https://go.dev/',
    active: true,
    icon: 'c#',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'Rust',
    homePage: 'https://www.rust-lang.org/',
    active: true,
    icon: 'rust',
    theme: SkillThemes.DEFAULT,
    isHidden: true,
  },
  {
    name: 'Golang (Go)',
    homePage: 'https://go.dev/',
    active: true,
    icon: 'go',
    theme: SkillThemes.DEFAULT,
    isHidden: false,
  },
  {
    name: 'PHP',
    homePage: 'https://www.php.net/',
    active: false,
    icon: 'php',
    theme: SkillThemes.PASSIVE,
    isHidden: false,
  },
]

/**
 * Card for programming languages I have worked with
 */
const SkillsPrLangs = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r3-start/r3-end',
    gridColumn: 'content-start/content-end',
    justifyContent: 'center',
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
  }

  return (
    <GridItem sx={mainStyles}>
      <Heading as="h4" sx={h4HeadingStyles}>
        General Programming Languages
      </Heading>

      <HStack gap="4" flexWrap="wrap" mt="4">
        {progLangs.map(
          lang =>
            !lang.isHidden && (
              <SkillsCard key={lang.name} skill={lang} showBadge />
            ),
        )}
      </HStack>
    </GridItem>
  )
}

export default SkillsPrLangs
