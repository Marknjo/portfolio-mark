import { GridItem } from '@chakra-ui/react'
import { IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import { LargeTitle } from 'ui'

const SkillsTitle = () => {
  const {
    content: {
      skills: { titleMain, titleSub },
    },
  } = useHomePageData<IHomePageContentV1>()

  return (
    <GridItem
      gridColumn="content-start/content-end"
      gridRow="r1-start/r1-end"
      zIndex="1"
    >
      <LargeTitle title={titleMain} subTitle={titleSub} />
    </GridItem>
  )
}

export default SkillsTitle
