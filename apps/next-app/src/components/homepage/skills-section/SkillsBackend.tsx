import { StackCategory } from 'ui'
import SkillsCategoryContainer from './SkillsCategoryContainer'

const SkillsBackend = () => (
  <SkillsCategoryContainer
    headingText="Backend"
    category={StackCategory.BACKEND}
    mainStylesOverrides={{
      gridRow: 'r1-start/-1',
      gridColumn: '2 / span 1',
    }}
  />
)
export default SkillsBackend
