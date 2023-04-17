import { Grid, GridItem, Image } from '@chakra-ui/react'

interface FavGalleryImgInterface {
  id: number
  imgName: string
  alt: string
}

const gridImages: Array<FavGalleryImgInterface> = [
  {
    id: 1,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
  },
  {
    id: 2,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
  },
  {
    id: 3,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
  },
  {
    id: 4,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
  },
  {
    id: 5,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
  },
  {
    id: 6,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
  },
]

const FavGalleryCard = ({
  imgName,
  alt,
}: Omit<FavGalleryImgInterface, 'id'>) => (
  <GridItem>
    <Image src={`./images/${imgName}.jpg`} alt={alt} />
  </GridItem>
)

const FavGallery = () => {
  const gridColumnDef = {
    sm: 'repeat(auto-fit, minmax(18rem, 1fr))',
  }

  return (
    <GridItem
      gridColumn="col-start 4 / content-end"
      gridRow="r3-start/r4-end"
      zIndex="2"
    >
      <Grid gridTemplateColumns={gridColumnDef} gap="3">
        {gridImages.map(img => (
          <FavGalleryCard key={img.id} imgName={img.imgName} alt={img.alt} />
        ))}
      </Grid>
    </GridItem>
  )
}
export default FavGallery
