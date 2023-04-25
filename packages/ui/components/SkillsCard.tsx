import {
  Badge,
  Grid,
  GridItem,
  Icon,
  Link,
  SystemStyleObject,
} from '@chakra-ui/react'
import { FiDribbble, FiExternalLink } from 'react-icons/fi'

export enum SkillThemes {
  DEFAULT = 'default',
  DEFAULT_TEAL = 'default_teal',
  DEFAULT_ORANGE = 'default_orange',
  PASSIVE = 'passive',
}

export interface ISkillsCard {
  name: string
  homePage: string
  icon: string
  theme?: SkillThemes
  active?: boolean
}

/**
 *  Theme Styles for different card
 */

const defaultOrangeTheme: SystemStyleObject = {
  color: 'orange.200',
  borderTopColor: 'orange.200',
  backgroundColor: 'blackAlpha.800',
}

const defaultOrangeThemeHover: SystemStyleObject = {
  color: 'orange.100',
  borderTopColor: 'orange.100',
  backgroundColor: 'blackAlpha.900',
  boxShadow: 'lg',
}

const defaultTealThemeHover: SystemStyleObject = {
  color: 'teal.100',
  borderTopColor: 'teal.100',
  backgroundColor: 'teal.900',
}

const defaultTealTheme: SystemStyleObject = {
  color: 'teal.200',
  borderTopColor: 'teal.200',
  backgroundColor: 'teal.800',
}

// Passive/muted
const passiveTheme: SystemStyleObject = {
  color: 'gray.200',
  borderTopColor: 'gray.200',
  backgroundColor: 'blackAlpha.700',
}

const passiveThemeHover: SystemStyleObject = {
  color: 'gray.100',
  borderTopColor: 'gray.100',
  backgroundColor: 'blackAlpha.800',
  boxShadow: 'lg',
}

/**
 *  Define theme of a card based of styles
 *   - Hover styles are separate from (themeHover() function based on the SkillThemes enum)
 *   - Default theme styles (theme() function based on the SkillThemes enum)
 *  Add more styles in the two function below
 */
const themeHover = (theme: SkillThemes) => {
  switch (theme) {
    case SkillThemes.PASSIVE:
      return passiveThemeHover

    case SkillThemes.DEFAULT_TEAL:
      return defaultTealThemeHover

    case SkillThemes.DEFAULT || SkillThemes.DEFAULT_ORANGE:
    default:
      return defaultOrangeThemeHover
  }
}

const theme = (theme: SkillThemes) => {
  switch (theme) {
    case SkillThemes.PASSIVE:
      return passiveTheme

    case SkillThemes.DEFAULT_TEAL:
      return defaultTealTheme

    case SkillThemes.DEFAULT || SkillThemes.DEFAULT_ORANGE:
    default:
      return defaultOrangeTheme
  }
}

/**
 * Helper Component to display active or passive status of a skill
 * @param isActive show muted green badge or muted gray
 * @returns Badge component
 */
const BadgeItem = ({ isActive }: { isActive: boolean }) => (
  <Badge
    colorScheme={isActive ? 'green' : 'gray'}
    variant="subtle"
    fontSize="xx-small"
  >
    {isActive ? 'Active' : 'Passive'}
  </Badge>
)

/**
 * A Helper component for displaying link Icon
 * @param PageLink a href link to the home page of a skill
 * @param cardLinkStyles CSS styles for the link icon
 * @returns link component
 */
const CardLink = ({
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

export const SkillsCard = ({
  skill,
  showBadge = false,
}: {
  skill: ISkillsCard
  showBadge?: boolean
}) => {
  /// Styles
  const cardDefaultStyles: SystemStyleObject = {
    position: 'relative',
    gridTemplateColumns:
      '[c1-start] 12px [c1-end c2-start] auto [c2-end c3-start] 26px [c3-end]',
    gridTemplateRows:
      '[r1-start] auto [r1-end r2-start] 16px [r2-end r3-start] auto [r3-end]',
    cursor: 'pointer',
  }

  const badgeStyles: SystemStyleObject = {
    gridColumn: 'c2-start/c3-end',
    gridRow: 'r1-start/r1-end',
    zIndex: '3',
    mt: '2',
    ml: '1',
  }

  const cardTitleStyles: SystemStyleObject = {
    borderTop: '8px solid',
    borderRadius: '4px',
    boxShadow: 'md',
    pt: showBadge ? '6' : '3',
    px: '3',
    pb: '5',
    pr: '8',
    zIndex: '1',
    ...(skill.theme ? theme(skill.theme) : defaultOrangeTheme),

    /* Grid Styles */
    gridColumn: 'c1-start / c3-end',
    gridRow: 'r1-start / r2-end',

    transition: 'all .3s ease-in',
    _groupHover: {
      ...(skill.theme ? themeHover(skill.theme) : defaultOrangeTheme),
    },
  }

  const commonIconStyles: SystemStyleObject = {
    width: '8',
    height: '8',
    padding: '4px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '100%',
    border: '2px solid',

    zIndex: '2',

    transition: 'all .3s ease-in',
  }

  const cardLinkStyles: SystemStyleObject = {
    ...commonIconStyles,
    zIndex: '3',
    mt: '-4px',

    color: 'whiteAlpha.800',
    borderColor: 'whiteAlpha.800',
    backgroundColor: 'blackAlpha.800',

    transition: 'all .3s ease-in',
    _hover: {
      borderColor: 'whiteAlpha.800',
      color: 'whiteAlpha.800',
    },

    _groupHover: {
      ...(skill.theme ? themeHover(skill.theme) : defaultOrangeThemeHover),
      borderColor: 'whiteAlpha.900',
      boxShadow: 'xl',
    },
  }

  const cardIconStyles: SystemStyleObject = {
    ...commonIconStyles,
    /* grid */
    gridColumn: 'c2-start / c2-end',
    gridRow: 'r2-start / r3-end',

    boxShadow: 'lg',
    ...(skill.theme ? theme(skill.theme) : defaultOrangeTheme),

    _groupHover: {
      ...(skill.theme ? themeHover(skill.theme) : defaultOrangeTheme),
      boxShadow: 'xl',
    },
  }

  const CardIcon = customIcon(cardIconStyles, skill.icon)

  return (
    <Grid sx={cardDefaultStyles} role="group">
      {showBadge && (
        <GridItem sx={badgeStyles}>
          <BadgeItem isActive={!!skill.active} />
        </GridItem>
      )}
      <GridItem gridColumn="c3-start/c3-end" gridRow="r1-start/r1-end">
        <CardLink pageLink={skill.homePage} cardLinkStyles={cardLinkStyles} />
      </GridItem>
      <GridItem as="p" sx={cardTitleStyles}>
        {skill.name}
      </GridItem>
      <GridItem as={CardIcon} />
    </Grid>
  )
}

/**
 * A helper function that defines different skills icons
 * @TODO: create different icons for different skills
 * @param cardIconStyles Styles passed down to the icon
 * @param iconName Custom skill icon
 * @returns Icon component
 */
function customIcon(cardIconStyles: SystemStyleObject, iconName?: string) {
  // console.log(iconName)

  return () => (
    <Icon as={FiDribbble} width="100%" height="100%" sx={cardIconStyles} />
  )
}
