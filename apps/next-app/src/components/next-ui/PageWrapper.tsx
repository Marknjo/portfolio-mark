import { isValidMotionProp, motion } from 'framer-motion'

import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { ReactNode } from 'react'

const WrapperBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <WrapperBox initial={{ x: -1000 }} animate={{ x: 0 }} exit={{ x: 1000 }}>
      {children}
    </WrapperBox>
  )
}

// f PageWrapper = ({children}:{children: ReactNode}) => (<WrapperBox  exit={{
//   x: 1000,
// }}>{children}</WrapperBox>)
