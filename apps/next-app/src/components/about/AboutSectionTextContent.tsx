import { Button, GridItem, Text, VStack } from '@chakra-ui/react'

const AboutSectionTextContent = () => (
  <GridItem
    gridColumn="content-start/span 5"
    gridRow="content-start/content-end"
    marginY="8"
    zIndex="1"
  >
    <VStack
      fontSize="md"
      alignItems="flex-start"
      rowGap="2"
      marginBottom="12"
      color="blackAlpha.800"
    >
      <Text>Hey, as I noted earlier, I am all JavaScript</Text>
      <Text>
        But once upon a time, I tried my luck with PHP, Did not find it
        all-round like JavaScript. That's in the past, Though.
      </Text>
      <Text>
        Like I don't code in PHP anymore, I am an Operations Manager by paper.
        That means I have a background in business management.
      </Text>
      <Text>
        Overtime, I found my professional a little lackluster and financial
        undependable. I wanted to switch to a high value skill field. A field I
        cannot retire from, it pays the bills, and I still find it fun no matter
        how head-aching it is. So, since 2021, I have been all hands on deck.{' '}
      </Text>
      <Text>
        And that's why you are now looking at my dev portfolio. Did you think I
        made the right decision?
      </Text>
      <Text>HI would love to hear your thoughts.</Text>
    </VStack>

    <Button variant="outline" colorScheme="orange">
      Reach Me For a Chat
    </Button>
  </GridItem>
)

export default AboutSectionTextContent
