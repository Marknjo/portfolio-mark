import { sizes, subHeadingsBr } from '@components/next-ui'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const ContactTitle = () => (
  <SectionTitle
    headingGridSetting={{
      gridColumn: subHeadingsBr.withBr.text,
      gridRow: 'r1-start/r1-end',
      zIndex: '2',
      mb: sizes.sm,
    }}
    bgGridSetting={{
      gridRow: 'r1-start/r1-end',
      gridColumn: subHeadingsBr.withBr.bg,
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
