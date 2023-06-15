import { SystemStyleObject, chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { sizes } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { OsxImageWindow } from 'ui'
import { lgImgReveal } from '@components/next-ui/animations/slideIn'

const SectionBox = chakra(motion.div, {
  baseStyle: {
    perspective: '1500px',
    perspectiveOrigin: 'center',
    overflow: 'hidden',
  },
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const SummaryImage = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()

  const { footerLgImg } = projectData!

  const mainStyles: SystemStyleObject = {
    gridRow: {
      base: '7/span 1',
      md: 'r5-start/r5-end',
    },
    gridColumn: 'col-start 2/span 10',
    pt: sizes.xl,
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
        src={`/images/${footerLgImg.fileName}.jpg`}
        alt={footerLgImg.alt}
      />
    </SectionBox>
  )
}

export default SummaryImage
