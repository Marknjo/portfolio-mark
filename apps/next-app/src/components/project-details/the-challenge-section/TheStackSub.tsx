import { sizes } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const TheStackSub = () => {
  const {
    content: {
      theChallenge: { stacksTitle },
    },
  } = useDetailsPageData()

  return (
    <SectionTitle
      headingGridSetting={{
        gridColumn: {
          base: 'col-start 3 / content-end',
          sm: 'col-start 5 / content-end',
          md: 'col-start 7 / content-end',
          lg: 'col-start 8 / content-end',
        },
        gridRow: 'r5-start/r5-end',
        zIndex: '1',
        mb: sizes.md,
        mt: sizes.xl,
      }}
      bgGridSetting={{
        gridRow: 'r5-start/r5-end',
        gridColumn: {
          base: 'col-start 2 / outer-right-end',
          sm: 'col-start 4 / outer-right-end',
          md: 'col-start 6 / outer-right-end',
          lg: 'col-start 7 / outer-right-end',
        },
        zIndex: '1',
        mb: sizes.md,
        mt: sizes.xl,
      }}
      isRightAligned
      layerStyle={GradientLayerStyles.GrdLOrange600to50WithoutBorders}
    >
      {stacksTitle}
    </SectionTitle>
  )
}

export default TheStackSub
