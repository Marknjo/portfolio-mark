import NextLink from 'next/link'
import { Box, Button, Grid, SystemStyleObject, VStack } from '@chakra-ui/react'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import { ParagraphGenerator, SectionSeparator, SubHeading } from 'ui'
import { sizes } from '@components/next-ui'
import { introSampContent } from '@data/sampleContent'

import IntroStackCards from './IntroStackCards'

const HeroIntro = () => {
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
              text="Tech Stack"
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
            href="/project-details/#stacks" /* @TODO: Use dynamic link */
            rightIcon={<FiArrowDown />}
            variant="link"
            colorScheme="teal"
          >
            View All Stacks
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
              text="Introducing Afri-Hickr"
              as="h2"
              overrides={{
                borderBottom: 'none',
                textAlign: { base: 'center', lg: 'inherit' },
                fontSize: { base: '2xl', lg: 'lg' },
              }}
            />
            {/* Paragraphs */}
            <ParagraphGenerator content={introSampContent} />
          </Box>
          {/* Button */}
          <Button
            as={NextLink}
            href="/" /* @TODO: use github link */
            rightIcon={<FiArrowUpRight />}
            variant="outline"
            colorScheme="orange"
          >
            View All Stacks
          </Button>
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
