import { sizes } from '@components/next-ui'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const TheStackSub = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: 'col-start 5 / content-end',
      gridRow: 'r5-start/r5-end',
      zIndex: '1',
      mb: sizes.md,
      mt: sizes.xl,
    }}
    bgGridSetting={{
      gridRow: 'r5-start/r5-end',
      gridColumn: 'col-start 5 / outer-right-end',
      zIndex: '1',
      mb: sizes.md,
      mt: sizes.xl,
    }}
    isRightAligned
    layerStyle={GradientLayerStyles.GrdLOrange600to50WithoutBorders}
  >
    Why The Stack?
  </SectionTitle>
)

export default TheStackSub
