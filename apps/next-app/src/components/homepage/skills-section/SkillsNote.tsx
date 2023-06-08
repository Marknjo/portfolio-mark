import { Badge, GridItem, Heading, Text } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'

/// @TODO: Implement list and long text format
const SkillsNote = () => {
  const {
    content: {
      skills: { notesTitle, notesActiveText, notesPassiveText },
    },
  } = useHomePageData<IHomePageContentV1>()

  return (
    <GridItem
      gridColumn={{
        base: 'content-start/content-end',
        lg: 'col-start 2 / col-end 11',
      }}
      gridRow="r6-start / r6-end"
      py="6"
      px={{ base: '4', lg: '6' }}
      mx="4"
      boxShadow="base"
      borderRadius={sizes.sm}
      mt={sizes.lg}
      backgroundColor="orange.600"
      color="orange.100"
    >
      <Heading
        as="h4"
        color="orange.100"
        mb="2"
        fontSize={{ sm: 'lg', md: '2xl' }}
        textAlign="center"
        width="100%"
        borderBottom="1px solid"
        pb="2"
        borderBottomColor="orange.500"
      >
        {notesTitle}
      </Heading>
      <Text
        fontSize={{ base: 'sm', md: 'md' }}
        mb="2"
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text as="strong">
          <Badge
            as="span"
            colorScheme="orange"
            fontSize={{ base: 'xx-small', md: 'sm' }}
          >
            Active
          </Badge>{' '}
          Tag
        </Text>{' '}
        {notesActiveText}
      </Text>
      <Text
        fontSize={{ base: 'sm', md: 'md' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text as="strong">
          <Badge
            as="span"
            colorScheme="orange"
            fontSize={{ base: 'xx-small', md: 'sm' }}
          >
            Passive
          </Badge>{' '}
          Tag
        </Text>{' '}
        {notesPassiveText}
      </Text>
    </GridItem>
  )
}

export default SkillsNote
