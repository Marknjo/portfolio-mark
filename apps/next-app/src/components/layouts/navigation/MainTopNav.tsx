import React from 'react'
import { Flex, GridItem } from '@chakra-ui/react'

import { MainGrid } from 'ui'
import { INavLink } from '@data/navLinks'
import LogoText from './LogoText'
import NavLink from './NavLink'

const MainTopNav = ({ navLinks }: { navLinks: Array<INavLink> }) => (
  <MainGrid
    id="main-nav"
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
        {navLinks.map(item => (
          <NavLink key={item.title} title={item.title} link={item.link} />
        ))}
      </Flex>
    </GridItem>
  </MainGrid>
)

export default MainTopNav
