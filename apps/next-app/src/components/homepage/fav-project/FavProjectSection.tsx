import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

import { SliderProvider } from '@store/context/slider'
import { sectionsReveal } from '@components/next-ui/animations/slideIn'

import FavProjectRoot from './FavProjectRoot'

const SectionBox = chakra(motion.section, {
  baseStyle: {
    perspective: '1500px',
    perspectiveOrigin: 'center',
  },
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const FavProjectSection = () => (
  <SectionBox
    id="fav-section"
    variants={sectionsReveal}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}
  >
    <SliderProvider>
      <FavProjectRoot />
    </SliderProvider>
  </SectionBox>
)

export default FavProjectSection
