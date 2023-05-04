import { GridProps } from '@chakra-ui/react'
import CtaSection from '@components/layouts/cta/CtaSection'
import { GradientVariants, defaultGradients } from 'ui'

import LinksSection from './LinksSection'

const ProjectDetailsCTA = () => {
  console.log(defaultGradients(GradientVariants.Orange500to800))

  const mainGridStyles: GridProps = {
    gridTemplateRows: `[r1-start]
      auto [r1-end r2-start]
      auto [r2-end r3-start]
      auto [r3-end r4-start]
      auto [r4-end r5-start]
      auto [r5-end r6-start]
      2rem [r6-end]
    `,

    borderRightRadius: '3rem',
    backgroundImage: defaultGradients(GradientVariants.Orange500to800),
  }

  return (
    <CtaSection
      gridOptions={mainGridStyles}
      ctaGridRow="r4-start/r5-end"
      footerGridRow="r5-start/r6-end"
    >
      <LinksSection />
    </CtaSection>
  )
}

export default ProjectDetailsCTA
