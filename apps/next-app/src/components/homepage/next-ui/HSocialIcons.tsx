import { HStack, SystemStyleObject, Text } from '@chakra-ui/react'

import { ISocialLinks } from '@data/social'
import { SocialIcon } from './SocialIcon'

export const HSocialIcons = ({
  socialDetails,
  sx,
  themeColor,
  themeHoverColor,
}: {
  socialDetails: Array<ISocialLinks>
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
              icon={social.icon}
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
