import { sizes } from '@components/next-ui'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const SkillsSub = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: 'content-start / span 6',
      gridRow: 'r2-start/r2-end',
      zIndex: '1',
      mb: sizes.sm,
    }}
    bgGridSetting={{
      gridRow: 'r2-start/r2-end',
      gridColumn: 'outer-left-start / span 6',
      zIndex: '1',
      mb: sizes.sm,
    }}
    layerStyle={GradientLayerStyles.GrdROrange600to50WithoutBorders}
  >
    Fullstack Engineer
  </SectionTitle>
)

export default SkillsSub
