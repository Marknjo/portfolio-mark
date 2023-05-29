import NextLink from 'next/link'
import { GridItem, HStack } from '@chakra-ui/react'
import { CardsInfoInterface, ProjectCard } from 'ui'

const columnBreakpoint = {
  base: 'col-start 2/col-end 11',
  md: 'col-start 2/col-end 12',
  lg: 'col-start 3/col-end 11',
}

const ProjectCards = ({
  projectsInfo,
}: {
  projectsInfo: Array<CardsInfoInterface>
}) => (
  <GridItem
    gridColumn={columnBreakpoint}
    gridRow="img-r3-start/ span 2"
    px={{ base: '4' }}
  >
    <HStack
      columnGap={{ md: '2', lg: '4' }}
      rowGap={{ base: '6' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      flexDirection={{ base: 'column', md: 'inherit' }}
      px={{ md: '4', lg: 0 }}
    >
      {projectsInfo.map(info => (
        <ProjectCard key={info.title} {...info} as={NextLink} />
      ))}
    </HStack>
  </GridItem>
)

export default ProjectCards
