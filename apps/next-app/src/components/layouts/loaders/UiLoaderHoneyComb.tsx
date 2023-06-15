import { useIsLoading } from '@hooks/is-loading'
import HoneycombLoader from './HoneycombLoader'
import WithPortal from './wrappers/WithPortal'

export default function UiLoaderHoneyComb() {
  const isLoading = useIsLoading()

  return (
    <>
      {isLoading && (
        <WithPortal>
          <HoneycombLoader />
        </WithPortal>
      )}{' '}
    </>
  )
}
