import { useEffect } from 'react'
import { GridProps } from '@chakra-ui/react'
import {
  DotsBottomLeft,
  DotsTopRight,
  GradientVariants,
  MainGrid,
  defaultGradients,
} from 'ui'
import { largeBorderBrP, sizes } from '@components/next-ui'

/// local
import { useSlider } from '@store/context/slider'
import GallerySlider from '@components/next-ui/gallery-slider/GallerySlider'
import { useDetailsPageData } from '@store/context/details-page-context'

import GalleryTitle from './GalleryTitle'
import GalleryImages from './GalleryImages'

const GalleryRoot = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()

  const { gallery } = projectData!
  const { setSliderIsModal, setSlideItems } = useSlider()

  useEffect(() => {
    setSliderIsModal(true)
    setSlideItems(gallery)
  }, [setSlideItems, setSliderIsModal, gallery])

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

      <GallerySlider />
    </MainGrid>
  )
}

export default GalleryRoot

const mainStyles: GridProps = {
  pb: sizes.xl,
  backgroundImage: defaultGradients(GradientVariants.Orange500to800),
  position: 'relative',
  zIndex: 'base',
  overflow: 'hidden',
  borderBottomLeftRadius: largeBorderBrP,
  borderTopRightRadius: largeBorderBrP,
  id: 'gallery-section',
}
