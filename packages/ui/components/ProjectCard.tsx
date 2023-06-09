import {
  As,
  Grid,
  GridItem,
  Heading,
  SystemStyleObject,
  Tag,
  Tooltip,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/next-js'
import { Variants, motion } from 'framer-motion'

import { LinkIcon } from './LinkIcon'
import { SolidBtn } from './buttons/SolidBtn'

const cardAnimationVariant: Variants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.8,
      bounce: 0.4,
    },
  },
  gesture: {
    scale: 1.02,
    translateY: -5,
  },
}

export interface ProjectTagsInterface {
  id: string
  tagName: string
  colorTheme: string
  fullTagName: string
}

export interface CardsInfoInterface {
  title: string
  slug: string
  alt?: string
  fileName: string
  liveLink: string
  as?: As
  tags: Array<ProjectTagsInterface>
  maxW?: string | { [key: string]: string }
  wrapperSx?: SystemStyleObject
}

export const ProjectCard = ({
  alt,
  fileName,
  liveLink,
  title,
  slug,
  tags,
  as,
  maxW = '64',
  wrapperSx,
}: CardsInfoInterface) => {
  const gridRowsBreakpoint = {
    base: `
      [r1-start] 
      24px [r1-end r2-start] 
      auto [r2-end r3-start] 
      32px [r3-end r4-start]  
      32px [r4-end r5-start] 
      1fr [r5-end]
  `,
    md: `
      [r1-start] 
      24px [r1-end r2-start] 
      auto [r2-end r3-start] 
      48px [r3-end r4-start]  
      48px [r4-end r5-start] 
      1fr [r5-end]
  `,
  }

  const gridColumnsBreakpoint = {
    base: '16px repeat(4, 1fr) 16px',
    lg: '24px repeat(4, 1fr) 24px',
  }

  const wrapperStyles: SystemStyleObject = {
    gridTemplateColumns: gridColumnsBreakpoint,
    gridTemplateRows: gridRowsBreakpoint,
    maxW,
    minW: '56',
    ...wrapperSx,
  }

  return (
    <Grid
      as={motion.article}
      sx={wrapperStyles}
      variants={cardAnimationVariant}
      initial="offscreen"
      whileInView="onscreen"
      whileHover="gesture"
      viewport={{ once: true }}
      width="100%"
    >
      {liveLink === 'coming soon' && (
        <GridItem
          mx="3"
          zIndex="1"
          gridColumn="1 / span 4"
          gridRow="1 / span 1"
          transform="translateY(-40%)"
        >
          <Tooltip
            color="orange.50"
            bg="orange.400"
            hasArrow
            placement="top-start"
            label={`${title} is still in development, hang on! ☺️`}
          >
            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
            <Tag
              cursor="help"
              color="orange.50"
              bgColor="orange.500"
              size="sm"
              fontSize="x-small"
              fontWeight="medium"
              textTransform="uppercase"
              border="1px solid"
              borderColor="orange.50"
              boxShadow="base"
            >
              {liveLink}
            </Tag>
          </Tooltip>
        </GridItem>
      )}

      <GridItem
        width="100%"
        gridColumn="1/-1"
        gridRow="r1-start/r4-end"
        shadow="lg"
      >
        <Image
          src={`/images/${fileName}.jpg`}
          alt={alt || 'Project card Image'}
          sx={{
            borderRadius: 'md',
            border: '2px solid',
            borderColor: 'orange.100',
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
          }}
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4GhHgAGlQIwzd3mYAAAAABJRU5ErkJggg=="'
          quality={75}
          width={348}
          height={278}
          loading="lazy"
          placeholder="blur"
        />
      </GridItem>

      <GridItem
        gridColumn="2/span 4"
        gridRow="r3-start/r5-end"
        bgColor="orange.50"
        py={{ base: '4', lg: '6' }}
        px={{ md: '3', lg: '4' }}
        borderRadius="md"
        shadow="lg"
        borderColor="orange.100"
      >
        <VStack rowGap={{ base: '3', md: '4' }}>
          <VStack>
            <Heading
              as="h3"
              color="orange.800"
              fontSize="2xl"
              mb="1"
              textAlign="center"
              lineHeight="none"
            >
              {title}
            </Heading>

            <Wrap justify="space-evenly" mb={{ base: '2', md: '1' }}>
              {tags.map(tag => (
                <Tooltip
                  hasArrow
                  colorScheme={tag.colorTheme}
                  placement="auto"
                  label={tag.fullTagName}
                  key={`${tag.id}-${tag.tagName}`}
                >
                  <WrapItem>
                    <Tag
                      cursor="help"
                      colorScheme={tag.colorTheme}
                      size="sm"
                      fontSize={{
                        base: 'xx-small',
                        lg: 'x-small',
                      }}
                    >
                      {tag.tagName}
                    </Tag>
                  </WrapItem>
                </Tooltip>
              ))}
            </Wrap>
          </VStack>

          <SolidBtn
            text="Explore"
            props={{
              ...(as ? { as } : {}),
              size: 'sm',
              rightIcon: <LinkIcon />,
              isDisabled: liveLink === 'coming soon',
              disabled: liveLink === 'coming soon',
            }}
            href={liveLink === 'coming soon' ? '#' : slug}
            sx={{
              border: '1px solid',
              borderColor: 'orange.200',
              bgColor: 'orange.50',
              cursor: liveLink === 'coming soon' ? 'not-allowed' : 'pointer',
            }}
          />
        </VStack>
      </GridItem>
    </Grid>
  )
}
