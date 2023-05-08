import { Text } from '@chakra-ui/react'
import { useMemo } from 'react'

const ContentGenerator = ({ content }: { content: string }) => {
  const contentArr = useMemo(
    () => [...new Set(content.trim().split('\n'))],
    [content],
  )

  return (
    <>
      {contentArr.map((cnt, idx) => (
        <Text mb="5" key={`${idx + 1}+${cnt.slice(8)}`}>
          {cnt}
        </Text>
      ))}
    </>
  )
}

export default ContentGenerator
