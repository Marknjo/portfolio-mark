import { SystemStyleObject } from '@chakra-ui/react'
import { SkillsCard } from '../../SkillsCard'
import { IStack } from '../tech-stacks-types'

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
        <SkillsCard
          key={stack.name}
          skill={stack}
          showBadge={showBadge}
          stylesOverrides={stylesOverrides}
        />
      ))}
    </>
  )
}
