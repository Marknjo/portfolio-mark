import {
  Grid,
  GridItem,
  SystemStyleObject,
  useBreakpoint,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { IGallery } from '@data/types'
import { useSlider } from '@store/context/slider'
import { CardDetailsGallery, ExpandIconSize } from 'ui'

const GalleryImages = () => {
  const { mainStyles, leftImagesStyles } = useStyles()
  const { sliderItems, openSlider, setCurActiveSlide } = useSlider<IGallery>()

  return (
    <Grid sx={mainStyles}>
      {/* Main Image */}
      <GridItem sx={{ width: '100%' }}>
        <CardDetailsGallery
          alt={`${sliderItems.at(0)?.alt}`}
          imgName={`${sliderItems.at(0)?.fileName}`}
          openGallery={() => {
            setCurActiveSlide(0)
            openSlider()
          }}
        />
      </GridItem>

      {/* Images Container */}
      <Grid sx={leftImagesStyles}>
        {sliderItems.slice(1, 5).map((img, i) => (
          <CardDetailsGallery
            key={`${img.fileName}${img.id}`}
            alt={img.alt}
            imgName={img.fileName}
            iconSize={ExpandIconSize.md}
            openGallery={() => {
              setCurActiveSlide(i + 1)
              openSlider()
            }}
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
        base: 'repeat(auto-fit, 1fr)',
        sm: 'repeat(auto-fit, minmax(calc(48em/2), 1fr))',
      },
      gridTemplateRows: `[r1-start] 1fr [r1-end]`,
      gap: { base: '6', md: '4' },
    },

    leftImagesStyles: {
      gridTemplateColumns: {
        base: 'repeat(auto-fit, 45%)',
        sm: 'repeat(auto-fit, minmax(80px, 1fr))',
        md: 'repeat(auto-fit, minmax(150px, 1fr))',
        lg: 'repeat(auto-fit, minmax(200px, 1fr))',
        xl: 'repeat(auto-fit, minmax(256px, 1fr))',
      },
      gap: { base: '6', md: '4' },
      width: { base: '100%', sm: 'auto' },
      justifyContent: 'space-between',
      alignContent: { base: 'space-between', sm: 'inherit' },
    },
  }
}
