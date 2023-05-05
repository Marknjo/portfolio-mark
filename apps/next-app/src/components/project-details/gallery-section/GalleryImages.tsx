import { Grid, GridItem, SystemStyleObject } from '@chakra-ui/react'

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
    gridRow: 'r1-start/r1-end',
    gridColumn: '1 / span 1',
  }

  return (
    <Grid sx={mainStyles}>
      {/* Main Image */}
      <GridItem gridRow="r1-start/r1-end">Image</GridItem>

      {/* Images Container */}
      <Grid sx={leftImagesStyles} gridColumn="2 / span 1">
        4 Images
      </Grid>
    </Grid>
  )
}

export default GalleryImages
