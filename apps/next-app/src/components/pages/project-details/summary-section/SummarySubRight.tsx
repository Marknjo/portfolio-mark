import { sizes } from '@components/next-ui'
import { IProjectDetailsContentV1 } from '@data/types'
import { useDetailsPageData } from '@store/context/details-page-context'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const SummarySubRight = () => {
  const {
    content: {
      summary: { lessonsTitle },
    },
  } = useDetailsPageData<IProjectDetailsContentV1>()
  return (
    <SectionTitle
      headingGridSetting={{
        gridColumn: {
          base: 'col-start 3 / content-end',
          sm: 'col-start 5 / content-end',
          md: 'col-start 7 / content-end',
          lg: 'col-start 8 / content-end',
        },
        gridRow: {
          base: '4/span 1',
          md: 'r2-start/r2-end',
        },
        zIndex: '1',
        mb: sizes.md,
      }}
      bgGridSetting={{
        gridRow: {
          base: '4/span 1',
          md: 'r2-start/r2-end',
        },
        gridColumn: {
          base: 'col-start 2 / outer-right-end',
          sm: 'col-start 4 / outer-right-end',
          md: 'col-start 6 / outer-right-end',
          lg: 'col-start 7 / outer-right-end',
        },
        zIndex: '1',
        mb: sizes.md,
      }}
      isRightAligned
      layerStyle={GradientLayerStyles.GrdLOrange600to50WithoutBorders}
    >
      {lessonsTitle}
    </SectionTitle>
  )
}

export default SummarySubRight
