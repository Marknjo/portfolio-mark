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
  useBreakpoint,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/next-js'

import { LinkIcon } from './LinkIcon'
import { SolidBtn } from './buttons/SolidBtn'
import { Variants, motion } from 'framer-motion'

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
  as?: As
  tags: Array<ProjectTagsInterface>
  maxW?: string | { [key: string]: string }
  wrapperSx?: SystemStyleObject
}

export const ProjectCard = ({
  alt,
  fileName,
  title,
  slug,
  tags,
  as,
  maxW = '64',
  wrapperSx,
}: CardsInfoInterface) => {
  const brkP = useBreakpoint()

  const breakBtnText = brkP === 'base' || brkP === 'sm' || brkP === 'md'

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
    maxW: maxW,
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
      // viewport={{ once: true }}
    >
      <GridItem gridColumn="1/-1" gridRow="r1-start/r4-end" shadow="lg">
        <Image
          src={`/images/${fileName}.jpg`}
          alt={alt ? alt : 'Project card Image'}
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
              fontSize={{ base: 'xl', md: '2xl' }}
              textAlign="center"
              lineHeight="none"
            >
              {title}
            </Heading>

            <Wrap justify="space-evenly">
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
            }}
            href={`${slug}`}
            sx={{
              border: '1px solid',
              borderColor: 'orange.200',
              bgColor: 'orange.50',
            }}
          />
        </VStack>
      </GridItem>
    </Grid>
  )
}
