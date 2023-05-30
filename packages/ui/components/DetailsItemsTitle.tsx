import { Heading, SystemStyleObject } from '@chakra-ui/react'

export const DetailsItemsTitle = ({
  title,
  sx,
}: {
  title: string
  sx: SystemStyleObject
}) => (
  <Heading
    as="h4"
    sx={{
      fontSize: { base: 'sm', md: 'medium' },
      color: 'blackAlpha.800',
      textAlign: 'center',
      ...sx,
    }}
  >
    {title}
  </Heading>
)
