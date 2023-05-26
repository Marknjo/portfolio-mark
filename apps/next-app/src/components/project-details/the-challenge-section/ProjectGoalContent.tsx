import { Grid, GridItem, SystemStyleObject } from '@chakra-ui/react'
import { DotsBottomRight, MainGrid, ContentGenerator } from 'ui'
import { sampContent } from '@data/sampleContent'
import { sizes } from '@components/next-ui'

const ProjectGoalContent = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r3-start/r3-end',
    gridColumn: 'outer-left-start / outer-right-end',
    zIndex: '1',
    position: 'relative',

    gridTemplateColumns: 'repeat(6, 1fr)',
  }

  return (
    <Grid sx={mainStyles}>
      <MainGrid
        options={{
          gridColumn: 'content-start / content-end',
        }}
      >
        <GridItem
          gridColumn="content-start / span 7"
          backgroundColor="orange.50"
          px={sizes.md}
          pb={sizes.md}
        >
          <ContentGenerator content={sampContent} />
        </GridItem>
      </MainGrid>
      <DotsBottomRight width={24} fill="#ED8936" />
    </Grid>
  )
}
export default ProjectGoalContent
