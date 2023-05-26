import { GridProps } from '@chakra-ui/react'
import {
  DotsBottomLeft,
  DotsTopRight,
  GradientVariants,
  MainGrid,
  defaultGradients,
} from 'ui'
import { sizes } from '@components/next-ui'

import GalleryTitle from './GalleryTitle'
import GalleryImages from './GalleryImages'
import { BorderRadiusSize } from '../general-gallery-config'

const GallerySection = () => {
  const mainStyles: GridProps = {
    pb: sizes.lg,
    backgroundImage: defaultGradients(GradientVariants.Orange500to800),
    position: 'relative',
    zIndex: 'base',
    overflow: 'hidden',
    borderBottomLeftRadius: `${BorderRadiusSize.MD}rem`,
    borderTopRightRadius: `${BorderRadiusSize.MD}rem`,
  }

  return (
    <MainGrid options={mainStyles} as="section" id="gallery-section">
      {/* Top Dots */}
      <DotsTopRight width={24} />

      {/* Main Title */}
      <GalleryTitle />

      {/* Gallery Collection */}
      <GalleryImages />

      {/* Bottom Left Dots */}
      <DotsBottomLeft width={24} />
    </MainGrid>
  )
}

export default GallerySection
