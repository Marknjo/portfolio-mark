import { getProjectNames } from '@data/utils/projectsHelpers'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const appPages = getProjectNames()

  const domain = process.env.APP_DOMAIN || '/'

  const projectsMaps: MetadataRoute.Sitemap = appPages.map(projectSlug => ({
    url: `${domain === '/' ? '' : domain}/${projectSlug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: domain,
      lastModified: new Date(),
    },
    ...projectsMaps,
  ]
}
