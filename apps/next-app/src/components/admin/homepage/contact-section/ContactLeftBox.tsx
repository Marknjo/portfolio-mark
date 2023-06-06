import { Grid, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'

import LeftSubHeading from './left-box/LeftSubHeading'
import LeftContent from './left-box/LeftContent'
import LeftSocialIcons from './left-box/LeftSocialIcon'

const ContactLeftBox = () => {
  const mainStyles: SystemStyleObject = {
    gridColumn: {
      base: 'content-start/content-end',
      md: 'content-start/span 6',
    },
    gridRow: { base: 'r2-start/r2-end', md: 'r2-start / r4-end' },
    mb: { base: '0', md: '10', lg: '12' },
    p: sizes.lg,

    backgroundColor: 'teal.50',
    borderRadius: { base: 'md', md: 'lg' },
    boxShadow: 'base',

    gridTemplateColumns: 'repeat(6, minmax(20px, 1fr))',
    alignItems: 'top',
    zIndex: '2',
    gridAutoRows: 'min-content',
  }

  return (
    <Grid sx={mainStyles}>
      {/* Subsection Section Title  */}
      <LeftSubHeading />

      {/* Content */}
      <LeftContent />

      {/* Social icons */}
      <LeftSocialIcons />
    </Grid>
  )
}

export default ContactLeftBox
