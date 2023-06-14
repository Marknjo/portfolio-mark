import { Icon, IconProps } from '@chakra-ui/react'

export function IconMVC(props: IconProps) {
  return (
    <Icon
      maxH="256"
      maxW="256"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="whiteAlpha.800"
      {...props}
    >
      <path d="m26 22a3.86 3.86 0 0 0 -2 .57l-3.09-3.1a6 6 0 0 0 0-6.94l3.09-3.1a3.86 3.86 0 0 0 2 .57 4 4 0 1 0 -4-4 3.86 3.86 0 0 0 .57 2l-3.1 3.09a6 6 0 0 0 -6.94 0l-3.1-3.09a3.86 3.86 0 0 0 .57-2 4 4 0 1 0 -4 4 3.86 3.86 0 0 0 2-.57l3.09 3.1a6 6 0 0 0 0 6.94l-3.09 3.1a3.86 3.86 0 0 0 -2-.57 4 4 0 1 0 4 4 3.86 3.86 0 0 0 -.57-2l3.1-3.09a6 6 0 0 0 6.94 0l3.1 3.09a3.86 3.86 0 0 0 -.57 2 4 4 0 1 0 4-4zm0-18a2 2 0 1 1 -2 2 2 2 0 0 1 2-2zm-22 2a2 2 0 1 1 2 2 2 2 0 0 1 -2-2zm2 22a2 2 0 1 1 2-2 2 2 0 0 1 -2 2zm10-8a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm10 8a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
      <path d="m0 0h32v32h-32z" fill="none" />
    </Icon>
  )
}
