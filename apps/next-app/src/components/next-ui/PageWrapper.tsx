import { isValidMotionProp, motion } from 'framer-motion'

import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { ReactNode } from 'react'

const WrapperBox = chakra(motion.div, {
  baseStyle: {
    overflowX: 'hidden',
  },
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <WrapperBox
      initial={{ x: -1000, opacity: 0.4 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0.4 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{ type: 'tween', ease: 'easeIn', duration: 0.8 }}
    >
      {children}
    </WrapperBox>
  )
}
