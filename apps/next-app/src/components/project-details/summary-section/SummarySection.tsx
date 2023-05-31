import { GridProps } from '@chakra-ui/react'
import { MainGrid, SectionSeparator } from 'ui'
import { sizes } from '@components/next-ui'

import SummaryTitle from './SummaryTitle'
import SummarySubLeft from './SummarySubLeft'
import SummarySubRight from './SummarySubRight'
import SummaryContentLeft from './SummaryContentLeft'
import SummaryContentRight from './SummaryContentRight'
import SummaryImage from './SummaryImage'

const SummarySection = () => {
  const mainStyles: GridProps = {
    backgroundColor: 'orange.50',
    pb: sizes.xl,
    gridTemplateRows: {
      base: 'auto',
      md: `[r1-start]
        auto [r1-end r2-start]
        auto [r2-end r3-start]
        auto [r3-end r4-start]
        6px [r4-end r5-start]
        auto [r5-end]
    `,
    },
  }

  return (
    <MainGrid options={mainStyles} as="section">
      {/* Main Title */}
      <SummaryTitle />

      {/* Subtitles (Left & Right) */}
      <SummarySubLeft />
      <SummarySubRight />

      {/* Content Left | Right */}
      <SummaryContentLeft />
      <SummaryContentRight />

      {/* Summary Separator */}
      <SectionSeparator
        sxOverrides={{ gridRow: { base: '6/span 1', md: 'r4-start/r4-end' } }}
      />

      {/* Summary Section Image */}
      <SummaryImage />

      {/* Project Challenges */}

      {/* Lesson Learnt */}
    </MainGrid>
  )
}

export default SummarySection
