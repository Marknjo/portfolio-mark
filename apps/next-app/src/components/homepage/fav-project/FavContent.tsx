import { GridItem, VStack, Button, Icon } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { FiArrowRight } from 'react-icons/fi'
import { ParagraphGenerator } from 'ui'

const LinkIconRight = () => <Icon as={FiArrowRight} />

/// @TODO: fix button links - pass favorite project url links here
const FavContent = () => {
  const {
    content: {
      favProject: { summaryText, moreDetailsButtonText },
    },
  } = useHomePageData()

  return (
    <GridItem
      gridRow="r5-start / r5-end"
      gridColumn={{
        base: 'content-start / content-end',
        sm: 'col-start 2 / col-end 10',
      }}
      mt={sizes.xl}
      zIndex="2"
    >
      <VStack alignItems="flex-start" rowGap={sizes.md}>
        <VStack alignItems="flex-start" rowGap={{ md: '1', lg: '3' }}>
          <ParagraphGenerator content={summaryText} />
        </VStack>
        <Button
          colorScheme="orange"
          variant="outline"
          rightIcon={<LinkIconRight />}
        >
          {moreDetailsButtonText}
        </Button>
      </VStack>
    </GridItem>
  )
}
export default FavContent
