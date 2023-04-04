import { GridProps } from '@chakra-ui/react'
import { MainGrid } from 'ui'
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
         repeat(2, 1fr) [img-end img-r3-start]
         2fr [img-r3-end cards-start]
         1fr [cards-end]`, // 992px
  }

  const mainGridStyles: GridProps = {
    backgroundColor: 'orange.500',
    color: 'orange.50',
    gridTemplateRows: templateRows,
    pb: '16',
  }

  return (
    <MainGrid as="section" options={mainGridStyles}>
      {/* Main Title */}
      <ProjectTitle />

      {/* Subtitle */}
      <ProjectSub />

      {/* Main Image */}
      <ProjectHeroImg />

      {/* Cards Section */}
      <ProjectCards />
    </MainGrid>
  )
}

export default ProjectsSection
