import { SkillsCategory } from 'ui'
import SkillsCategoryContainer from './SkillsCategoryContainer'
/**
 * Card for programming languages I have worked with
 */
const SkillsPrLangs = () => (
  <SkillsCategoryContainer
    headingText="General Programming Languages"
    category={SkillsCategory.PROGRAMMING_LANGS}
    mainStylesOverrides={{
      gridRow: 'r3-start/r5-end',
      pb: '10rem',
    }}
    headingStylesOverrides={{
      mb: '6',
    }}
  />
)

export default SkillsPrLangs
