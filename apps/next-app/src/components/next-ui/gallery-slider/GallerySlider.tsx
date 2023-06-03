import { Modal, ModalBody, SystemStyleObject } from '@chakra-ui/react'

/// Local
import Slider from '@components/next-ui/slider/Slider'
import { IFavGallery } from '@data/favProjectImgs'
import { useSlider } from '@store/context/slider'

// local

// components
import GalleryImg from './GalleryImg'
import GalleryToolkit from './GalleryToolkit'

/// @TODO: Compute the max size of the modal based on the gallery image
/// @TODO: Lazy load the loaded image to prevent image slash on load

const GallerySlider = () => {
  const { sliderSizes, isSliderOpen, closeSlider } = useSlider<IFavGallery>()

  // Styles
  const styles = useStyles(sliderSizes.height)

  return (
    <Modal
      isOpen={isSliderOpen}
      onClose={closeSlider}
      motionPreset="scale"
      size="4xl"
    >
      <GalleryToolkit>
        <ModalBody sx={styles.galleryBody} className="gallery-slider">
          <Slider<IFavGallery> SliderComponent={GalleryImg} />
        </ModalBody>
      </GalleryToolkit>
    </Modal>
  )
}

export default GallerySlider

/* Styles */
interface Styles {
  galleryBody: SystemStyleObject
}

const useStyles = (minH: number): Styles => ({
  galleryBody: {
    display: 'flex',
    justifyContent: 'center',
    p: '0',
    overflow: 'hidden',
    ...(minH ? { minH: `${minH}px` } : {}),
    width: '100%',
    borderRadius: 'md',
  },
})
