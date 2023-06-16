/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { Grid, GridItem, SystemStyleObject } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { CardLink, StackThemes, iconPicker, CardBadge } from '..'

export interface ISkillsCardProps<T extends object> {
  skill: T
  showBadge?: boolean
  showLink?: boolean
  showIcon?: boolean
  showAllEls?: boolean
  stylesOverrides?: SystemStyleObject
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
  backgroundColor: 'orange.900',
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
const themeHover = (theme: StackThemes) => {
  switch (theme) {
    case StackThemes.PASSIVE:
      return passiveThemeHover

    case StackThemes.DEFAULT_TEAL:
      return defaultTealThemeHover

    case StackThemes.DEFAULT || StackThemes.DEFAULT_ORANGE:
    default:
      return defaultOrangeThemeHover
  }
}

const theme = (themeName: StackThemes) => {
  switch (themeName) {
    case StackThemes.PASSIVE:
      return passiveTheme

    case StackThemes.DEFAULT_TEAL:
      return defaultTealTheme

    case StackThemes.DEFAULT || StackThemes.DEFAULT_ORANGE:
    default:
      return defaultOrangeTheme
  }
}

export function TechCard<T extends { [key: string]: any }>({
  skill,
  showBadge = true,
  showLink = true,
  showIcon = true,
  showAllEls = true,
  stylesOverrides = {},
}: ISkillsCardProps<T>) {
  // Allow disable all attached components with one setting
  if (!showAllEls) {
    showIcon = false
    showLink = false
    showBadge = false
  }

  /// Styles
  const cardDefaultStyles: SystemStyleObject = {
    position: 'relative',
    gridTemplateColumns:
      '[c1-start] 12px [c1-end c2-start] auto [c2-end c3-start] 26px [c3-end]',
    gridTemplateRows:
      '[r1-start] auto [r1-end r2-start] 16px [r2-end r3-start] auto [r3-end]',
    cursor: 'pointer',
    ...stylesOverrides,
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
    boxShadow: 'base',
    pt: !showBadge ? '3' : '6',
    px: '3',
    pb: !showIcon ? '3' : '5',
    pr: '8',
    zIndex: '1',
    ...(skill.theme ? theme(skill.theme) : defaultOrangeTheme),

    /* Grid Styles */
    gridColumn: 'c1-start / c3-end',
    gridRow: 'r1-start / r2-end',

    transition: 'all .15s ease-in',
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

    transition: 'all .15s ease-in',
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

  const CardIcon = iconPicker(skill.icon, cardIconStyles)

  return (
    <Grid
      as={motion.div}
      whileHover={{
        scale: 1.02,
        translateY: -5,
      }}
      whileTap={{
        scale: 0.9,
        translateY: 2,
      }}
      sx={cardDefaultStyles}
      role="group"
    >
      {showBadge && (
        <GridItem sx={badgeStyles}>
          <CardBadge isActive={!!skill.isActive} />
        </GridItem>
      )}
      {showLink && (
        <GridItem gridColumn="c3-start/c3-end" gridRow="r1-start/r1-end">
          <CardLink
            pageLink={skill.homePageUrl}
            cardLinkStyles={cardLinkStyles}
          />
        </GridItem>
      )}
      <GridItem as="p" sx={cardTitleStyles}>
        {skill.name}
      </GridItem>
      {/* {<CardIcon />} */}

      {showIcon && CardIcon && <GridItem as={CardIcon} />}
    </Grid>
  )
}
/* {showIcon && CardIcon && <GridItem as={CardIcon} />} */
