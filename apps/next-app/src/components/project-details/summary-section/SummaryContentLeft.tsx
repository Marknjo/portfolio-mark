import { GridItem, SystemStyleObject, VStack, useConst } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { appIcons } from '@data/generalData/icons/dataAppIcons'
import { useDetailsPageData } from '@store/context/details-page-context'
import { TextContentGenerator } from 'ui'

const SummaryContentLeft = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()

  const { challengesText } = projectData!

  const listOptionsDefault = { ulSx: { pl: { base: '4', md: '6', xl: 0 } } }
  const textOptions = useConst({
    ...challengesText,
    listOptions: {
      ...listOptionsDefault,
      ...(challengesText?.listOptions?.icon
        ? { icon: appIcons.listIcons[challengesText.listOptions.icon] }
        : {}),
    },
  })

  const mainStyles: SystemStyleObject = {
    gridRow: {
      base: '3/span 1',
      md: 'r3-start/r3-end',
    },
    gridColumn: {
      base: 'content-start / content-end',
      md: 'content-start / span 6',
    },
    gap: '2',
    px: sizes.xs,
    pb: sizes.xl,
    pt: { base: '4', md: 0 },
  }

  return (
    <GridItem sx={mainStyles} as={VStack}>
      <TextContentGenerator {...textOptions} />
    </GridItem>
  )
}
export default SummaryContentLeft
