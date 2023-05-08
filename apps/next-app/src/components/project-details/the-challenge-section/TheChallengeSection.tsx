import { GridProps } from '@chakra-ui/react'
import { MainGrid } from 'ui'
import TheChallengeTitle from './TheChallengeTitle'

const TheChallengeSection = () => {
  const mainStyles: GridProps = {
    gridTemplateRows: `[r1-start]
      auto [r1-end r2-start]
      auto [r3-end r4-start]
      auto [r4-end r5-start]
      auto [r5-end r6-start]
      auto [r6-end r7-start]
      auto [r7-end]
    `,
  }

  return (
    <MainGrid options={mainStyles} as="section" id="challenge-section">
      {/* Section Title */}
      <TheChallengeTitle />

      {/* Project Goals (Title | Content) */}

      {/* Project stack title */}
      {/* Project stack icons */}
      {/* Project stack content */}
    </MainGrid>
  )
}
export default TheChallengeSection
