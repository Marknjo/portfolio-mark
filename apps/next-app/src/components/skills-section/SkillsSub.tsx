import { SectionTitle, SectionTitleVariants } from 'ui'

const SkillsSub = () => (
  <SectionTitle
    variant={SectionTitleVariants.Orange600to50}
    headingGridSetting={{
      gridColumn: 'content-start / span 6',
      gridRow: 'r2-start/r2-end',
      zIndex: '1',
      mb: '6',
    }}
    bgGridSetting={{
      gridRow: 'r2-start/r2-end',
      gridColumn: 'outer-left-start / span 6',
      zIndex: '1',
      mb: '6',
    }}
  >
    Skills
  </SectionTitle>
)

export default SkillsSub
