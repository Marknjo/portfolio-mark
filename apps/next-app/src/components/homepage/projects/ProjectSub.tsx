import { SectionTitle, SectionTitleVariants } from 'ui'

const ProjectSub = () => (
  <SectionTitle
    variant={SectionTitleVariants.Orange600to500}
    headingGridSetting={{
      gridColumn: 'content-start / span 5',
      gridRow: 'sub-start/sub-end',
      zIndex: '1',
      mb: '6',
    }}
    bgGridSetting={{
      gridRow: 'sub-start/sub-end',
      gridColumn: 'outer-left-start / span 6',
      zIndex: '1',
      mb: '6',
    }}
    withBoarders
  >
    Top 3 Projects
  </SectionTitle>
)

export default ProjectSub
