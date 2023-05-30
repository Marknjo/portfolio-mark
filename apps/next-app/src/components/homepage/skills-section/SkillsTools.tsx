import { StackCategory } from 'ui'
import SkillsCategoryContainer from './SkillsCategoryContainer'

const SkillsTools = () => (
  <SkillsCategoryContainer
    headingText="Tools & Other Skills"
    category={StackCategory.TOOLS}
    mainStylesOverrides={{
      gridRow: { base: 'r3-start/-1', xl: 'r2-start/-1' },
      gridColumn: { base: '1 / -1', xl: '3 / span 1' },
    }}
    cardsWrapperOverrides={{
      justifyContent: { base: 'center', xl: 'left' },
    }}
  />
)
export default SkillsTools
