import { GridItem } from '@chakra-ui/react'
import RelatedProjectsTitle from './RelatedProjectsTitle'

const LinksSection = () => (
  <>
    {/* Pagination Links */}
    <GridItem gridRow="r1-start/r1-end" gridColumn="content-start/content-end">
      pagination
    </GridItem>

    {/* Sub-Heading */}
    <RelatedProjectsTitle />

    {/* Cards */}
    <GridItem gridRow="r3-start/r3-end" gridColumn="content-start/content-end">
      Related Cards
    </GridItem>
    {/*  */}
  </>
)

export default LinksSection
