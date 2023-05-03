import { SkillsCategory } from 'ui'
import SkillsCategoryContainer from './SkillsCategoryContainer'

const SkillsFrontend = () => (
  <SkillsCategoryContainer
    headingText="Frontend & UI/UX"
    category={SkillsCategory.FRONTEND}
    mainStylesOverrides={{
      gridRow: 'r2-start/-1',
      gridColumn: '1 / span 1',
    }}
  />
)
export default SkillsFrontend
