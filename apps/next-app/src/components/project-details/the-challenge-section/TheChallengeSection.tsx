import { GridProps } from '@chakra-ui/react'
import { MainGrid, SectionSeparator } from 'ui'
import TheChallengeTitle from './TheChallengeTitle'
import ProjectGoalSub from './ProjectGoalSub'
import ProjectGoalContent from './ProjectGoalContent'
import TheStackSub from './TheStackSub'

const TheChallengeSection = () => {
  const mainStyles: GridProps = {
    gridTemplateRows: `[r1-start]
      auto [r1-end r2-start]
      auto [r2-end r3-start]
      auto [r3-end r4-start]
      auto [r4-end r5-start]
      auto [r5-end r6-start]
      auto [r6-end]
    `,
    backgroundColor: 'orange.50',
    pb: '16',
  }

  return (
    <MainGrid options={mainStyles} as="section" id="challenge-section">
      {/* Section Title */}
      <TheChallengeTitle />

      {/* Project Goals (Title | Content) */}
      <ProjectGoalSub />
      <ProjectGoalContent />

      {/* Add section separator */}
      <SectionSeparator />

      {/* Project stack title */}
      <TheStackSub />
      {/* Project stack icons */}
      {/* Project stack content */}
    </MainGrid>
  )
}
export default TheChallengeSection