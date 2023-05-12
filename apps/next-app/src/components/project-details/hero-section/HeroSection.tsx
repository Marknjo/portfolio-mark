import { GridProps } from '@chakra-ui/react'
import { GradientVariants, MainGrid, customGradientWithImg } from 'ui'
import { BorderRadiusSize } from '../general-gallery-config'

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
      12rem [r2-end r3-start]
      auto [r3-end]
    `,
    pb: '16',
  }

  return (
    <MainGrid options={mainStyles} as="header" id="hero-section">
      {/* Main Title */}
      {/* Introduction */}
      {/* Top Image */}
    </MainGrid>
  )
}

export default HeroSection
