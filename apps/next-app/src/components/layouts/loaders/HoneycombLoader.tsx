import { Box, SystemStyleObject, keyframes } from '@chakra-ui/react'
import { useIsLoading } from '@hooks/is-loading'
import { useLayoutEffect } from 'react'

const honeyCombWrapperStyles: SystemStyleObject = {
  height: '24px',
  position: 'relative',
  width: '24px',
  zIndex: 'tooltip',

  'div:nth-child(1)': {
    animationDelay: '0s',
    left: '-28px',
    top: 0,
  },

  'div:nth-child(2)': {
    animationDelay: '0.1s',
    left: '-14px',
    top: '22px',
  },

  'div:nth-child(3)': {
    animationDelay: '0.2s',
    left: ' 14px',
    top: ' 22px',
  },

  'div:nth-child(4)': {
    animationDelay: '0.3s',
    left: '28px',
    top: 0,
  },
  'div:nth-child(5)': {
    animationDelay: '0.4s',
    left: ' 14px',
    top: '-22px',
  },
  'div:nth-child(6)': {
    animationDelay: '0.5s',
    left: '-14px',
    top: '-22px',
  },
  'div:nth-child(7)': {
    animationDelay: '0.6s',
    left: 0,
    top: 0,
  },
}

const honeyCombAnimation = keyframes`
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
      transform: scale(0);
    }

    30%,
    70% {
      opacity: 1;
      transform: scale(1);
    }
`

const afterBefore: SystemStyleObject = {
  content: "''",
  borderLeft: '12px solid',
  borderLeftColor: 'transparent',
  borderRight: '12px solid',
  borderRightColor: 'transparent',
  position: 'absolute',
  left: 0,
  right: 0,
}

const honeyBoxStyles: SystemStyleObject = {
  animation: `${honeyCombAnimation} 1.8s infinite backwards`,
  background: 'orange.800',
  height: '16px',
  mt: '6px',
  position: 'absolute',
  width: '24px',
  _after: {
    top: '-5px',
    borderBottom: '6px solid',
    borderBottomColor: ' orange.800',
    ...afterBefore,
  },
  _before: {
    bottom: '-5px',
    borderTop: '6px solid',
    borderTopColor: 'orange.800',
    ...afterBefore,
  },
}

export default function HoneycombLoader() {
  const { isLoading } = useIsLoading()

  useLayoutEffect(() => {
    const wrapperElInDOM = document.getElementById('honeycomb-loader')

    if (wrapperElInDOM && isLoading) {
      wrapperElInDOM.style.display = 'none'
    }
  }, [isLoading])

  return (
    <Box sx={honeyCombWrapperStyles} id="honeycomb-loader">
      <Box sx={honeyBoxStyles} />
      <Box sx={honeyBoxStyles} />
      <Box sx={honeyBoxStyles} />
      <Box sx={honeyBoxStyles} />
      <Box sx={honeyBoxStyles} />
      <Box sx={honeyBoxStyles} />
      <Box sx={honeyBoxStyles} />
    </Box>
  )
}
