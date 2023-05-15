import { GridItem } from '@chakra-ui/react'
import { DotsBottomRight } from 'ui'

const AboutBg = () => (
  <GridItem
    gridColumn="col-start 7/outer-right-end"
    gridRow="section-title-start / content-end"
    backgroundColor="orange.600"
    shadow="md"
    border="2px solid"
    borderColor="orange.100"
    borderLeftRadius="8px"
    position="relative"
    zIndex="0"
  >
    <DotsBottomRight width={45} />
  </GridItem>
)

export default AboutBg
