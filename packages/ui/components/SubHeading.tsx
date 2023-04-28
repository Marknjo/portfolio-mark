import { As, Heading, SystemStyleObject } from '@chakra-ui/react'

export const SubHeading = ({
  text,
  as = 'h3',
  overrides,
}: {
  text: string
  as?: As
  overrides?: SystemStyleObject
}) => {
  console.log(overrides)

  const headingStyles: SystemStyleObject = {
    // Visual
    borderBottom: '2px solid',
    pb: '2',
    fontSize: '2xl',
    mb: '4',
    textAlign: 'left',
    borderColor: 'orange.200',
    color: 'orange.900',

    // Overrides
    ...overrides,
  }

  return (
    <Heading as={as} sx={headingStyles}>
      {text}
    </Heading>
  )
}
