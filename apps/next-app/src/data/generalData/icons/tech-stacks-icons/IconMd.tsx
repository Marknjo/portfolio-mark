import { Icon, IconProps } from '@chakra-ui/react'

export function IconMd(props: IconProps) {
  return (
    <Icon
      maxH="256"
      maxW="256"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      {...props}
    >
      <path d="m410 366h-308c-14 0-26-12-26-26v-170c0-14 12-26 26-26h307c14 0 26 12 26 26v170c0 14-11 26-25 26zm-308-204c-4 0-9 4-9 9v170c0 5 4 9 9 9h307c5 0 9-4 9-9v-171c0-5-4-9-9-9h-307zm26 153v-119h34l34 43 34-43h35v118h-34v-68l-34 43-34-43v68zm216 0-52-57h34v-61h34v60h34z" />
    </Icon>
  )
}
