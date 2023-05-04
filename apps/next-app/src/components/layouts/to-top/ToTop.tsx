import { Box, Icon, SystemStyleObject } from '@chakra-ui/react'
import { Url } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import { FaChevronUp } from 'react-icons/fa'

const ToTop = ({ toUrl }: { toUrl: Url }) => {
  const router = useRouter()

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

  return (
    <Box sx={mainStyles} onClick={() => router.push(toUrl)} role="group">
      <Icon as={FaChevronUp} sx={chevronStyles} />
    </Box>
  )
}

export default ToTop
