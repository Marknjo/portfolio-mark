import { Grid } from '@chakra-ui/react'
import SkillsBackend from './SkillsBackend'
import SkillsFrontend from './SkillsFrontend'
import SkillsTools from './SkillsTools'

const SkillsCategories = () => (
  <Grid
    gap="4"
    gridColumn="col-start 1 / col-end 12"
    gridRow="r5-start / r6-end"
    gridTemplateColumns="repeat(3, minmax(200px, 1fr))"
    gridTemplateRows="[r1-start] 3rem [r1-end r2-start] auto [r2-end r3-start] 3rem [r3-end]"
    px="4"
  >
    <SkillsFrontend />

    <SkillsBackend />

    <SkillsTools />
  </Grid>
)

export default SkillsCategories
