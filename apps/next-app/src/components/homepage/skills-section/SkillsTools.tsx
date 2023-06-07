import { EStackCategories } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import SkillsCategoryContainer from './SkillsCategoryContainer'

const SkillsTools = () => {
  const {
    content: {
      skills: { toolsTitle },
    },
  } = useHomePageData()

  return (
    <SkillsCategoryContainer
      headingText={toolsTitle}
      category={EStackCategories.TOOLS}
      mainStylesOverrides={{
        gridRow: { base: 'r3-start/-1', xl: 'r2-start/-1' },
        gridColumn: { base: '1 / -1', xl: '3 / span 1' },
      }}
      cardsWrapperOverrides={{
        justifyContent: { base: 'center', xl: 'left' },
      }}
    />
  )
}
export default SkillsTools
