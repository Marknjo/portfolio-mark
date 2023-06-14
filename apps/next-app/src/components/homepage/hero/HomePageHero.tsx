import React from 'react'
import { MainGrid } from 'ui'

import HeroLeftGrid from './HeroLeftGrid'
import HeroRightGrid from './HeroRightGrid'

// @TODO: animate button & add interactions to the profile image
const brand = 'orange'
const HomePageHero = () => (
  <MainGrid
    id="hero-section"
    as="header"
    options={{
      backgroundColor: `${brand}.500`,
      color: 'white',
      borderTop: '2px solid',
      borderTopColor: 'blackAlpha.400',
      overflowX: 'hidden',
    }}
  >
    {/* Grid Left */}
    <HeroLeftGrid />

    {/* Grid Right */}
    <HeroRightGrid />
  </MainGrid>
)

export default HomePageHero
