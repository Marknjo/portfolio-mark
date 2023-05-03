import { Badge, GridItem, Heading, Text } from '@chakra-ui/react'

const SkillsNote = () => (
  <GridItem
    gridColumn="col-start 2 / col-end 11"
    gridRow="r8-start / r8-end"
    py="4"
    px="8"
    mx="4"
    boxShadow="base"
    borderRadius="6"
    mt="12"
    backgroundColor="orange.600"
    color="orange.100"
  >
    <Heading
      as="h4"
      color="orange.100"
      mb="2"
      fontSize="1.6rem"
      textAlign="center"
      width="100%"
      borderBottom="1px solid"
      pb="2"
      borderBottomColor="orange.500"
    >
      Here are a Few Things to Note
    </Heading>
    <Text>
      <Text as="strong">
        <Badge as="span" colorScheme="orange">
          Active
        </Badge>{' '}
        Tag
      </Text>{' '}
      Represents I am actively using the skill
    </Text>
    <Text>
      <Text as="strong">
        <Badge as="span" colorScheme="orange">
          Passive
        </Badge>{' '}
        Tag
      </Text>{' '}
      Represents the skill I've learned but I am not actively using it (Good to
      note if you may want me to get up to speed with it)
    </Text>
  </GridItem>
)

export default SkillsNote
