import { Grid, SystemStyleObject } from '@chakra-ui/react'

import LeftSubHeading from './left-box/LeftSubHeading'
import LeftContent from './left-box/LeftContent'
import LeftSocialIcons from './left-box/LeftSocialIcon'

const ContactLeftBox = () => {
  const mainStyles: SystemStyleObject = {
    gridColumn: 'content-start/span 7',
    gridRow: 'r2-start / r4-end',
    my: '12',
    padding: '12',
    pr: '24',
    backgroundColor: 'teal.50',
    borderRadius: 'lg',
    boxShadow: 'base',

    gridTemplateColumns: 'repeat(6, minmax(20px, 1fr))',
    alignItems: 'top',
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
