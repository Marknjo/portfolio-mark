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
  const gridRowsTemplate = {
    sm: `
      [r1-start] 
      24px [r1-end r2-start] 
      auto [r2-end r3-start] 
      48px [r3-end r4-start]  
      48px [r4-end r5-start] 
      1fr [r5-end]
    `,
  }

  return (
    <Grid
      as="article"
      gridTemplateColumns="24px repeat(4, 1fr) 24px"
      gridTemplateRows={gridRowsTemplate}
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
        backgroundColor="orange.50"
        paddingY="4"
        paddingX="3"
        borderRadius="md"
        shadow="lg"
        borderColor="orange.100"
      >
        <VStack rowGap="3">
          <Heading
            as="h3"
            color="orange.800"
            fontSize="3xl"
            textAlign="center"
            lineHeight="none"
          >
            {title}
          </Heading>

          <Wrap justifyContent="space-around">
            {tags.map(tag => (
              <WrapItem key={`${tag.tagName}-${title}`}>
                <Tag colorScheme={tag.colorTheme} size="sm">
                  {tag.tagName}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>

          <Button
            {...(as ? { as } : {})}
            href={`/${url}`}
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