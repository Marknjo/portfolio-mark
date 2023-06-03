import NextLink from 'next/link'

import { Grid, GridItem } from '@chakra-ui/react'

import { GalleryImageCard } from 'ui'
import { useSlider } from '@store/context/slider'
import { IFavGallery } from '@data/favProjectImgs'

const FavGallery = () => {
  const {
    sliderItems,
    setCurActiveSlide: setCurSlide,
    openSlider,
  } = useSlider<IFavGallery>()

  const gridColumnDef = {
    base: 'repeat(auto-fit, minmax(18rem, 1fr))',
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
          key={img.id}
          imgName={img.imgName}
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
