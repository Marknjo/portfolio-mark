import NextLink from 'next/link'
import { Box, GridItem, Icon, Text, Link, Badge } from '@chakra-ui/react'

import { sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { appIcons } from '@data/generalData/icons/dataAppIcons'

const LeftContent = () => {
  const {
    content: {
      contact: {
        blogText,
        blogLink,
        contactText,
        contactNo,
        contactIcon,
        socialText,
        socialHintText,
        socialIntoText,
        favSocial,
      },
    },
  } = useHomePageData()

  return (
    <GridItem
      gridColumn="1 / span 5"
      display="flex"
      flexDirection="column"
      gap="3"
      color="blackAlpha.800"
      mb={sizes.md}
      mr={sizes.xs}
    >
      <Text as="p">
        {blogText}{' '}
        <Box as="span" color="orange.400">
          {blogLink ? '@TODO:--' : '(coming soon)'}
        </Box>
      </Text>
      <Text as="p">{contactText}</Text>
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
          as={appIcons.displayIcons[contactIcon]}
          color="orange.400"
          width="auto"
          height="20px"
          _groupHover={{
            color: 'orange.600',
          }}
        />{' '}
        {contactNo}
      </Link>{' '}
      <Text as="p">{socialText}</Text>
      <Text as="p">
        <Text as="strong" color="teal.400">
          {socialIntoText}
        </Text>
      </Text>
      <Text as="p">
        <Box as="span" color="teal.500">
          {socialHintText.split('<--fav-->')[0]}
        </Box>{' '}
        <Badge as="span" colorScheme="orange">
          {favSocial}
        </Badge>{' '}
        {socialHintText.split('<--fav-->')[1]}
      </Text>
    </GridItem>
  )
}

export default LeftContent
