/* eslint-disable @typescript-eslint/no-use-before-define */
import { GridProps } from '@chakra-ui/react'
import {
  DotsBottomLeft,
  DotsTopRight,
  GradientVariants,
  MainGrid,
  defaultGradients,
} from 'ui'
import { largeBorderBrP, sizes } from '@components/next-ui'

import GalleryTitle from './GalleryTitle'
import GalleryImages from './GalleryImages'

const GallerySection = () => (
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

export default GallerySection

const mainStyles: GridProps = {
  pb: sizes.xl,
  backgroundImage: defaultGradients(GradientVariants.Orange500to800),
  position: 'relative',
  zIndex: 'base',
  overflow: 'hidden',
  borderBottomLeftRadius: largeBorderBrP,
  borderTopRightRadius: largeBorderBrP,
}
