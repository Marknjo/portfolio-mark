import { SectionTitle, SectionTitleVariants } from 'ui'

const RelatedProjectsTitle = () => (
  <SectionTitle
    variant={SectionTitleVariants.Orange800to500}
    headingGridSetting={{
      gridColumn: 'content-start / span 8',
      gridRow: 'r2-start/r2-end',
      zIndex: '2',
      mb: '6',
    }}
    bgGridSetting={{
      gridRow: 'r2-start/r2-end',
      gridColumn: 'outer-left-start / span 8',
      zIndex: '2',
      mb: '6',
    }}
    type="h2"
    withBoarders
  >
    View Similar Projects
  </SectionTitle>
)

export default RelatedProjectsTitle
