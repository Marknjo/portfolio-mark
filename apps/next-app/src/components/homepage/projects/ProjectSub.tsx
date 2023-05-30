import { sizes, subHeadingsBr } from '@components/next-ui'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const ProjectSub = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: subHeadingsBr.withBr.text,
      gridRow: 'sub-start/sub-end',
      zIndex: '1',
      mb: sizes.sm,
    }}
    bgGridSetting={{
      gridRow: 'sub-start/sub-end',
      gridColumn: subHeadingsBr.withBr.bg,
      zIndex: '1',
      mb: sizes.sm,
    }}
    layerStyle={GradientLayerStyles.GrdROrange600to500WithBorders}
  >
    Top 3 Projects
  </SectionTitle>
)

export default ProjectSub
