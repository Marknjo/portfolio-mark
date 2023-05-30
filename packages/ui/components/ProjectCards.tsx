import {
  As,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Tag,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { LinkIcon } from './LinkIcon'
import { SubHeading } from './SubHeading'

export interface ProjectTagsInterface {
  tagName: string
  colorTheme: string
}

export interface CardsInfoInterface {
  title: string
  url: string
  as?: As
  tags: Array<ProjectTagsInterface>
}

export const ProjectCard = ({ title, url, tags, as }: CardsInfoInterface) => {
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

  return (
    <Grid
      as="article"
      gridTemplateColumns={gridColumnsBreakpoint}
      gridTemplateRows={gridRowsBreakpoint}
    >
      <GridItem gridColumn="1/-1" gridRow="r1-start/r4-end" shadow="lg">
        <Image
          src="./images/card-image.jpg"
          alt="Project card Image"
          borderRadius="md"
          border="2px solid"
          borderColor="orange.100"
          objectFit="cover"
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
        <VStack rowGap={{ base: '2', md: '3' }}>
          <Heading
            as="h3"
            color="orange.800"
            fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}
            textAlign="center"
            lineHeight="none"
          >
            {title}
          </Heading>

          <Wrap justify="space-evenly">
            {tags.map(tag => (
              <WrapItem key={`${tag.tagName}-${title}`}>
                <Tag
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
            ))}
          </Wrap>

          <Button
            {...(as ? { as } : {})}
            href={`${url}`}
            variant="outline"
            colorScheme="orange"
            rightIcon={<LinkIcon />}
            size="sm"
          >
            Explore Project
          </Button>
        </VStack>
      </GridItem>
    </Grid>
  )
}
