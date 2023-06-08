import NextLink from 'next/link'
import {
  Box,
  Button,
  Grid,
  SystemStyleObject,
  Tooltip,
  VStack,
  useConst,
} from '@chakra-ui/react'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import { SectionSeparator, SubHeading, TextContentGenerator } from 'ui'
import { sizes } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { appIcons } from '@data/generalData/icons/dataAppIcons'

import IntroStackCards from './IntroStackCards'

const HeroIntro = () => {
  const {
    theme: { colorTheme },
    data: { projectData },
    content: {
      hero: {
        introButtonText,
        introTextTitle,
        stacksButtonLink,
        stacksButtonText,
        stacksTitle,
      },
    },
  } = useDetailsPageData()

  const { title, liveLink, introSummaryText } = projectData!

  const textOptions = useConst({
    ...introSummaryText,
    listOptions: {
      ...(introSummaryText?.listOptions?.icon
        ? { icon: appIcons.listIcons[introSummaryText.listOptions.icon] }
        : {}),
    },
  })

  const rowBrP = {
    base: `[content-start]
      auto[content-end separator-start] 
      auto [separator-end spacer-start] 
      8rem [spacer-end] 
  `,
    sm: `[content-start]
      auto[content-end separator-start] 
      auto [separator-end spacer-start] 
      12rem [spacer-end] 
    `,
    md: `[content-start]
      auto[content-end separator-start] 
      auto [separator-end spacer-start] 
      16rem [spacer-end] 
    `,
    lg: `[content-start]
      auto[content-end separator-start] 
      auto [separator-end spacer-start] 
      18rem [spacer-end] 
    `,
  }
  const mainStyles: SystemStyleObject = {
    /* Grid template */
    gridColumn: {
      base: 'content-start/content-end',
      md: 'col-start 2 / col-end 11',
    },
    gridRow: 'r1-start/r2-end',

    gridTemplateRows: rowBrP,

    backgroundColor: 'orange.100',
    boxShadow: 'md',
    borderRadius: 'lg',
    px: sizes.lg,
    pt: sizes.lg,
  }

  const contentStyles: SystemStyleObject = {
    pb: sizes.lg,
    width: '100%',
    gridRow: 'content-start / content-end',
    gap: sizes.lg,

    /* Grid settings */
    gridTemplateColumns: {
      base: 'repeat(auto-fit, minmax(15rem, 1fr))',
      sm: 'repeat(auto-fit, minmax(20.3rem, 1fr))',
    },
  }
  const contentSectionStyles: SystemStyleObject = {
    alignItems: { base: 'center', lg: 'flex-start' },
    textAlign: { base: 'center', lg: 'start' },
  }

  return (
    <Grid sx={mainStyles}>
      <Grid sx={contentStyles}>
        {/* Tech Stacks */}
        <VStack sx={contentSectionStyles} gap={sizes.md}>
          <Box>
            <SubHeading
              text={stacksTitle}
              as="h2"
              overrides={{
                borderBottom: 'none',
                textAlign: { base: 'center', lg: 'inherit' },
                fontSize: { base: '2xl', lg: 'lg' },
              }}
            />

            <IntroStackCards />
          </Box>

          <Button
            as={NextLink}
            href={`/project-details/${stacksButtonLink}`} /* @TODO: Use dynamic link */
            rightIcon={<FiArrowDown />}
            variant="link"
            colorScheme="teal"
          >
            {stacksButtonText}
          </Button>
        </VStack>

        {/* Text & Button */}
        <VStack
          sx={contentSectionStyles}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box>
            {/* Plain Header */}
            <SubHeading
              text={`${introTextTitle} ${title}`}
              as="h2"
              overrides={{
                borderBottom: 'none',
                textAlign: { base: 'center', lg: 'inherit' },
                fontSize: { base: '2xl', lg: 'lg' },
              }}
            />
            {/* Paragraphs */}
            <TextContentGenerator {...textOptions} />
          </Box>
          {/* Button */}
          <Tooltip
            placement="top-start"
            hasArrow
            bgColor={`${colorTheme}.800`}
            color={`${colorTheme}.100`}
            label={liveLink}
            isDisabled={liveLink !== 'coming soon'}
          >
            <Button
              as={NextLink}
              href={liveLink === 'coming soon' ? '/#' : liveLink}
              rightIcon={<FiArrowUpRight />}
              variant="outline"
              colorScheme="orange"
            >
              {introButtonText}
            </Button>
          </Tooltip>
        </VStack>
      </Grid>
      <SectionSeparator
        sxOverrides={{
          gridRow: 'separator-start/separator-end',
          gridColumn: '1/-1',
          minHeight: '1px',
          backgroundColor: 'orange.300',
        }}
      />
    </Grid>
  )
}

export default HeroIntro
