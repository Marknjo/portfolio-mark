import { Link } from '@chakra-ui/react'
import SolidBtn from '@components/next-ui/buttons/ SolidBtn'
import { IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import { BsArrowDown } from 'react-icons/bs'

const AboutCtaBtn = () => {
  const {
    content: {
      about: { contactButtonLink, contactButtonText },
    },
  } = useHomePageData<IHomePageContentV1>()

  return (
    <SolidBtn
      text={contactButtonText}
      props={{
        as: Link,
        rightIcon: <BsArrowDown />,
      }}
      href={`/${contactButtonLink}`}
      sx={{
        border: '1px solid',
        borderColor: 'orange.300',
        bgColor: 'orange.100',
      }}
    />
  )
}

export default AboutCtaBtn
