import { GridItem, GridProps } from '@chakra-ui/react'
import { DotsBottomRight, DotsTopRight, MainGrid } from 'ui'

const ContactSection = () => {
  const gridStyles: GridProps = {
    backgroundColor: 'orange.500',
    pt: '16',
    position: 'relative',
    overflow: 'hidden',
  }
  return (
    <MainGrid options={gridStyles} as="section">
      {/* Dotted Top */}
      <DotsTopRight width={30} />

      {/* Section Title (subtitle component as h2) */}
      <GridItem gridColumn="content-start/content-end">Content</GridItem>

      {/* Component Text */}

      {/* Contact Form component */}

      {/* Dotted Bottom */}
      <DotsBottomRight width={30} />
    </MainGrid>
  )
}

export default ContactSection
