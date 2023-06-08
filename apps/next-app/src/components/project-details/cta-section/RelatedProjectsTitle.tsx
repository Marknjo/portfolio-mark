import { sizes, subHeadingsBr } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const RelatedProjectsTitle = () => {
  const {
    content: {
      cta: { headerTitle },
    },
  } = useDetailsPageData()

  return (
    <SectionTitle
      headingGridSetting={{
        gridColumn: subHeadingsBr.withBr.text,
        gridRow: 'r2-start/r2-end',
        zIndex: '2',
        mb: sizes.sm,
      }}
      bgGridSetting={{
        gridRow: 'r2-start/r2-end',
        gridColumn: subHeadingsBr.withBr.bg,
        zIndex: '2',
        mb: sizes.sm,
      }}
      type="h2"
      layerStyle={GradientLayerStyles.GrdROrange800to500WithBorders}
    >
      {headerTitle}
    </SectionTitle>
  )
}

export default RelatedProjectsTitle
