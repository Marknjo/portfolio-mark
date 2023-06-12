import { Flex, chakra, shouldForwardProp } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { AnimatePresence, isValidMotionProp } from 'framer-motion'
// import { BgWithICons } from 'ui'

const LoaderAnimationWrapper = chakra(AnimatePresence, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function LoaderWrapper({ children }: { children: ReactNode }) {
  return (
    <LoaderAnimationWrapper
      zIndex="overlay"
      minH="100vh"
      minW="100%"
      overflow="hidden"
      bgColor="blackAlpha.600"
      position="relative"
    >
      {/* <BgWithICons
        sx={{ position: 'absolute', top: 0, left: 0, opacity: 0.2 }}
      /> */}

      <Flex
        minH="100vh"
        minW="100vw"
        justifyContent="center"
        alignItems="center"
        bgColor="whiteAlpha.700"
        backdropFilter="blur(5px)"
        position="fixed"
        zIndex="modal"
      >
        {children}
      </Flex>
    </LoaderAnimationWrapper>
  )
}
