import React from 'react'
import { MainGrid } from 'ui'
import HeroLeftGrid from './HeroLeftGrid'
import HeroRightGrid from './HeroRightGrid'

const HomePageHero = () => (
  <MainGrid
    id="hero-section"
    as="header"
    options={{
      backgroundColor: 'orange.500',
      color: 'white',
      borderTop: '2px solid',
      borderTopColor: 'blackAlpha.400',
    }}
  >
    {/* Grid Left */}
    <HeroLeftGrid />

    {/* Grid Right */}
    <HeroRightGrid />
  </MainGrid>
)

export default HomePageHero
