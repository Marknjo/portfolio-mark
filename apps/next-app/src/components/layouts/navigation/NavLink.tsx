import NextLink from 'next/link'

import { Link, Box, SystemStyleObject } from '@chakra-ui/react'
import { INavLink } from '@data/navLinks'

export const activeState = {
  color: 'teal.50',
  borderBottomColor: 'teal.100',
  transform: 'scaleX(1.02)',
}

const linkActive: SystemStyleObject = {
  ...activeState,
  transform: 'scale(1)',
  backgroundColor: 'blackAlpha.500',
  borderBottomColor: 'whiteAlpha.600',
}

interface INav extends INavLink {
  sxOverrides?: SystemStyleObject
  asHamburgerMenu?: boolean
  isSelected?: boolean
}

// @TODO: fix nav link
const NavLink = ({
  title,
  link,
  sxOverrides = {},
  asHamburgerMenu = false,
  isSelected,
}: INav) => {
  // const params = useParams()
  // window.location
  // console.log(params)

  /* NavLink Overrides */
  const linkWithHamburger: SystemStyleObject = {
    py: '3',
    justifyContent: 'center',
    w: ['100vw', '20vw'],
    borderBottom: '2px solid ',
    borderBottomColor: 'blackAlpha.100',
    _active: linkActive,
    _selected: linkActive,
    _hover: {
      ...linkActive,
      transform: 'scale(1.005)',
    },
  }

  const linkStyles: SystemStyleObject = {
    colorScheme: 'teal',
    color: 'teal.100',
    fontSize: 'lg',
    fontWeight: 'thin',
    paddingX: '2',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    borderBottom: '4px solid transparent',
    transition: 'all .25s ease-in',
    _hover: activeState,
    _active: activeState,
    _selected: activeState,
    ...(asHamburgerMenu ? linkWithHamburger : {}),
    ...sxOverrides,
  }

  return (
    <Box as="li">
      <Link
        className="main__nav-link"
        href={link}
        as={NextLink}
        sx={linkStyles}
        aria-selected={isSelected}
        // ref={currentLinkEl}
      >
        {title}
      </Link>
    </Box>
  )
}

export default NavLink
