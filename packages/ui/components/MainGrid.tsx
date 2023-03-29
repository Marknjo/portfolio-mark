import { As, Grid } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface GenericProps {
  children: ReactNode
  as?: As
}

export const MainGrid = ({ children, as }: GenericProps) => (
  <Grid
    templateColumns="
    [outer-left-start] minmax(8px, 1fr) [outer-left-end content-start] 
    repeat(12, [col-start]minmax(20px, calc((1536px - 16px*11)/12))[col-end]) 
    [content-end outer-right-start]minmax(8px, 1fr)[outer-right-end]"
    columnGap="4"
    {...(as ? { as } : {})}
  >
    {children}
  </Grid>
)
