import { SystemStyleObject } from '@chakra-ui/react'
import { TechCard } from '../card/TechCard'
import { IStack } from '../types/tech-stacks-types'

export const StacksCard = ({
  stacks,
  showBadge,
  stylesOverrides = {},
}: {
  stacks: [IStack]
  showBadge?: boolean
  stylesOverrides?: SystemStyleObject
}) => {
  return (
    <>
      {stacks.map(stack => (
        <TechCard
          key={stack.name}
          skill={stack}
          showBadge={showBadge}
          stylesOverrides={stylesOverrides}
        />
      ))}
    </>
  )
}
