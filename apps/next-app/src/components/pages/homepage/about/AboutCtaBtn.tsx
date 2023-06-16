import { Flex, Link, SystemStyleObject } from '@chakra-ui/react'
import { SolidBtn } from 'ui'
import { IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import { BsArrowDown } from 'react-icons/bs'
import { useAppSettings } from '@store/context/app-settings-context'
import CvDownloadBtn from '@components/next-ui/buttons/CvDownloadBtn'

const AboutCtaBtn = () => {
  const {
    content: {
      about: { contactButtonLink, contactButtonText },
    },
  } = useHomePageData<IHomePageContentV1>()

  const {
    theme: { primaryThemeColor },
  } = useAppSettings()

  const styles = useStyles(primaryThemeColor)

  return (
    <Flex sx={styles.mainWrapper}>
      <SolidBtn
        text={contactButtonText}
        props={{
          as: Link,
          rightIcon: <BsArrowDown />,
        }}
        href={`/${contactButtonLink}`}
        sx={styles.contactBtn}
      />

      <CvDownloadBtn outlinePrevBtn />
    </Flex>
  )
}

export default AboutCtaBtn

interface IStyles {
  mainWrapper: SystemStyleObject
  contactBtn: SystemStyleObject
}

const useStyles = (brand: string): IStyles => {
  const sharedBtnStyles: SystemStyleObject = { border: '1px solid' }

  return {
    mainWrapper: {
      gap: '5',
      flexWrap: 'wrap',
      justifyContent: { base: 'center', lg: 'flex-start' },
    },
    contactBtn: {
      borderColor: `${brand}.300`,
      bgColor: `${brand}.50`,
      ...sharedBtnStyles,
    },
  }
}
