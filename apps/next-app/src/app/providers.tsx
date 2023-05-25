// app/providers.tsx

'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

import theme from '../theme/index'

export const Providers = ({ children }: { children: ReactNode }) => (
  <CacheProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </CacheProvider>
)
