import { GridItem } from '@chakra-ui/react'
import { DotsBottomLeft } from 'ui'

const FavBg = () => (
  <GridItem
    gridRow="r1-start/r3-end"
    gridColumn="content-start / span 4"
    backgroundColor="orange.500"
    position="relative"
    borderRadius="md"
    overflow="hidden"
    zIndex="1"
    boxShadow="md"
  >
    <DotsBottomLeft width={64} />
  </GridItem>
)

export default FavBg
