import { Grid, GridItem, HStack, SystemStyleObject } from '@chakra-ui/react'

import { BsLinkedin, BsTwitter, BsYoutube, BsGithub } from 'react-icons/bs'
import { SubHeading } from 'ui'
import { SocialIcon } from '../next-ui'
import LeftSubHeading from './left-box/LeftSubHeading'
import LeftContent from './left-box/LeftContent'

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
    alignItems: 'top',
  }

  const socialHeadingStyles: SystemStyleObject = {
    borderColor: 'teal.200',
    color: 'teal.900',
    textAlign: 'left',
    display: 'inline-block',
    pr: '4',
  }

  return (
    <Grid sx={mainStyles}>
      {/* Subsection Section Title  */}
      <LeftSubHeading />

      {/* Content */}
      <LeftContent />

      <GridItem gridColumn="1 / span 5" mr="4">
        <SubHeading overrides={socialHeadingStyles} text="Follow Me" />

        <HStack justifyContent="flex-start" gap="2">
          <SocialIcon
            link="https://linkedin.com/in/mark-njoroge/"
            icon={BsLinkedin}
            themeColor={{ color: 'teal.400' }}
            themeHoverColor={{ color: 'teal.500' }}
          />
          <SocialIcon
            link="https://twitter.com/marknjo7"
            icon={BsTwitter}
            themeColor={{ color: 'teal.400' }}
            themeHoverColor={{ color: 'teal.500' }}
          />
          <SocialIcon
            link="https://github.com/Marknjo"
            icon={BsGithub}
            themeColor={{ color: 'teal.400' }}
            themeHoverColor={{ color: 'teal.500' }}
          />
          <SocialIcon
            link="https://youtube.com/@thetalkingdev"
            icon={BsYoutube}
            themeColor={{ color: 'teal.400', width: '24px' }}
            themeHoverColor={{
              color: 'teal.500',
            }}
          />
        </HStack>
      </GridItem>
    </Grid>
  )
}

export default ContactLeftBox
