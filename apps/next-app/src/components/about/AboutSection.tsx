/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import NextLink from 'next/link'
import {
  AspectRatio,
  Box,
  Button,
  GridItem,
  HStack,
  Icon,
  Heading,
  Text,
  VStack,
  Link,
  SystemStyleObject,
} from '@chakra-ui/react'

import { BsLinkedin, BsTwitter, BsYoutube, BsGithub } from 'react-icons/bs'
import { IconType } from 'react-icons'
import {
  DotsBottomRight,
  LargeTitle,
  MainGrid,
  SectionTitle,
  SectionTitleVariants,
} from 'ui'

const DetailsItemsTitle = ({
  title,
  align,
}: {
  title: string
  align: SystemStyleObject
}) => (
  <Heading as="h4" fontSize="lg" color="blackAlpha.800" sx={align}>
    {title}
  </Heading>
)

const DetailsItem = ({ title, text }: { title: string; text: string }) => (
  <Box>
    <DetailsItemsTitle align={{ textAlign: 'left' }} title={title} />
    <Text fontSize="sm" color="orange.800">
      {text}
    </Text>
  </Box>
)

const SocialIcon = ({ link, icon }: { link: string; icon: IconType }) => (
  <Link
    href={link}
    as={NextLink}
    target="_blank"
    color="orange.400"
    transition="all 0.15s ease-in"
    _hover={{
      color: 'orange.500',
      transform: 'translateY(-1.5px) scale(1.02)',
    }}
    _active={{
      color: 'orange.500',
      transform: 'translateY(-1.5px) scale(1.02)',
    }}
    width="5"
    height="5"
  >
    <Icon width="100%" height="100%" as={icon} />
  </Link>
)

const AboutSection = () => {
  // @TODO: Implement flexible rows
  const templateRows = {
    // sm: "", // 480px
    // md: "", // 768px
    // lg: "", // 992px
    // xl: "", // 1280px
    md: `
        [title-start] auto [title-end details-upper-start] 
        32px [details-upper-end section-title-start] 
        auto [section-title-end content-start] 
        auto [content-end details-lower-start]
        32px [details-lower-end]`, // 992px
  }

  return (
    <MainGrid
      as="section"
      options={{
        backgroundColor: 'orange.50',
        paddingBottom: '12',
        gridTemplateRows: templateRows,
      }}
    >
      {/* Title */}
      <GridItem
        gridColumn="content-start/content-end"
        gridRow="title-start/title-end"
        zIndex="1"
      >
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
          gridRow: 'section-title-start/section-title-end',
          zIndex: '1',
        }}
        bgGridSetting={{
          gridRow: 'section-title-start/section-title-end',
          gridColumn: 'outer-left-start / span 6',
          zIndex: '1',
        }}
      >
        My Short Story
      </SectionTitle>

      {/*  Row 4/5 - content only (start/end), video (start/end) */}
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
        gridRow="content-start/content-end"
        marginY="auto"
        paddingRight="8"
        zIndex="1"
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
        gridRow="section-title-start / content-end"
        backgroundColor="orange.600"
        shadow="md"
        border="2px solid"
        borderColor="orange.100"
        borderLeftRadius="8px"
        zIndex="0"
      >
        <DotsBottomRight width={30} />
      </GridItem>

      {/*  Row 5/6 - Details End */}
      <GridItem
        gridColumn="col-start 11 / span 2"
        gridRow="details-upper-start / details-lower-end"
        backgroundColor="orange.50"
        zIndex="1"
      >
        &nbsp;
      </GridItem>
      <GridItem
        gridColumn="col-start 11 / span 2"
        gridRow="section-title/content-end"
        justifySelf="center"
        alignSelf="center"
        paddingX="2"
        paddingY="8"
        zIndex="2"
      >
        <VStack alignItems="flex-start">
          <Heading
            as="h3"
            fontSize="3xl"
            color="orange.900"
            borderBottom="2px solid"
            borderBottomColor="orange.200"
            lineHeight="1.5"
            marginBottom="4"
            width="100%"
          >
            Details
          </Heading>
          <VStack alignItems="flex-start" gap="4" paddingBottom="6">
            <DetailsItem title="Name" text="Mark Njoroge" />
            <DetailsItem title="Work Availability" text="Open For Long-Term" />
            <DetailsItem title="Location" text="Kenya" />
          </VStack>

          <Box
            width="100%"
            marginTop="4"
            paddingY="4"
            borderTop="2px solid"
            borderTopColor="orange.100"
            borderBottom="2px solid"
            borderBottomColor="orange.100"
          >
            <DetailsItemsTitle
              align={{ textAlign: 'center', marginBottom: '3' }}
              title="Social"
            />
            <HStack justifyContent="space-evenly">
              <SocialIcon
                link="https://linkedin.com/in/mark-njoroge/"
                icon={BsLinkedin}
              />
              <SocialIcon
                link="https://twitter.com/marknjo7"
                icon={BsTwitter}
              />
              <SocialIcon link="https://github.com/Marknjo" icon={BsGithub} />
              <SocialIcon
                link="https://youtube.com/@thetalkingdev"
                icon={BsYoutube}
              />
            </HStack>
          </Box>
        </VStack>
      </GridItem>
    </MainGrid>
  )
}

export default AboutSection
