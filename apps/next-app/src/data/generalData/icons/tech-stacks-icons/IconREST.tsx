import { Icon, IconProps } from '@chakra-ui/react'

export function IconREST(props: IconProps) {
  return (
    <Icon
      maxH="256"
      maxW="256"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentcolor"
      {...props}
    >
      <path d="m8 4v4h-4v-4zm-6-2v8h8v-8z" />
      <path d="m18 7v4h-4v-4zm-6-2v8h8v-8z" />
      <path d="m8 16v4h-4v-4zm-6-2v8h8v-8z" />
      <path d="m22 10v6h-6v6h-6v8h20v-20zm-4 8h4v4h-4zm-2 10h-4v-4h4zm6 0h-4v-4h4zm6 0h-4v-4h4zm0-6h-4v-4h4zm-4-6v-4h4v4z" />
      <path d="m0 0h32v32h-32z" fill="none" />
    </Icon>
  )
}
