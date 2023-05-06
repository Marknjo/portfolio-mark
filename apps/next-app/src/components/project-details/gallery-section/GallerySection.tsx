import { GridProps } from '@chakra-ui/react'
import {
  DotsBottomLeft,
  DotsTopRight,
  GradientVariants,
  MainGrid,
  defaultGradients,
} from 'ui'
import GalleryTitle from './GalleryTitle'
import GalleryImages from './GalleryImages'
import { BorderRadiusSize } from '../general-gallery-config'

const GallerySection = () => {
  const mainStyles: GridProps = {
    pb: '16',
    backgroundImage: defaultGradients(GradientVariants.Orange500to800),
    position: 'relative',
    zIndex: 'base',
    overflow: 'hidden',
    borderBottomLeftRadius: `${BorderRadiusSize.LG}rem`,
    borderTopRightRadius: `${BorderRadiusSize.LG}rem`,
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
