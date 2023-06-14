import { Icon, IconProps } from '@chakra-ui/react'

export function IconReactNative(props: IconProps) {
  return (
    <Icon
      maxH="256"
      maxW="256"
      preserveAspectRatio="xMidYMid"
      viewBox="-11.5 -10.23174 23 20.46348"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle fill="#61dafb" r="2.05" />
      <g fill="none" stroke="#61dafb">
        <ellipse rx="11" ry="4.2" />
        <ellipse
          rx="11"
          ry="4.2"
          transform="matrix(.5 .8660254 -.8660254 .5 0 0)"
        />
        <ellipse
          rx="11"
          ry="4.2"
          transform="matrix(-.5 .8660254 -.8660254 -.5 0 0)"
        />
      </g>
    </Icon>
  )
}
