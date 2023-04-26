import { SkillsCategory } from 'ui'
import SkillsCategoryContainer from './SkillsCategoryContainer'

const SkillsFrontend = () => (
  <SkillsCategoryContainer
    headingText="Frontend & UI/UX"
    category={SkillsCategory.FRONTEND}
    mainStylesOverrides={{
      gridRow: 'r4-start/r5-end',
      ml: '6',
    }}
  />
)
export default SkillsFrontend
