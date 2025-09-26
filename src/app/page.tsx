import type { Metadata } from 'next';
import BrandGrid from "@/components/brand-grid";
import BrandShowcaseCarousel from "@/components/brand-showcase-carousel";
import ClientLogos from "@/components/client-logos";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ServiceOfferings from "@/components/service-offerings";

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'MSP del Noreste es su proveedor de confianza en automatización industrial. Ofrecemos productos de calidad de SMC, BALLUFF, RITTAL, PHOENIX CONTACT, DELTA y PREVOST con soporte técnico especializado.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MSP del Noreste | Automatización Industrial México',
    description: 'Distribuidor autorizado de las mejores marcas en automatización industrial. Pneumática, sensores, conectividad y seguridad industrial.',
    url: 'https://mspnoreste.com',
  },
};

export default function Home() {
  // Structured data para servicios
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "MSP del Noreste"
    },
    "serviceType": "Automatización Industrial",
    "areaServed": "Mexico",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Automatización Industrial",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Capacitación Industrial",
            "description": "Cursos y lecciones enfocados en la necesidad específica que el cliente requiera"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Soporte Técnico",
            "description": "Asesoría técnica especializada y soporte post-venta"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Venta de Productos",
            "description": "Distribución de productos de automatización industrial de las mejores marcas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización de Procesos",
            "description": "Soluciones integrales de automatización para procesos industriales"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <BrandShowcaseCarousel />
          <ServiceOfferings />
          <BrandGrid />
          <ClientLogos />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
