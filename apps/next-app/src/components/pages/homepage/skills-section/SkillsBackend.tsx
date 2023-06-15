import { useHomePageData } from '@store/context/homepage-context'
import { EStackCategories, IHomePageContentV1 } from '@data/types'
import SkillsCategoryContainer from './SkillsCategoryContainer'

const SkillsBackend = () => {
  const {
    content: {
      skills: { backendTitle },
    },
  } = useHomePageData<IHomePageContentV1>()

  return (
    <SkillsCategoryContainer
      headingText={backendTitle}
      category={EStackCategories.BACKEND}
      mainStylesOverrides={{
        gridRow: {
          base: 'r2-start/r2-end',
          lg: 'r1-start/r2-end',
          xl: 'r1-start/-1',
        },
        gridColumn: { base: '1 / span 1', lg: '2 / span 1' },
        alignItems: 'center',
      }}
      cardsWrapperOverrides={{
        justifyContent: { base: 'center', lg: 'left' },
      }}
    />
  )
}
export default SkillsBackend
