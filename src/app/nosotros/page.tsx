import type { Metadata } from 'next';
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: 'Nosotros | MSP del Noreste',
  description: 'Conoce más sobre MSP del Noreste, nuestra historia, misión, visión y valores en automatización industrial.',
  openGraph: {
    title: 'Nosotros | MSP del Noreste',
    description: 'Conoce más sobre MSP del Noreste, nuestra historia, misión, visión y valores en automatización industrial.',
    images: [
      {
        url: '/favicon.jpg',
        width: 512,
        height: 512,
        alt: 'MSP del Noreste - Nuestro Equipo',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nosotros | MSP del Noreste',
    description: 'Conoce más sobre MSP del Noreste, nuestra historia, misión, visión y valores en automatización industrial.',
    images: ['/favicon.jpg'],
  },
};

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}