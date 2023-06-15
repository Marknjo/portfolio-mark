import { Box, SystemStyleObject, keyframes } from '@chakra-ui/react'
import WithPortal from './wrappers/WithPortal'

const loaderSlideAnimation = keyframes`
  0% , 100% {
    bottom: -35px
  }

  25% , 75% {
    bottom: -2px
  }

  20% , 80% {
    bottom: 2px
  }
`

const loaderRotateAnimation = keyframes`
  0% {
    transform: rotate(-15deg)
  }

  25% , 75% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(25deg)
  }
`

const galleryLoaderStyles: SystemStyleObject = {
  width: '64px',
  height: '64px',
  position: 'relative',
  background: '#FFF',
  borderRadius: '4px',

  overflow: 'hidden',
  _before: {
    content: "''",
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '40px',
    height: '40px',
    transform: ' rotate(45deg) translate(30%, 40%)',
    background: '#ff9371',
    boxShadow: '32px -34px 0 5px #ff3d00',
    animation: `${loaderSlideAnimation} 1.6s infinite ease-in-out alternate`,
  },

  _after: {
    content: "''",
    position: 'absolute',
    left: '10px',
    top: '10px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: ' #ff3d00',
    transform: 'rotate(0deg)',
    transformOrigin: '35px 145px',
    animation: ` ${loaderRotateAnimation} 1.6s infinite ease-in-out`,
  },
}

export default function GalleryLoader() {
  return (
    <WithPortal>
      <Box sx={galleryLoaderStyles} />
    </WithPortal>
  )
}
