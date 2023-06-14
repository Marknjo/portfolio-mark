import { Metadata } from 'next'
import { ReactNode } from 'react'
import { IAppSetting } from '@data/types'
import { Archivo, Outfit } from 'next/font/google'

/// local
import { getAppSettingsData } from '@data/utils/appSettingsDataHelper'
import { AppSettingsProvider } from '@store/context/app-settings-context'
import { Providers } from './providers'

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
}

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

/// @TODO: use dynamic data
async function getData(): Promise<IAppSetting> {
  const loadedAppSettingsData = getAppSettingsData()

  return Promise.resolve(loadedAppSettingsData)
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const appSettingsData = await getData()

  return (
    <html lang="en" className={`${archivo.variable} ${outfit.variable}`}>
      <body>
        <AppSettingsProvider data={appSettingsData}>
          <Providers>{children}</Providers>
        </AppSettingsProvider>
      </body>
    </html>
  )
}
