import { GridItem, SystemStyleObject } from '@chakra-ui/react'
export const SectionSeparator = ({
  sxOverrides = {},
}: {
  sxOverrides?: SystemStyleObject
}) => {
  const styles: SystemStyleObject = {
    width: '100%',
    height: '100%',
    minHeight: { base: '4px', md: '6px' },
    gridRow: 'r4-start/r4-end',
    gridColumn: 'outer-left-start/outer-right-end',
    backgroundColor: 'blackAlpha.50',
    ...sxOverrides,
  }

  return <GridItem sx={styles} />
}
