import { useEffect } from 'react'
import { StyleProps } from '@chakra-ui/react'
import { DotsBottomRight, MainGrid } from 'ui'
import { sizes } from '@components/next-ui'

import { useSlider } from '@store/context/slider'
import GallerySlider from '@components/next-ui/gallery-slider/GallerySlider'
import { useHomePageData } from '@store/context/homepage-context'
import { IHomePageContentV1 } from '@data/types'

import FavTitle from './FavTittle'
import FavBg from './FavBg'
import FavContent from './FavContent'
import FavGallery from './FavGallery'

const FavProjectRoot = () => {
  const { setSlideItems, setSliderIsModal } = useSlider()
  const {
    data: { favProject },
  } = useHomePageData<IHomePageContentV1>()

  /* Configure gallery slider */
  useEffect(() => {
    setSlideItems(favProject)
    setSliderIsModal(true)
  }, [setSlideItems, setSliderIsModal, favProject])

  const styles = useStyles()
  return (
    <MainGrid id="fav-section" as="section" options={styles.mainWrapper}>
      {/* Main Title */}
      <FavTitle />

      {/* Fav BG */}
      <FavBg />

      {/* Fav Gallery */}
      <FavGallery />

      {/* Content */}
      <FavContent />

      <DotsBottomRight width={22} fill="#ED8936" />

      <GallerySlider />
    </MainGrid>
  )
}

export default FavProjectRoot

interface Styles {
  mainWrapper: StyleProps
}

const useStyles = (): Styles => {
  const gridRows = {
    base: `
        [r1-start]
        auto [r1-end r2-start]
        auto [r2-end r3-start]
        auto [r3-end r4-start]
        8rem [r4-end r5-start]
        auto [r5-end]        
        `,
  }

  return {
    mainWrapper: {
      gridTemplateRows: gridRows,
      backgroundColor: 'orange.50',
      py: sizes.xl,
      position: 'relative',
      zIndex: '0',
    },
  }
}
