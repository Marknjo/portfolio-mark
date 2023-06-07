import {
  List,
  ListIcon,
  ListItem,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react'
import { useMemo } from 'react'
import { IconType } from 'react-icons'
import { IoMdCheckmarkCircle } from 'react-icons/io'

interface IParagraphGenerator {
  content: string
  sx?: SystemStyleObject
  isStyled?: boolean
}

interface IListGeneratorProps {
  listText: string
  icon?: IconType
  iconSx?: SystemStyleObject
  ulSx?: SystemStyleObject
  isStyled?: boolean
  spacing?: number | { [key: string]: number }
}

interface ITextContentGeneratorProps {
  type: 'paragraph' | 'list' | 'mixed'
  text?: string | Array<[[key: string], string]>
  delimiter?: '<--p-->' | '<--l-->'
  listOptions?: Omit<IListGeneratorProps, 'listText'>
  paraOptions?: Omit<IParagraphGenerator, 'content'>
}

const textSplitter = (text: string) =>
  text
    .trim()
    .split('\n')
    .filter(textItem => textItem.trim() !== '')

/// Generates list content
function ListGenerator({
  listText,
  icon = IoMdCheckmarkCircle,
  ulSx = {},
  iconSx = {},
  isStyled = true,
  spacing = 3,
}: IListGeneratorProps) {
  const ulStyles: SystemStyleObject = {
    pl: { base: '4', md: '6', xl: 0 },
    ...ulSx,
  }

  const iconStyles: SystemStyleObject = {
    color: 'teal.500',
    ...iconSx,
  }
  const splitText = useMemo(() => textSplitter(listText), [listText])

  return (
    <List spacing={spacing} sx={isStyled ? ulStyles : undefined}>
      {splitText.map((text, idx) => (
        <ListItem key={`0${idx + 1}+${text.slice(8).replace(' ', '-')}`}>
          <ListIcon as={icon} sx={isStyled ? iconStyles : undefined} />
          {text}
        </ListItem>
      ))}
    </List>
  )
}

/// Generate paragraph text
const ParagraphGenerator = ({
  content,
  sx = {},
  isStyled = true,
}: IParagraphGenerator) => {
  const contentArr = useMemo(() => textSplitter(content), [content])

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

/**
 * Generates either paragraphs or a list with string
 *  - The text option is either a plain string
 *  - Or a delimitated string with either <--p--> | <--l-->  default is <--l--> (p - paragraph, l -> list)
 *  - Or a map object @example [['list-1', "Some text list 1"], ['para-1', "Some Text para 1"]]
 * @param props -> ITextContentGenerator
 * @returns JSX
 */
export function TextContentGenerator({
  text,
  type,
  delimiter = '<--l-->',
  listOptions = {
    icon: IoMdCheckmarkCircle,
    ulSx: {},
    iconSx: {},
    isStyled: true,
    spacing: 3,
  },
  paraOptions = {
    sx: {},
    isStyled: true,
  },
}: ITextContentGeneratorProps) {
  if (Array.isArray(text)) {
    ///
    const textMap = new Map(text as Array<[[key: string], string]>)
    const textMapKeys = [...textMap.keys()]

    return (
      <>
        {textMapKeys.map(text => {
          if (text.includes('list')) {
            ;<ListGenerator listText={textMap.get(text)!} {...listOptions} />
          } else {
            ;<ParagraphGenerator
              content={textMap.get(text)!}
              {...paraOptions}
            />
          }
        })}
      </>
    )
  }

  /// Handle text string only
  const testStr = text as string

  ///
  if (type === 'list') {
    return <ListGenerator listText={testStr} {...listOptions} />
  }

  if (type === 'paragraph') {
    return <ParagraphGenerator content={testStr} {...paraOptions} />
  }

  const [paraText, listText] = testStr.trim().split(delimiter)
  return (
    <>
      <ParagraphGenerator content={paraText} {...paraOptions} />
      <ListGenerator listText={listText} {...listOptions} />
    </>
  )
}
