import { Box, GridItem, Icon, Image, SystemStyleObject } from '@chakra-ui/react'
import { useCallback } from 'react'
import { BsPlusLg } from 'react-icons/bs'

export interface ICardDetailsGallery {
  id: number
  imgName: string
  alt: string
  title?: string
  overlayColor?: string
  largeImg?: string // @TODO: link to the main gallery image
  onExpandClick?: (imgName: string) => void
  iconSize?: ExpandIconSize
  openGallery: () => void
}

export enum ExpandIconSize {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
}

export const CardDetailsGallery = ({
  imgName,
  alt,
  overlayColor,
  largeImg,
  onExpandClick,
  openGallery,
  iconSize,
}: Omit<ICardDetailsGallery, 'id'>) => {
  const expandSize = useCallback(
    (variant: ExpandIconSize): SystemStyleObject => {
      switch (variant) {
        case ExpandIconSize.lg:
          return {
            width: '20',
            height: '20',
          }

        case ExpandIconSize.md:
          return {
            width: '16',
            height: '16',
          }
        default:
          return {
            width: '12',
            height: '12',
          }
      }
    },
    [],
  )

  const sharedStyles: SystemStyleObject = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: 'all .15s ease',
    top: '0%',
    left: '0',
    transform: 'scale(0) translate(-50%, -50%)',
    borderRadius: 'full',

    _groupHover: {
      top: '50%',
      left: '50%',
      transform: 'scale(1) translate(-50%, -50%)',
      borderRadius: 'none',
      backgroundColor: overlayColor || 'teal.400',
      opacity: '0.7',
    },
  }

  const cardOverlayStyles: SystemStyleObject = {
    ...sharedStyles,
    content: "' '",
    display: 'block',
    zIndex: 5,
  }

  const cardStyles: SystemStyleObject = {
    position: 'relative',
    borderRadius: 'md',
    overflow: 'clip',
    boxShadow: 'md',
    border: '1px solid',
    borderColor: 'orange.50',
    transition: 'all .3s ease-in',
    zIndex: 4,
    _after: { afterContentStyles: cardOverlayStyles },
    _hover: { transform: 'scale(1.02) translateY(-3px)' },
    cursor: 'pointer',
  }

  const iconStyles: SystemStyleObject = {
    transition: 'all .3s ease-in',
    color: 'teal.100',
    ...expandSize(iconSize || ExpandIconSize.lg),
    backfaceVisibility: 'hidden',
    _hover: {
      color: 'teal.50',
      transform: 'rotate(0.75turn)',
    },

    opacity: '1',
  }

  const imageDetailsStyles: SystemStyleObject = {
    ...sharedStyles,
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <GridItem as="article" role="group" sx={cardStyles}>
      <Image
        src={`./images/${imgName}.jpg`}
        alt={alt}
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <Box sx={imageDetailsStyles}>
        {/* @TODO: Implement Gallery */}
        <Icon
          as={BsPlusLg}
          width={5}
          height={5}
          sx={iconStyles}
          onClick={() => {
            openGallery()
            onExpandClick && largeImg
              ? onExpandClick(`./images/${largeImg}.jpg`)
              : () => {}
          }}
        />
      </Box>
    </GridItem>
  )
}
