'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Flex,
  SystemStyleObject,
  keyframes,
  useSafeLayoutEffect,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { INavLink } from '@data/types'
import { useIsLoading } from '@hooks/is-loading'

import NavLink from './NavLink'

const animationKeyframes = keyframes`
  0% {
    transform: scale(0) translateX(1000px);
    opacity: 0;
    bottom: 0;
  }
  100%{
  transform: scale(1) translateX(0);
  opacity: 1;
  }
`

const NavList = ({
  navLinks,
  asHamburger,
}: {
  navLinks: Array<INavLink>
  asHamburger: boolean
}) => {
  const currentRoute = usePathname()
  const { isLoading } = useIsLoading()
  const [selectedLinkEl, setSelectedLinkEl] = useState<string | null>(null)

  useSafeLayoutEffect(() => {
    if (window) {
      setSelectedLinkEl(window.location.hash)
    }
  }, [])

  const isSelectedLinkItem = (link: string) => {
    const isSelected = isLoading
      ? false
      : `${currentRoute}${selectedLinkEl || ''}` === `${currentRoute}${link}` ||
        (link === '/' && selectedLinkEl === '')

    return isSelected
  }

  const navAnimation = `${animationKeyframes} .2s .4s ease-in backwards`
  const hamburgerListStyles: SystemStyleObject = {
    flexDirection: 'column',
    borderTop: '2px solid ',
    borderTopColor: 'blackAlpha.300',
    animation: navAnimation,
  }

  const listStyles: SystemStyleObject = {
    height: '100%',
    justifyContent: 'end',
    columnGap: '2.5',
    flexDirection: 'row',
    listStyle: 'none',
    bgColor: asHamburger && 'blackAlpha.200',
    ...(asHamburger ? hamburgerListStyles : {}),
  }

  return (
    <Flex as={motion.ul} sx={listStyles}>
      {navLinks.map(item => (
        <NavLink
          key={`${item.title}-${item.id}`}
          title={item.title}
          link={item.link}
          asHamburgerMenu={asHamburger}
          isSelected={isSelectedLinkItem(item.link)}
          onSelect={setSelectedLinkEl}
        />
      ))}
    </Flex>
  )
}
export default NavList
