import { Grid, GridItem, SystemStyleObject } from '@chakra-ui/react'
import { CardDetailsGallery, ExpandIconSize, ICardDetailsGallery } from 'ui'

type GalleryImgInterface = Pick<ICardDetailsGallery, 'imgName' | 'alt' | 'id'>

/* 
 overlayColor?: string
  largeImg?: string // @TODO: link to the main gallery image
  onExpandClick?: (imgName: string) => void
  iconSize?: ExpandIconSize

*/

const gridImages: Array<GalleryImgInterface> = [
  {
    id: 1,
    imgName: 'gallery-skills-section',
    alt: 'A screenshot of project a gallery section',
  },
  {
    id: 2,
    imgName: 'gallery-contact-section',
    alt: 'A screenshot of project contact section',
  },
  {
    id: 3,
    imgName: 'gallery-projects-section',
    alt: 'A screenshot of projects section design',
  },
  {
    id: 4,
    imgName: 'gallery-fav-section',
    alt: 'A screenshot of project favorite section design',
  },
]

const GalleryImages = () => {
  const mainStyles: SystemStyleObject = {
    gridColumn: 'content-start / content-end',
    py: '12',
    zIndex: '2',

    gridTemplateColumns: 'repeat(auto-fit, 50%)',
    gridTemplateRows: `[r1-start] 1fr [r1-end]`,
    gap: '12',
  }

  const leftImagesStyles: SystemStyleObject = {
    gridTemplateColumns: 'repeat(2, [col-start]minmax(200px, 340px)[col-end])',
    gridRow: 'r1-start/r1-end',
    gridColumn: '2 / span 1',
    gap: '4',
  }

  return (
    <Grid sx={mainStyles}>
      {/* Main Image */}
      <GridItem gridRow="r1-start/r1-end" gridColumn="1 / span 1">
        <CardDetailsGallery
          alt="A screenshot of project profile section design"
          imgName="gallery-profile-lg-img"
        />
      </GridItem>

      {/* Images Container */}
      <Grid sx={leftImagesStyles}>
        {gridImages.map(img => (
          <CardDetailsGallery
            key={`${img.imgName}${img.id}`}
            alt={img.alt}
            imgName={img.imgName}
            iconSize={ExpandIconSize.md}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default GalleryImages
