import { GridItem } from '@chakra-ui/react'
import { DotsBottomLeft } from 'ui'

const columnBreakpoint = {
  base: 'outer-left-start / span 7',
  sm: 'content-start / span 6',
  md: 'content-start / span 4',
}

const FavBg = () => (
  <GridItem
    gridRow="r1-start/r3-end"
    gridColumn={columnBreakpoint}
    backgroundColor="orange.500"
    position="relative"
    borderRightRadius="md"
    borderLeftRadius={{ base: 'none', sm: 'md' }}
    overflow="hidden"
    zIndex="1"
    boxShadow="md"
  >
    <DotsBottomLeft width={64} />
  </GridItem>
)

export default FavBg
