import { Box, Flex, Image, SystemStyleObject } from '@chakra-ui/react'
import { useSlider } from '@store/context/slider'

/// @TODO: Use actual image thumbnails
/// @TODO: add position of placement settings, top, right, left or like current bottom

/**
 * Set's slider thumbnails for previewing selected items
 */
function SliderThumbs<T extends { [key: string]: any }>() {
  const { sliderItems, curActiveSlide, setCurActiveSlide } = useSlider<T>()
  // Styles
  const styles = useStyles()

  return (
    <Flex sx={styles.imgThumbsContainer}>
      {sliderItems.map((imgData, i) => {
        const isSelected = i === curActiveSlide

        return (
          <Box
            key={imgData.id}
            aria-selected={isSelected}
            sx={styles.imgThumbWrapper}
          >
            <Image
              src={`/images/${imgData.imgName}.jpg`}
              sx={styles.imgThumb}
              alt={imgData.title}
              // onClick={() => onSelectActiveSlide(i)}
              onClick={() => setCurActiveSlide(i)}
            />
          </Box>
        )
      })}
    </Flex>
  )
}

export default SliderThumbs

/* Styles */
interface Styles {
  imgThumb: SystemStyleObject
  imgThumbWrapper: SystemStyleObject
  imgThumbsContainer: SystemStyleObject
}

const useStyles = (): Styles => {
  const imgThumbSettings = {
    maxW: { base: 12, md: 20 },
    maxH: { base: 8, md: 16 },
  }

  return {
    imgThumbsContainer: {
      gap: { base: '1', sm: '2', md: '3' },
      justifyContent: 'center',
      alignItems: 'center',
    },
    imgThumbWrapper: {
      borderRadius: { base: 'sm', md: 'md' },
      overflow: 'hidden',
      transition: 'transform .35s',
      boxShadow: { base: 'sm', md: 'md' },
      _hover: {
        transform: { base: 'scale(1.05)', md: 'scale(1.1)' },
        border: '2px solid',
        borderColor: 'whiteAlpha.500',
      },
      _active: {
        transform: 'scale(0.9)',
      },
      _selected: {
        border: { base: '2px solid', md: '4px solid' },
        borderColor: { base: 'whiteAlpha.500', md: 'whiteAlpha.500' },
        transform: 'scale(1.05)',
      },
    },

    imgThumb: {
      maxW: imgThumbSettings.maxW,
      maxH: imgThumbSettings.maxH,
      objectFit: 'cover',
      cursor: 'pointer',
      _active: {
        transform: 'scale(0.9)',
      },
      transition: 'transform .2s .15s',
      _hover: {
        transform: { base: 'scale(1.05)', md: 'scale(1.1)' },
      },
    },
  }
}
