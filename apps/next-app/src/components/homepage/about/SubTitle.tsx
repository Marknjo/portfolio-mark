import { subHeadingsBr } from '@components/next-ui'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const SubTitle = () => {
  const rowBreakingPoints = {
    base: 'r2-start/r2-end',
    lg: 'r3-start/r3-end',
  }

  return (
    <SectionTitle
      headingGridSetting={{
        gridColumn: subHeadingsBr.noBr.text,
        gridRow: rowBreakingPoints,
        zIndex: '0',
      }}
      bgGridSetting={{
        gridRow: rowBreakingPoints,
        gridColumn: subHeadingsBr.noBr.bg,
        zIndex: '0',
      }}
      layerStyle={GradientLayerStyles.GrdROrange600to50WithoutBorders}
    >
      My Short Story
    </SectionTitle>
  )
}

export default SubTitle