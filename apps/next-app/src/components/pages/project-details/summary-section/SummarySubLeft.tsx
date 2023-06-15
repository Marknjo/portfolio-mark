import { useBreakpoint } from '@chakra-ui/react'
import { sizes, subHeadingsBr } from '@components/next-ui'
import { IProjectDetailsContentV1 } from '@data/types'
import { useDetailsPageData } from '@store/context/details-page-context'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const SummarySubLeft = () => {
  const {
    content: {
      summary: { challengesTitle },
    },
  } = useDetailsPageData<IProjectDetailsContentV1>()
  const brkP = useBreakpoint()

  const mb = brkP === 'sm' || brkP === 'base' ? 0 : sizes.md
  const rowBrkP = {
    base: '2/span 1',
    md: 'r2-start/r2-end',
  }

  return (
    <SectionTitle
      headingGridSetting={{
        gridColumn: subHeadingsBr.noBr.text,
        gridRow: rowBrkP,
        zIndex: '1',
        mb,
      }}
      bgGridSetting={{
        gridRow: rowBrkP,
        gridColumn: subHeadingsBr.noBr.bg,
        zIndex: '1',
        mb,
      }}
      layerStyle={GradientLayerStyles.GrdROrange600to50WithoutBorders}
    >
      {challengesTitle}
    </SectionTitle>
  )
}

export default SummarySubLeft
