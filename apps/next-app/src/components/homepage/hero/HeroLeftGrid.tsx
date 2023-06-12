/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import {
  GridItem,
  SystemStyleObject,
  Box,
  Heading,
  VStack,
  Link,
  useConst,
  useSafeLayoutEffect,
} from '@chakra-ui/react'
import { BsArrowDown } from 'react-icons/bs'
import { fontSizes, sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { TextContentGenerator, SolidBtn } from 'ui'
import { appIcons } from '@data/generalData/icons/dataAppIcons'
import { IHomePageContentV1 } from '@data/types'
import { typewriter } from '@components/next-ui/typewriter'

const HeroLeftGrid = () => {
  const salutationRef = useRef<HTMLSpanElement>(null)
  const firstNameRef = useRef<HTMLSpanElement>(null)
  const lastNameRef = useRef<HTMLSpanElement>(null)
  const subTitleRef = useRef<HTMLSpanElement>(null)

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

  const [firstName, lastName] = headerTitleSub.split(' ')

  useSafeLayoutEffect(() => {
    typewriter(
      [salutationRef, subTitleRef, firstNameRef, lastNameRef],
      [salutationText, headerTitleMain, firstName, lastName],
      { loop: false, startTypingAfter: 500 },
    )
  }, [])

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
        alignItems="start"
        mb={{ base: '4', md: '3' }}
      >
        <Box
          letterSpacing="widest"
          fontSize={['md', 'lg', 'xl', '2xl']}
          marginLeft={sizes.xl}
          marginBottom="4"
          minWidth="12"
          position="relative"
          _after={{
            backgroundColor: 'orange.600',
            content: '""',
            display: 'block',
            width: ['3', '6'],
            height: ['3', '6'],
            position: 'absolute',
            bottom: '0',
            left: { base: '2px', md: '1' },
            transform: 'translate(50%, 50%) rotate(.12turn)',
            zIndex: '0',
          }}
        >
          <Box
            as="span"
            backgroundColor="orange.600"
            borderRadius="4px"
            px={{ base: '2', md: '4' }}
            py={['1', '2']}
            position="relative"
            zIndex="3"
            left="0"
            minWidth="12"
            ref={salutationRef}
          >
            <Box as="span" opacity="0" aria-hidden visibility="hidden">
              {salutationText}
            </Box>
          </Box>
        </Box>

        {/* Heading Main */}
        <Heading as="h1" fontFamily="heading">
          <Box
            as="span"
            color="whiteAlpha.800"
            fontSize={fontSizes.lg}
            fontWeight="light"
            marginBottom="1"
            display="block"
            ref={subTitleRef}
          >
            <Box as="span" opacity="0" aria-hidden visibility="hidden">
              {headerTitleMain}
            </Box>
          </Box>
          <VStack
            as="span"
            alignItems="flex-start"
            fontSize={fontSizes.lg}
            lineHeight="none"
            letterSpacing="wider"
            color="teal.50"
          >
            <Box
              as="span"
              marginBottom="-1.5"
              textTransform="uppercase"
              ref={firstNameRef}
            >
              <Box as="span" opacity="0" aria-hidden visibility="hidden">
                {firstName}
              </Box>
            </Box>
            <Box
              as="span"
              marginTop="0"
              textTransform="uppercase"
              ref={lastNameRef}
            >
              <Box as="span" opacity="0" aria-hidden visibility="hidden">
                {lastName}
              </Box>
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
          pl={{ base: '4', sm: '6', lg: 0 }}
          alignItems="flex-start"
          gap="2"
          color="whiteAlpha.800"
        >
          <TextContentGenerator {...textOptions} />
          <Box mt="3">
            <SolidBtn
              text={moreButtonText}
              props={{
                as: Link,
                rightIcon: <BsArrowDown />,
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
