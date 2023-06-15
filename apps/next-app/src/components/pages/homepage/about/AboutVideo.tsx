import { useRef } from 'react'

import { AspectRatio, Box, GridItem } from '@chakra-ui/react'
import { IHomePageContentV1 } from '@data/types'
import { useOptimizedYoutubePlayer } from '@hooks/optimized-youtube-player'
import { useHomePageData } from '@store/context/homepage-context'
import { motion } from 'framer-motion'
import Image from 'next/image'

/// @TODO: Implement splash image
const AboutVideo = () => {
  const playerImgLoaderRef = useRef<HTMLImageElement>(null)

  const {
    content: {
      about: { videoLink, videoSplashImg },
    },
  } = useHomePageData<IHomePageContentV1>()
  const { isLoadingPlayer } = useOptimizedYoutubePlayer(
    playerImgLoaderRef,
    videoLink,
    'about-video',
  )

  return (
    <GridItem
      gridColumn={{
        base: 'content-start / content-end',
        md: 'col-start 6 / content-end',
        lg: 'col-start 6 / span 5',
      }}
      gridRow={{
        base: 'r4-start / r4-end',
        md: 'r3-start / r4-end',
        lg: 'r4-start / r4-end',
      }}
      my="auto"
      pr={{ base: 0, md: '4', lg: '6', xl: '8' }}
      pb={{ base: '6', md: '0' }}
      pt={{ base: '6', md: '0' }}
      zIndex="1"
    >
      <AspectRatio
        maxW="560px"
        ratio={16 / 9}
        borderRadius="md"
        overflow="hidden"
        border="2px solid"
        borderColor="orange.100"
        shadow="lg"
        mx={{ base: 'auto', md: 0 }}
      >
        <>
          {isLoadingPlayer && (
            <Box
              as={motion.div}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
            >
              <Image
                src={videoSplashImg!}
                datatype="SREpK81HHJQ"
                alt="YouTube player splash image"
                fill
                sizes="50vw"
                ref={playerImgLoaderRef}
                quality={50}
                style={{ filter: 'blur(5px)' }}
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4GhHgAGlQIwzd3mYAAAAABJRU5ErkJggg=="'
                placeholder="blur"
                loading="lazy"
              />
            </Box>
          )}

          <Box
            as={motion.div}
            id="about-video"
            {...(isLoadingPlayer ? { display: 'none' } : {})}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          />
        </>
      </AspectRatio>
    </GridItem>
  )
}

export default AboutVideo
