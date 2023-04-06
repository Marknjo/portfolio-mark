import { StyleProps } from '@chakra-ui/react'
import { MainGrid } from 'ui'
import FavTitle from './FavTittle'
import FavBg from './FavBg'

const FavProjectSection = () => {
  const gridRows = {
    md: `
        [r1-start]
        auto [r1-end r2-start]
        auto [r2-end r3-start]
        auto [r3-end r4-start]
        8rem [r4-end r5-start]
        auto [r5-end r6-start]        
        `,
  }

  const defaultStyles: StyleProps = {
    gridTemplateRows: gridRows,
    backgroundColor: 'orange.50',
    paddingY: '16',
    position: 'relative',
  }

  return (
    <MainGrid as="section" options={defaultStyles}>
      {/* Main Title */}
      <FavTitle />

      {/* Fav BG */}
      <FavBg />
      {/* Fav Gallery */}

      {/* Content */}
    </MainGrid>
  )
}

export default FavProjectSection
