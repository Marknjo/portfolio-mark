import { Grid, GridItem, SystemStyleObject } from '@chakra-ui/react'
import { DotsBottomRight, MainGrid, TextContentGenerator } from 'ui'

import { sizes } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'

const mainStyles: SystemStyleObject = {
  gridRow: 'r3-start/r3-end',
  gridColumn: 'outer-left-start / outer-right-end',
  zIndex: '1',
  position: 'relative',

  gridTemplateColumns: 'repeat(6, 1fr)',
}

const ProjectGoalContent = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()

  const { textStacksText } = projectData!

  return (
    <Grid sx={mainStyles}>
      <MainGrid
        options={{
          gridColumn: 'content-start / content-end',
        }}
      >
        <GridItem
          gridColumn={{
            base: 'content-start/content-end',
            md: 'content-start / span 10',
            xl: 'content-start / span 7',
          }}
          backgroundColor="orange.50"
          zIndex={2}
          px={sizes.md}
          pb={sizes.md}
        >
          <TextContentGenerator text={textStacksText} type="paragraph" />
        </GridItem>
      </MainGrid>
      <DotsBottomRight width={24} fill="#ED8936" />
    </Grid>
  )
}
export default ProjectGoalContent
