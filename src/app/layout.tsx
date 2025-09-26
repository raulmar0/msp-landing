import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'MSP del Noreste | Soluciones de Automatización Industrial',
  description: 'Proveedor líder de productos y servicios de automatización industrial. Nos asociamos con las mejores marcas para ofrecer calidad e innovación.',
  keywords: ['Automatización Industrial', 'SMC', 'BALLUFF', 'RITTAL', 'PHOENIX CONTACT', 'DELTA', 'PREVOST'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.jpg',
  },
  openGraph: {
    title: 'MSP del Noreste | Soluciones de Automatización Industrial',
    description: 'Proveedor líder de productos y servicios de automatización industrial. Nos asociamos con las mejores marcas para ofrecer calidad e innovación.',
    images: [
      {
        url: '/favicon.jpg',
        width: 512,
        height: 512,
        alt: 'MSP del Noreste - Automatización Industrial',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'MSP del Noreste | Soluciones de Automatización Industrial',
    description: 'Proveedor líder de productos y servicios de automatización industrial. Nos asociamos con las mejores marcas para ofrecer calidad e innovación.',
    images: ['/favicon.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
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
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
