import { GridItem } from '@chakra-ui/react'
import React from 'react'

import { LargeTitle, MainGrid } from 'ui'

const AboutSection = () => {
  console.log('info')

  return (
    <MainGrid as="section">
      {/* Title */}
      <GridItem gridColumn="content-start/content-end" gridRow="1/2">
        <LargeTitle
          title="About Me"
          subTitle="Let's Start With My Background"
        />
      </GridItem>

      {/*  Row 2/3 - Details Start */}
      {/*  Row 3/4 - Heading only (start/end), Detail Background Start - contains dots bottom-right */}
      {/*  Row 4/5 - content only (start/end), video (start/end) */}
      {/*  Row 5/6 - Details End */}
    </MainGrid>
  )
}

export default AboutSection
