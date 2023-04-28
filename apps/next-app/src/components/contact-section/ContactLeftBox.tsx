import NextLink from 'next/link'
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  SystemStyleObject,
  Text,
  Link,
  Badge,
} from '@chakra-ui/react'

import { IoIosPhonePortrait } from 'react-icons/io'
import { BsLinkedin, BsTwitter, BsYoutube, BsGithub } from 'react-icons/bs'
import { SocialIcon } from '../next-ui'

const ContactLeftBox = () => {
  const mainStyles: SystemStyleObject = {
    gridColumn: 'content-start/span 7',
    gridRow: 'r2-start / r4-end',
    my: '12',
    padding: '12',
    pr: '24',
    backgroundColor: 'teal.50',
    borderRadius: 'lg',
    boxShadow: 'base',

    gridTemplateColumns: 'repeat(6, minmax(20px, 1fr))',
    alignItems: 'top',
  }

  const headingStyles: SystemStyleObject = {
    // Visual
    borderBottom: '2px solid',
    borderColor: 'teal.200',
    pb: '2',
    fontSize: '2xl',
    color: 'teal.900',
    mb: '4',

    // Overrides
    // ...headingStylesOverrides,
  }

  return (
    <Grid sx={mainStyles}>
      <GridItem gridColumn="1 / span 5" mr="4">
        <Heading as="h3" sx={headingStyles} width="100%" textAlign="left">
          Here is How To Reach Me
        </Heading>
      </GridItem>

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

      <GridItem gridColumn="1 / span 5" mr="4">
        <Heading
          as="h3"
          sx={headingStyles}
          textAlign="left"
          display="inline-block"
          pr="4"
        >
          Follow Me
        </Heading>

        <HStack justifyContent="flex-start" gap="2">
          <SocialIcon
            link="https://linkedin.com/in/mark-njoroge/"
            icon={BsLinkedin}
            themeColor={{ color: 'teal.400' }}
            themeHoverColor={{ color: 'teal.500' }}
          />
          <SocialIcon
            link="https://twitter.com/marknjo7"
            icon={BsTwitter}
            themeColor={{ color: 'teal.400' }}
            themeHoverColor={{ color: 'teal.500' }}
          />
          <SocialIcon
            link="https://github.com/Marknjo"
            icon={BsGithub}
            themeColor={{ color: 'teal.400' }}
            themeHoverColor={{ color: 'teal.500' }}
          />
          <SocialIcon
            link="https://youtube.com/@thetalkingdev"
            icon={BsYoutube}
            themeColor={{ color: 'teal.400' }}
            themeHoverColor={{ color: 'teal.500' }}
          />
        </HStack>
      </GridItem>
    </Grid>
  )
}

export default ContactLeftBox
