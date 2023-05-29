import { MainGrid } from 'ui'
import { sizes } from '@components/next-ui'

import AboutTitle from './AboutTitle'
import SubTitle from './SubTitle'
import AboutDetails from './AboutDetails'
import AboutTextContent from './AboutTextContent'
import AboutVideo from './AboutVideo'
import AboutBg from './AboutBg'

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
    </MainGrid>
  )
}

export default AboutSection
