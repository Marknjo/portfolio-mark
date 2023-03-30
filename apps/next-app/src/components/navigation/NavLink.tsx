import React from 'react'
import NextLink from 'next/link'

import { Link, Box } from '@chakra-ui/react'
import { NavItem } from './NavItem.interface'

/* @TODO: Implement active link */

const NavLink = ({ title, link }: NavItem) => {
  const activeState = {
    color: 'teal.100',
    borderBottomColor: 'teal.100',
    transform: 'scaleX(1.02)',
  }
  console.log('Call')

  return (
    <Box as="li">
      <Link
        href={link}
        as={NextLink}
        colorScheme="teal"
        color="teal.50"
        fontSize="lg"
        paddingX="2"
        display="flex"
        alignItems="center"
        height="100%"
        borderBottom="4px solid transparent"
        transition="all 150ms ease-in"
        _hover={activeState}
        _activeLink={activeState}
      >
        {title}
      </Link>
    </Box>
  )
}

export default NavLink
