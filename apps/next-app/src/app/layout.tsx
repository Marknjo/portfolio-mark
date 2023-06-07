import { Metadata } from 'next'
import { ReactNode } from 'react'
import { IAppSetting } from '@data/types'

/// local
import { getAppSettingsData } from '@data/utils/appSettingsDataHelper'
import { AppSettingsProvider } from '@store/context/app-settings-context'
import { Providers } from './providers'

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
}

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
    <html lang="en">
      <body>
        <AppSettingsProvider data={appSettingsData}>
          <Providers>{children}</Providers>
        </AppSettingsProvider>
      </body>
    </html>
  )
}
