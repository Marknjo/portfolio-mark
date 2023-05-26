import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const SummarySubLeft = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: 'content-start / span 7',
      gridRow: 'r2-start/r2-end',
      zIndex: '1',
      mb: '8',
    }}
    bgGridSetting={{
      gridRow: 'r2-start/r2-end',
      gridColumn: 'outer-left-start / span 7',
      zIndex: '1',
      mb: '8',
    }}
    layerStyle={GradientLayerStyles.GrdROrange600to50WithoutBorders}
  >
    Project Challenges
  </SectionTitle>
)

export default SummarySubLeft
