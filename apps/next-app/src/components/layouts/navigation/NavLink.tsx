import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { Link, Box } from '@chakra-ui/react'
import { NavItem } from './NavItem.interface'

const activeState = {
  color: 'teal.100',
  borderBottomColor: 'teal.100',
  transform: 'scaleX(1.02)',
}

const NavLink = ({ title, link }: NavItem) => {
  const params = useRouter()

  return (
    <Box as="li">
      <Link
        href={link}
        as={NextLink}
        colorScheme="teal"
        color="teal.50"
        fontSize="md"
        fontWeight="thin"
        paddingX="2"
        display="flex"
        alignItems="center"
        height="100%"
        borderBottom="4px solid transparent"
        transition="all 150ms ease-in"
        _hover={activeState}
        _active={activeState}
        _selected={activeState}
        aria-selected={
          `/${link}` === params.asPath ||
          (title.toLowerCase() === 'home' && params.asPath === '/')
        }
      >
        {title}
      </Link>
    </Box>
  )
}

export default NavLink
