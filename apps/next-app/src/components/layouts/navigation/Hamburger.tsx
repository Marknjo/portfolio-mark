/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box, Flex, SystemStyleObject } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import MenuOverlay from './MenuOverlay'

const toggleStyles: SystemStyleObject = {
  position: 'absolute',
  width: '100%',
  // top: '90%',
}

const toggleTopStyles: SystemStyleObject = {
  ...toggleStyles,
  transform: 'rotate(135deg)',
}

const toggleMiddleStyles: SystemStyleObject = {
  ...toggleStyles,
  transform: 'rotate(-135deg)',
}

const toggleBottomStyles: SystemStyleObject = {
  display: 'none',
}

const Hamburger = ({
  onShow,
  closeOverlay,
}: {
  onShow: (isShown: boolean) => void
  closeOverlay: boolean
}) => {
  const [isShown, setIsShown] = useState(false)

  const showHandler = () => {
    setIsShown(preStatus => !preStatus)

    const bodyEl = document?.body
    bodyEl && (bodyEl.style.overflow = 'hidden')

    isShown && bodyEl && (bodyEl.style.overflow = 'inherit')
  }

  useEffect(() => {
    onShow(isShown)
  }, [isShown, onShow])

  useEffect(() => {
    setIsShown(closeOverlay)

    if (closeOverlay) {
      const bodyEl = document?.body
      bodyEl && (bodyEl.style.overflow = 'inherit')
    }
  }, [closeOverlay])

  const hamburgerStyles: SystemStyleObject = {
    height: { base: '3px', lg: '4px' },
    display: 'flex',
    backgroundColor: 'whiteAlpha.900',
    borderRadius: 'md',
    boxShadow: 'md',
    mb: { base: '6px', md: '8px', lg: '10px' },
    transformOrigin: 'center',
    backfaceVisibility: 'hidden',
    transition: 'all .15s ease-out',
    _groupHover: isShown
      ? {
          backgroundColor: 'orange.100',
        }
      : {
          boxShadow: 'lg',
          transform: 'scale(1.04)',
          backgroundColor: 'orange.100',
        },
  }

  const hamburgerTopStyles: SystemStyleObject = {
    ...hamburgerStyles,
    ...(isShown ? toggleTopStyles : {}),
  }
  const hamburgerMiddleStyles: SystemStyleObject = {
    ...hamburgerStyles,
    ...(isShown ? toggleMiddleStyles : {}),
  }
  const hamburgerBottomStyles: SystemStyleObject = {
    ...hamburgerStyles,
    ...(isShown ? toggleBottomStyles : {}),
  }

  const hamburgerBoxStyles: SystemStyleObject = {
    maxW: { base: '36px', md: '48px' },
    maxH: { base: '36px', md: '48px' },
    userSelect: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    justifySelf: 'center',
    position: 'absolute',
    zIndex: 'banner',
    top: { base: '1rem', sm: '0.8rem', lg: '0.6rem', xl: '0.8rem' },
    right: { base: '1rem', sm: '2rem' },
    _groupActive: {
      top: '100px',
    },
    ...(isShown ? { top: { base: '1.4rem', md: '1.7rem' } } : {}),
    columnGap: isShown ? '6' : '3',
  }

  return (
    <>
      {isShown && <MenuOverlay />}
      <Flex
        width="80px"
        sx={hamburgerBoxStyles}
        role="group"
        onClick={showHandler}
      >
        <Box as="span" sx={hamburgerTopStyles} />
        <Box as="span" sx={hamburgerMiddleStyles} />
        <Box as="span" sx={hamburgerBottomStyles} />
      </Flex>
    </>
  )
}

export default Hamburger
