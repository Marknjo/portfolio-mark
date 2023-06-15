import { GridItem } from '@chakra-ui/react'
import { IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import { LargeTitle } from 'ui'

const ProjectTitle = () => {
  const {
    content: {
      projects: { titleMain, titleSub },
    },
  } = useHomePageData<IHomePageContentV1>()

  return (
    <GridItem
      gridColumn="content-start/content-end"
      gridRow="title-start/title-end"
      zIndex="1"
    >
      <LargeTitle title={titleMain} subTitle={titleSub} isLighter />
    </GridItem>
  )
}

export default ProjectTitle
