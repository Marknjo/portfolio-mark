import { Image } from '@chakra-ui/next-js'
import { GridItem, StyleProps } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import { useLayoutEffect, useRef, useState } from 'react'

/// @TODO: The way nextjs implements image loading is a little bit expensive. It causes layout shift, should implement lazy loading strategy
const ProjectHeroImg = () => {
  const {
    content: {
      projects: { mainImg },
    },
  } = useHomePageData<IHomePageContentV1>()

  const imgRef = useRef<HTMLImageElement>(null)
  const [imgHeight, setImageHeight] = useState<number>(200)
  const imgSize = useSize(imgRef)

  useLayoutEffect(() => {
    if (imgSize) {
      setImageHeight(imgSize.width * 0.56)
    }
  }, [imgSize])

  const commonStyles: StyleProps = {
    borderRadius: 'md',
    objectPosition: 'top',
    objectFit: 'cover',
    width: '100%',
    height: `${imgHeight}px`,
    zIndex: '0',
  }

  const columnBreakpoint = {
    base: 'content-start/content-end',
    md: 'col-start 1/span 11',
    lg: 'col-start 2/span 9',
  }

  return (
    <GridItem
      gridColumn={columnBreakpoint}
      gridRow="img-start/img-r3-end"
      minH={`${imgHeight}px`}
      backgroundColor="orange.200"
      shadow="md"
      border="2px solid"
      borderColor="orange.100"
      objectFit="cover"
      position="relative"
      {...commonStyles}
    >
      {/* <Box position="relative">
      <Image
        src={`/images/${mainImg.fileName}.jpg`}
        alt={mainImg.alt}
        sx={commonStyles}
      />
      </Box> */}
      <Image
        src={`/images/${mainImg.fileName}.jpg`}
        alt={mainImg.alt}
        sx={commonStyles}
        sizes="auto"
        fill
        quality={90}
        blurDataURL={`/images/${mainImg.fileName}@0.5x.jpg`}
        loading="lazy"
        placeholder="blur"
        ref={imgRef}
      />
    </GridItem>
  )
}

export default ProjectHeroImg
