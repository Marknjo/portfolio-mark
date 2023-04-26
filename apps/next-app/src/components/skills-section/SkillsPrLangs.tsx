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
      gridRow: 'r3-start/r4-end',
      pb: '16',
      mb: '24',
    }}
    headingStylesOverrides={{
      mb: '6',
    }}
  />
)

export default SkillsPrLangs
