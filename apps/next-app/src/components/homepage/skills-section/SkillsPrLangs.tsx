import { sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { EStackCategories, IHomePageContentV1 } from '@data/types'
import SkillsCategoryContainer from './SkillsCategoryContainer'
/**
 * Card for programming languages I have worked with
 */
const SkillsPrLangs = () => {
  const {
    content: {
      skills: { progsLangTitle },
    },
  } = useHomePageData<IHomePageContentV1>()

  return (
    <SkillsCategoryContainer
      headingText={progsLangTitle}
      category={EStackCategories.PROGRAMMING_LANGS}
      mainStylesOverrides={{
        gridRow: 'r3-start/r4-end',
        pb: '10rem',
      }}
      headingStylesOverrides={{
        mb: sizes.sm,
      }}
      cardsWrapperOverrides={{
        justifyContent: 'center',
      }}
    />
  )
}

export default SkillsPrLangs
