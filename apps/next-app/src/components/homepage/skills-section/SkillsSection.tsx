import { GridItemProps, chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

import { DotsTopRight, MainGrid } from 'ui'
import { sectionsReveal } from '@components/next-ui/animations/slideIn'
import { sizes } from '@components/next-ui'

import SkillsTitle from './SkillsTitle'
import SkillsSub from './SkillsSub'
import SkillsPrLangs from './SkillsPrLangs'
import SkillsCategories from './SkillsCategories'
import SkillsNote from './SkillsNote'

const SectionBox = chakra(motion.section, {
  baseStyle: {
    perspective: '1500px',
    perspectiveOrigin: 'center',
  },
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const SkillsSection = () => {
  const gridRows: GridItemProps = {
    gridTemplateRows: `
    [r1-start]
      auto [r1-end r2-start]
      auto [r2-end r3-start]
      auto [r3-end r4-start]
      10rem [r4-end r5-start]            
      auto [r5-end r6-start]        
      auto [r6-end]        
    `,
    position: 'relative',
    backgroundColor: 'orange.50',
    pb: sizes.xl,
    borderTop: '6px solid',
    borderTopColor: 'blackAlpha.50',
  }

  return (
    <SectionBox
      id="skills-section"
      variants={sectionsReveal}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <MainGrid options={gridRows}>
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
    </SectionBox>
  )
}

export default SkillsSection
