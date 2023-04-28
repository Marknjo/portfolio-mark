import { GridItem, GridProps } from '@chakra-ui/react'
import { MainGrid } from 'ui'

const ContactSection = () => {
  const gridStyles: GridProps = {
    backgroundColor: 'orange.500',
  }
  return (
    <MainGrid options={gridStyles} as="section">
      <GridItem>This is the contact section</GridItem>
    </MainGrid>
  )
}

export default ContactSection
