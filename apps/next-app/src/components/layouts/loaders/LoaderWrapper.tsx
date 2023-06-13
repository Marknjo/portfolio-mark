import {
  Flex,
  Portal,
  SystemStyleObject,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { isValidMotionProp, motion } from 'framer-motion'
import { BgWithICons } from 'ui'

// const LoaderAnimationWrapper = chakra(AnimatePresence, {
//   shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
// })

const commonStyles: SystemStyleObject = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}

const loaderContentStyles: SystemStyleObject = {
  justifyContent: 'center',
  alignItems: 'center',
  bgColor: 'blackAlpha.200',
  backdropFilter: 'blur(5px)',
  zIndex: 'modal',
  ...commonStyles,
}

const LoaderWrapperBox = chakra(motion.div, {
  baseStyle: commonStyles,
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function LoaderWrapper({ children }: { children: ReactNode }) {
  return (
    <Portal appendToParentPortal>
      <LoaderWrapperBox
        initial={{
          y: '-100vh',
        }}
        animate={{
          y: 0,
        }}
        exit={{
          y: '-100vh',
        }}
      >
        <BgWithICons
          sx={{
            bgColor: 'whiteAlpha.700',
            ...commonStyles,
          }}
        />

        <Flex sx={loaderContentStyles}>{children}</Flex>
      </LoaderWrapperBox>
    </Portal>
  )
}
