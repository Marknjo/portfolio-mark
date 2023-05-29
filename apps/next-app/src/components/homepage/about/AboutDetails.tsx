import { Box, GridItem, Heading, VStack, Text } from '@chakra-ui/react'
import { DetailsItemsTitle } from 'ui'
import { socialWithPick } from '@data/social'
import { HSocialIcons, sizes } from '@components/next-ui'

const DetailsItem = ({ title, text }: { title: string; text: string }) => (
  <Box>
    <DetailsItemsTitle align={{ textAlign: 'left' }} title={title} />
    <Text fontSize="sm" color="orange.800">
      {text}
    </Text>
  </Box>
)

const AboutDetails = () => {
  const rowBreakingPoint = {
    base: 'r5-start/r6-end',
    lg: 'r2-start / r5-end',
  }

  const columnBreakPoint = {
    base: 'content-start / content-end',
    sm: 'col-start 2/col-end 11',
    lg: 'col-start 11 / span 2',
  }
  const mxBreakpoint = { base: '6', lg: 0 }
  return (
    <>
      <GridItem
        gridColumn={columnBreakPoint}
        gridRow={rowBreakingPoint}
        backgroundColor="orange.50"
        zIndex="1"
        boxShadow={{ base: 'lg', lg: 'none' }}
        borderRadius={{ base: 'md', lg: 'none' }}
        border={{ base: '1px solid', lg: 'none' }}
        borderColor={{ base: 'orange.100', lg: 'transparent' }}
      >
        &nbsp;
      </GridItem>

      <GridItem
        gridColumn={columnBreakPoint}
        gridRow={rowBreakingPoint}
        justifySelf={{ lg: 'center' }}
        alignSelf="center"
        px={{ base: '1', lg: '2' }}
        py={sizes.md}
        zIndex="2"
        mt={{ base: '4', lg: '0' }}
        mx={mxBreakpoint}
      >
        <Heading
          as="h3"
          fontSize="2xl"
          textAlign={{ base: 'center', lg: 'left' }}
          color="orange.900"
          borderBottom="2px solid"
          borderBottomColor="orange.200"
          lineHeight="1.5"
          mb={{ base: '3', sm: '2', lg: '4' }}
          width="100%"
        >
          Details
        </Heading>

        <VStack
          alignItems={{ base: 'center', lg: 'flex-start' }}
          gap={{ base: '3', sm: '2', lg: '4' }}
          pb={sizes.sm}
          flexDirection={{ base: 'column', sm: 'row', lg: 'column' }}
          justifyContent={{ base: 'space-around', lg: 'center' }}
        >
          <DetailsItem title="Name" text="Mark Njoroge" />
          <DetailsItem title="Work Availability" text="Open For Long-Term" />
          <DetailsItem title="Location" text="Kenya" />
        </VStack>

        <Box
          width="100%"
          mt={{ base: 0, lg: '4' }}
          py={{ base: '3', sm: '2', lg: '4' }}
          borderTop="1px solid"
          borderTopColor="orange.100"
          borderBottom={{ base: 'none', lg: '1px solid' }}
          borderBottomColor={{ lg: 'orange.100' }}
        >
          <DetailsItemsTitle
            align={{ textAlign: 'center', marginBottom: '3' }}
            title="Social"
          />

          <HSocialIcons
            socialDetails={socialWithPick(3)}
            sx={{
              justifyContent: {
                base: 'space-evenly',
                sm: 'center',
                lg: 'space-evenly',
              },
            }}
            themeColor={{ color: 'orange.400', width: '24px' }}
            themeHoverColor={{ color: 'orange.500' }}
          />
        </Box>
      </GridItem>
    </>
  )
}

export default AboutDetails
