'use client'

import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react'
import {
  GridItem,
  GridProps,
  SystemStyleObject,
  useBreakpoint,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { MainGrid } from 'ui'
import { INavLink } from '@data/types'

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
    mt: '6',
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
    minH: '55px',
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
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
    boxShadow: 'base',
    maxH: '58px',
  }

  const mainStyles: GridProps = {
    sx: showHamburger ? menuWithHamburgerStyles : menuWithoutHamburgerStyles,
    id: 'main-nav',
  }

  return mainStyles
}

/// Component
// @TODO: use global state useContext to manage menu state - is complex
const MainTopNav = ({
  navLinks,
  displayMode = MenuMode.NORMAL,
}: {
  navLinks: Array<INavLink>
  displayMode: MenuMode
}) => {
  const [isHamburgerMode, setIsHamburgerMode] = useState(displayMode)
  const [hideHamburger, setHideHamburger] = useState(false)
  const [showHamburger, setShowHamburger] = useState(false)
  const breakPoint = useBreakpoint()

  /// monitor screen sizes to enable hamburger menu
  useEffect(() => {
    const isSmallScreen = breakPoint === 'base' || breakPoint === 'sm'

    function menuAsHamburger() {
      setIsHamburgerMode(MenuMode.HAMBURGER)
      setHideHamburger(false)
      setShowHamburger(true)
    }

    /// ensure screen sizes below sm menu is displayed as Hamburger
    if (isSmallScreen && isHamburgerMode !== MenuMode.HAMBURGER) {
      menuAsHamburger()
    }

    /// For normal menus, this toggles hamburger mode on screen sizes above sm
    if (!isSmallScreen && isHamburgerMode === MenuMode.HAMBURGER) {
      setIsHamburgerMode(MenuMode.NORMAL)
      setHideHamburger(true)
      setShowHamburger(false)
    }

    /// ensures if a menu is hamburger it stays hamburger across all screen sizes
    if (!isSmallScreen && displayMode === MenuMode.HAMBURGER) {
      menuAsHamburger()
    }
  }, [breakPoint, isHamburgerMode, displayMode])

  const handleToggleHamburger = (isToggled: boolean) => {
    setShowHamburger(isToggled)
    setHideHamburger(false)
  }

  const hamburgerCloseHandler = (event: SyntheticEvent) => {
    const targetEl = event.target as HTMLElement
    const linkEl = targetEl!.closest('.main__nav-link')

    if (!linkEl) return

    setHideHamburger(true)
  }

  return (
    <MainGrid
      options={useCallback(navContainerStyles, [showHamburger])(showHamburger)}
    >
      {/* Logo */}
      <LogoText asHamburger={showHamburger} />
      {/* Nav Hamburger */}
      {isHamburgerMode === MenuMode.HAMBURGER && (
        <Hamburger
          onShow={handleToggleHamburger}
          closeOverlay={hideHamburger}
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
          (isHamburgerMode !== MenuMode.HAMBURGER && (
            <NavList navLinks={navLinks} asHamburger={showHamburger} />
          ))}

        {/* Derived Hamburger Navigation  */}
        {showHamburger && isHamburgerMode === MenuMode.HAMBURGER && (
          <NavList navLinks={navLinks} asHamburger={showHamburger} />
        )}
      </GridItem>
    </MainGrid>
  )
}

export default MainTopNav
