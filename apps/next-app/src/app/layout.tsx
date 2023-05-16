import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Providers } from './providers'

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
}

/* eslint-disable react/function-component-definition */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        {/* {children} */}
      </body>
    </html>
  )
}
