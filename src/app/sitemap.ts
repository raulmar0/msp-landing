import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mspnoreste.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}