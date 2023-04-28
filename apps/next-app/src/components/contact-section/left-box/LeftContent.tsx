import NextLink from 'next/link'
import { Box, GridItem, Icon, Text, Link, Badge } from '@chakra-ui/react'

import { IoIosPhonePortrait } from 'react-icons/io'

const LeftContent = () => (
  <GridItem
    gridColumn="1 / span 5"
    display="flex"
    flexDirection="column"
    gap="3"
    color="blackAlpha.800"
    mb="6"
    mr="4"
  >
    <Text as="p">
      Visit My Blog here{' '}
      <Box as="span" color="teal.400">
        (coming soon)
      </Box>
    </Text>
    <Text as="p">If you would like to reach me, kindly call me using:</Text>
    <Link
      href="tel:+254727366216"
      as={NextLink}
      color="teal.500"
      fontWeight="bold"
      _hover={{ color: 'teal.600' }}
      display="flex"
      flexWrap="nowrap"
      gap="2"
      alignItems="center"
      role="group"
    >
      <Icon
        as={IoIosPhonePortrait}
        color="orange.400"
        width="auto"
        height="20px"
        _groupHover={{
          color: 'orange.600',
        }}
      />{' '}
      +(254)727-366-216
    </Link>{' '}
    <Text as="p">
      You may also want to reach me and follow me on social media accounts.
    </Text>
    <Text as="p">
      <Text as="strong" color="teal.400">
        Below are the links.
      </Text>
    </Text>
    <Text as="p">
      <Box as="span" color="teal.500">
        Hint!
      </Box>{' '}
      <Badge as="span" colorScheme="orange">
        LinkedIn
      </Badge>{' '}
      is my favorite Hangout.
    </Text>
  </GridItem>
)

export default LeftContent
