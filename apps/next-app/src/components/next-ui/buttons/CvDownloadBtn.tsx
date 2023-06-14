import NextLink from 'next/link'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'

import { useAppSettings } from '@store/context/app-settings-context'
import { SolidBtn } from 'ui'
import { Box, Flex, SystemStyleObject, Tooltip } from '@chakra-ui/react'

export default function CvDownloadBtn({
  outlineDownloadBtn = false,
  outlinePrevBtn = false,
  hasDownloadBtn = true,
  hasPrevBtn = true,
}: {
  outlineDownloadBtn?: boolean
  outlinePrevBtn?: boolean
  hasDownloadBtn?: boolean
  hasPrevBtn?: boolean
}) {
  const {
    theme: { primaryThemeColor },
    data: { cvConfig },
  } = useAppSettings()

  const styles = useStyles(primaryThemeColor)

  function supportedIcons(iconName: string) {
    switch (iconName) {
      case 'HiExternalLink':
        return <HiExternalLink />

      case 'FaCloudDownloadAlt':
        return <FaCloudDownloadAlt />

      default:
        return undefined
    }
  }

  return (
    <Flex as="span" sx={styles.btnWrapper}>
      {/* Download Button */}
      {hasDownloadBtn && (
        <Tooltip
          placement="top-start"
          hasArrow
          colorScheme={primaryThemeColor}
          label={cvConfig.download.tooltipText}
          aria-label="A tooltip"
          bg={`${primaryThemeColor}.500`}
          color={`${primaryThemeColor}.50`}
          closeOnPointerDown
        >
          <Box as="span">
            <SolidBtn
              text={cvConfig.download.btnText}
              props={{
                as: NextLink,
                rightIcon: supportedIcons(cvConfig.download.icon),
                size: 'sm',
              }}
              href={cvConfig.download.link}
              sx={outlineDownloadBtn ? styles.outlined : styles.full}
              target="_blank"
            />
          </Box>
        </Tooltip>
      )}

      {/* Preview Button */}
      {hasPrevBtn && (
        <Tooltip
          placement="top-start"
          hasArrow
          colorScheme={primaryThemeColor}
          label={cvConfig.preview.tooltipText}
          aria-label="A tooltip"
          bg={`${primaryThemeColor}.500`}
          color={`${primaryThemeColor}.50`}
          closeOnPointerDown
        >
          <Box as="span">
            <SolidBtn
              text={cvConfig.preview.btnText}
              props={{
                as: NextLink,
                size: 'sm',
                rightIcon: supportedIcons(cvConfig.preview.icon),
              }}
              href={cvConfig.preview.link}
              sx={outlinePrevBtn ? styles.outlined : styles.full}
              target="_blank"
            />
          </Box>
        </Tooltip>
      )}
    </Flex>
  )
}

interface IStyles {
  full: SystemStyleObject
  outlined: SystemStyleObject
  btnWrapper: SystemStyleObject
}

const useStyles = (brand: string): IStyles => {
  const sharedBtnStyles: SystemStyleObject = { border: '1px solid' }

  return {
    full: {
      borderColor: `${brand}.400`,
      bgColor: `${brand}.500`,
      color: `${brand}.50`,
      ...sharedBtnStyles,
    },
    outlined: {
      borderColor: `${brand}.300`,
      bgColor: `${brand}.50`,
      ...sharedBtnStyles,
    },
    btnWrapper: {
      gap: '2',
      alignItems: 'center',
      paddingLeft: '5',
      borderLeft: '2px solid',
      borderLeftColor: `${brand}.200`,
    },
  }
}
