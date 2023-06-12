import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BgWithICons } from 'ui'

export default function LoaderWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      zIndex="0"
      minH="100vh"
      minW="100vw"
      bgColor="whiteAlpha.600"
      position="relative"
    >
      <BgWithICons
        sx={{ position: 'absolute', top: 0, left: 0, opacity: 0.2 }}
      />

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
