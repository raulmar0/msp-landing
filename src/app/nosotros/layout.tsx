import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros | MSP del Noreste - Automatización Industrial',
  description: 'Conoce más sobre MSP del Noreste: nuestra historia, visión, misión, valores y política de calidad. Más de 10 años brindando soluciones de automatización industrial.',
  keywords: ['MSP del Noreste', 'Historia', 'Nosotros', 'Automatización Industrial', 'Monterrey', 'Visión', 'Misión', 'Valores'],
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}