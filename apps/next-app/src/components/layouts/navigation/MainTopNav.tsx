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
  const breakPoint = useBreakpoint({ ssr: false })

  /// monitor screen sizes to enable hamburger menu
  useEffect(() => {
    const isSmallScreen =
      breakPoint === 'md' || breakPoint === 'sm' || breakPoint === 'base'

    if (isSmallScreen && displayMode !== MenuMode.HAMBURGER) {
      setIsHamburgerMode(MenuMode.HAMBURGER)
      setHideHamburger(false)
      setShowHamburger(true)
    }

    if (!isSmallScreen && displayMode !== MenuMode.HAMBURGER) {
      setIsHamburgerMode(displayMode)
      setHideHamburger(true)
      setShowHamburger(false)
    }
  }, [breakPoint, displayMode])

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
