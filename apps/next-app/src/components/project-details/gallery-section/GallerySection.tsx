import { GridProps } from '@chakra-ui/react'
import {
  DotsBottomLeft,
  DotsTopRight,
  GradientVariants,
  MainGrid,
  defaultGradients,
} from 'ui'
import GalleryTitle from './GalleryTitle'

const GallerySection = () => {
  const mainStyles: GridProps = {
    pb: '16',
    backgroundImage: defaultGradients(GradientVariants.Orange500to800),
    position: 'relative',
    zIndex: 'base',
  }

  return (
    <MainGrid options={mainStyles} as="section" id="gallery-section">
      {/* Top Dots */}
      <DotsTopRight width={24} />

      {/* Main Title */}
      <GalleryTitle />

      {/* Gallery Collection */}
      {/* Bottom Left Dots */}
      <DotsBottomLeft width={24} />
    </MainGrid>
  )
}

export default GallerySection
