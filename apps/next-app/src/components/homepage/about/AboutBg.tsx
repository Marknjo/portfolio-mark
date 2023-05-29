import { GridItem } from '@chakra-ui/react'
import { DotsBottomRight } from 'ui'

const AboutBg = () => (
  <GridItem
    gridColumn={{
      base: '1/-1',
      sm: 'content-start/content-end',
      md: 'col-start 7/outer-right-end',
    }}
    gridRow={{
      base: 'r4-start / r5-end',
      md: 'r2-start / r5-end',
      lg: 'r3-start / r5-end',
    }}
    backgroundColor="orange.600"
    shadow="md"
    border={{ base: 'none', sm: '2px solid' }}
    borderColor={{ base: 'none', sm: 'orange.100' }}
    borderLeftRadius={{ base: 'inherit', sm: 'md' }}
    borderRightRadius={{ base: 'inherit', sm: 'md', md: 'inherit' }}
    position="relative"
    zIndex="0"
  >
    <DotsBottomRight width={45} />
  </GridItem>
)

export default AboutBg
