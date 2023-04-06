import { GridProps } from '@chakra-ui/react'
import { DotsTopRight, MainGrid } from 'ui'
import ProjectTitle from './ProjectTitle'
import ProjectSub from './ProjectSub'
import ProjectHeroImg from './ProjectHeroImg'
import ProjectCards from './ProjectCards'

const ProjectsSection = () => {
  const templateRows = {
    // sm: "", // 480px
    // md: "", // 768px
    // lg: "", // 992px
    // xl: "", // 1280px
    md: `[title-start] auto [title-end sub-start]
         auto [sub-end img-start]
         repeat(2, auto) [img-end img-r3-start]
         8rem [img-r3-end cards-start]
         auto [cards-end]`, // 992px
  }

  const mainGridStyles: GridProps = {
    backgroundColor: 'orange.500',
    color: 'orange.50',
    gridTemplateRows: templateRows,
    pb: '16',
    position: 'relative',
  }

  return (
    <MainGrid as="section" options={mainGridStyles}>
      {/* Dots */}
      <DotsTopRight width={30} />

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
