import React, { useMemo } from 'react'
import {
  Box,
  GridProps,
  Heading,
  SystemStyleObject,
  VStack,
} from '@chakra-ui/react'

/// @TODO: Implement this feature with Chakra Variants

export const LargeTitle = ({
  title,
  subTitle,
  options,
  hasSubtitle = true,
  titleConfig,
  subTitleConfig,
  alignTitle,
}: {
  title: string
  subTitle?: string
  hasSubtitle?: boolean
  options?: GridProps
  titleConfig?: SystemStyleObject
  subTitleConfig?: SystemStyleObject
  alignTitle?: SystemStyleObject
}) => {
  const subTitleDefaultConfig: SystemStyleObject = useMemo(() => {
    return {
      fontSize: subTitleConfig?.fontSize ? subTitleConfig.fontSize : '2xl',
      fontWeight: subTitleConfig?.fontWeight
        ? subTitleConfig.fontWeight
        : 'light',
      textTransform: subTitleConfig?.textTransform
        ? subTitleConfig.textTransform
        : 'uppercase',
      color: subTitleConfig?.color ? subTitleConfig.color : 'blackAlpha.800',
      lineHeight: subTitleConfig?.lineHeight
        ? subTitleConfig.lineHeight
        : 'none',
      ...subTitleConfig,
    }
  }, [subTitleConfig])

  const titleDefaultConfig: SystemStyleObject = useMemo(
    () => ({
      lineHeight: titleConfig?.lineHeight ? titleConfig.lineHeight : 'none',
      color: titleConfig?.color ? titleConfig.color : 'orange.900',
      fontSize: titleConfig?.fontSize ? titleConfig.fontSize : '6xl',
      ...titleConfig,
    }),
    [titleConfig],
  )

  const alignTitleDefault: SystemStyleObject = useMemo(
    () => ({
      alignItems: alignTitle?.alignItems ? alignTitle.alignItems : 'center',
      ...alignTitle,
    }),
    [alignTitle],
  )

  return (
    <Heading as="h2" {...options} sx={titleDefaultConfig}>
      <VStack sx={alignTitleDefault}>
        <Box as="span">{title}</Box>
        {hasSubtitle && (
          <Box as="span" sx={subTitleDefaultConfig}>
            {subTitle}
          </Box>
        )}
      </VStack>
    </Heading>
  )
}