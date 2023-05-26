import { StyleProps } from '@chakra-ui/react'
import { DotsBottomRight, MainGrid } from 'ui'
import { sizes } from '@components/next-ui'

import FavTitle from './FavTittle'
import FavBg from './FavBg'
import FavContent from './FavContent'
import FavGallery from './FavGallery'

const FavProjectSection = () => {
  const gridRows = {
    md: `
        [r1-start]
        auto [r1-end r2-start]
        auto [r2-end r3-start]
        auto [r3-end r4-start]
        8rem [r4-end r5-start]
        auto [r5-end]        
        `,
  }

  const defaultStyles: StyleProps = {
    gridTemplateRows: gridRows,
    backgroundColor: 'orange.50',
    py: sizes.lg,
    position: 'relative',
    zIndex: '0',
  }

  return (
    <MainGrid id="fav-section" as="section" options={defaultStyles}>
      {/* Main Title */}
      <FavTitle />

      {/* Fav BG */}
      <FavBg />

      {/* Fav Gallery */}
      <FavGallery />

      {/* Content */}
      <FavContent />

      <DotsBottomRight width={22} fill="#ED8936" />
    </MainGrid>
  )
}

export default FavProjectSection
