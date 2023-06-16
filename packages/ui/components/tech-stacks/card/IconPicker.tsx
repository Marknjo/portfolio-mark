import { SystemStyleObject } from '@chakra-ui/react'

/**
 * A helper function that helps pick different Tech Skill icons
 * @TODO: create different icons for different skills
 * @param cardIconStyles Styles passed down to the icon
 * @param iconName Custom skill icon
 * @returns Icon component
 */
export function iconPicker(Icon: any, cardIconStyles: SystemStyleObject) {
  return (props: any) => <Icon {...props} {...cardIconStyles} />
}
