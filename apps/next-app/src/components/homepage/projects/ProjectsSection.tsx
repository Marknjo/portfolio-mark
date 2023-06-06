import { GridProps } from '@chakra-ui/react'
import { DotsTopRight, MainGrid } from 'ui'
import { sizes } from '@components/next-ui'

import ProjectTitle from './ProjectTitle'
import ProjectSub from './ProjectSub'
import ProjectHeroImg from './ProjectHeroImg'
import ProjectCards from './ProjectCards'

const ProjectsSection = () => {
  const templateRows = {
    base: `[title-start] 
        auto [title-end sub-start]
        auto [sub-end img-start]
        repeat(2, auto) [img-end img-r3-start]
        4rem [img-r3-end cards-start]
        auto [cards-end]`,

    sm: `[title-start] 
      auto [title-end sub-start]
      auto [sub-end img-start]
      repeat(2, auto) [img-end img-r3-start]
      6rem [img-r3-end cards-start]
      auto [cards-end]`,

    lg: `[title-start] auto [title-end sub-start]
      auto [sub-end img-start]
      repeat(2, auto) [img-end img-r3-start]
      8rem [img-r3-end cards-start]
      auto [cards-end]`,
  }

  const mainGridStyles: GridProps = {
    backgroundColor: 'orange.500',
    color: 'orange.50',
    gridTemplateRows: templateRows,
    pb: sizes.xl,
    position: 'relative',
  }

  return (
    <MainGrid id="projects-section" as="section" options={mainGridStyles}>
      {/* Dots */}
      <DotsTopRight width={22} />

      {/* Main Title */}
      <ProjectTitle />

      {/* Subtitle */}
      <ProjectSub />

      {/* Main Image */}
      <ProjectHeroImg />

      {/* Cards Section */}
      <ProjectCards />

      {/* @TODO: Implement a view all projects sub-section */}
    </MainGrid>
  )
}

export default ProjectsSection
