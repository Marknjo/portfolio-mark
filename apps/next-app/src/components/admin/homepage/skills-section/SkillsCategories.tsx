import { Grid } from '@chakra-ui/react'

import SkillsBackend from './SkillsBackend'
import SkillsFrontend from './SkillsFrontend'
import SkillsTools from './SkillsTools'

const rowBreakpoint = {
  base: `
  [r1-start]
    auto [r1-end r2-start]
    auto [r2-end r3-start] 
    auto [r3-end]  
  `,
  lg: `
    [r1-start]
    2.5rem [r1-end r2-start]
    auto [r2-end r3-start] 
    auto [r3-end]  
  `,
  xl: `
    [r1-start] 
    2.5rem [r1-end r2-start] 
    1rem [r2-end r3-start] 
    auto [r3-end]  
  `,
}

const SkillsCategories = () => (
  <Grid
    gap="4"
    gridColumn="col-start 1 / col-end 12"
    gridRow="r4-start / r5-end"
    gridTemplateColumns={{
      base: '100%',
      lg: 'repeat(2, minmax(200px, 1fr))',
      xl: 'repeat(3, minmax(200px, 1fr))',
    }}
    gridTemplateRows={rowBreakpoint}
    px="4"
  >
    <SkillsFrontend />

    <SkillsBackend />

    <SkillsTools />
  </Grid>
)

export default SkillsCategories
