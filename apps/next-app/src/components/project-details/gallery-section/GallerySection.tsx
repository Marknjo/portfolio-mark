import { GridProps } from '@chakra-ui/react'
import { GradientVariants, MainGrid, defaultGradients } from 'ui'

const GallerySection = () => {
  const mainStyles: GridProps = {
    pb: '16',
    backgroundImage: defaultGradients(GradientVariants.Orange500to800),
  }

  return (
    <MainGrid options={mainStyles} as="section" id="gallery-section">
      {/* Top Dots */}
      {/* Main Title */}
      {/* Gallery Collection */}
      {/* Bottom Left Dots */}
    </MainGrid>
  )
}

export default GallerySection
