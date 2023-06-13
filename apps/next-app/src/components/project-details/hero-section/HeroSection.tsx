import { Box, GridProps, SystemStyleObject } from '@chakra-ui/react'
import { Image } from '@chakra-ui/next-js'

import { GradientVariants, MainGrid, customGradientWithImg } from 'ui'
import { largeBorderBrP, sizes } from '@components/next-ui'

import HeroTitle from './HeroTitle'
import HeroIntro from './HeroIntro'
import HeroImg from './HeroImg'

const HeroSection = () => {
  const rowBrp = {
    base: `[nav-start]
      50px [nav-end title-start]
      auto [title-end r1-start]
      auto [r1-end r2-start]
      8rem [r2-end r3-start]
      auto [r3-end]
    `,
    sm: `[nav-start]
    50px [nav-end title-start]
    auto [title-end r1-start]
    auto [r1-end r2-start]
    12rem [r2-end r3-start]
    auto [r3-end]
  `,
    md: `[nav-start]
    50px [nav-end title-start]
    auto [title-end r1-start]
    auto [r1-end r2-start]
    16rem [r2-end r3-start]
    auto [r3-end]
  `,
    lg: `[nav-start]
    100px [nav-end title-start]
    auto [title-end r1-start]
    auto [r1-end r2-start]
    18rem [r2-end r3-start]
    auto [r3-end]
  `,
  }
  const mainStyles: GridProps = {
    // backgroundColor: 'orange.600',
    borderBottomLeftRadius: largeBorderBrP,
    borderBottom: '2px solid',
    borderBottomColor: 'orange.200',
    position: 'relative',
    zIndex: 0,
    overflow: 'hidden',
    // Define grid
    gridTemplateRows: rowBrp,
    pb: sizes.xl,
    pt: sizes.nav_pd,
    id: 'hero-section',
  }

  const largeImg = 'homepage-sectioning'

  const largeImgWrapperStyles: SystemStyleObject = {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundImage: customGradientWithImg(
      GradientVariants.OrangeCustom500To800,
    ),
    backdropFilter: 'blur(10px)',
    opacity: 0.8,
    zIndex: 2,
    width: '100%',
    height: '100%',
  }

  const largeImgStyles: SystemStyleObject = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <MainGrid options={mainStyles} as="header" id="hero-section">
      <Box sx={largeImgWrapperStyles} />
      <Image
        sx={largeImgStyles}
        alt={largeImg.split('-').join(' ')}
        src={`/images/${largeImg}.jpg`}
        width={1542}
        height={6858}
        quality={30}
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4GhHgAGlQIwzd3mYAAAAABJRU5ErkJggg=="'
        loading="lazy"
        placeholder="blur"
      />

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
