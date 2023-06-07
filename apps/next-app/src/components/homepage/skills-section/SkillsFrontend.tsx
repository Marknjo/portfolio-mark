import { useHomePageData } from '@store/context/homepage-context'
import { EStackCategories } from '@data/types'
import SkillsCategoryContainer from './SkillsCategoryContainer'

const SkillsFrontend = () => {
  const {
    content: {
      skills: { frontendTitle },
    },
  } = useHomePageData()

  return (
    <SkillsCategoryContainer
      headingText={frontendTitle}
      category={EStackCategories.FRONTEND}
      mainStylesOverrides={{
        gridRow: {
          base: 'r1-start/r1-end',
          lg: 'r1-start/r2-end',
          xl: 'r2-start/-1',
        },
        gridColumn: '1 / span 1',
        alignItems: 'center',
      }}
      cardsWrapperOverrides={{
        justifyContent: { base: 'center', lg: 'left' },
      }}
    />
  )
}
export default SkillsFrontend
