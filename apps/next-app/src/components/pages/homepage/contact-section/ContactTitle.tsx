import { sizes, subHeadingsBr } from '@components/next-ui'
import { IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const ContactTitle = () => {
  const {
    content: {
      contact: { titleMain },
    },
  } = useHomePageData<IHomePageContentV1>()

  return (
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
      {titleMain}
    </SectionTitle>
  )
}

export default ContactTitle
