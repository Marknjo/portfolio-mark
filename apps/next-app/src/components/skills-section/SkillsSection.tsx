import { GridItem, GridItemProps } from '@chakra-ui/react'
import { MainGrid } from 'ui'
import SkillsTitle from './SkillsTittle'
import SkillsSub from './SkillsSub'
import SkillsPrLangs from './SkillsPrLangs'

const SkillsSection = () => {
  const gridRows: GridItemProps = {
    gridTemplateRows: `
    [r1-start]
    auto [r1-end r2-start]
    auto [r2-end r3-start]
    auto [r3-end r4-start]
    8rem [r4-end r5-start]
    auto [r5-end r6-start]        
    auto [r6-end]        
    `,
    position: 'relative',
  }

  return (
    <MainGrid as="section" options={gridRows}>
      {/* Main Heading */}
      <SkillsTitle />

      {/* Section Title */}
      <SkillsSub />

      {/* Programming Languages */}
      <SkillsPrLangs />

      {/* Columns of: Frontend, backend, & Tools */}

      {/* Mobile Programming Tools */}
    </MainGrid>
  )
}

export default SkillsSection
