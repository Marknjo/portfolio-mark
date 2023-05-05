import {
  As,
  GridItem,
  GridItemProps,
  Heading,
  StyleProps,
  SystemStyleObject,
} from '@chakra-ui/react'
import React, { ReactNode, useCallback } from 'react'

export enum SectionTitleVariants {
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
    variant,
    headingGridSetting,
    bgGridSetting,
    type = 'h3',
    isRightAligned = false,
    headingOverrides = {},
    withBoarders = false,
  }: {
    children: ReactNode
    variant: SectionTitleVariants
    headingGridSetting: GridItemProps
    bgGridSetting: GridItemProps
    type?: As
    isRightAligned?: Boolean
    headingOverrides?: SystemStyleObject
    withBoarders?: Boolean
  }) => {
    /**
     * Handles setting section title bg type
     *  - Supports Teal and Orange (Variant of type SectionTitleVariant Enum)
     *  - can be left or right aligned, using isRightAligned - default right
     *  - Can override heading methods with heading Overrides
     *  - @TODO: implemented with Chakra theme variant, check optimization
     *
     */
    const titleSetup = useCallback(
      () =>
        function config(
          variant: SectionTitleVariants,
          direction: boolean = false,
          overrides: SystemStyleObject = {},
          boarders: boolean,
        ): {
          bgDefaults: SystemStyleObject
          headingDefaults: SystemStyleObject
        } {
          let gradientDirection = direction ? 'to-l' : 'to-r'

          const headingDefaultConfigs: SystemStyleObject = {
            textAlign: isRightAligned ? 'right' : 'left',
            lineHeight: 'none',
            paddingY: '4',
            fontSize: '4xl',
            letterSpacing: 'wide',
            fontWeight: 'medium',
            ...overrides,
          }

          const orange500Border: StyleProps = {
            borderTop: '1px solid',
            borderTopColor: 'orange.400',
            borderBottom: '1px solid',
            borderBottomColor: 'orange.400',
          }

          const teal500Border: StyleProps = {
            borderTop: '1px solid',
            borderTopColor: 'orange.400',
            borderBottom: '1px solid',
            borderBottomColor: 'orange.400',
          }

          const hasBoarder =
            boarders &&
            (SectionTitleVariants.Orange600to500 ||
              SectionTitleVariants.Orange800to500)
              ? orange500Border
              : boarders && SectionTitleVariants.Orange600to500
              ? teal500Border
              : {}

          let bgDefaults: SystemStyleObject = hasBoarder
          let headingDefaults: SystemStyleObject = {}

          switch (variant) {
            case SectionTitleVariants.Orange800to500:
              bgDefaults = {
                ...bgDefaults,
                bgGradient: `linear(${gradientDirection}, orange.800 0, orange.800 60%, orange.500 90%, orange.500)`,
              }
              headingDefaults = {
                color: 'orange.50',
                ...headingDefaultConfigs,
              }
              break

            case SectionTitleVariants.Orange600to500:
              bgDefaults = {
                ...bgDefaults,
                bgGradient: `linear(${gradientDirection}, orange.600 0, orange.600 60%, orange.500 90%, orange.500)`,
              }
              headingDefaults = {
                color: 'orange.50',
                ...headingDefaultConfigs,
              }
              break

            case SectionTitleVariants.Teal600to50:
              bgDefaults = {
                ...bgDefaults,
                bgGradient: `linear(${gradientDirection}, teal.600 0, teal.600 60%, teal.50 90%)`,
              }
              headingDefaults = {
                color: 'teal.50',
                ...headingDefaultConfigs,
              }
              break

            case SectionTitleVariants.Teal600to500:
              bgDefaults = {
                ...bgDefaults,
                bgGradient: `linear(${gradientDirection}, teal.600 0, teal.600 60%, teal.500 90%)`,
              }
              headingDefaults = {
                color: 'teal.50',
                ...headingDefaultConfigs,
              }

              break

            default:
              bgDefaults = {
                ...bgDefaults,
                bgGradient: `linear(${gradientDirection}, orange.600 0, orange.600 60%, orange.50 90%, orange.50)`,
              }
              headingDefaults = {
                color: 'orange.50',
                ...headingDefaultConfigs,
              }
              break
          }

          return {
            bgDefaults,
            headingDefaults,
          }
        },
      [],
    )

    const { bgDefaults, headingDefaults } = titleSetup()(
      variant,
      !!isRightAligned,
      headingOverrides,
      !!withBoarders,
    )

    return (
      <>
        <GridItem sx={bgDefaults} {...bgGridSetting}>
          {' '}
        </GridItem>
        <GridItem {...headingGridSetting}>
          <Heading as={type} sx={headingDefaults}>
            {children}
          </Heading>
        </GridItem>
      </>
    )
  },
)
