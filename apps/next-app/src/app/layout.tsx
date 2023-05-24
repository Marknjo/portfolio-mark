import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Providers } from './providers'

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ overflowX: 'hidden' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
