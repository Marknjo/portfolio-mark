import {
  Box,
  GridItem,
  HStack,
  Heading,
  VStack,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react'
import { BsLinkedin, BsTwitter, BsYoutube, BsGithub } from 'react-icons/bs'
import { SocialIcon } from '../next-ui'

const DetailsItemsTitle = ({
  title,
  align,
}: {
  title: string
  align: SystemStyleObject
}) => (
  <Heading as="h4" fontSize="lg" color="blackAlpha.800" sx={align}>
    {title}
  </Heading>
)

const DetailsItem = ({ title, text }: { title: string; text: string }) => (
  <Box>
    <DetailsItemsTitle align={{ textAlign: 'left' }} title={title} />
    <Text fontSize="sm" color="orange.800">
      {text}
    </Text>
  </Box>
)

const AboutDetails = () => (
  <>
    <GridItem
      gridColumn="col-start 11 / span 2"
      gridRow="details-upper-start / details-lower-end"
      backgroundColor="orange.50"
      zIndex="1"
    >
      &nbsp;
    </GridItem>
    <GridItem
      gridColumn="col-start 11 / span 2"
      gridRow="section-title/content-end"
      justifySelf="center"
      alignSelf="center"
      paddingX="2"
      paddingY="8"
      zIndex="2"
    >
      <VStack alignItems="flex-start">
        <Heading
          as="h3"
          fontSize="3xl"
          color="orange.900"
          borderBottom="2px solid"
          borderBottomColor="orange.200"
          lineHeight="1.5"
          marginBottom="4"
          width="100%"
        >
          Details
        </Heading>

        <VStack alignItems="flex-start" gap="4" paddingBottom="6">
          <DetailsItem title="Name" text="Mark Njoroge" />
          <DetailsItem title="Work Availability" text="Open For Long-Term" />
          <DetailsItem title="Location" text="Kenya" />
        </VStack>

        <Box
          width="100%"
          marginTop="4"
          paddingY="4"
          borderTop="2px solid"
          borderTopColor="orange.100"
          borderBottom="2px solid"
          borderBottomColor="orange.100"
        >
          <DetailsItemsTitle
            align={{ textAlign: 'center', marginBottom: '3' }}
            title="Social"
          />
          <HStack justifyContent="space-evenly">
            <SocialIcon
              link="https://linkedin.com/in/mark-njoroge/"
              icon={BsLinkedin}
            />
            <SocialIcon link="https://twitter.com/marknjo7" icon={BsTwitter} />
            <SocialIcon link="https://github.com/Marknjo" icon={BsGithub} />
            <SocialIcon
              link="https://youtube.com/@thetalkingdev"
              icon={BsYoutube}
            />
          </HStack>
        </Box>
      </VStack>
    </GridItem>
  </>
)

export default AboutDetails
