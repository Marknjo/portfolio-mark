import { Icon, IconProps } from '@chakra-ui/react'

export function IconChakra(props: IconProps) {
  return (
    <Icon
      maxH="256"
      maxW="256"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2228_5348)">
        <path
          d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z"
          fill="url(#paint0_linear_2228_5348)"
        />
        <path
          d="M7.57831 14.5979L17.1213 5.12049C17.2997 4.94343 17.5865 5.15889 17.4661 5.37946L13.9143 11.8894C13.8351 12.0345 13.9401 12.2117 14.1056 12.2117H20.2437C20.4414 12.2117 20.537 12.4539 20.3924 12.5889L9.63605 22.6277C9.44318 22.8077 9.15612 22.554 9.31096 22.3405L14.4027 15.3162C14.5072 15.1722 14.4042 14.9704 14.2263 14.9704H7.73185C7.53737 14.9704 7.44031 14.735 7.57831 14.5979Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2228_5348"
          x1="14"
          y1="0"
          x2="14"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BCBD4" />
          <stop offset="1" stopColor="#29C6B7" />
        </linearGradient>
        <clipPath id="clip0_2228_5348">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  )
}
