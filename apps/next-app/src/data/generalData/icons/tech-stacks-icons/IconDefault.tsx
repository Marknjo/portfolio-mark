import { Icon, IconProps } from '@chakra-ui/react'
import { FiDribbble } from 'react-icons/fi'

export function IconDefault(props: IconProps) {
  return <Icon as={FiDribbble} width="100%" height="100%" {...props} />
}
