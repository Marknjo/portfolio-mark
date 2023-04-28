import { Grid, SystemStyleObject } from '@chakra-ui/react'

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
  }

  return <Grid sx={mainStyles}>Content</Grid>
}

export default ContactLeftBox
