import { AspectRatio, GridItem } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'

const AboutVideo = () => (
  <GridItem
    gridColumn="col-start 6/span 5"
    gridRow="content-start/content-end"
    marginY="auto"
    pr={sizes.md}
    zIndex="1"
  >
    <AspectRatio
      maxW="560px"
      ratio={16 / 9}
      borderRadius="8px"
      overflow="hidden"
      border="2px solid"
      borderColor="orange.100"
      shadow="lg"
    >
      <iframe
        src="https://www.youtube.com/embed/SREpK81HHJQ?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </AspectRatio>
  </GridItem>
)

export default AboutVideo
