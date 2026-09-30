import { MetadataRoute } from 'next';
import { SITE_CONFIG, COUNTRIES_LIST, SERVICES_LIST } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  // Core static pages
  const staticPages = [
    '',
    '/about',
    '/study-visa',
    '/immigration',
    '/visitor-visa',
    '/business-immigration',
    '/ielts',
    '/pte',
    '/language-courses',
    '/countries',
    '/success-stories',
    '/blog',
    '/contact',
    '/profile-assessment',
    '/payment',
    '/privacy-policy',
    '/terms',
    '/refund-policy',
    '/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route.includes('profile-assessment') ? 0.9 : 0.8,
  }));

  // Country pages
  const countryPages = COUNTRIES_LIST.map((c) => ({
    url: `${baseUrl}/countries/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...countryPages];
}
