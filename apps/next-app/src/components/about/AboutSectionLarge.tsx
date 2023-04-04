import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const AboutSectionTitle = () => (
  <GridItem
    gridColumn="content-start/content-end"
    gridRow="title-start/title-end"
    zIndex="1"
  >
    <LargeTitle title="About Me" subTitle="Let's Start With My Background" />
  </GridItem>
)

export default AboutSectionTitle
