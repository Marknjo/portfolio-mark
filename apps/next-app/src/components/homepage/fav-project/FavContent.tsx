import NextLink from 'next/link'
import { GridItem, VStack, Icon, useConst } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { appIcons } from '@data/generalData/icons/dataAppIcons'
import { IFavGalleryData, IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import { FiArrowRight } from 'react-icons/fi'
import { SolidBtn, TextContentGenerator } from 'ui'

const LinkIconRight = () => <Icon as={FiArrowRight} />

/// @TODO: fix button links - pass favorite project url links here
const FavContent = () => {
  const {
    data: { favProject },
    content: {
      favProject: { moreDetailsButtonText },
    },
  } = useHomePageData<IHomePageContentV1>()

  const { favGalleryText, link } = favProject as IFavGalleryData

  const textOptions = useConst({
    ...favGalleryText,
    listOptions: {
      ...(favGalleryText?.listOptions?.icon
        ? { icon: appIcons.listIcons[favGalleryText.listOptions.icon] }
        : {}),
    },
  })

  return (
    <GridItem
      gridRow="r5-start / r5-end"
      gridColumn={{
        base: 'content-start / content-end',
        sm: 'col-start 2 / col-end 11',
        lg: 'col-start 2 / col-end 10',
        xl: 'col-start 2 / col-end 8',
      }}
      mt={sizes.xl}
      zIndex="2"
    >
      <VStack alignItems="flex-start" rowGap={sizes.md}>
        <VStack alignItems="flex-start" rowGap={{ md: '1', lg: '3' }}>
          <TextContentGenerator {...textOptions} />
        </VStack>

        <SolidBtn
          text={moreDetailsButtonText}
          props={{
            as: NextLink,
            rightIcon: <LinkIconRight />,
          }}
          href={`/${link}`}
          sx={{
            border: '1px solid',
            borderColor: 'orange.300',
            bgColor: 'orange.50',
          }}
        />
      </VStack>
    </GridItem>
  )
}
export default FavContent
