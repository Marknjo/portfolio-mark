import HoneycombLoader from './HoneycombLoader'
import WithoutPortal from './wrappers/WithoutPortal'

export default function SectionHoneycombLoader() {
  return (
    <WithoutPortal>
      <HoneycombLoader />
    </WithoutPortal>
  )
}
