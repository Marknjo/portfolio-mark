import NextLink from 'next/link'
import {
  Box,
  Button,
  Grid,
  GridItem,
  SystemStyleObject,
  VStack,
} from '@chakra-ui/react'
import { FiArrowDown } from 'react-icons/fi'
import { SectionSeparator, SubHeading } from 'ui'
import IntroStackCards from './IntroStackCards'

const HeroIntro = () => {
  const mainStyles: SystemStyleObject = {
    /* Grid template */
    gridColumn: 'col-start 2 / col-end 11',
    gridRow: 'r1-start/r2-end',

    gridTemplateRows: `[content-start]
      auto[content-end separator-start] 
      auto [separator-end spacer-start] 
      18rem [spacer-end] 
    `,

    backgroundColor: 'orange.100',
    boxShadow: 'md',
    borderRadius: 'lg',
    px: '12',
    pt: '12',
  }

  const contentStyles: SystemStyleObject = {
    pb: '12',
    width: '100%',
    gridRow: 'content-start / content-end',
    gap: '12',

    /* Grid settings */
    gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
  }
  const contentSectionStyles: SystemStyleObject = {}

  return (
    <Grid sx={mainStyles}>
      <Grid sx={contentStyles}>
        {/* Tech Stacks */}
        <VStack sx={contentSectionStyles} alignItems="flex-start" gap="8">
          <Box>
            <SubHeading
              text="Tech Stack"
              as="h2"
              overrides={{ borderBottom: 'none' }}
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
        <GridItem sx={contentSectionStyles}>
          {/* Plain Header */}
          <p>Tech</p>
          {/* Paragraphs */}

          {/* Button */}
        </GridItem>
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
