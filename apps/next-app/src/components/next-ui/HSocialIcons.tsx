import { HStack, SystemStyleObject, Text } from '@chakra-ui/react'

import { ISocialLink } from '@data/types'
import { appIcons } from '@data/generalData/icons/dataAppIcons'
import { IconType } from 'react-icons'
import { SocialIcon } from './SocialIcon'

export const HSocialIcons = ({
  socialDetails,
  sx,
  themeColor,
  themeHoverColor,
}: {
  socialDetails: Array<ISocialLink>
  sx?: SystemStyleObject
  themeColor?: SystemStyleObject
  themeHoverColor?: SystemStyleObject
}) => {
  const mainStyles: SystemStyleObject = {
    justifyContent: 'flex-start',
    gap: '2',
    ...sx,
  }

  return (
    <HStack sx={mainStyles}>
      {socialDetails.map(social => {
        if (!social.isHidden) {
          return (
            <SocialIcon
              key={social.title}
              link={social.link}
              icon={appIcons.socialIcons[social.icon] as IconType}
              title={social.title}
              themeColor={themeColor}
              themeHoverColor={themeHoverColor}
            />
          )
        }
        return <Text as="p">Coming Soon</Text>
      })}
    </HStack>
  )
}
