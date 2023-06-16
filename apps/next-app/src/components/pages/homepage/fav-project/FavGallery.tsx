import NextLink from 'next/link'

import { Grid, GridItem } from '@chakra-ui/react'

import { GalleryImageCard } from 'ui'
import { useSlider } from '@store/context/slider'
import { IGallery } from '@data/types'
import { useId } from 'react'

const FavGallery = () => {
  const imgId = useId()
  const {
    sliderItems,
    setCurActiveSlide: setCurSlide,
    openSlider,
  } = useSlider<IGallery>()

  const gridColumnDef = {
    base: 'repeat(auto-fit, minmax(16em, 1fr))',
    sm: 'repeat(auto-fit, minmax(12em, 1fr))',
    md: 'repeat(auto-fit, minmax(14em, 1fr))',
    lg: 'repeat(auto-fit, minmax(18em, 1fr))',
  }

  const rowBreakpoint = {
    base: 'col-start 1 / content-end',
    sm: 'col-start 2 / content-end',
    lg: 'col-start 4 / content-end',
  }

  /// Open slider and set the current selected slide
  const openGalleryHandler = (selectedSlide: number) => {
    setCurSlide(selectedSlide)
    openSlider()
  }

  return (
    <GridItem
      gridColumn={rowBreakpoint}
      gridRow="r3-start/r4-end"
      zIndex="2"
      id="fav-gallery"
      /* // */
      justifyContent="space-between"
      gridTemplateColumns={gridColumnDef}
      gap="4"
      as={Grid}
    >
      {sliderItems.map((img, i) => (
        <GalleryImageCard
          key={`${imgId}-${img.id + i}`}
          imgName={img.fileName}
          title={img.title}
          alt={img.alt}
          asNavLink={NextLink}
          onClick={event => {
            event.preventDefault()
            openGalleryHandler(i)
          }}
        />
      ))}
    </GridItem>
  )
}
export default FavGallery
