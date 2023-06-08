import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { IProjectDetailsContentV1 } from '@data/types'

import { useDetailsPageData } from '@store/context/details-page-context'
import { TechStacksCard } from 'ui'

const TheTechStacks = () => {
  const {
    data: { projectData },
  } = useDetailsPageData<IProjectDetailsContentV1>()

  const { stacks } = projectData!

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

export default TheTechStacks
