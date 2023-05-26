import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const RelatedProjectsTitle = () => (
  <SectionTitle
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
    layerStyle={GradientLayerStyles.GrdROrange800to500WithBorders}
  >
    View Similar Projects
  </SectionTitle>
)

export default RelatedProjectsTitle
