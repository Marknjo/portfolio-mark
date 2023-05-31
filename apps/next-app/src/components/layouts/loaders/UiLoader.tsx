import { Flex, Spinner } from '@chakra-ui/react'

const UiLoader = () => (
  <Flex justifyContent="center" alignItems="center" h="calc(100vh - 20px)">
    <Spinner
      size="xl"
      color="orange.500"
      colorScheme="orange"
      label="Loading..."
      thickness="4px"
      sx={{
        width: { base: '80px', md: '100px' },
        height: { base: '80px', md: '100px' },
      }}
    />
  </Flex>
)
export default UiLoader
