import { GridItem, Text, VStack, Button, Icon } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

const LinkIconRight = () => <Icon as={FiArrowRight} />

const FavContent = () => (
  <GridItem
    gridRow="r5-start / r5-end"
    gridColumn="col-start 4 / content-end"
    mt="12"
  >
    <VStack alignItems="flex-start" rowGap="8">
      <VStack alignItems="flex-start" rowGap="4">
        <Text>Hey, This project is actually this template.</Text>
        <Text>
          It is supposed to be catchy, modern, expressive, and packed with a lot
          of concepts on UI/UX and Front-end design principles.
        </Text>
        <Text>
          With this project I want to express my love for design. Handcraft
          every piece of it to give it my personality.
        </Text>
        <Text>
          I hope by looking at it and exploring it, you will get in love with
          how I approach software engineering. In this case, front-end design.
        </Text>
        <Text>Do you want to dive deep?</Text>
      </VStack>

      <Button
        colorScheme="orange"
        variant="outline"
        rightIcon={<LinkIconRight />}
      >
        Do you want to dive deep?
      </Button>
    </VStack>
  </GridItem>
)

export default FavContent
