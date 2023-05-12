import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const HeroTitle = () => (
  <GridItem
    gridColumn="content-start/content-end"
    gridRow="title-start/title-end"
    zIndex="1"
    minH="calc(100vh / 6)"
  >
    <LargeTitle
      as="h1"
      title="Afri-Hickr"
      subTitle="Outdoor Activities"
      subTitleConfig={{ color: 'orange.50', fontSize: '4xl' }}
      titleConfig={{
        color: 'orange.100',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '7xl',
      }}
    />
  </GridItem>
)

export default HeroTitle
