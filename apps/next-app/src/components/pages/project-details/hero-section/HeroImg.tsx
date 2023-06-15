import { SystemStyleObject, chakra, shouldForwardProp } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { OsxImageWindow } from 'ui'

import { isValidMotionProp, motion } from 'framer-motion'
import { lgImgReveal } from '@components/next-ui/animations/slideIn'

const SectionBox = chakra(motion.div, {
  baseStyle: {
    perspective: '1500px',
    perspectiveOrigin: 'center',
    overflow: 'hidden',
  },
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const HeroImg = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()
  const { introLgImg } = projectData!

  const mainStyles: SystemStyleObject = {
    gridRow: 'r2-start/r3-end',
    gridColumn: { base: 'col-start 2/span 10', md: 'col-start 3/span 8' },
    pt: sizes.lg,
    backfaceVisibility: 'hidden',
    perspective: '1000px',
    zIndex: 3,
  }

  return (
    <SectionBox
      sx={mainStyles}
      variants={lgImgReveal}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <OsxImageWindow
        mainSxOverrides={{ backgroundColor: 'orange.50' }}
        src={`/images/${introLgImg.fileName}.jpg`}
        alt={introLgImg.alt}
      />
    </SectionBox>
  )
}

export default HeroImg
