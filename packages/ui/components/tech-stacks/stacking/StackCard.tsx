import { SystemStyleObject } from '@chakra-ui/react'
import { TechCard } from '../card/TechCard'
import { useId } from 'react'

export function StacksCard<T extends { [key: string]: any }>({
  stacks,
  showBadge,
  stylesOverrides = {},
}: {
  stacks: [T]
  showBadge?: boolean
  stylesOverrides?: SystemStyleObject
}) {
  const cpId = useId()
  return (
    <>
      {stacks.map((stack, i) => (
        <TechCard
          key={`${cpId}-${stack.name[0] + i}-${stack.id}`}
          skill={stack}
          showBadge={showBadge}
          stylesOverrides={stylesOverrides}
        />
      ))}
    </>
  )
}
