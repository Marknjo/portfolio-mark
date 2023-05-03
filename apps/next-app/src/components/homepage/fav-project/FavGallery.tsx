import NextLink from 'next/link'

import { Grid, GridItem } from '@chakra-ui/react'

import { GalleryImageCard, GalleryImageCardInterface } from 'ui'

type FavGalleryImgInterface = Omit<GalleryImageCardInterface, 'asNavLink'>

const gridImages: Array<FavGalleryImgInterface> = [
  {
    id: 1,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 2,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 3,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 4,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 5,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 6,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
]

const FavGallery = () => {
  const gridColumnDef = {
    sm: 'repeat(auto-fit, minmax(18rem, 1fr))',
  }

  return (
    <GridItem
      gridColumn="col-start 4 / content-end"
      gridRow="r3-start/r4-end"
      zIndex="2"
      id="fav-gallery"
    >
      <Grid gridTemplateColumns={gridColumnDef} gap="3">
        {gridImages.map(img => (
          <GalleryImageCard
            key={img.id}
            imgName={img.imgName}
            title={img.title}
            alt={img.alt}
            asNavLink={NextLink}
          />
        ))}
      </Grid>
    </GridItem>
  )
}
export default FavGallery
