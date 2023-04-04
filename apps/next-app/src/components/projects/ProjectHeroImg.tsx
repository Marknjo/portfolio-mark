import { GridItem, Image, StyleProps } from '@chakra-ui/react'

const ProjectHeroImg = () => {
  const commonStyles: StyleProps = {
    borderRadius: 'md',
    height: 'auto',
  }

  return (
    <GridItem
      gridColumn="col-start 2/span 8"
      gridRow="img-start/img-r3-end"
      backgroundColor="orange.200"
      shadow="md"
      border="2px solid"
      borderColor="orange.100"
      objectFit="cover"
      {...commonStyles}
    >
      <Image
        src="./images/project-hero-img.jpg"
        width="100%"
        {...commonStyles}
      />
    </GridItem>
  )
}

export default ProjectHeroImg
