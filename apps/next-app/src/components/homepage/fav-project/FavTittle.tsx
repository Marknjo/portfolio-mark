import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const FavTitle = () => (
  <GridItem gridColumn="col-start 5 / content-end" gridRow="r1-start / r1-end">
    <LargeTitle
      title="I Build Expressive Websites,
      Awesome, and Catchy."
      subTitle="Here's Quick Peak of My Favorite Project"
      subTitleConfig={{ color: 'orange.900' }}
      titleConfig={{ color: 'orange.700', mt: '0' }}
      alignTitle={{ alignItems: 'left' }}
    />
  </GridItem>
)

export default FavTitle
