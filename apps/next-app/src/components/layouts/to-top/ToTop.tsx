import { Box, Icon, SystemStyleObject } from '@chakra-ui/react'
import { SyntheticEvent } from 'react'
import { FaChevronUp } from 'react-icons/fa'

const ToTop = () => {
  const mainStyles: SystemStyleObject = {
    width: '3rem',
    height: '3rem',
    borderRadius: 'full',

    position: 'fixed',
    bottom: '4',
    right: '4',

    backgroundColor: 'orange.50',
    boxShadow: 'dark-lg',
    border: '1px solid',
    borderColor: 'transparent',
    opacity: '0.6',

    transition: 'all .25s ease-out',
    cursor: 'pointer',
    _hover: {
      boxShadow: '2xl',
      transform: 'translateY(3px)',
      borderColor: 'orange.300',
      opacity: '1',
      backgroundColor: 'orange.100',
    },

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 'tooltip',
  }

  const chevronStyles: SystemStyleObject = {
    color: 'orange.500',
    fontSize: '3xl',
    pointer: 'cursor',
  }

  const moveToTopHandler = (event: SyntheticEvent) => {
    event.preventDefault()
    document.documentElement.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Box sx={mainStyles} onClick={moveToTopHandler} role="group">
      <Icon as={FaChevronUp} sx={chevronStyles} />
    </Box>
  )
}

export default ToTop
