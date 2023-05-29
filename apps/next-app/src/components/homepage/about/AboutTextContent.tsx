import { GridItem, Text, VStack, useBreakpoint } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
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
        <Text textStyle="para-default" layerStyle="para-default">
          Hey, as I noted earlier, I am all JavaScript
        </Text>
        <Text textStyle="para-default" layerStyle="para-default">
          But once upon a time, I tried my luck with PHP, Did not find it
          all-round like JavaScript. That's in the past, Though.
        </Text>
        <Text textStyle="para-default" layerStyle="para-default">
          Like I don't code in PHP anymore, I am an Operations Manager by paper.
          That means I have a background in business management.
        </Text>
        <Text textStyle="para-default" layerStyle="para-default">
          Overtime, I found my professional a little lackluster and financial
          undependable. I wanted to switch to a high value skill field. A field
          I cannot retire from, it pays the bills, and I still find it fun no
          matter how head-aching it is. So, since 2021, I have been all hands on
          deck.{' '}
        </Text>
        <Text textStyle="para-default" layerStyle="para-default">
          And that's why you are now looking at my dev portfolio. Did you think
          I made the right decision?
        </Text>
        <Text textStyle="para-default" layerStyle="para-default">
          HI would love to hear your thoughts.
        </Text>
      </VStack>

      {['base', 'sm', 'md'].includes(breakpoint) || <AboutCtaBtn />}
    </GridItem>
  )
}

export default AboutTextContent
