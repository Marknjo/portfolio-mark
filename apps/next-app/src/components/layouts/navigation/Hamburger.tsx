/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box, Flex, SystemStyleObject } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import MenuOverlay from './MenuOverlay'

const toggleTopStyles: SystemStyleObject = {
  // _groupActive: {
  //   m: '0',
  //   mt: '3',
  //   transform: 'rotate(135deg)',
  // },
  m: '0',
  mt: '3',
  transform: 'rotate(135deg)',
}

const toggleMiddleStyles: SystemStyleObject = {
  // _groupActive: {
  //   m: '0',
  //   mt: '-5px',
  //   transform: 'rotate(-135deg)',
  // },
  m: '0',
  mt: '-5px',
  transform: 'rotate(-135deg)',
}

const toggleBottomStyles: SystemStyleObject = {
  // _groupActive: {
  //   display: 'none',
  // },
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
    height: '4px',
    width: '12',
    display: 'block',
    backgroundColor: 'whiteAlpha.900',
    borderRadius: 'md',
    boxShadow: 'md',
    mb: '2',
    transformOrigin: 'center',
    backfaceVisibility: 'hidden',
    transition: 'all .15s ease-out',
    _groupHover: isShown
      ? {
          backgroundColor: 'teal.100',
        }
      : {
          boxShadow: 'lg',
          mb: '10.5px',
          transform: 'scale(1.04)',
          backgroundColor: 'teal.100',
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
    userSelect: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    justifySelf: 'center',
    py: '1',
    position: 'absolute',
    zIndex: 'banner',
    top: { base: '1', sm: '2' },
    right: '1',
    _groupActive: {
      top: '100px',
    },
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
