import { Box, GridItem, VStack, Text } from '@chakra-ui/react'
import { DetailsItemsTitle, SubHeading } from 'ui'
import { HSocialIcons, sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { IHomePageContentV1, ISocialLink } from '@data/types'

const DetailsItem = ({ title, text }: { title: string; text: string }) => (
  <Box>
    <DetailsItemsTitle sx={{ textAlign: 'left' }} title={title} />
    <Text
      fontSize="sm"
      alignItems={{ base: 'center', sm: 'left' }}
      color="orange.800"
    >
      {text}
    </Text>
  </Box>
)

const AboutDetails = () => {
  const {
    data: { aboutSocialIcons },
    content: {
      about: {
        detailsLocationText,
        detailsLocationTitle,
        detailsNameText,
        detailsNameTitle,
        detailsSocialTitle,
        detailsTitle,
        detailsWorkAvailabilityText,
        detailsWorkAvailabilityTitle,
      },
    },
  } = useHomePageData<IHomePageContentV1>()

  const rowBreakingPoint = {
    base: 'r5-start/r6-end',
    lg: 'r2-start / r5-end',
  }

  const columnBreakPoint = {
    base: 'content-start / content-end',
    sm: 'col-start 2/col-end 11',
    lg: 'col-start 11 / span 2',
  }
  const mxBreakpoint = { base: '4', lg: 0 }
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
        <SubHeading
          as="h3"
          overrides={{
            textAlign: { base: 'center', lg: 'left' },
            color: 'orange.900',
            borderBottomColor: 'orange.200',
            mb: { base: '3', sm: '2', lg: '4' },
            width: '100%',
          }}
          text={detailsTitle}
        />

        <VStack
          alignItems={{ base: 'center', lg: 'flex-start' }}
          gap={{ base: '3', sm: '2', lg: '4' }}
          pb={sizes.sm}
          flexDirection={{ base: 'column', sm: 'row', lg: 'column' }}
          justifyContent={{ base: 'space-around', lg: 'center' }}
        >
          <DetailsItem title={detailsNameTitle} text={detailsNameText} />
          <DetailsItem
            title={detailsWorkAvailabilityTitle}
            text={detailsWorkAvailabilityText}
          />
          <DetailsItem
            title={detailsLocationTitle}
            text={detailsLocationText}
          />
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
            sx={{ textAlign: 'center', marginBottom: '3' }}
            title={detailsSocialTitle}
          />

          <HSocialIcons
            socialDetails={aboutSocialIcons as ISocialLink[]}
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
