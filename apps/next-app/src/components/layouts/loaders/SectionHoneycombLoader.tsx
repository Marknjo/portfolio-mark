import { Box } from '@chakra-ui/react'
import HoneycombLoader from './HoneycombLoader'
import WithoutPortal from './wrappers/WithoutPortal'

export default function SectionHoneycombLoader() {
  return (
    <Box position="relative">
      <WithoutPortal>
        <HoneycombLoader />
      </WithoutPortal>
    </Box>
  )
}
