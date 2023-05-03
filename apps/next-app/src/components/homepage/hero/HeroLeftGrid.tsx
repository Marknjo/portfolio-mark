/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  GridItem,
  SystemStyleObject,
  Box,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react'

const HeroLeftGrid = () => {
  const leftStyles: SystemStyleObject = {
    backgroundColor: 'orange.500',
    paddingTop: '16',
  }
  return (
    <>
      <GridItem
        gridColumn="content-start/span 7"
        gridRow="1 / 2"
        sx={leftStyles}
      >
        {/* Heading Box */}
        <Box
          letterSpacing="widest"
          fontSize="2xl"
          marginLeft="16"
          marginBottom="2"
          position="relative"
          _after={{
            backgroundColor: 'orange.600',
            content: '""',
            display: 'block',
            width: '6',
            height: '6',
            position: 'absolute',
            bottom: '0',
            left: '1',
            transform: 'translate(50%, 50%) rotate(.12turn)',
            zIndex: '0',
          }}
        >
          <Box
            as="span"
            backgroundColor="orange.600"
            borderRadius="4px"
            paddingX="6"
            paddingY="2"
            position="relative"
            zIndex="3"
          >
            Hello
          </Box>
        </Box>

        {/* Heading Main */}
        <Heading as="h1" fontFamily="heading">
          <Box
            as="span"
            color="whiteAlpha.800"
            fontSize="6xl"
            fontWeight="light"
            marginBottom="1"
            display="block"
          >
            I'Am,
          </Box>
          <VStack
            as="span"
            justifyContent="start"
            alignItems="flex-start"
            fontSize="6xl"
            lineHeight="none"
            letterSpacing="wider"
            color="teal.50"
          >
            <Box as="span" marginBottom="-1.5">
              MARK
            </Box>
            <Box as="span" marginTop="0">
              NJOROGE
            </Box>
          </VStack>
        </Heading>
      </GridItem>

      {/*  */}
      <GridItem
        gridColumn="col-start 2/span 4"
        gridRow="2 / 3"
        paddingBottom="16"
      >
        <VStack
          alignItems="flex-start"
          gap="2"
          fontSize="md"
          color="whiteAlpha.800"
          paddingTop="5"
        >
          <Text>
            I'am a self-taught software engineer focused on web applications. I
            use all my energy tinkering with JavaScript and it's ecosystem of
            libraries and frameworks.
          </Text>
          <Text>I have a lot to share with you</Text>
          <Text>Let me walk you through my world.</Text>

          <Box>
            <Button variant="solid" colorScheme="teal" marginTop="4" size="md">
              More About Me
            </Button>
          </Box>
        </VStack>
      </GridItem>
    </>
  )
}

export default HeroLeftGrid
