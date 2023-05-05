import { SectionTitle, SectionTitleVariants } from 'ui'

const SummarySubRight = () => (
  <SectionTitle
    variant={SectionTitleVariants.Orange600to50}
    headingGridSetting={{
      gridColumn: 'col-start 7 / content-end',
      gridRow: 'r2-start/r2-end',
      zIndex: '1',
      mb: '8',
    }}
    bgGridSetting={{
      gridRow: 'r2-start/r2-end',
      gridColumn: 'col-start 7 / outer-right-end',
      zIndex: '1',
      mb: '8',
    }}
    headingOverrides={{ textAlign: 'right' }}
    isRightAligned
  >
    Lessons Learnt
  </SectionTitle>
)

export default SummarySubRight
