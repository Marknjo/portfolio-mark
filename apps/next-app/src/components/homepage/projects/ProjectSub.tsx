import { sizes } from '@components/next-ui'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const ProjectSub = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: {
        base: 'content-start / span 11',
        md: 'content-start / span 5',
      },
      gridRow: 'sub-start/sub-end',
      zIndex: '1',
      mb: sizes.sm,
    }}
    bgGridSetting={{
      gridRow: 'sub-start/sub-end',
      gridColumn: {
        base: 'outer-left-start / span 11',
        md: 'outer-left-start / span 6',
      },
      zIndex: '1',
      mb: sizes.sm,
    }}
    layerStyle={GradientLayerStyles.GrdROrange600to500WithBorders}
  >
    Top 3 Projects
  </SectionTitle>
)

export default ProjectSub
