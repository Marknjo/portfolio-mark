import { GridProps } from '@chakra-ui/react'
import { DotsBottomRight, DotsTopRight, MainGrid } from 'ui'
import ContactTitle from './ContactTitle'
import ContactLeftBox from './ContactLeftBox'

const ContactSection = () => {
  const gridStyles: GridProps = {
    backgroundColor: 'orange.500',
    pt: '16',
    position: 'relative',
    overflow: 'hidden',

    gridTemplateRows: `
      [r1-start] 
      auto  [r1-end r2-start]
      16rem [r2-end r3-start]
      auto  [r3-end r4-start]
      16rem [r4-end r5-start]
    `,
  }
  return (
    <MainGrid options={gridStyles} as="section">
      {/* Dotted Top */}
      <DotsTopRight width={30} />

      {/* Section Title (subtitle component as h2) */}
      <ContactTitle />

      {/* Component Text */}
      <ContactLeftBox />

      {/* Contact Form component */}

      {/* Dotted Bottom */}
      <DotsBottomRight width={30} />
    </MainGrid>
  )
}

export default ContactSection
