import { Icon, Link, SystemStyleObject } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'

/**
 * A Helper component for displaying link Icon
 * @param PageLink a href link to the home page of a skill
 * @param cardLinkStyles CSS styles for the link icon
 * @returns link component
 */
export const CardLink = ({
  pageLink,
  cardLinkStyles,
}: {
  pageLink: string
  cardLinkStyles: SystemStyleObject
}) => (
  <Link href={pageLink} target="_blank" position="absolute" sx={cardLinkStyles}>
    <Icon as={FiExternalLink} width="16px" height="16px" />
  </Link>
)
