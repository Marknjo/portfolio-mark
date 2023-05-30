import { StackCategory } from 'ui'
import SkillsCategoryContainer from './SkillsCategoryContainer'

const SkillsFrontend = () => (
  <SkillsCategoryContainer
    headingText="Frontend & UI/UX"
    category={StackCategory.FRONTEND}
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
export default SkillsFrontend
