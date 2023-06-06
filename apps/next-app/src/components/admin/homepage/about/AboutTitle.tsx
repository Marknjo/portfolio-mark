import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const AboutTitle = () => (
  <GridItem
    gridColumn="content-start/content-end"
    gridRow="r1-start/r1-end"
    zIndex="1"
  >
    <LargeTitle title="About Me" subTitle="Let's Start With My Background" />
  </GridItem>
)

export default AboutTitle
