import { Button } from '@chakra-ui/react'
import { useHomePageData } from '@store/context/homepage-context'
import { useRouter } from 'next/navigation'
import { BsArrowDown } from 'react-icons/bs'

const AboutCtaBtn = () => {
  const {
    content: {
      about: { contactButtonLink, contactButtonText },
    },
  } = useHomePageData()
  const router = useRouter()

  return (
    <Button
      variant="outline"
      colorScheme="orange"
      onClick={() => router.push(`${contactButtonLink}`)}
      rightIcon={<BsArrowDown />}
    >
      {contactButtonText}
    </Button>
  )
}

export default AboutCtaBtn
