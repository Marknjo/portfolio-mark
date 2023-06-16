import {
  Flex,
  SystemStyleObject,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'
import { ReactNode, useLayoutEffect } from 'react'
import { isValidMotionProp, motion } from 'framer-motion'
import { BgWithICons } from 'ui'
import { useIsLoading } from '@hooks/is-loading'

const commonStyles: SystemStyleObject = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: 'toast',
}

const loaderContentStyles: SystemStyleObject = {
  justifyContent: 'center',
  alignItems: 'center',
  bgColor: 'whiteAlpha.200',
  backdropFilter: 'blur(5px)',

  ...commonStyles,
}

const LoaderWrapperBox = chakra(motion.div, {
  baseStyle: commonStyles,
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function WithoutPortal({ children }: { children: ReactNode }) {
  const { isLoading } = useIsLoading()

  useLayoutEffect(() => {
    const wrapperElInDOM = document.getElementById('loader-wrapper')
    const loaderContentElInDOM = document.getElementById('loader-content')

    if (wrapperElInDOM && isLoading && loaderContentElInDOM) {
      wrapperElInDOM.style.display = 'none'
      loaderContentElInDOM.style.display = 'none'
    }
  }, [isLoading])

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
      id="loader-wrapper"
    >
      <BgWithICons
        sx={{
          ...commonStyles,
          opacity: 0.6,
          bgColor: 'blackAlpha.100',
        }}
      />

      <Flex id="loader-content" sx={loaderContentStyles}>
        {children}
      </Flex>
    </LoaderWrapperBox>
  )
}
