'use client'

import React, { SyntheticEvent, useCallback, useState } from 'react'
import { GridItem, GridProps, SystemStyleObject } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { MainGrid } from 'ui'
import { INavLink } from '@data/navLinks'

import LogoText from './LogoText'
import Hamburger from './Hamburger'
import NavList from './NavList'

export enum MenuMode {
  NORMAL = 'normal',
  HAMBURGER = 'hamburger',
}

/// Styles
const navElStyles = (showHamburger: boolean) => {
  /* Nav Styles */
  const navStylesWithHamburger: SystemStyleObject = {
    gridColumn: 'content-start/content-end',
    gridRow: 'nav-start/nav-end',
  }
  const navStyles: SystemStyleObject = {
    gridColumn: 'col-start 5/content-end',
    ...(showHamburger ? navStylesWithHamburger : {}),
  }

  return navStyles
}

const navContainerStyles = (showHamburger: boolean) => {
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

  return mainStyles
}

/// Component
// @TODO: monitor screen sizes to enable hamburger menu
// @TODO: use global state useContext to manage menu state - is complex
const MainTopNav = ({
  navLinks,
  displayMode = MenuMode.NORMAL,
}: {
  navLinks: Array<INavLink>
  displayMode: MenuMode
}) => {
  const [showHamburger, setShowHamburger] = useState(false)

  const handleToggleHamburger = (isToggled: boolean) => {
    setShowHamburger(isToggled)
  }

  const hamburgerCloseHandler = (event: SyntheticEvent) => {
    const targetEl = event.target as HTMLElement
    const linkEl = targetEl!.closest('.main__nav-link')

    if (!linkEl) return

    setShowHamburger(!showHamburger)
  }

  return (
    <MainGrid
      options={useCallback(navContainerStyles, [showHamburger])(showHamburger)}
    >
      {/* Logo */}
      <LogoText asHamburger={showHamburger} />

      {/* Nav Hamburger */}
      {displayMode === MenuMode.HAMBURGER && (
        <Hamburger
          onShow={handleToggleHamburger}
          closeOverlay={showHamburger}
        />
      )}

      {/* Nav  */}
      <GridItem
        as={motion.nav}
        sx={useCallback(navElStyles, [showHamburger])(showHamburger)}
        onClick={hamburgerCloseHandler}
      >
        {/* Normal Navigation */}
        {showHamburger ||
          (displayMode !== MenuMode.HAMBURGER && (
            <NavList navLinks={navLinks} asHamburger={showHamburger} />
          ))}

        {/* Derived Hamburger Navigation  */}
        {showHamburger && displayMode === MenuMode.HAMBURGER && (
          <NavList navLinks={navLinks} asHamburger={showHamburger} />
        )}
      </GridItem>
    </MainGrid>
  )
}

export default MainTopNav
