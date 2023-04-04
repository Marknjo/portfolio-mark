import { GridItem } from '@chakra-ui/react'

import {
  DotsBottomRight,
  MainGrid,
  SectionTitle,
  SectionTitleVariants,
} from 'ui'
import AboutDetailsContent from './AboutDetailsContent'
import AboutSectionTitle from './AboutSectionLarge'
import AboutSectionTextContent from './AboutSectionTextContent'
import AboutVideo from './AboutVideo'

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
      <AboutSectionTitle />

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
      <AboutSectionTextContent />

      {/* My Story Video  */}
      <AboutVideo />

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
      <AboutDetailsContent />
    </MainGrid>
  )
}

export default AboutSection
