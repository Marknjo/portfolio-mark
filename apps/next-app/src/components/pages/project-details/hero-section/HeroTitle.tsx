import { fontSizes } from '@components/next-ui'
import { useIsLoading } from '@hooks/is-loading'
import { useDetailsPageData } from '@store/context/details-page-context'
import { LargeTitle } from 'ui'

const HeroTitle = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()
  const {
    title,
    category: { name },
  } = projectData!

  const { isLoading } = useIsLoading()

  return (
    <LargeTitle
      as="h1"
      title={title}
      subTitle={name}
      subTitleConfig={{ color: 'orange.100' }}
      titleConfig={{
        color: 'orange.50',
        gridColumn: 'content-start/content-end',
        gridRow: 'title-start/title-end',
        pb: { base: '12', lg: '28' },
        pt: '0',
        zIndex: 3,
        fontSize: fontSizes.lg,
      }}
      isCapitalized
      hasTypewriter
      isLoading={isLoading}
    />
  )
}

export default HeroTitle
