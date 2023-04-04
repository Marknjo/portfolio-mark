import { GridItem, GridProps, Text } from '@chakra-ui/react'
import { MainGrid } from 'ui'
import ProjectTitle from './ProjectTitle'
import ProjectSub from './ProjectSub'

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
    height: '500px',
  }

  return (
    <MainGrid as="section" options={mainGridStyles}>
      {/* Main Title */}
      <ProjectTitle />

      {/* Subtitle */}
      <ProjectSub />

      {/* Main Image */}
      <GridItem
        gridColumn="col-start 2/span 8"
        gridRow="img-start/span 3"
        backgroundColor="orange.200"
      >
        <Text>Main Image</Text>
      </GridItem>

      {/* Cards Section */}
      <GridItem
        gridColumn="col-start 3/content-end"
        gridRow="img-r3-start/ span 2"
        backgroundColor="orange.300"
      >
        <Text>cards</Text>
      </GridItem>
    </MainGrid>
  )
}

export default ProjectsSection
