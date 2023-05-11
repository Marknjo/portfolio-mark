import { StackCategory } from 'ui'
import SkillsCategoryContainer from './SkillsCategoryContainer'

const SkillsTools = () => (
  <SkillsCategoryContainer
    headingText="Tools & Other Skills"
    category={StackCategory.TOOLS}
    mainStylesOverrides={{
      gridRow: 'r2-start/-1',
      gridColumn: '3 / span 1',
    }}
  />
)
export default SkillsTools
