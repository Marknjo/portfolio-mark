import React from 'react'

import { AppProps } from 'next/app'
import '../../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
