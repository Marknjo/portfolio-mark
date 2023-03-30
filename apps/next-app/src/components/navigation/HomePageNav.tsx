import React from 'react'
import { Flex, GridItem } from '@chakra-ui/react'

import { MainGrid } from 'ui'
import LogoText from './LogoText'
import NavLink from './NavLink'
import { NavItem } from './NavItem.interface'

const navItems: Array<NavItem> = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '#about-section',
  },
  {
    title: 'Projects',
    link: '#projects-section',
  },
  {
    title: 'Fav',
    link: '#fav-section',
  },
  {
    title: 'Skills',
    link: '#skills-section',
  },
  {
    title: 'Contact',
    link: '#contact-section',
  },
]

const HomePageNav = () => (
  <MainGrid
    options={{
      backgroundColor: 'orange.600',
    }}
  >
    {/* Logo */}
    <LogoText />

    {/* Navigation */}
    <GridItem as="nav" gridColumn="col-start 5/content-end">
      {/* @TODO: Implement hamburger menu */}

      {/* Links */}
      <Flex
        as="ul"
        height="100%"
        justifyContent="end"
        columnGap="2.5"
        flexDirection="row"
      >
        {navItems.map(item => (
          <NavLink key={item.title} title={item.title} link={item.link} />
        ))}
      </Flex>
    </GridItem>
  </MainGrid>
)

export default HomePageNav
