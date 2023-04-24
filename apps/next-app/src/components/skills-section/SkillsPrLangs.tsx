import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { ISkillsCard, SkillThemes, SkillsCard } from 'ui'

const progLangs: Array<ISkillsCard> = [
  {
    name: 'JavaScript',
    homePage: 'https://tc39.es/',
    active: true,
    icon: 'js',
    theme: SkillThemes.DEFAULT,
  },
  {
    name: 'Python',
    homePage: 'https://www.python.org/',
    active: true,
    icon: 'py',
    theme: SkillThemes.DEFAULT,
  },
]

/**
 * Card for programming languages I have worked with
 */
const SkillsPrLangs = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r3-start/r3-end',
    gridColumn: 'content-start/content-end',

    display: 'flex',
    gap: '4',
  }

  return (
    <GridItem sx={mainStyles}>
      {progLangs.map(lang => (
        <SkillsCard key={lang.name} skill={lang} />
      ))}
    </GridItem>
  )
}

export default SkillsPrLangs
