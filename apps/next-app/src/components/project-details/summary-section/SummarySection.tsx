import { GridProps } from '@chakra-ui/react'
import { MainGrid } from 'ui'
import SummaryTitle from './SummaryTitle'
import SummarySubLeft from './SummarySubLeft'

const SummarySection = () => {
  const mainStyles: GridProps = {
    backgroundColor: 'orange.50',
    py: '16',
    gridTemplateRows: `[r1-start]
      auto [r1-end r2-start]
      auto [r2-end r3-start]
      auto [r3-end r4-start]
      auto [r4-end]
    `,
  }

  return (
    <MainGrid options={mainStyles} as="section">
      {/* Main Title */}
      <SummaryTitle />

      {/* Subtitles (Left & Right) */}
      <SummarySubLeft />

      {/* Project Challenges */}

      {/* Lesson Learnt */}
    </MainGrid>
  )
}

export default SummarySection
