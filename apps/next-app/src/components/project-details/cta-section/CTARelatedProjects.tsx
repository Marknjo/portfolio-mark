import NextLink from 'next/link'
import { GridItem, HStack, SystemStyleObject } from '@chakra-ui/react'
import { CardsInfoInterface, DotsBottomRight, ProjectCard } from 'ui'

const CTARelatedProjects = ({
  projectInfo,
}: {
  projectInfo: Array<CardsInfoInterface>
}) => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r3-start/r3-end',
    gridColumn: 'col-start 2/col-end 11',
    position: 'relative',
    zIndex: '3',
    py: '12',
    mb: '12',
  }

  return (
    <>
      <GridItem
        gridRow="r3-start/r3-end"
        position="relative"
        zIndex="1"
        gridColumn="outer-left-start/outer-right-end"
        mb="12"
      >
        <DotsBottomRight width={25} />
      </GridItem>

      <GridItem sx={mainStyles}>
        <HStack justifyContent="center" gap="6" zIndex="4" position="relative">
          {projectInfo.map(info => (
            <ProjectCard key={info.title} {...info} as={NextLink} />
          ))}
        </HStack>
      </GridItem>
    </>
  )
}

export default CTARelatedProjects
