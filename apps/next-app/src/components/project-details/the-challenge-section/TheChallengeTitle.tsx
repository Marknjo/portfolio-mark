import { GridItem } from '@chakra-ui/react'
import { useDetailsPageData } from '@store/context/details-page-context'
import { LargeTitle } from 'ui'

const TheChallengeTitle = () => {
  const {
    content: {
      theChallenge: { headerTitleMain, headerTitleSub },
    },
  } = useDetailsPageData()

  return (
    <GridItem
      gridColumn="content-start/content-end"
      gridRow="r1-start/r1-end"
      zIndex="1"
    >
      <LargeTitle title={headerTitleMain} subTitle={headerTitleSub} />
    </GridItem>
  )
}

export default TheChallengeTitle
