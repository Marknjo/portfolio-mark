import NextLink from 'next/link'
import { Icon, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'

export const SocialIcon = ({
  link,
  icon,
}: {
  link: string
  icon: IconType
}) => (
  <Link
    href={link}
    as={NextLink}
    target="_blank"
    color="orange.400"
    transition="all 0.15s ease-in"
    _hover={{
      color: 'orange.500',
      transform: 'translateY(-1.5px) scale(1.02)',
    }}
    _active={{
      color: 'orange.500',
      transform: 'translateY(-1.5px) scale(1.02)',
    }}
    width="5"
    height="5"
  >
    <Icon width="100%" height="100%" as={icon} />
  </Link>
)
