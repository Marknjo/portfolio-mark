import { GridItem, Image, StyleProps } from '@chakra-ui/react'
import { IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'

const ProjectHeroImg = () => {
  const {
    content: {
      projects: { mainImgAlt, mainImg },
    },
  } = useHomePageData<IHomePageContentV1>()

  const commonStyles: StyleProps = {
    borderRadius: 'md',
    height: 'auto',
  }

  const columnBreakpoint = {
    base: 'content-start/content-end',
    md: 'col-start 1/span 11',
    lg: 'col-start 2/span 9',
  }

  return (
    <GridItem
      gridColumn={columnBreakpoint}
      gridRow="img-start/img-r3-end"
      backgroundColor="orange.200"
      shadow="md"
      border="2px solid"
      borderColor="orange.100"
      objectFit="cover"
      {...commonStyles}
    >
      <Image
        src={`./images/${mainImg}.jpg`}
        width="100%"
        alt={mainImgAlt}
        {...commonStyles}
      />
    </GridItem>
  )
}

export default ProjectHeroImg
