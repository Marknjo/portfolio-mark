import { sizes } from '@components/next-ui'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const ProjectGoalSub = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: 'content-start / span 8',
      gridRow: 'r2-start/r2-end',
      zIndex: '1',
      mb: sizes.md,
    }}
    bgGridSetting={{
      gridRow: 'r2-start/r2-end',
      gridColumn: 'outer-left-start / span 8',
      zIndex: '1',
      mb: sizes.md,
    }}
    layerStyle={GradientLayerStyles.GrdROrange600to50WithoutBorders}
  >
    Project Goal
  </SectionTitle>
)

export default ProjectGoalSub
