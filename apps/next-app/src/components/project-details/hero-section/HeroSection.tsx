import { GridProps } from '@chakra-ui/react'
import { GradientVariants, MainGrid, customGradientWithImg } from 'ui'
import { sizes } from '@components/next-ui'

import { BorderRadiusSize } from '../general-gallery-config'
import HeroTitle from './HeroTitle'
import HeroIntro from './HeroIntro'
import HeroImg from './HeroImg'

const HeroSection = () => {
  const mainStyles: GridProps = {
    // backgroundColor: 'orange.600',
    backgroundImage: customGradientWithImg(
      GradientVariants.OrangeCustom500To800,
      'homepage-sectioning.jpg',
    ),
    backgroundSize: 'cover',
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    borderBottomLeftRadius: `${BorderRadiusSize.MD}rem`,

    // Define grid
    gridTemplateRows: `[nav-start]
      100px [nav-end title-start]
      auto [title-end r1-start]
      auto [r1-end r2-start]
      18rem [r2-end r3-start]
      auto [r3-end]
    `,
    pb: sizes.xl,
  }

  return (
    <MainGrid options={mainStyles} as="header" id="hero-section">
      {/* Main Title */}
      <HeroTitle />

      {/* Introduction */}
      <HeroIntro />

      {/* Top Image */}
      <HeroImg />
    </MainGrid>
  )
}

export default HeroSection
