import { GridItem, HStack, SystemStyleObject } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ProjectCard } from 'ui'
import { useHomePageData } from '@store/context/homepage-context'

const columnBreakpoint = {
  base: 'col-start 2/col-end 11',
  md: 'col-start 1/col-end 12',
  lg: 'col-start 3/col-end 11',
}

const wrapperOverridesStyles: SystemStyleObject = {
  maxW: 'auto',
  minW: 'auto',
}

const ProjectCards = () => {
  const {
    data: { pickedProjects },
  } = useHomePageData()

  return (
    <GridItem
      gridColumn={columnBreakpoint}
      gridRow="img-r3-start/ span 2"
      px={{ base: '4' }}
    >
      <HStack
        columnGap={{ md: '2', lg: '4' }}
        rowGap={{ base: '6' }}
        justifyContent={{
          base: 'center',
          md: 'space-between',
          lg: 'flex-start',
        }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        flexDirection={{ base: 'column', md: 'inherit' }}
        px={{ md: '4', lg: 0 }}
      >
        {pickedProjects.map(projectCardInfo => (
          <ProjectCard
            wrapperSx={wrapperOverridesStyles}
            key={projectCardInfo.title}
            {...projectCardInfo}
            as={NextLink}
          />
        ))}
      </HStack>
    </GridItem>
  )
}

export default ProjectCards
