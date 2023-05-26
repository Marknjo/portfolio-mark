import { GridItemProps } from '@chakra-ui/react'
import { DotsTopRight, MainGrid } from 'ui'
import { sizes } from '@components/next-ui'

import SkillsTitle from './SkillsTittle'
import SkillsSub from './SkillsSub'
import SkillsPrLangs from './SkillsPrLangs'
import SkillsCategories from './SkillsCategories'
import SkillsNote from './SkillsNote'

const SkillsSection = () => {
  const gridRows: GridItemProps = {
    gridTemplateRows: `
    [r1-start]
    auto [r1-end r2-start]
    auto [r2-end r3-start]
    6rem [r3-end r4-start]
    auto [r4-end r5-start]
    8rem [r5-end r6-start]        
    auto [r6-end r7-start]        
    auto [r7-end r8-start]        
    auto [r8-end]        
    `,
    position: 'relative',
    backgroundColor: 'orange.50',
    pb: sizes.xl,
    borderTop: '6px solid',
    borderTopColor: 'blackAlpha.50',
  }

  return (
    <MainGrid id="skills-section" as="section" options={gridRows}>
      <DotsTopRight fill="#ED8936" width={22} />

      {/* Main Heading */}
      <SkillsTitle />

      {/* Section Title */}
      <SkillsSub />

      {/* Programming Languages */}
      <SkillsPrLangs />

      {/* Columns of: Frontend, backend, & Tools */}
      <SkillsCategories />

      {/* @TODO: Add Mobile & Desktop Programming Skills */}
      <SkillsNote />
    </MainGrid>
  )
}

export default SkillsSection
