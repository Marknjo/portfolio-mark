import { GridItem, VStack, Button, Icon, useConst } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { appIcons } from '@data/generalData/icons/dataAppIcons'
import { useHomePageData } from '@store/context/homepage-context'
import { FiArrowRight } from 'react-icons/fi'
import { TextContentGenerator } from 'ui'

const LinkIconRight = () => <Icon as={FiArrowRight} />

/// @TODO: fix button links - pass favorite project url links here
const FavContent = () => {
  const {
    content: {
      favProject: { summaryText, moreDetailsButtonText },
    },
  } = useHomePageData()

  const textOptions = useConst({
    ...summaryText,
    listOptions: {
      ...(summaryText?.listOptions?.icon
        ? { icon: appIcons.listIcons[summaryText.listOptions.icon] }
        : {}),
    },
  })

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
          <TextContentGenerator {...textOptions} />
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
