import { useLayoutEffect } from 'react'
import { useIsLoading } from '@hooks/is-loading'
import { Box } from '@chakra-ui/react'
import HoneycombLoader from './HoneycombLoader'
import WithoutPortal from './wrappers/WithoutPortal'

export default function SectionHoneycombLoader() {
  const { isLoading } = useIsLoading()

  useLayoutEffect(() => {
    const wrapperElInDOM = document.getElementById('section-loader')

    if (wrapperElInDOM && isLoading) {
      wrapperElInDOM.style.display = 'none'
    }
  }, [isLoading])
  return (
    <Box position="relative" id="section-loader">
      <WithoutPortal>
        <HoneycombLoader />
      </WithoutPortal>
    </Box>
  )
}
