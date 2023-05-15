import React, { useState } from 'react'
import {
  Flex,
  GridItem,
  GridProps,
  SystemStyleObject,
  keyframes,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { MainGrid } from 'ui'
import { INavLink } from '@data/navLinks'
import LogoText from './LogoText'
import NavLink from './NavLink'
import Hamburger from './Hamburger'

export enum MenuMode {
  NORMAL = 'normal',
  HAMBURGER = 'hamburger',
}

const animationNavKeyFrames = keyframes`
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

const MainTopNav = ({
  navLinks,
  displayMode = MenuMode.NORMAL,
}: {
  navLinks: Array<INavLink>
  displayMode: MenuMode
}) => {
  const [showHamburger, setShowHamburger] = useState(false)

  /* Menu Styles */
  const menuWithHamburgerStyles: SystemStyleObject = {
    alignItems: 'start',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: 'sticky',
    gridTemplateRows: `[icon-start]
      80px [icon-end nav-start]
      auto [nav-end]
    `,
    justifyItems: 'center',
  }

  const menuWithoutHamburgerStyles: SystemStyleObject = {
    backgroundColor: 'orange.600',
  }

  const mainStyles: GridProps = {
    sx: showHamburger ? menuWithHamburgerStyles : menuWithoutHamburgerStyles,
    id: 'main-nav',
  }

  /* Logo Styles */
  const logoStylesWithHamburger: SystemStyleObject = {
    gridColumn: 'content-start/content-end',
    gridRow: 'icon-start/icon-end',
    alignSelf: 'center',
  }
  const logoTextStyles: SystemStyleObject = {
    ...(showHamburger ? logoStylesWithHamburger : {}),
  }

  /* Nav Styles */
  const navStylesWithHamburger: SystemStyleObject = {
    gridColumn: 'content-start/content-end',
    gridRow: 'nav-start/nav-end',
  }
  const navStyles: SystemStyleObject = {
    gridColumn: 'col-start 5/content-end',
    ...(showHamburger ? navStylesWithHamburger : {}),
  }

  /* UL Styles */
  const navAnimation = `${animationNavKeyFrames} .2s .4s ease-in backwards`
  const ulHamburgerMenu: SystemStyleObject = {
    flexDirection: 'column',

    borderTop: '2px solid ',
    borderTopColor: 'blackAlpha.100',
    animation: navAnimation,
  }

  const ulStyles: SystemStyleObject = {
    height: '100%',
    justifyContent: 'end',
    columnGap: '2.5',
    flexDirection: 'row',
    ...(showHamburger ? ulHamburgerMenu : {}),
  }

  const handleToggleHamburger = (isToggled: boolean) => {
    setShowHamburger(isToggled)
  }

  return (
    <MainGrid options={mainStyles}>
      {/* Logo */}
      <LogoText sxOverrides={logoTextStyles} asHamburger={showHamburger} />

      {/* Navigation */}
      {displayMode === MenuMode.HAMBURGER && (
        <Hamburger onToggle={handleToggleHamburger} />
      )}

      <GridItem as={motion.nav} sx={navStyles}>
        {showHamburger ||
          (displayMode !== MenuMode.HAMBURGER && (
            <Flex as={motion.ul} sx={ulStyles}>
              {navLinks.map(item => (
                <NavLink
                  key={item.title}
                  title={item.title}
                  link={item.link}
                  asHamburgerMenu={showHamburger}
                />
              ))}
            </Flex>
          ))}

        {showHamburger && displayMode === MenuMode.HAMBURGER && (
          <Flex as={motion.ul} sx={ulStyles}>
            {navLinks.map(item => (
              <NavLink
                key={item.title}
                title={item.title}
                link={item.link}
                asHamburgerMenu={showHamburger}
              />
            ))}
          </Flex>
        )}
      </GridItem>
    </MainGrid>
  )
}

export default MainTopNav
