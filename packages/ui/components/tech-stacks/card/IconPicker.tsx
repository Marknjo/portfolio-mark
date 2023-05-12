import { Icon, SystemStyleObject } from '@chakra-ui/react'
import { FiDribbble } from 'react-icons/fi'

/**
 * A helper function that helps pick different Tech Skill icons
 * @TODO: create different icons for different skills
 * @param cardIconStyles Styles passed down to the icon
 * @param iconName Custom skill icon
 * @returns Icon component
 */
export function iconPicker(
  cardIconStyles: SystemStyleObject,
  iconName?: string,
) {
  return () => (
    <Icon as={FiDribbble} width="100%" height="100%" sx={cardIconStyles} />
  )
}
