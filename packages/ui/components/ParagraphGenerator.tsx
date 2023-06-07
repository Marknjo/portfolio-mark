import { SystemStyleObject, Text } from '@chakra-ui/react'
import { useMemo } from 'react'

export interface IParagraphGenerator {
  content: string
  sx?: SystemStyleObject
  isStyled?: boolean
}

/**
 *  Paragraph generator
 * @param  props: IParagraphGenerator
 * @returns JSX
 *
 * @deprecated use TextContentGenerator component generator instead
 */
export const ParagraphGenerator = ({
  content,
  sx = {},
  isStyled = true,
}: IParagraphGenerator) => {
  const contentArr = useMemo(
    () =>
      content
        .trim()
        .split('\n')
        .filter(text => text.trim() !== ''),
    [content],
  )

  const styles: SystemStyleObject = {
    mb: { base: '2', md: '3' },
    textStyle: 'para-default',
    layerStyle: 'para-default',
    ...sx,
  }

  return (
    <>
      {contentArr.map((text, idx) => (
        <Text
          key={`${idx + 1}+${text.slice(8)}`}
          sx={isStyled ? styles : undefined}
        >
          {text.trim()}
        </Text>
      ))}
    </>
  )
}

export default ParagraphGenerator
