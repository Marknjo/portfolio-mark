import { Button as Btn, SystemStyleObject } from '@chakra-ui/react'

const beforeAfterStyles: SystemStyleObject = {
  transition: 'all 0.2s ease-in',
  left: 0,
  right: 0,
  opacity: 1,
  color: 'white',
}

const solidBtnStyles: SystemStyleObject = {
  letterSpacing: '2px',
  textTransform: 'uppercase',
  position: 'relative',
  boxShadow: 'base',
  color: ' orange.800',
  textDecoration: 'none',
  transition: 'all 0.3s ease-in',
  zIndex: '1',
  overflow: 'hidden',
  cursor: 'pointer',

  _before: {
    transition: 'all 0.2s ease-in',
    position: 'absolute',
    top: 0,
    left: '50%',
    right: ' 50%',
    bottom: 0,
    opacity: 0,
    content: "''",
    backgroundColor: ' orange.400',
    zIndex: '-1',
    _focus: {
      color: 'white',
    },
    _hover: {},
  },

  _hover: {
    color: 'white',
    transform: 'scale(1.1)',
    shadow: 'md',
    _before: {
      ...beforeAfterStyles,
    },
    _focus: {
      ...beforeAfterStyles,
    },
  },

  _active: {
    transform: 'scale(0.9)',
    shadow: 'sm',
  },
}

export const Button = () => <Btn>Button</Btn>

// chakra(Btn, {
//   baseStyle: solidBtnStyles,
// })
