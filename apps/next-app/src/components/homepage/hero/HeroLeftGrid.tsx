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
import { fontSizes, sizes } from '@components/next-ui'

const HeroLeftGrid = () => {
  const leftStyles: SystemStyleObject = {
    backgroundColor: 'orange.500',
    pt: sizes.xl_TB,
  }
  return (
    <>
      <GridItem
        gridColumn={{
          base: 'content-start/content-end',
          md: 'content-start/span 7',
        }}
        gridRow={{
          base: '2 / 3',
          md: '1 / 2',
        }}
        sx={leftStyles}
        alignItems={{ base: 'center', md: 'start' }}
      >
        {/* Heading Box */}
        <Box
          letterSpacing="widest"
          fontSize={['md', 'lg', 'xl', '2xl']}
          marginLeft={sizes.xl}
          marginBottom="2"
          position="relative"
          _after={{
            backgroundColor: 'orange.600',
            content: '""',
            display: 'block',
            width: ['4', '6'],
            height: ['4', '6'],
            position: 'absolute',
            bottom: '0',
            left: { base: '40%', md: '1' },
            transform: 'translate(50%, 50%) rotate(.12turn)',
            zIndex: '0',
          }}
        >
          <Box
            as="span"
            backgroundColor="orange.600"
            borderRadius="4px"
            px={sizes.xs}
            py={['1', '2']}
            position="relative"
            zIndex="3"
            left={{ base: '40%', md: 0 }}
          >
            Hello
          </Box>
        </Box>

        {/* Heading Main */}
        <Heading
          as="h1"
          fontFamily="heading"
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Box
            as="span"
            color="whiteAlpha.800"
            fontSize={fontSizes.lg}
            fontWeight="light"
            marginBottom="1"
            display="block"
          >
            I'Am,
          </Box>
          <VStack
            as="span"
            alignItems={{ base: 'center', md: 'flex-start' }}
            fontSize={fontSizes.lg}
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
        gridColumn={{
          base: 'content-start/content-end',
          sm: 'col-start 2/ span 10',
          md: 'content-start /span 5',
          lg: 'col-start 2/span 4',
        }}
        gridRow={{
          md: '2 / 3',
        }}
        pb={sizes.xl}
      >
        <VStack
          alignItems={{ base: 'center', md: 'flex-start' }}
          gap="2"
          fontSize="md"
          color="whiteAlpha.800"
          pt={sizes.sm}
        >
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            textStyle="para-default"
          >
            I'am a self-taught software engineer focused on web applications. I
            use all my energy tinkering with JavaScript and it's ecosystem of
            libraries and frameworks.
          </Text>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            textStyle="para-default"
          >
            I have a lot to share with you
          </Text>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            textStyle="para-default"
          >
            Let me walk you through my world.
          </Text>

          <Box>
            <Button variant="solid" colorScheme="teal" mt={sizes.xs} size="md">
              More About Me
            </Button>
          </Box>
        </VStack>
      </GridItem>
    </>
  )
}

export default HeroLeftGrid
