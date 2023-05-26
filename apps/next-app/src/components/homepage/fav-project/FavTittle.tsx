import { GridItem } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { LargeTitle } from 'ui'

const FavTitle = () => (
  <GridItem gridColumn="col-start 5 / content-end" gridRow="r1-start / r1-end">
    <LargeTitle
      title="I Build Expressive Websites,
      Awesome, and Catchy."
      subTitle="Here's Quick Peak of My Favorite Project"
      subTitleConfig={{ textAlign: 'left' }}
      alignTitle={{ alignItems: 'left', pl: sizes['xl-sm'] }}
    />
  </GridItem>
)

export default FavTitle
