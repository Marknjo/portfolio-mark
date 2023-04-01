/* eslint-disable react/no-unescaped-entities */
import { AspectRatio, Button, GridItem, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import {
  DotsBottomRight,
  LargeTitle,
  MainGrid,
  SectionTitle,
  SectionTitleVariants,
} from 'ui'

const AboutSection = () => {
  console.log('info')

  return (
    <MainGrid
      as="section"
      options={{ backgroundColor: 'orange.50', paddingBottom: '12' }}
    >
      {/* Title */}
      <GridItem gridColumn="content-start/content-end" gridRow="1/2">
        <LargeTitle
          title="About Me"
          subTitle="Let's Start With My Background"
        />
      </GridItem>

      {/*  Row 3/4 - Heading only (start/end), Detail Background Start - contains dots bottom-right */}
      <SectionTitle
        variant={SectionTitleVariants.Orange600to50}
        headingGridSetting={{
          gridColumn: 'content-start / span 5',
          gridRow: '3/4',
        }}
        bgGridSetting={{
          gridRow: '3/4',
          gridColumn: 'outer-left-start / span 6',
        }}
      >
        My Short Story
      </SectionTitle>

      {/*  Row 4/5 - content only (start/end), video (start/end) */}
      <GridItem gridColumn="content-start/span 5" gridRow="4/5" marginY="8">
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
            Like I don't code in PHP anymore, I am an Operations Manager by
            paper. That means I have a background in business management.
          </Text>
          <Text>
            Overtime, I found my professional a little lackluster and financial
            undependable. I wanted to switch to a high value skill field. A
            field I cannot retire from, it pays the bills, and I still find it
            fun no matter how head-aching it is. So, since 2021, I have been all
            hands on deck.{' '}
          </Text>
          <Text>
            And that's why you are now looking at my dev portfolio. Did you
            think I made the right decision?
          </Text>
          <Text>HI would love to hear your thoughts.</Text>
        </VStack>

        <Button variant="outline" colorScheme="orange">
          Reach Me For a Chat
        </Button>
      </GridItem>

      {/* My Story Video  */}
      <GridItem
        gridColumn="col-start 6/span 5"
        gridRow="4/5"
        marginY="auto"
        paddingRight="8"
      >
        <AspectRatio
          maxW="560px"
          ratio={16 / 9}
          borderRadius="8px"
          overflow="hidden"
          border="2px solid"
          borderColor="orange.100"
          shadow="lg"
        >
          <iframe
            src="https://www.youtube.com/embed/SREpK81HHJQ?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </AspectRatio>
      </GridItem>

      {/*  Row 2/3 - Detail Background Start - contains dots bottom-right */}
      <GridItem
        gridColumn="col-start 7/outer-right-end"
        gridRow="3/5"
        backgroundColor="orange.600"
        shadow="md"
        border="2px solid"
        borderColor="orange.100"
        borderLeftRadius="8px"
      >
        <DotsBottomRight width={30} />
      </GridItem>

      {/*  Row 5/6 - Details End */}
    </MainGrid>
  )
}

export default AboutSection
