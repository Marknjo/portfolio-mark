import { sizes } from '@components/next-ui'
import { SectionTitle, SectionTitleVariants } from 'ui'

const TheStackSub = () => (
  <SectionTitle
    variant={SectionTitleVariants.Orange600to50}
    headingGridSetting={{
      gridColumn: 'col-start 5 / content-end',
      gridRow: 'r5-start/r5-end',
      zIndex: '1',
      mb: '8',
      mt: sizes.lg,
    }}
    bgGridSetting={{
      gridRow: 'r5-start/r5-end',
      gridColumn: 'col-start 5 / outer-right-end',
      zIndex: '1',
      mb: '8',
      mt: sizes.lg,
    }}
    headingOverrides={{ textAlign: 'right' }}
    isRightAligned
  >
    Why The Stack?
  </SectionTitle>
)

export default TheStackSub
