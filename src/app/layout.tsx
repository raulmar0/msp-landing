import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'MSP del Noreste | Soluciones de Automatización Industrial',
    template: '%s | MSP del Noreste'
  },
  description: 'Proveedor líder de productos y servicios de automatización industrial en México. Distribuidor autorizado de SMC, BALLUFF, RITTAL, PHOENIX CONTACT, DELTA y PREVOST. Especialistas en pneumática, sensores, conectividad y seguridad industrial.',
  keywords: [
    'Automatización Industrial',
    'SMC México', 
    'BALLUFF México',
    'RITTAL México', 
    'PHOENIX CONTACT México',
    'DELTA Electronics México',
    'PREVOST México',
    'Pneumática Industrial',
    'Sensores Industriales',
    'Conectividad Industrial',
    'Seguridad Industrial',
    'Distribuidores Autorizados México',
    'Capacitación Industrial',
    'Soporte Técnico Industrial',
    'Automatización Monterrey'
  ],
  authors: [{ name: 'MSP del Noreste' }],
  creator: 'MSP del Noreste',
  publisher: 'MSP del Noreste',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mspnoreste.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-MX': '/',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.jpg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'MSP del Noreste | Soluciones de Automatización Industrial',
    description: 'Proveedor líder de productos y servicios de automatización industrial en México. Distribuidor autorizado de las mejores marcas internacionales.',
    url: 'https://mspnoreste.com',
    siteName: 'MSP del Noreste',
    images: [
      {
        url: '/favicon.jpg',
        width: 512,
        height: 512,
        alt: 'MSP del Noreste - Automatización Industrial',
      },
      {
        url: '/equipo.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipo MSP del Noreste',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSP del Noreste | Soluciones de Automatización Industrial',
    description: 'Proveedor líder de productos y servicios de automatización industrial en México. Distribuidor autorizado de las mejores marcas.',
    images: ['/favicon.jpg'],
    creator: '@mspnoreste',
  },
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
  verification: {
    google: 'verification_token_here', // Reemplazar con token real de Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MSP del Noreste",
    "description": "Proveedor líder de productos y servicios de automatización industrial en México",
    "url": "https://mspnoreste.com",
    "logo": "https://mspnoreste.com/favicon.jpg",
    "image": "https://mspnoreste.com/equipo.jpg",
    "telephone": "+52-81-8000-0000",
    "email": "contacto@mspnoreste.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dirección de la empresa",
      "addressLocality": "Monterrey",
      "addressRegion": "Nuevo León",
      "postalCode": "64000",
      "addressCountry": "MX"
    },
    "sameAs": [
      "https://www.linkedin.com/company/msp-del-noreste",
      "https://www.facebook.com/mspnoreste"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-81-8000-0000",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "foundingDate": "2010",
    "areaServed": "Mexico",
    "knowsAbout": [
      "Automatización Industrial",
      "Pneumática",
      "Sensores Industriales",
      "Conectividad Industrial",
      "Seguridad Industrial"
    ],
    "brand": [
      {
        "@type": "Brand",
        "name": "SMC"
      },
      {
        "@type": "Brand", 
        "name": "BALLUFF"
      },
      {
        "@type": "Brand",
        "name": "RITTAL"
      },
      {
        "@type": "Brand",
        "name": "PHOENIX CONTACT"
      },
      {
        "@type": "Brand",
        "name": "DELTA Electronics"
      },
      {
        "@type": "Brand",
        "name": "PREVOST"
      }
    ]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preload imagen crítica del equipo */}
        <link
          rel="preload"
          as="image"
          href="/equipo.jpg"
          type="image/jpeg"
          fetchPriority="high"
        />
        {/* Preload logo crítico */}
        <link
          rel="preload"
          as="image"
          href="/msp-blanco.png"
          type="image/png"
          fetchPriority="high"
        />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
