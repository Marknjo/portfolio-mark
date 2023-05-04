import { GridItem } from '@chakra-ui/react'
import RelatedProjectsTitle from './RelatedProjectsTitle'
import CTALinks from './CTALinks'

const CTASection = () => (
  <>
    {/* Pagination Links */}
    <CTALinks />

    {/* Sub-Heading */}
    <RelatedProjectsTitle />

    {/* Cards */}
    <GridItem gridRow="r3-start/r3-end" gridColumn="content-start/content-end">
      Related Cards
    </GridItem>
    {/*  */}
  </>
)

export default CTASection
