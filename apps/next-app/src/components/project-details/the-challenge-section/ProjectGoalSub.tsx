import { sizes, subHeadingsBr } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const ProjectGoalSub = () => {
  const {
    content: {
      theChallenge: { goalsTitle },
    },
  } = useDetailsPageData()

  return (
    <SectionTitle
      headingGridSetting={{
        gridColumn: subHeadingsBr.noBr.text,
        gridRow: 'r2-start/r2-end',
        zIndex: '1',
        mb: sizes.md,
      }}
      bgGridSetting={{
        gridRow: 'r2-start/r2-end',
        gridColumn: subHeadingsBr.noBr.bg,
        zIndex: '1',
        mb: sizes.md,
      }}
      layerStyle={GradientLayerStyles.GrdROrange600to50WithoutBorders}
    >
      {goalsTitle}
    </SectionTitle>
  )
}

export default ProjectGoalSub
