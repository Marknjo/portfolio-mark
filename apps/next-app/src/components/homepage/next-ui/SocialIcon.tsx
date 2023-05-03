import NextLink from 'next/link'
import { Icon, Link, SystemStyleObject } from '@chakra-ui/react'
import { IconType } from 'react-icons'

export const SocialIcon = ({
  link,
  icon,
  themeColor,
  themeHoverColor,
  title,
}: {
  link: string
  icon: IconType
  title: string
  themeColor?: SystemStyleObject
  themeHoverColor?: SystemStyleObject
}) => {
  const activeHoverStyles: SystemStyleObject = {
    color: 'orange.500',
    transform: 'translateY(-1.5px) scale(1.02)',
    ...themeHoverColor,
  }

  return (
    <Link
      href={link}
      as={NextLink}
      target="_blank"
      color="orange.400"
      transition="all 0.15s ease-in"
      _hover={activeHoverStyles}
      _active={activeHoverStyles}
      width="5"
      height="5"
      sx={themeColor}
      title={title}
    >
      <Icon width="100%" height="100%" as={icon} />
    </Link>
  )
}
