import { useId } from 'react'
import { SystemStyleObject } from '@chakra-ui/react'
// eslint-disable-next-line import/no-cycle
import { TechCard } from '../card/TechCard'

export function StacksCard<T extends { [key: string]: any }>({
  stacks,
  showBadge,
  stylesOverrides = {},
  iconPicker,
}: {
  stacks: [T]
  showBadge?: boolean
  stylesOverrides?: SystemStyleObject
  iconPicker: (props: any) => JSX.Element
}) {
  const cpId = useId()
  return (
    <>
      {stacks.map((stack, i) => (
        <TechCard
          key={`${cpId}-${stack.name[0] + i}-${stack.id}`}
          skill={{
            ...stack,
            icon: iconPicker(stack.name),
          }}
          showBadge={showBadge}
          stylesOverrides={stylesOverrides}
        />
      ))}
    </>
  )
}
