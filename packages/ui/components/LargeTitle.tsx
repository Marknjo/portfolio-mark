import React, { useMemo } from 'react'
import {
  As,
  Box,
  GridProps,
  Heading,
  SystemStyleObject,
  VStack,
} from '@chakra-ui/react'

/// @TODO: Implement this feature with Chakra Variants

enum TitleStyles {
  H_LARGE = 'h-lg',

  H1_LG = 'h1-lg',
  H1_SUB = 'h1-sub',

  H2_LG = 'h2-lg',
  H2_SUB = 'h2-sub',

  H1_LG_LIGHT = 'h1-lg-light',
  H1_SUB_LIGHT = 'h1-sub-light',

  H2_LG_LIGHT = 'h2-lg-light',
  H2_SUB_LIGHT = 'h2-sub-light',
}

const titleStyles = (as: As, isLighter: boolean) => {
  const hLg = {
    hLg: TitleStyles.H_LARGE,
  }

  const lightH1Text = {
    lg: TitleStyles.H1_LG_LIGHT,
    sub: TitleStyles.H1_SUB_LIGHT,
    ...hLg,
  }

  const lightH2Text = {
    lg: TitleStyles.H2_LG_LIGHT,
    sub: TitleStyles.H2_SUB_LIGHT,
    ...hLg,
  }

  if (as === 'h1') {
    return isLighter
      ? lightH1Text
      : {
          lg: TitleStyles.H1_LG,
          sub: TitleStyles.H1_SUB,
          ...hLg,
        }
  }

  return isLighter
    ? lightH2Text
    : {
        lg: TitleStyles.H2_LG,
        sub: TitleStyles.H2_SUB,
        ...hLg,
      }
}

export const LargeTitle = ({
  title,
  subTitle,
  options,
  hasSubtitle = true,
  titleConfig = {},
  subTitleConfig = {},
  alignTitle,
  as = 'h2',
  isLighter = false,
  isCapitalized = false,
}: {
  title: string
  subTitle?: string
  hasSubtitle?: boolean
  options?: GridProps
  titleConfig?: SystemStyleObject
  subTitleConfig?: SystemStyleObject
  alignTitle?: SystemStyleObject
  isCapitalized?: boolean
  as?: As
  isLighter?: boolean
}) => {
  const { sub, lg, hLg } = titleStyles(as, isLighter)

  const alignTitleDefault: SystemStyleObject = useMemo(
    () => ({
      alignItems: alignTitle?.alignItems ? alignTitle.alignItems : 'center',
      ...alignTitle,
    }),
    [alignTitle],
  )

  return (
    <Heading as={as} {...options} sx={titleConfig} textStyle={hLg}>
      <VStack sx={alignTitleDefault} as="span">
        <Box
          as="span"
          sx={{
            ...subTitleConfig,
          }}
          textStyle={lg.replace('-light', '')}
          layerStyle={lg}
          textTransform={isCapitalized ? 'capitalize' : undefined}
        >
          {title}
        </Box>
        {hasSubtitle && (
          <Box
            as="span"
            sx={subTitleConfig}
            textStyle={sub.replace('-light', '')}
            layerStyle={sub}
          >
            {subTitle}
          </Box>
        )}
      </VStack>
    </Heading>
  )
}
