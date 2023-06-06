import { Text } from '@chakra-ui/react'
import { useMemo } from 'react'

export const ParagraphGenerator = ({ content }: { content: string }) => {
  const contentArr = useMemo(
    () =>
      content
        .trim()
        .split('\n')
        .filter(text => text.trim() !== ''),
    [content],
  )

  console.log(content)

  return (
    <>
      {contentArr.map((text, idx) => (
        <Text
          mb={{ base: '2', md: '3' }}
          key={`${idx + 1}+${text.slice(8)}`}
          textStyle="para-default"
          layerStyle="para-default"
        >
          {text.trim()}
        </Text>
      ))}
    </>
  )
}

export default ParagraphGenerator
