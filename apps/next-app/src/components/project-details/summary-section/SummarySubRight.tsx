import { sizes } from '@components/next-ui'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const SummarySubRight = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: 'col-start 7 / content-end',
      gridRow: 'r2-start/r2-end',
      zIndex: '1',
      mb: sizes.md,
    }}
    bgGridSetting={{
      gridRow: 'r2-start/r2-end',
      gridColumn: 'col-start 7 / outer-right-end',
      zIndex: '1',
      mb: sizes.md,
    }}
    isRightAligned
    layerStyle={GradientLayerStyles.GrdLOrange600to50WithoutBorders}
  >
    Lessons Learnt
  </SectionTitle>
)

export default SummarySubRight
