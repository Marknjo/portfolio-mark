import { Badge } from '@chakra-ui/react'

/**
 * Helper Component to display active or passive status of a skill
 * @param isActive show muted green badge or muted gray
 * @returns Badge component
 */
export const CardBadge = ({ isActive }: { isActive: boolean }) => (
  <Badge
    colorScheme={isActive ? 'green' : 'gray'}
    variant="subtle"
    fontSize="xx-small"
  >
    {isActive ? 'Active' : 'Passive'}
  </Badge>
)
