import NextLink from 'next/link'

import { Box, Link, SystemStyleObject } from '@chakra-ui/react'

import { usePathname } from 'next/navigation'

export const activeState = {
  color: 'orange.50',
  borderBottomColor: 'orange.100',
  transform: 'scaleX(1.02)',
}

const linkActive: SystemStyleObject = {
  ...activeState,
  transform: 'scale(1)',
  backgroundColor: 'blackAlpha.500',
  borderBottomColor: 'whiteAlpha.600',
}

// eslint-disable-next-line no-bitwise
interface INav {
  link: string
  title: string
  sxOverrides?: SystemStyleObject
  asHamburgerMenu?: boolean
  isSelected?: boolean
  onSelect: (hash: string) => void
}

const NavLink = ({
  title,
  link,
  sxOverrides = {},
  asHamburgerMenu = false,
  isSelected,
  onSelect,
}: INav) => {
  const path = usePathname()

  /* NavLink Overrides */
  const linkWithHamburger: SystemStyleObject = {
    py: '3',
    justifyContent: 'center',
    w: { base: '90vw', sm: '60vw', md: '40vw', lg: '25vw' },
    borderBottom: '2px solid ',
    borderBottomColor: 'blackAlpha.100',
    fontWeight: 'regular',
    _active: linkActive,
    _selected: linkActive,
    _hover: {
      ...linkActive,
      transform: 'scale(1.005)',
    },
  }

  const linkStyles: SystemStyleObject = {
    colorScheme: 'orange',
    color: 'whiteAlpha.900',
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

  // type of link
  const linkHasHash = link.includes('#')
  const newLink = linkHasHash ? `${path}${link}` : link

  return (
    <Box as="li">
      <Link
        className="main__nav-link"
        href={newLink}
        as={!linkHasHash ? NextLink : undefined}
        sx={linkStyles}
        aria-selected={isSelected}
        onClick={event => {
          const el = event.target as HTMLAnchorElement
          const elLink = el.href.split('#').at(-1)!

          const hash = elLink?.includes('http') ? '/' : `#${elLink}`

          onSelect(hash)
        }}
      >
        {title}
      </Link>
    </Box>
  )
}

export default NavLink
