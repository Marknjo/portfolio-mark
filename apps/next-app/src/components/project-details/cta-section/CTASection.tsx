import { sampleProjects } from '@data/sampleProjects'

import RelatedProjectsTitle from './RelatedProjectsTitle'
import CTALinks from './CTALinks'
import CTARelatedProjects from './CTARelatedProjects'

const CTASection = () => (
  <>
    {/* Pagination Links */}
    <CTALinks />

    {/* Sub-Heading */}
    <RelatedProjectsTitle />

    {/* Cards */}
    <CTARelatedProjects projectInfo={sampleProjects} />
    {/*  */}
  </>
)

export default CTASection
