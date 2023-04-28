import { GridItem, SystemStyleObject } from '@chakra-ui/react'

import { SubHeading } from 'ui'
import { socials } from '@data/social'
import { HSocialIcons } from '@next-ui/.'

const LeftSocialIcons = () => {
  const socialHeadingStyles: SystemStyleObject = {
    borderColor: 'teal.200',
    color: 'teal.900',
    textAlign: 'left',
    display: 'inline-block',
    pr: '4',
  }

  return (
    <GridItem gridColumn="1 / span 5" mr="4">
      <SubHeading overrides={socialHeadingStyles} text="Follow Me" />
      <HSocialIcons
        socialDetails={socials}
        themeColor={{ color: 'teal.400', width: '24px' }}
        themeHoverColor={{ color: 'teal.500' }}
      />
    </GridItem>
  )
}

export default LeftSocialIcons
