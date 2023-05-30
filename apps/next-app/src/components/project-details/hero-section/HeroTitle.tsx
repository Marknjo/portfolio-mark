import { LargeTitle } from 'ui'

const HeroTitle = () => (
  <LargeTitle
    as="h1"
    title="Afri-Hickr"
    subTitle="Outdoor Activities"
    subTitleConfig={{ color: 'orange.100' }}
    titleConfig={{
      color: 'orange.50',
      gridColumn: 'content-start/content-end',
      gridRow: 'title-start/title-end',
      zIndex: '1',
      pb: { base: '12', lg: '20' },
      pt: '0',
    }}
  />
)

export default HeroTitle
