import { useEffect, useRef } from 'react'
import { Image, SystemStyleObject } from '@chakra-ui/react'

// local
import { useSliderSize } from '@components/next-ui/slider/hooks/use-slider-size'
import { IGallery } from '@data/types'
import { useSlider } from '@store/context/slider'

const GalleryImg = ({ data }: { data: IGallery }) => {
  const { setSliderSizes } = useSlider()
  const imgRef = useRef<HTMLImageElement>(null)
  const sizes = useSliderSize<HTMLImageElement>(imgRef)

  // Styles
  const styles = useStyles()

  // Share Image size to the modal
  useEffect(() => {
    setSliderSizes(sizes)
  }, [setSliderSizes, sizes])

  const loadImg = `${data.fileName}${
    data.largeImgPrefix ? data.largeImgPrefix : ''
  }`

  console.log(loadImg)

  return (
    <Image
      src={`/images/${loadImg}.jpg`}
      alt="sample image"
      id={`${data.id}`}
      ref={imgRef}
      sx={styles.img}
    />
  )
}

export default GalleryImg

/* Styles */
interface Styles {
  img: SystemStyleObject
}

const useStyles = (): Styles => {
  const imgBordersStyles = {
    size: '2px solid',
    color: 'orange.200',
  }

  return {
    img: {
      objectFit: 'cover',
      width: '100%',
      borderRadius: 'md',
      borderTop: imgBordersStyles.size,
      borderBottom: imgBordersStyles.size,
      borderBottomColor: imgBordersStyles.color,
      borderTopColor: imgBordersStyles.color,
      userSelect: 'none',
    },
  }
}
