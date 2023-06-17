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
  keywords:
    'JavaScript, TypeScript, NodeJs, Express, NestJs, React, NextJs, Remix, HTML, CSS, TailwindCSS, ChakraUI, Figma, Vue, Nuxt, GraphQl, ApolloGQL, PostgreSQL, MongoDB, Docker, Vite, Docker Swarm, Vitest, Git/Github, MVC, REST API, Microservices, Github Action, CI/CD, Python, Django, React Native, Electron, C#, Golang',
  applicationName: 'Mark Njoroge Portfolio',
  authors: [{ name: 'Mark Njoroge', url: 'https://nextjs.org' }], // @TODO: update this on purchase of a new domain,
  category: 'Science & Technology',
  classification: 'Programming',
  description:
    'Welcome to the digital playground of Mark Njoroge, a creative developer who builds web and mobile apps with JavaScript and its cutting-edge mobile, desktop, frontend, and backend tools.',
  twitter: {
    card: 'summary_large_image',
    site: '@marknjo',
    creator: '@marknjo',
    images: '/images/profile-image.jpg',
    creatorId: '@marknjo',
    title: 'Mark Njoroge Portfolio',
    description:
      'Welcome to the digital playground of Mark Njoroge, a creative developer who builds web and mobile apps with JavaScript and its cutting-edge mobile, desktop, frontend, and backend tools.',
  },
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
