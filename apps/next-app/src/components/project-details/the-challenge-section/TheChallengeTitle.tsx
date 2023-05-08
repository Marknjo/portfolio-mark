import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const TheChallengeTitle = () => (
  <GridItem
    gridColumn="content-start/content-end"
    gridRow="r1-start/r1-end"
    zIndex="1"
  >
    <LargeTitle
      title="The Challenge"
      subTitle="Thought Process Walkthrough"
      subTitleConfig={{ color: 'orange.800' }}
      titleConfig={{ color: 'orange.900' }}
    />
  </GridItem>
)

export default TheChallengeTitle
