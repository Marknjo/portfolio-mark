import { GridItem, SystemStyleObject } from '@chakra-ui/react'

import { SubHeading } from 'ui'
import { HSocialIcons, sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { IHomePageContentV1, ISocialLink } from '@data/types'

const LeftSocialIcons = () => {
  const {
    data: { contactSocialIcons },
    content: {
      contact: { socialTitle },
    },
  } = useHomePageData<IHomePageContentV1>()

  const socialHeadingStyles: SystemStyleObject = {
    borderColor: 'orange.200',
    color: 'orange.900',
    textAlign: 'left',
    display: 'inline-block',
    pr: sizes.xs,
  }

  return (
    <GridItem alignSelf="end" gridColumn="1 / span 5" mr={sizes.xs}>
      <SubHeading overrides={socialHeadingStyles} text={socialTitle} />
      <HSocialIcons
        socialDetails={contactSocialIcons as Array<ISocialLink>}
        themeColor={{ color: 'orange.400', width: '24px' }}
        themeHoverColor={{ color: 'orange.500' }}
      />
    </GridItem>
  )
}

export default LeftSocialIcons
