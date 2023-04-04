import { Heading, SystemStyleObject } from '@chakra-ui/react'

export const DetailsItemsTitle = ({
  title,
  align,
}: {
  title: string
  align: SystemStyleObject
}) => (
  <Heading as="h4" fontSize="lg" color="blackAlpha.800" sx={align}>
    {title}
  </Heading>
)
