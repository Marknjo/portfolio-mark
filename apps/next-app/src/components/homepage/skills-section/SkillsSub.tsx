import { sizes, subHeadingsBr } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { GradientLayerStyles } from '@theme/foundations'
import { SectionTitle } from 'ui'

const SkillsSub = () => {
  const {
    content: {
      skills: { subTitle },
    },
  } = useHomePageData()

  return (
    <SectionTitle
      headingGridSetting={{
        gridColumn: subHeadingsBr.noBr.text,
        gridRow: 'r2-start/r2-end',
        zIndex: '1',
        mb: sizes.sm,
      }}
      bgGridSetting={{
        gridRow: 'r2-start/r2-end',
        gridColumn: subHeadingsBr.noBr.bg,
        zIndex: '1',
        mb: sizes.sm,
      }}
      layerStyle={GradientLayerStyles.GrdROrange600to50WithoutBorders}
    >
      {subTitle}
    </SectionTitle>
  )
}

export default SkillsSub
