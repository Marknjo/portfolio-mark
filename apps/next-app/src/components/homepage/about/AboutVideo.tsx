import { AspectRatio, GridItem } from '@chakra-ui/react'
import { useHomePageData } from '@store/context/homepage-context'

/// @TODO: Implement splash image
const AboutVideo = () => {
  const {
    content: {
      about: { videoLink },
    },
  } = useHomePageData()

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
        <iframe
          src={videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </AspectRatio>
    </GridItem>
  )
}

export default AboutVideo
