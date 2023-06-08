import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function LoaderWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      zIndex="0"
      minH="100vh"
      minW="100vw"
      bgColor="whiteAlpha.600"
      position="relative"
    >
      <Flex
        minH="100vh"
        minW="100vw"
        justifyContent="center"
        alignItems="center"
        bgColor="blackAlpha.100"
        backdropFilter="blur(5px)"
        position="fixed"
        zIndex="3"
      >
        {children}
      </Flex>
    </Box>
  )
}
