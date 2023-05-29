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
        gridColumn: {
          base: 'content-start / span 10',
          md: 'content-start / span 6',
          lg: 'content-start / span 5',
        },
        gridRow: rowBreakingPoints,
        zIndex: '1',
      }}
      bgGridSetting={{
        gridRow: rowBreakingPoints,
        gridColumn: {
          base: 'outer-left-start / outer-right-end',
          sm: 'outer-left-start / span 10',
          md: 'outer-left-start / span 7',
          lg: 'outer-left-start / span 6',
        },
        zIndex: '1',
      }}
      layerStyle={GradientLayerStyles.GrdROrange600to50WithoutBorders}
    >
      My Short Story
    </SectionTitle>
  )
}

export default SubTitle
