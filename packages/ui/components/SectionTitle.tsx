import {
  As,
  GridItem,
  GridItemProps,
  Heading,
  StyleProps,
  SystemStyleObject,
} from '@chakra-ui/react'
import React, { ReactNode, useCallback } from 'react'

export enum BgVariant {
  Orange600to50 = 'orange600to50',
  Orange600to500 = 'orange600to500',
  Orange800to500 = 'orange800to500',
  Teal600to50 = 'teal600to50',
  Teal600to500 = 'teal600to50',
}

/**
 * Must be a grid to avoid negative margins
 */
export const SectionTitle = React.memo(
  ({
    children,
    headingGridSetting,
    bgGridSetting,
    type = 'h3',
    isRightAligned = false,
    headingOverrides = {},
    layerStyle = '',
  }: {
    children: ReactNode
    headingGridSetting: GridItemProps
    bgGridSetting: GridItemProps
    type?: As
    isRightAligned?: Boolean
    headingOverrides?: SystemStyleObject
    layerStyle?: string
  }) => {
    const headingDefaults: SystemStyleObject = {
      textAlign: isRightAligned ? 'right' : 'left',
      color: 'orange.50',
      fontSize: ['md', 'lg', '2xl', '3xl'],
      ...headingOverrides,
    }

    return (
      <>
        <GridItem {...bgGridSetting} layerStyle={layerStyle}>
          {' '}
        </GridItem>
        <GridItem {...headingGridSetting}>
          <Heading as={type} sx={headingDefaults} textStyle="sec-title">
            {children}
          </Heading>
        </GridItem>
      </>
    )
  },
)
