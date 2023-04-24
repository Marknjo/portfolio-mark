import {
  Box,
  CSSWithMultiValues,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  SystemStyleObject,
} from '@chakra-ui/react'
import { FiDribbble, FiArrowUpRight } from 'react-icons/fi'

export enum SkillThemes {
  DEFAULT = 'default',
  DEFAULT_TEAL = 'default_teal',
  DEFAULT_ORANGE = 'default_orange',
}

export interface ISkillsCard {
  name: string
  homePage: string
  icon: string
  theme?: SkillThemes.DEFAULT
  active?: boolean
}

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

const themeHover = (theme: SkillThemes) => {
  switch (theme) {
    case SkillThemes.DEFAULT_TEAL:
      return defaultTealThemeHover

    case SkillThemes.DEFAULT || SkillThemes.DEFAULT_ORANGE:
    default:
      return defaultOrangeThemeHover
  }
}

const theme = (theme: SkillThemes) => {
  switch (theme) {
    case SkillThemes.DEFAULT_TEAL:
      return defaultTealTheme

    case SkillThemes.DEFAULT || SkillThemes.DEFAULT_ORANGE:
    default:
      return defaultOrangeTheme
  }
}

const CardLink = ({
  pageLink,
  cardLinkStyles,
}: {
  pageLink: string
  cardLinkStyles: SystemStyleObject
}) => (
  <Link href={pageLink} target="_blank" position="absolute" sx={cardLinkStyles}>
    <Icon as={FiArrowUpRight} width="16px" height="16px" />
  </Link>
)

export const SkillsCard = ({ skill }: { skill: ISkillsCard }) => {
  const cardLinkStyles: SystemStyleObject = {
    color: 'whiteAlpha.600',
    borderRadius: '100%',
    border: '1px solid',
    justifySelf: 'right',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    width: '5',
    height: '5',
    pt: '1.5px',
    pr: '1px',

    borderColor: 'whiteAlpha.600',
    mr: '6px',
    mt: '4',
    _hover: {
      borderColor: 'whiteAlpha.800',
      color: 'whiteAlpha.800',
    },

    _groupHover: {
      ...(skill.theme ? themeHover(skill.theme) : defaultOrangeTheme),
    },
  }

  const cardIconStyles: SystemStyleObject = {
    width: '8',
    height: '8',

    border: '2px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px',
    borderRadius: '100%',
    boxShadow: 'lg',
    ...(skill.theme ? theme(skill.theme) : defaultOrangeTheme),

    /* grid */
    gridColumn: 'c2-start / c2-end',
    gridRow: 'r2-start / r3-end',

    _groupHover: {
      ...(skill.theme ? themeHover(skill.theme) : defaultOrangeTheme),
    },
  }

  const cardTitleStyles: SystemStyleObject = {
    borderTop: '8px solid',
    borderRadius: '4px',
    boxShadow: 'md',
    pt: '4',
    px: '3',
    pb: '5',
    pr: '8',
    ...(skill.theme ? theme(skill.theme) : defaultOrangeTheme),

    /* Grid Styles */
    gridColumn: 'c1-start / c3-end',
    gridRow: 'r1-start / r2-end',
    _groupHover: {
      ...(skill.theme ? themeHover(skill.theme) : defaultOrangeTheme),
    },
  }

  const CardIcon = () => (
    <Icon as={FiDribbble} width="100%" height="100%" sx={cardIconStyles} />
  )

  console.log(skill.homePage)

  return (
    <Grid
      position="relative"
      gridTemplateColumns="[c1-start] 12px [c1-end c2-start] auto [c2-end c3-start] 26px [c3-end]"
      gridTemplateRows="[r1-start] auto [r1-end r2-start] 16px [r2-end r3-start] auto [r3-end]"
      cursor="pointer"
      // _hover={{
      //   ...(skill.theme ? theme(skill.theme) : defaultOrangeThemeHover),
      // }}
      role="group"
    >
      <GridItem gridColumn="c3-start/c3-end" gridRow="r1-start/r1-end">
        <CardLink pageLink={skill.homePage} cardLinkStyles={cardIconStyles} />
      </GridItem>
      <GridItem as="p" sx={cardTitleStyles}>
        {skill.name}
      </GridItem>
      <GridItem as={CardIcon} />
    </Grid>
  )
}
