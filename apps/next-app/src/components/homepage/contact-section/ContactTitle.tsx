import { SectionTitle, SectionTitleVariants } from 'ui'

const ContactTitle = () => (
  <SectionTitle
    variant={SectionTitleVariants.Orange600to500}
    headingGridSetting={{
      gridColumn: 'content-start / span 7',
      gridRow: 'r1-start/r1-end',
      zIndex: '2',
      mb: '6',
    }}
    bgGridSetting={{
      gridRow: 'r1-start/r1-end',
      gridColumn: 'outer-left-start / span 7',
      zIndex: '2',
      mb: '6',
    }}
    type="h2"
    withBoarders
  >
    Contact Me
  </SectionTitle>
)

export default ContactTitle
