import { StackCategory } from 'ui'
import { sizes } from '@components/next-ui'
import SkillsCategoryContainer from './SkillsCategoryContainer'
/**
 * Card for programming languages I have worked with
 */
const SkillsPrLangs = () => (
  <SkillsCategoryContainer
    headingText="General Programming Languages"
    category={StackCategory.PROGRAMMING_LANGS}
    mainStylesOverrides={{
      gridRow: 'r3-start/r5-end',
      pb: '10rem',
    }}
    headingStylesOverrides={{
      mb: sizes.sm,
    }}
  />
)

export default SkillsPrLangs
