import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const ContactTitle = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: 'content-start / span 7',
      gridRow: 'r1-start/r1-end',
      zIndex: '2',
      mb: '6',
    }}
    bgGridSetting={{
      gridRow: 'r1-start/r1-end',
      gridColumn: 'outer-left-start / span 7',
      zIndex: '2',
      mb: '6',
    }}
    type="h2"
    layerStyle={GradientLayerStyles.GrdROrange600to500WithBorders}
  >
    Contact Me
  </SectionTitle>
)

export default ContactTitle
