import { Grid, GridItem, SystemStyleObject } from '@chakra-ui/react'
import IntroStackCards from './IntroStackCards'

const HeroIntro = () => {
  const mainStyles: SystemStyleObject = {
    /* Grid template */
    gridColumn: 'col-start 2 / col-end 11',
    gridRow: 'r1-start/r2-end',

    backgroundColor: 'orange.100',
    boxShadow: 'md',
    borderRadius: 'lg',
    p: '12',
  }

  const contentStyles: SystemStyleObject = {
    pb: '12',
    borderBottom: '1px solid',
    borderBottomColor: 'orange.400',
  }
  const contentSectionStyles: SystemStyleObject = {}

  return (
    <GridItem sx={mainStyles}>
      <Grid sx={contentStyles}>
        {/* Tech Stacks */}
        <GridItem sx={contentSectionStyles}>
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
    </GridItem>
  )
}

export default HeroIntro
