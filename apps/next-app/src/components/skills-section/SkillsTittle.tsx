import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const SkillsTitle = () => (
  <GridItem
    gridColumn="content-start/content-end"
    gridRow="r1-start/r1-end"
    zIndex="1"
  >
    <LargeTitle
      title="My Arsenal"
      subTitle="Programming Tools In My Toolbox"
      subTitleConfig={{ color: 'orange.900' }}
      titleConfig={{ color: 'orange.700', mt: '0' }}
    />
  </GridItem>
)

export default SkillsTitle
