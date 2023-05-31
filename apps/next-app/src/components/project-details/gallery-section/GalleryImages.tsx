/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Grid,
  GridItem,
  SystemStyleObject,
  useBreakpoint,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { gridImages } from '@data/gridImages'
import { CardDetailsGallery, ExpandIconSize } from 'ui'

const GalleryImages = () => {
  const { mainStyles, leftImagesStyles } = useStyles()

  return (
    <Grid sx={mainStyles}>
      {/* Main Image */}
      <GridItem>
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

/* Component styles */
const useStyles = (): {
  mainStyles: SystemStyleObject
  leftImagesStyles: SystemStyleObject
} => {
  const brkP = useBreakpoint()

  return {
    mainStyles: {
      gridColumn: 'content-start / content-end',
      py: sizes.lg,
      zIndex: '2',
      ...(brkP === 'base' ? { justifyItems: 'center' } : {}),
      gridTemplateColumns: {
        base: 'repeat(auto-fit, minmax(1fr, 1fr))',
        md: 'repeat(auto-fit, minmax(calc(48em/2), 1fr))',
      },
      gridTemplateRows: `[r1-start] 1fr [r1-end]`,
      gap: { base: '6', md: '4' },
    },

    leftImagesStyles: {
      gridTemplateColumns: {
        base: 'repeat(auto-fit, minmax(160px, 1fr))',
        sm: 'repeat(auto-fit, minmax(80px, 1fr))',
        md: 'repeat(auto-fit, minmax(150px, 1fr))',
        lg: 'repeat(auto-fit, minmax(200px, 1fr))',
        xl: 'repeat(auto-fit, minmax(256px, 1fr))',
      },
      gap: { base: '6', md: '4' },
    },
  }
}
