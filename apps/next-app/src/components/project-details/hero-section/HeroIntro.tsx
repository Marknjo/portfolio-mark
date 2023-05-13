import { Grid, GridItem, SystemStyleObject } from '@chakra-ui/react'
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
        <GridItem sx={contentSectionStyles}>
          <SubHeading
            text="Tech Stack"
            as="h2"
            overrides={{ borderBottom: 'none' }}
          />
          <IntroStackCards />
        </GridItem>

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
