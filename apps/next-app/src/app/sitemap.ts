import { env } from 'process'
import { getProjectNames } from '@data/utils/projectsHelpers'
import { MetadataRoute } from 'next'

const domain =
  env.APP_DOMAIN ||
  env.VERCEL_URL ||
  env.NEXT_PUBLIC_VERCEL_URL ||
  'http://localhost:3005'

function generateProjectsSitemaps() {
  const appPages = getProjectNames()

  const projectsMaps: MetadataRoute.Sitemap = appPages.map(projectSlug => ({
    url: `${
      domain === 'http://localhost:3005' ? '' : `https://${domain}`
    }/${projectSlug}`,
    lastModified: new Date(),
  }))

  return projectsMaps
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projectsMaps = generateProjectsSitemaps()

  return [
    {
      url: domain,
      lastModified: new Date(),
    },
    ...projectsMaps,
  ]
}
