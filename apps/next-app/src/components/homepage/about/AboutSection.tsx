import { MainGrid } from 'ui'
import { sizes } from '@components/next-ui'
import { GridItem, useBreakpoint } from '@chakra-ui/react'

import AboutTitle from './AboutTitle'
import SubTitle from './SubTitle'
import AboutDetails from './AboutDetails'
import AboutTextContent from './AboutTextContent'
import AboutVideo from './AboutVideo'
import AboutBg from './AboutBg'
import AboutCtaBtn from './AboutCtaBtn'

const AboutSection = () => {
  const breakpoint = useBreakpoint()
  // @TODO: Implement flexible rows
  const templateRows = {
    base: `
      [r1-start] 
      auto [r1-end r2-start] 
      auto [r2-end r3-start] 
      auto [r3-end r4-start] 
      auto [r4-end r5-start]
      64px [r5-end r6-start]
      auto [r6-end ]`,

    lg: `
      [r1-start] 
      auto [r1-end r2-start] 
      32px [r2-end r3-start] 
      auto [r3-end r4-start] 
      auto [r4-end r5-start]
      32px [r5-end]`,
  }

  return (
    <MainGrid
      id="about-section"
      as="section"
      options={{
        backgroundColor: 'orange.50',
        gridTemplateRows: templateRows,
        pb: sizes.xl,
      }}
    >
      {/* Title */}
      <AboutTitle />

      {/*  Row 3/4 - Heading only (start/end), Detail Background Start - contains dots bottom-right */}
      <SubTitle />

      {/*  Row 4/5 - content only (start/end), video (start/end) */}
      <AboutTextContent />

      {/* My Story Video  */}
      <AboutVideo />

      {/*  Row 2/3 - Detail Background Start - contains dots bottom-right */}
      <AboutBg />

      {/*  Row 5/6 - Details End */}
      <AboutDetails />

      {/* Responsive button - show after large media query breaking point */}
      {['base', 'sm', 'md'].includes(breakpoint) && (
        <GridItem
          gridColumn="content-start/content-end"
          justifySelf="center"
          pt="8"
        >
          <AboutCtaBtn />
        </GridItem>
      )}
    </MainGrid>
  )
}

export default AboutSection
