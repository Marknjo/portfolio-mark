import { Icon, IconProps } from '@chakra-ui/react'

export function IconCSS(props: IconProps) {
  return (
    <Icon
      maxH="256"
      maxW="256"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m16 27.858 8.17-2.265 1.922-21.532h-10.092z" fill="#33a9dc" />
      <path
        d="m16 13.191h4.09l.282-3.165h-4.372v-3.091h.011 7.739l-.074.829-.759 8.518h-6.917z"
        fill="#fff"
      />
      <path
        d="m16.019 21.218-.014.004-3.442-.93-.22-2.465h-1.673-1.43l.433 4.853 6.331 1.758.015-.004z"
        fill="#ebebeb"
      />
      <path
        d="m19.827 16.151-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007z"
        fill="#fff"
      />
      <g fill="#ebebeb">
        <path d="m16.011 6.935v1.92 1.163.008h-7.456-.01l-.062-.695-.141-1.567-.074-.829z" />
        <path d="m16 13.191v1.92 1.163.008h-3.389-.01l-.062-.695-.14-1.567-.074-.829z" />
      </g>
    </Icon>
  )
}
