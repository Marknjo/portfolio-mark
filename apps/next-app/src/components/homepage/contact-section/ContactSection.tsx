import { GridProps, chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

import { sectionsReveal } from '@components/next-ui/animations/slideIn'
import { DotsBottomRight, DotsTopRight, MainGrid } from 'ui'
import { sizes } from '@components/next-ui'

import ContactTitle from './ContactTitle'
import ContactLeftBox from './ContactLeftBox'
import ContactRightBox from './ContactRightBox'

const SectionBox = chakra(motion.section, {
  baseStyle: {
    perspective: '1500px',
    perspectiveOrigin: 'center',
  },
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const ContactSection = () => {
  const rowBrP = {
    base: `
      [r1-start] 
      auto  [r1-end r2-start]
      auto [r2-end r3-start]
      auto  [r3-end]
    `,
    md: `
      [r1-start] 
      auto  [r1-end r2-start]
      3rem [r2-end r3-start]
      auto  [r3-end r4-start]
      3rem [r4-end]
    `,
    lg: `
    [r1-start] 
      auto  [r1-end r2-start]
      4rem [r2-end r3-start]
      auto  [r3-end r4-start]
      4rem [r4-end]
  `,
  }

  const gridStyles: GridProps = {
    backgroundColor: 'orange.500',
    pt: sizes.xl,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,

    gridTemplateRows: rowBrP,
  }
  return (
    <SectionBox
      id="contact-section"
      variants={sectionsReveal}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <MainGrid options={gridStyles}>
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
    </SectionBox>
  )
}

export default ContactSection
