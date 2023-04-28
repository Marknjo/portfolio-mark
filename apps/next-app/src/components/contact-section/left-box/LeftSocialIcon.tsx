import { GridItem, HStack, SystemStyleObject, Text } from '@chakra-ui/react'

import { SubHeading } from 'ui'
import { socials } from '@src/data/social'
import { SocialIcon } from '../../next-ui'

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

      <HStack justifyContent="flex-start" gap="2">
        {socials.map(social => {
          if (!social.isHidden) {
            return (
              <SocialIcon
                key={social.title}
                link={social.link}
                icon={social.icon}
                title={social.title}
                themeColor={{ color: 'teal.400', width: '24px' }}
                themeHoverColor={{ color: 'teal.500' }}
              />
            )
          }
          return <Text as="p">Coming Soon</Text>
        })}
      </HStack>
    </GridItem>
  )
}

export default LeftSocialIcons
