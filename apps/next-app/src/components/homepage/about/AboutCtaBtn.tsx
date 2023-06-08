import { Button, Link } from '@chakra-ui/react'
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
    <Button
      href={`/${contactButtonLink}`}
      as={Link}
      textDecoration="none"
      variant="outline"
      colorScheme="orange"
      rightIcon={<BsArrowDown />}
      transition="all .2s ease-in"
      _hover={{
        bgColor: 'orange.100',
        boxShadow: 'md',
        textDecoration: 'none',
      }}
      _active={{
        boxShadow: 'base',
        textDecoration: 'none',
      }}
    >
      {contactButtonText}
    </Button>
  )
}

export default AboutCtaBtn
