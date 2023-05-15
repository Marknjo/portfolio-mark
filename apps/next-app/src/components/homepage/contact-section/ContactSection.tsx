import { GridProps } from '@chakra-ui/react'
import { DotsBottomRight, DotsTopRight, MainGrid } from 'ui'
import ContactTitle from './ContactTitle'
import ContactLeftBox from './ContactLeftBox'
import ContactRightBox from './ContactRightBox'

const ContactSection = () => {
  const gridStyles: GridProps = {
    backgroundColor: 'orange.500',
    pt: '16',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,

    gridTemplateRows: `
      [r1-start] 
      auto  [r1-end r2-start]
      4rem [r2-end r3-start]
      auto  [r3-end r4-start]
      4rem [r4-end]
    `,
  }
  return (
    <MainGrid options={gridStyles} as="section" id="contact-section">
      {/* Dotted Top */}
      <DotsTopRight width={22} />

      {/* Section Title (subtitle component as h2) */}
      <ContactTitle />

      {/* Component Text */}
      <ContactLeftBox />

      {/* Contact Form component */}
      <ContactRightBox />

      {/* Dotted Bottom */}
      <DotsBottomRight width={22} />
    </MainGrid>
  )
}

export default ContactSection
