import { Icon, IconProps } from '@chakra-ui/react'

export function IconVue(props: IconProps) {
  return (
    <Icon
      maxH="256"
      maxW="256"
      preserveAspectRatio="xMidYMid"
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m-512-128h1280v800h-1280z" fill="none" />
      <path
        d="m17.595 11.204h8.91l5.536 9.391 5.591-9.391h8.831l-14.422 25.359z"
        fill="#afc4db"
      />
      <path
        d="m8.089 11.204 23.952 41.845 24.126-41.845h-9.704l-14.422 25.359-14.446-25.359z"
        fill="#4dba87"
      />
    </Icon>
  )
}
