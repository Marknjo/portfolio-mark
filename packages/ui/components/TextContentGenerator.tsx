import {
  List,
  ListIcon,
  ListItem,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
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
    color: 'gray.800',
    mx: { base: '4', md: '5' },
    alignSelf: 'flex-start',

    ...ulSx,
  }

  const iconStyles: SystemStyleObject = {
    color: 'orange.500',
    ...iconSx,
  }
  const splitText = useMemo(() => textSplitter(listText), [listText])

  return (
    <List spacing={spacing} sx={isStyled ? ulStyles : undefined}>
      {splitText.map((text, idx) => (
        <ListItem
          as={motion.li}
          key={`0${idx + 1}+${text.slice(8).replace(' ', '-')}`}
          initial={{
            originX: 0,
            opacity: 0.8,
          }}
          whileHover={{
            x: 10,
            opacity: 1,
          }}
          whileTap={{
            x: 10,
            opacity: 1,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
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
    mb: '0.35rem',
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
  delimiter,
  listOptions = {
    icon: IoMdCheckmarkCircle,
    isStyled: true,
    ulSx: {},
    iconSx: {},
    spacing: 3,
  },
  paraOptions = {
    sx: {},
    isStyled: true,
  },
}: ITextContentGeneratorProps) {
  if (Array.isArray(text) && type === 'mixed') {
    ///
    const textMap = new Map(text as Array<[[key: string], string]>)
    const textMapKeys = [...textMap.keys()]

    return (
      <>
        {textMapKeys.map(textKey => {
          if (textKey.includes('list')) {
            return (
              <ListGenerator
                key={textKey as unknown as string}
                listText={textMap.get(textKey)!}
                {...listOptions}
              />
            )
          } else {
            return (
              <ParagraphGenerator
                key={textKey as unknown as string}
                content={textMap.get(textKey)!}
                {...paraOptions}
              />
            )
          }
        })}
      </>
    )
  }

  /// Handle text string only
  const testStr = text as string

  if (type === 'list' && !delimiter) {
    return <ListGenerator listText={testStr} {...listOptions} />
  }

  if (type === 'paragraph' && !delimiter) {
    return <ParagraphGenerator content={testStr} {...paraOptions} />
  }

  if (delimiter && type === 'mixed') {
    const [paraText, listText] = testStr.trim().split(delimiter!)
    return (
      <>
        <ParagraphGenerator content={paraText} {...paraOptions} />
        <ListGenerator listText={listText} {...listOptions} />
      </>
    )
  }

  /// anything else render as a paragraph
  return <ParagraphGenerator content={testStr} {...paraOptions} />
}
