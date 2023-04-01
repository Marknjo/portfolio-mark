import {
  As,
  GridItem,
  GridItemProps,
  Heading,
  SystemStyleObject,
} from '@chakra-ui/react'
import React, { ReactNode, useCallback } from 'react'

export enum SectionTitleVariants {
  Orange600to50 = 'orange600to50',
  Orange600to500 = 'orange600to500',
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
  }: {
    children: ReactNode
    variant: SectionTitleVariants
    headingGridSetting: GridItemProps
    bgGridSetting: GridItemProps
    type?: As
    isRightAligned?: Boolean
    headingOverrides?: SystemStyleObject
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

          let bgDefaults: SystemStyleObject = {}
          let headingDefaults: SystemStyleObject = {}

          switch (variant) {
            case SectionTitleVariants.Orange600to500:
              bgDefaults = {
                bgGradient: `linear(${gradientDirection}, orange.600 0, orange.600 64%, orange.500)`,
              }
              headingDefaults = {
                color: 'orange.50',
                ...headingDefaultConfigs,
              }
              break

            case SectionTitleVariants.Teal600to50:
              bgDefaults = {
                bgGradient: `linear(${gradientDirection}, teal.600 0, teal.600 64%, teal.500)`,
              }
              headingDefaults = {
                color: 'teal.50',
                ...headingDefaultConfigs,
              }
              break

            case SectionTitleVariants.Teal600to50:
              bgDefaults = {
                bgGradient: `linear(${gradientDirection}, teal.600 0, teal.600 64%, teal.500)`,
              }
              headingDefaults = {
                color: 'teal.50',
                ...headingDefaultConfigs,
              }

              break

            default:
              bgDefaults = {
                bgGradient: `linear(${gradientDirection}, orange.600 0, orange.600 64%, orange.50)`,
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
