import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import FloatingContact from '@/components/FloatingContact';
import { SITE_CONFIG } from '@/lib/config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'AKME Immigrations | Study Visa, Immigration & IELTS Coaching in Patiala',
    template: '%s | AKME Immigrations',
  },
  description: SITE_CONFIG.description,
  keywords: [
    'AKME Immigrations',
    'Study Visa Patiala',
    'Study in Canada',
    'Study in Australia',
    'Study in UK',
    'Study in Germany',
    'IELTS coaching Patiala',
    'PTE training Patiala',
    'German language coaching',
    'Immigration consultants Punjab',
    'Visitor visa guidance'
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'AKME Immigrations - Transforming Dreams into Destination',
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/akme-logo.png',
        width: 1200,
        height: 630,
        alt: 'AKME Immigrations & Education Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AKME Immigrations | Study Abroad & Visa Consultancy',
    description: SITE_CONFIG.description,
    images: ['/images/akme-logo.png'],
  },
  icons: {
    icon: '/images/akme-logo.png',
    apple: '/images/akme-logo.png',
  },
};

// JSON-LD Schema for LocalBusiness and EducationalOrganization
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: SITE_CONFIG.legalName,
  alternateName: 'AKME Immigrations',
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/akme-logo.png`,
  image: `${SITE_CONFIG.url}/images/akme-logo.png`,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'SCO 31, Opposite Punjab & Sind Bank, Walia Enclave, Opposite Punjabi University',
    addressLocality: 'Patiala',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.3398,
    longitude: 76.3869,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
  ],
  priceRange: '₹₹',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Punjab, India',
  },
  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.youtube,
    SITE_CONFIG.social.linkedin,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
        <AnalyticsTracker />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
