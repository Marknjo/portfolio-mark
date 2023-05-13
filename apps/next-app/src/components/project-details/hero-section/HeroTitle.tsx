import { LargeTitle } from 'ui'

const HeroTitle = () => (
  <LargeTitle
    as="h1"
    title="Afri-Hickr"
    subTitle="Outdoor Activities"
    subTitleConfig={{ color: 'orange.100', fontSize: '4xl' }}
    titleConfig={{
      color: 'orange.50',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '7xl',
      gridColumn: 'content-start/content-end',
      gridRow: 'title-start/title-end',
      zIndex: '1',
      minH: 'calc(100vh / 3)',
      margin: '0',
      py: '16',
    }}
  />
)

export default HeroTitle
