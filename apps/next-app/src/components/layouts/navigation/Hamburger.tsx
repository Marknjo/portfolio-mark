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
  const [isToggled, setIsToggle] = useState(false)

  const toggleHandler = () => {
    setIsToggle(prevState => !prevState)
    onShow(!isToggled)
  }

  useEffect(() => {
    setIsToggle(closeOverlay)
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
    _groupHover: isToggled
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
    ...(isToggled ? toggleTopStyles : {}),
  }
  const hamburgerMiddleStyles: SystemStyleObject = {
    ...hamburgerStyles,
    ...(isToggled ? toggleMiddleStyles : {}),
  }
  const hamburgerBottomStyles: SystemStyleObject = {
    ...hamburgerStyles,
    ...(isToggled ? toggleBottomStyles : {}),
  }

  const hamburgerBoxStyles: SystemStyleObject = {
    userSelect: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    justifySelf: 'center',
    py: '1',
    position: 'absolute',
    zIndex: 'banner',
    top: '4',
    right: '1',
    _groupActive: {
      top: '100px',
    },
    columnGap: isToggled ? '6' : '3',
  }

  return (
    <>
      {isToggled && <MenuOverlay />}
      <Flex
        width="80px"
        sx={hamburgerBoxStyles}
        role="group"
        onClick={toggleHandler}
      >
        <Box as="span" sx={hamburgerTopStyles} />
        <Box as="span" sx={hamburgerMiddleStyles} />
        <Box as="span" sx={hamburgerBottomStyles} />
      </Flex>
    </>
  )
}

export default Hamburger
