import NextLink from 'next/link'
import { GridItem, HStack } from '@chakra-ui/react'
import { CardsInfoInterface, ProjectCard } from 'ui'

const ProjectCards = ({
  projectsInfo,
}: {
  projectsInfo: Array<CardsInfoInterface>
}) => (
  <GridItem gridColumn="col-start 3/col-end 11" gridRow="img-r3-start/ span 2">
    <HStack justifySelf="space-around" columnGap="4" alignItems="flex-start">
      {projectsInfo.map(info => (
        <ProjectCard key={info.title} {...info} as={NextLink} />
      ))}
    </HStack>
  </GridItem>
)

export default ProjectCards
