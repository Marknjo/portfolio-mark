import { GridItem, SystemStyleObject } from '@chakra-ui/react'

const ContactRightBox = () => {
  const mainStyles: SystemStyleObject = {
    gridColumn: 'col-start 6/content-end',
    gridRow: 'r3-start/r3-end',
    my: '12',
    padding: '12',
    backgroundColor: 'orange.50',
    borderRadius: 'lg',
    boxShadow: 'md',
  }

  return <GridItem sx={mainStyles}>Form</GridItem>
}

export default ContactRightBox
