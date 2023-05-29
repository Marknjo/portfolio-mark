import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const SubTitle = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: 'content-start / span 5',
      gridRow: 'section-title-start/section-title-end',
      zIndex: '1',
    }}
    bgGridSetting={{
      gridRow: 'section-title-start/section-title-end',
      gridColumn: 'outer-left-start / span 6',
      zIndex: '1',
    }}
    layerStyle={GradientLayerStyles.GrdROrange600to50WithoutBorders}
  >
    My Short Story
  </SectionTitle>
)

export default SubTitle
