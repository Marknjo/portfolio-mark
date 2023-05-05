import { SectionTitle, SectionTitleVariants } from 'ui'

const SummarySubLeft = () => (
  <SectionTitle
    variant={SectionTitleVariants.Orange600to50}
    headingGridSetting={{
      gridColumn: 'content-start / span 6',
      gridRow: 'r2-start/r2-end',
      zIndex: '1',
      mb: '8',
    }}
    bgGridSetting={{
      gridRow: 'r2-start/r2-end',
      gridColumn: 'outer-left-start / span 6',
      zIndex: '1',
      mb: '6',
    }}
  >
    Project Challenges
  </SectionTitle>
)

export default SummarySubLeft
