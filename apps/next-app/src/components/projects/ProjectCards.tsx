import NextLink from 'next/link'
import {
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Tag,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

interface ProjectTagsInterface {
  tagName: string
  colorTheme: string
}

interface CardsInfoInterface {
  title: string
  url: string
  tags: Array<ProjectTagsInterface>
}

const cardsInfo: Array<CardsInfoInterface> = [
  {
    title: 'Natours App Project',
    url: '#',
    tags: [
      { tagName: 'Nodejs', colorTheme: 'blue' },
      { tagName: 'GraphQL', colorTheme: 'pink' },
      { tagName: 'React', colorTheme: 'green' },
    ],
  },
  {
    title: 'Spar',
    url: '#',
    tags: [
      { tagName: 'Nodejs', colorTheme: 'blue' },
      { tagName: 'GraphQL', colorTheme: 'pink' },
      { tagName: 'React', colorTheme: 'green' },
    ],
  },
  {
    title: 'Cyclist',
    url: '#',
    tags: [
      { tagName: 'Nodejs', colorTheme: 'blue' },
      { tagName: 'GraphQL', colorTheme: 'pink' },
      { tagName: 'React', colorTheme: 'green' },
    ],
  },
]

const LinkIcon = () => <Icon as={FiArrowUpRight} />

const ProjectCard = ({ title, url, tags }: CardsInfoInterface) => {
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
            as={NextLink}
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

const ProjectCards = () => (
  <GridItem gridColumn="col-start 3/col-end 11" gridRow="img-r3-start/ span 2">
    <HStack justifySelf="space-around" rowGap="4" alignItems="flex-start">
      {cardsInfo.map(info => (
        <ProjectCard key={info.title} {...info} />
      ))}
    </HStack>
  </GridItem>
)

export default ProjectCards
