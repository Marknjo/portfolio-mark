import {
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SystemStyleObject,
} from '@chakra-ui/react'
import SliderThumbs from '@components/next-ui/slider/SliderThumbs'
import { IGallery } from '@data/types'
import { useSlider } from '@store/context/slider'
import { ReactNode } from 'react'

const GalleryToolkit = ({ children }: { children: ReactNode }) => {
  const { slideTitle } = useSlider()

  // styles
  const styles = useStyles()

  return (
    <>
      <ModalOverlay sx={styles.overlay} />
      <ModalContent sx={styles.mainWrapper}>
        <ModalHeader sx={styles.header}>{slideTitle}</ModalHeader>

        <ModalCloseButton sx={styles.closeBtn} />

        {/* Modal Inner content */}
        {children}

        <ModalFooter sx={styles.thumbnails}>
          <SliderThumbs<IGallery> />
        </ModalFooter>
      </ModalContent>
    </>
  )
}

export default GalleryToolkit

/* Styles */
interface Styles {
  mainWrapper: SystemStyleObject
  overlay: SystemStyleObject
  header: SystemStyleObject
  closeBtn: SystemStyleObject
  thumbnails: SystemStyleObject
}

const useStyles = (): Styles => {
  const wrapperBordersStyles = {
    size: '2px solid',
    color: 'orange.200',
  }

  return {
    mainWrapper: {
      p: '0',
      className: '.scroll-primary',
      background: 'transparent',
      boxShadow: 'none',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: 'md',
      borderRight: wrapperBordersStyles.size,
      borderLeft: wrapperBordersStyles.size,
      borderRightColor: wrapperBordersStyles.color,
      borderLeftColor: wrapperBordersStyles.color,
      userSelect: 'none',
    },
    overlay: {
      backdropFilter: 'blur(8px)',
      bgColor: 'blackAlpha.400',
    },
    header: {
      alignSelf: 'flex-start',
      position: 'absolute',
      bgColor: 'orange.50',
      borderRadius: 'md',
      boxShadow: 'md',
      transform: 'translate(20px, -20%)',
      py: '2',
      px: '3',
      fontSize: { base: 'md' },
      zIndex: 'popover',
    },
    closeBtn: {
      position: 'absolute',
      borderRadius: 'sm',
      backgroundColor: 'orange.50',
      color: 'orange.500',
      transform: 'translateY(-30%)',
      boxShadow: 'base',
      zIndex: 'popover',
    },
    thumbnails: {
      position: 'absolute',
      bottom: '-3',
      alignSelf: 'center',
      borderRadius: 'md',
      pt: '2',
      px: '3',
      pb: '3',
      mb: '2',
      fontSize: { base: 'md' },
    },
  }
}
