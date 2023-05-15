import { Box, Portal, SystemStyleObject, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const animationKeyFrames = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
    
  }

  100% {
    opacity: 1;
    transform: scale(3);
  }
`
/* #TODO: add body element to overflow:hidden to hide the overlay */
const MenuOverlay = () => {
  const animation = `${animationKeyFrames} .5s ease-out forwards`
  const menuOverlayStyles: SystemStyleObject = {
    width: '100%',
    height: '100%',
    borderRadius: 'full',
    transformOrigin: 'center',
    backgroundColor: 'blackAlpha.900',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1000,
    animation,
  }

  return (
    <Portal>
      <Box sx={menuOverlayStyles} as={motion.div} />
    </Portal>
  )
}

export default MenuOverlay
