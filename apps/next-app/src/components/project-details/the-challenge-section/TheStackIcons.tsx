import { GridItem, SystemStyleObject } from '@chakra-ui/react'

const TheStackIcons = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r6-start / r6-end',
    gridColumn: 'content-start / col-end 6',
  }

  return <GridItem sx={mainStyles}>Icons</GridItem>
}

export default TheStackIcons
