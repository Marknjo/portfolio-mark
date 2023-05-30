import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import {
  StackNames,
  groupStacksByCategory,
  stacksSamp,
} from '@data/techStacksSample'
import { TechStacksCard } from 'ui'

const stacks = groupStacksByCategory(
  [
    StackNames.JAVASCRIPT,
    // StackNames.GO,
    StackNames.REACT,
    StackNames.CHAKRA,
    StackNames.NODE_JS,
    StackNames.NEXT_JS,
    StackNames.POSTGRES,
    StackNames.DOCKER,
    // StackNames.ELECTRON,
  ],
  stacksSamp,
)

const TheStackIcons = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r6-start / r6-end',
    gridColumn: {
      base: 'content-start / content-end',
      md: 'content-start / col-end 7',
    },
    pb: { base: '6', md: '0' },
    pt: { base: '4', md: '0' },
  }

  return (
    <GridItem sx={mainStyles} id="stacks">
      <TechStacksCard stacks={stacks} isCustom />
    </GridItem>
  )
}

export default TheStackIcons
