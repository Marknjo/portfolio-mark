import NextLink from 'next/link'
import { GridItem, HStack, SystemStyleObject } from '@chakra-ui/react'
import { DotsBottomRight, ProjectCard } from 'ui'
import { sizes } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { TPickedProjectsCard } from '@data/types'

const CTARelatedProjects = () => {
  const {
    data: { relatedProjects },
  } = useDetailsPageData()

  const projectRelated = relatedProjects as Array<TPickedProjectsCard>

  const { mainStyles, cardsWrapperStyles } = useStyles()

  return (
    <>
      <GridItem
        gridRow="r3-start/r3-end"
        position="relative"
        zIndex="1"
        gridColumn="outer-left-start/outer-right-end"
        mb={{ base: '6', md: '12' }}
      >
        <DotsBottomRight width={24} />
      </GridItem>

      <GridItem sx={mainStyles}>
        <HStack sx={cardsWrapperStyles}>
          {projectRelated.map(projectCardInfo => (
            <ProjectCard
              maxW={{ base: 'auto', md: '72', lg: '64', xl: '72' }}
              key={projectCardInfo.title}
              {...projectCardInfo}
              as={NextLink}
            />
          ))}
        </HStack>
      </GridItem>
    </>
  )
}

export default CTARelatedProjects

const useStyles = (): {
  mainStyles: SystemStyleObject
  cardsWrapperStyles: SystemStyleObject
} => ({
  mainStyles: {
    gridRow: 'r3-start/r3-end',
    gridColumn: 'col-start 2/col-end 11',
    position: 'relative',
    zIndex: '3',
    pb: sizes.lg,
    pt: { base: '0', lg: '4' },
  },

  cardsWrapperStyles: {
    justifyContent: { base: 'center' },
    columnGap: { base: '4', md: '6' },
    rowGap: { base: '6', md: '8' },
    zIndex: '4',
    position: 'relative',
    flexWrap: { base: 'wrap', lg: 'no-wrap' },
  },
})
