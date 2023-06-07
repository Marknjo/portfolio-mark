import { GridItem, SystemStyleObject } from '@chakra-ui/react'

import { SubHeading } from 'ui'
import { HSocialIcons, sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { ISocialLink } from '@data/types'

const LeftSocialIcons = () => {
  const {
    data: { contactSocialIcons },
    content: {
      contact: { socialTitle },
    },
  } = useHomePageData()

  const socialHeadingStyles: SystemStyleObject = {
    borderColor: 'teal.200',
    color: 'teal.900',
    textAlign: 'left',
    display: 'inline-block',
    pr: sizes.xs,
  }

  return (
    <GridItem alignSelf="end" gridColumn="1 / span 5" mr={sizes.xs}>
      <SubHeading overrides={socialHeadingStyles} text={socialTitle} />
      <HSocialIcons
        socialDetails={contactSocialIcons as Array<ISocialLink>}
        themeColor={{ color: 'teal.400', width: '24px' }}
        themeHoverColor={{ color: 'teal.500' }}
      />
    </GridItem>
  )
}

export default LeftSocialIcons
