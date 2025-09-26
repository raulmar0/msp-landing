import type { Metadata } from 'next';
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia de MSP del Noreste, nuestra misión, visión y valores. Más de 10 años siendo líderes en automatización industrial en México con un equipo comprometido con la excelencia.',
  alternates: {
    canonical: '/nosotros',
  },
  openGraph: {
    title: 'Nosotros | MSP del Noreste',
    description: 'Historia, misión, visión y valores de MSP del Noreste. Conoce a nuestro equipo comprometido con la automatización industrial.',
    url: 'https://mspnoreste.com/nosotros',
    images: [
      {
        url: '/equipo.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipo MSP del Noreste',
      },
      {
        url: '/favicon.jpg',
        width: 512,
        height: 512,
        alt: 'MSP del Noreste Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros | MSP del Noreste',
    description: 'Historia, misión, visión y valores de MSP del Noreste. Conoce a nuestro equipo comprometido con la automatización industrial.',
    images: ['/equipo.jpg'],
  },
};

export default function NosotrosPage() {
  // Structured data para la página About
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "MSP del Noreste",
      "description": "Empresa líder en automatización industrial con más de 10 años de experiencia",
      "foundingDate": "2010",
      "url": "https://mspnoreste.com",
      "logo": "https://mspnoreste.com/favicon.jpg",
      "image": "https://mspnoreste.com/equipo.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Monterrey",
        "addressRegion": "Nuevo León", 
        "addressCountry": "MX"
      },
      "knowsAbout": [
        "Automatización Industrial",
        "Pneumática Industrial",
        "Sensores Industriales",
        "Conectividad Industrial"
      ],
      "award": "Distribuidor Autorizado de Marcas Líderes",
      "employee": {
        "@type": "OrganizationRole",
        "roleName": "Equipo Técnico Especializado"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
}