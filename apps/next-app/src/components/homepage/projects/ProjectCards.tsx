import NextLink from 'next/link'
import { GridItem, HStack } from '@chakra-ui/react'
import { CardsInfoInterface, ProjectCard } from 'ui'

const cardsInfo: Array<CardsInfoInterface> = [
  {
    title: 'Natours App',
    url: '#',
    tags: [
      { tagName: 'Nodejs', colorTheme: 'blue' },
      { tagName: 'GraphQL', colorTheme: 'pink' },
      { tagName: 'React', colorTheme: 'green' },
    ],
  },
  {
    title: 'Spar',
    url: '#',
    tags: [
      { tagName: 'Nodejs', colorTheme: 'blue' },
      { tagName: 'GraphQL', colorTheme: 'pink' },
      { tagName: 'React', colorTheme: 'green' },
    ],
  },
  {
    title: 'Cyclist',
    url: '#',
    tags: [
      { tagName: 'Nodejs', colorTheme: 'blue' },
      { tagName: 'GraphQL', colorTheme: 'pink' },
      { tagName: 'React', colorTheme: 'green' },
    ],
  },
]

const ProjectCards = () => (
  <GridItem gridColumn="col-start 3/col-end 11" gridRow="img-r3-start/ span 2">
    <HStack justifySelf="space-around" columnGap="4" alignItems="flex-start">
      {cardsInfo.map(info => (
        <ProjectCard key={info.title} {...info} as={NextLink} />
      ))}
    </HStack>
  </GridItem>
)

export default ProjectCards
