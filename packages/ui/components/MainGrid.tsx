import { As, Grid, GridProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface GenericProps {
  children: ReactNode
  as?: As
  options?: GridProps
  id?: string
}

interface GridSizes {
  base: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

/**
 * The grid outer gaps minus the next inner grid
 */
const outerGaps: GridSizes = {
  base: '16px', // plus inner - 20px
  md: '16px', // plus inner  - 24px
  lg: '20px', // plus inner - 32px
  xl: '24px', // plus inner - 36px
  '2xl': '32px', // plus inner - 48px
}

/**
 * The grid inner gaps minus the next inner grid
 */
const innerGaps: GridSizes = {
  base: '4px', // plus outer - 20px
  md: '8px', // plus outer  - 32px
  lg: '12px', // plus outer - 32px
  xl: '16px', // // plus inner - 36px
  '2xl': '16px', // // plus inner - 48px
}

const breakingPoints: GridSizes = {
  base: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

const templateColumns = (
  breakPoint: string,
  outerGap: string,
  innerGap?: string,
) => `
[outer-left-start] minmax(${outerGap}, 1fr) [outer-left-end content-start] 
repeat(12, [col-start]minmax(20px, calc((${breakPoint} - (${innerGap}*11 + ${outerGap}*2))/12))[col-end]) 
[content-end outer-right-start]minmax(${outerGap}, 1fr)[outer-right-end]
`

const flexGrids = {
  base: templateColumns(breakingPoints.base, outerGaps.base, innerGaps.base), // 0-480px
  //sm: templateColumns(breakingPoints.base, outerGaps.base, innerGaps.base), // 480px
  //md: templateColumns(breakingPoints.md, outerGaps.md, innerGaps.md), // 768px
  // lg: templateColumns(breakingPoints.lg, outerGaps.lg, innerGaps.lg), // 992px
  // xl: templateColumns(breakingPoints.xl, outerGaps.xl, innerGaps.xl), // 1280px
  sm: templateColumns(breakingPoints.lg, outerGaps.lg, innerGaps.lg), // 992px
  md: templateColumns(breakingPoints.xl, outerGaps.xl, innerGaps.xl), // 1280px
  '2xl': templateColumns(
    breakingPoints['2xl'],
    outerGaps['2xl'],
    innerGaps['2xl'],
  ), // 1536px
}

const flexGaps = {
  ...innerGaps,
  sm: innerGaps.base,
}

export const MainGrid = ({ children, options = {}, as, id }: GenericProps) => {
  return (
    <Grid
      {...(id ? { id } : {})}
      templateColumns={flexGrids}
      columnGap={flexGaps}
      {...(as ? { as: as } : {})}
      {...options}
    >
      {children}
    </Grid>
  )
}
