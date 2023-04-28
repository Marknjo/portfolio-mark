import { GridItem, SystemStyleObject } from '@chakra-ui/react'

const ContactLeftBox = () => {
  const mainStyles: SystemStyleObject = {
    gridColumn: 'content-start/span 7',
    gridRow: 'r2-start / r5-end',
    my: '12',
    padding: '12',
    pr: '24',
    backgroundColor: 'teal.50',
    borderRadius: 'lg',
  }

  return <GridItem sx={mainStyles}>Content</GridItem>
}

export default ContactLeftBox
