import { sizes } from '@components/next-ui'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const ContactTitle = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: 'content-start / span 7',
      gridRow: 'r1-start/r1-end',
      zIndex: '2',
      mb: sizes.sm,
    }}
    bgGridSetting={{
      gridRow: 'r1-start/r1-end',
      gridColumn: 'outer-left-start / span 7',
      zIndex: '2',
      mb: sizes.sm,
    }}
    type="h2"
    layerStyle={GradientLayerStyles.GrdROrange600to500WithBorders}
  >
    Contact Me
  </SectionTitle>
)

export default ContactTitle
