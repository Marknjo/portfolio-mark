import { SectionTitle } from 'ui'
import { sizes, subHeadingsBr } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { GradientLayerStyles } from '@theme/foundations'
import { IHomePageContentV1 } from '@data/types'

const ProjectSub = () => {
  const {
    content: {
      projects: { subTitle },
    },
  } = useHomePageData<IHomePageContentV1>()

  return (
    <SectionTitle
      headingGridSetting={{
        gridColumn: subHeadingsBr.withBr.text,
        gridRow: 'sub-start/sub-end',
        zIndex: '1',
        mb: sizes.sm,
      }}
      bgGridSetting={{
        gridRow: 'sub-start/sub-end',
        gridColumn: subHeadingsBr.withBr.bg,
        zIndex: '1',
        mb: sizes.sm,
      }}
      layerStyle={GradientLayerStyles.GrdROrange600to500WithBorders}
    >
      {subTitle}
    </SectionTitle>
  )
}

export default ProjectSub
