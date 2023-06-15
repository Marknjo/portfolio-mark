import {
  Box,
  Flex,
  SystemStyleObject,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { isValidMotionProp, motion } from 'framer-motion'

const commonStyles: SystemStyleObject = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: 'tooltip',
}

const loaderContentStyles: SystemStyleObject = {
  justifyContent: 'center',
  alignItems: 'center',
  bgColor: 'blackAlpha.200',
  backdropFilter: 'blur(5px)',

  ...commonStyles,
}

const LoaderWrapperBox = chakra(motion.div, {
  baseStyle: commonStyles,
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function WithoutPortal({ children }: { children: ReactNode }) {
  return (
    <LoaderWrapperBox
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <Box
        sx={{
          bgColor: 'whiteAlpha.700',
          ...commonStyles,
        }}
      />

      <Flex sx={loaderContentStyles}>{children}</Flex>
    </LoaderWrapperBox>
  )
}
