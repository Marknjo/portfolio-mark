/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  GridItem,
  SystemStyleObject,
  Box,
  Heading,
  VStack,
  Link,
  useConst,
} from '@chakra-ui/react'
import { fontSizes, sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { TextContentGenerator } from 'ui'
import { appIcons } from '@data/generalData/icons/dataAppIcons'
import { IHomePageContentV1 } from '@data/types'
import SolidBtn from '@components/next-ui/buttons/ SolidBtn'

const HeroLeftGrid = () => {
  const {
    content: {
      hero: {
        headerText,
        headerTitleMain,
        headerTitleSub,
        moreButtonLink,
        moreButtonText,
        salutationText,
      },
    },
  } = useHomePageData<IHomePageContentV1>()

  const textOptions = useConst({
    ...headerText,
    listOptions: {
      ...(headerText?.listOptions?.icon
        ? { icon: appIcons.listIcons[headerText.listOptions.icon] }
        : {}),
    },
  })

  const profileTitleSub = headerTitleSub.split(' ')

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
            {salutationText}
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
            {headerTitleMain}
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
              {profileTitleSub[0].toUpperCase()}
            </Box>
            <Box as="span" marginTop="0">
              {profileTitleSub[1].toUpperCase()}
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
          <TextContentGenerator {...textOptions} />
          <Box>
            <SolidBtn
              text={moreButtonText}
              props={{
                as: Link,
              }}
              href={`/${moreButtonLink}`}
              sx={{
                border: '1px solid',
                borderColor: 'orange.400',
                bgColor: 'orange.100',
                mt: sizes.xs,
              }}
            />
          </Box>
        </VStack>
      </GridItem>
    </>
  )
}

export default HeroLeftGrid
