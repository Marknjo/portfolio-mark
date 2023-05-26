import { Grid, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'

import LeftSubHeading from './left-box/LeftSubHeading'
import LeftContent from './left-box/LeftContent'
import LeftSocialIcons from './left-box/LeftSocialIcon'

const ContactLeftBox = () => {
  const mainStyles: SystemStyleObject = {
    gridColumn: 'content-start/span 7',
    gridRow: 'r2-start / r4-end',
    my: sizes.lg,
    p: sizes.lg,
    pr: '24', // @TODO: flex this
    backgroundColor: 'teal.50',
    borderRadius: 'lg',
    boxShadow: 'base',

    gridTemplateColumns: 'repeat(6, minmax(20px, 1fr))',
    alignItems: 'top',
    zIndex: '2',
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
