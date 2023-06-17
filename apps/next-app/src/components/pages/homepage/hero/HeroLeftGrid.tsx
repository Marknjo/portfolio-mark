/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react'
import {
  GridItem,
  SystemStyleObject,
  Box,
  Heading,
  VStack,
  Link,
  useConst,
} from '@chakra-ui/react'
import { BsArrowDown } from 'react-icons/bs'
import { fontSizes, sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { TextContentGenerator, SolidBtn, typewriter } from 'ui'
import { appIcons } from '@data/generalData/icons/dataAppIcons'
import { IHomePageContentV1 } from '@data/types'
import { motion } from 'framer-motion'
import { useIsLoading } from '@hooks/is-loading'

const HeroLeftGrid = () => {
  const salutationRef = useRef<HTMLSpanElement>(null)
  const firstNameRef = useRef<HTMLSpanElement>(null)
  const lastNameRef = useRef<HTMLSpanElement>(null)
  const subTitleRef = useRef<HTMLSpanElement>(null)
  const { isLoading } = useIsLoading()

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

  useEffect(() => {
    if (!isLoading) {
      typewriter(
        [salutationRef, subTitleRef, firstNameRef, lastNameRef],
        [salutationText, headerTitleMain, firstName, lastName],
        { loop: false, startTypingAfter: 500 },
      )
    }
  }, [isLoading, salutationText, headerTitleMain, firstName, lastName])

  const brand = 'orange'
  const styles = useStyles(brand)

  return (
    <>
      <GridItem sx={styles.main}>
        <Box
          as={motion.div}
          sx={styles.salutationWrapper}
          whileHover={{
            scale: [1.1, 1, 1.1, 1],
          }}
        >
          <Box as="span" sx={styles.salutationTextWrapper} ref={salutationRef}>
            <Box as="span" sx={styles.animationText} aria-hidden>
              {salutationText}
            </Box>
          </Box>
        </Box>

        {/* Heading Main */}
        <Heading as="h1" fontFamily="heading">
          <Box as="span" sx={styles.headingMain} ref={subTitleRef}>
            <Box as="span" sx={styles.animationText} aria-hidden>
              {headerTitleMain}
            </Box>
          </Box>
          <VStack as="span" sx={styles.firstNameWrapper}>
            <Box as="span" sx={styles.firstNameText} ref={firstNameRef}>
              <Box as="span" sx={styles.animationText} aria-hidden>
                {firstName}
              </Box>
            </Box>
            <Box as="span" sx={styles.lastNameText} ref={lastNameRef}>
              <Box as="span" sx={styles.animationText} aria-hidden>
                {lastName}
              </Box>
            </Box>
          </VStack>
        </Heading>
      </GridItem>

      {/*  */}
      <GridItem sx={styles.introTextWrapper}>
        <VStack sx={styles.introTextStack}>
          <TextContentGenerator {...textOptions} />
          <Box mt="3">
            <SolidBtn
              text={moreButtonText}
              props={{
                as: Link,
                rightIcon: <BsArrowDown />,
              }}
              href={`/${moreButtonLink}`}
              sx={styles.moreBtn}
            />
          </Box>
        </VStack>
      </GridItem>
    </>
  )
}

export default HeroLeftGrid

interface IStyles {
  main: SystemStyleObject
  salutationWrapper: SystemStyleObject
  salutationTextWrapper: SystemStyleObject
  animationText: SystemStyleObject
  headingMain: SystemStyleObject
  firstNameWrapper: SystemStyleObject
  lastNameText: SystemStyleObject
  firstNameText: SystemStyleObject
  introTextWrapper: SystemStyleObject
  introTextStack: SystemStyleObject
  moreBtn: SystemStyleObject
}

const useStyles = (brand: string): IStyles => {
  const gridColumn = {
    base: 'content-start/content-end',
    md: 'content-start/span 7',
  }

  return {
    main: {
      backgroundColor: `${brand}.500`,
      pt: sizes.xl_TB,
      gridColumn,
      gridRow: {
        base: '2 / 3',
        md: '1 / 2',
      },
      alignItems: 'start',
      mb: { base: '4', md: '3' },
    },
    salutationWrapper: {
      letterSpacing: 'widest',
      fontSize: ['md', 'lg', 'xl', '2xl'],
      display: 'inline-block',
      marginLeft: sizes.xl,
      marginBottom: '4',
      minWidth: '12',
      position: 'relative',
      cursor: `
              url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👋</text></svg>")
              16 0, auto
            `,
      _after: {
        backgroundColor: `${brand}.600`,
        content: '""',
        display: 'block',
        width: ['3', '6'],
        height: ['3', '6'],
        position: 'absolute',
        bottom: '0',
        left: { base: '2px', md: '1' },
        transform: 'translate(50%, 50%) rotate(.12turn)',
        zIndex: '0',
      },
    },
    salutationTextWrapper: {
      backgroundColor: `${brand}.600`,
      borderRadius: '4px',
      px: { base: '2', md: '4' },
      py: ['1', '2'],
      position: 'relative',
      zIndex: '3',
      left: '0',
      minWidth: '12',
    },

    animationText: {
      opacity: '0',
      visibility: 'hidden',
    },

    headingMain: {
      color: 'whiteAlpha.800',
      fontSize: fontSizes.lg,
      fontWeight: 'light',
      marginBottom: '1',
      display: 'block',
    },

    firstNameWrapper: {
      alignItems: 'flex-start',
      fontSize: fontSizes.lg,
      lineHeight: 'none',
      letterSpacing: 'wider',
      color: `${brand}.50`,
    },

    lastNameText: {
      marginTop: '0',
      textTransform: 'uppercase',
    },

    firstNameText: {
      marginBottom: '-1.5',
      textTransform: 'uppercase',
    },

    introTextWrapper: {
      gridColumn: {
        base: 'content-start/content-end',
        sm: 'col-start 2/ span 10',
        md: 'content-start /span 5',
        lg: 'col-start 2/span 4',
      },
      gridRow: {
        md: '2 / 3',
      },
      pb: sizes.xl,
    },

    introTextStack: {
      pl: { base: '4', sm: '6', lg: 0 },
      alignItems: 'flex-start',
      gap: '2',
      color: 'whiteAlpha.800',
    },

    moreBtn: {
      border: '1px solid',
      borderColor: `${brand}.400`,
      bgColor: `${brand}.100`,
      mt: sizes.xs,
    },
  }
}
