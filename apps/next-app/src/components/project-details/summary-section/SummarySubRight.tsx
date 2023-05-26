import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const SummarySubRight = () => (
  <SectionTitle
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
    isRightAligned
    layerStyle={GradientLayerStyles.GrdLOrange600to50WithoutBorders}
  >
    Lessons Learnt
  </SectionTitle>
)

export default SummarySubRight
