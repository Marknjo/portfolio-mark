import { GridItem, VStack, useBreakpoint } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { ParagraphGenerator } from 'ui'
import AboutCtaBtn from './AboutCtaBtn'

const rowBreakingPoints = {
  base: 'r3-start/r3-end',
  lg: 'r4-start / r4-end',
}

const columnBreakingPoints = {
  base: 'content-start/content-end',
  md: 'content-start/span 5',
}

const AboutTextContent = () => {
  const {
    content: {
      about: { aboutText },
    },
  } = useHomePageData()
  const breakpoint = useBreakpoint()

  return (
    <GridItem
      gridColumn={columnBreakingPoints}
      gridRow={rowBreakingPoints}
      mt={sizes.md}
      zIndex="1"
    >
      <VStack
        fontSize="md"
        alignItems="flex-start"
        rowGap="2"
        marginBottom={sizes.lg}
        color="blackAlpha.800"
      >
        <ParagraphGenerator content={aboutText.trim()} />
      </VStack>

      {['base', 'sm', 'md'].includes(breakpoint) || <AboutCtaBtn />}
    </GridItem>
  )
}

export default AboutTextContent
