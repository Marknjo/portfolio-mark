import { Text } from '@chakra-ui/react'
import { useMemo } from 'react'

export const ContentGenerator = ({ content }: { content: string }) => {
  const contentArr = useMemo(
    () => [...new Set(content.trim().split('\n'))],
    [content],
  )

  return (
    <>
      {contentArr.map((cnt, idx) => (
        <Text
          mb={{ base: '3', md: '5' }}
          key={`${idx + 1}+${cnt.slice(8)}`}
          textStyle="para-default"
          layerStyle="para-default"
        >
          {cnt}
        </Text>
      ))}
    </>
  )
}

export default ContentGenerator
