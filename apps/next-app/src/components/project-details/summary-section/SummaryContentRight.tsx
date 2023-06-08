import { GridItem, SystemStyleObject, VStack, useConst } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { appIcons } from '@data/generalData/icons/dataAppIcons'
import { useDetailsPageData } from '@store/context/details-page-context'
import { TextContentGenerator } from 'ui'

const SummaryContentRight = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()

  const { lessonsText } = projectData!

  const mainStyles: SystemStyleObject = {
    gridRow: {
      base: '5/span 1',
      md: 'r3-start/r3-end',
    },
    gridColumn: {
      base: 'content-start / content-end',
      md: 'col-start 7 / content-end',
    },
    gap: '2',
    px: sizes.xs,
    pb: sizes.xl,
  }

  const listOptionsDefault = { ulSx: { pl: { base: '4', md: '6', xl: 0 } } }

  const textOptions = useConst({
    ...lessonsText,
    listOptions: {
      ...listOptionsDefault,
      ...(lessonsText?.listOptions?.icon
        ? { icon: appIcons.listIcons[lessonsText.listOptions.icon] }
        : {}),
    },
  })

  return (
    <GridItem sx={mainStyles} as={VStack}>
      <TextContentGenerator {...textOptions} />
    </GridItem>
  )
}
export default SummaryContentRight
