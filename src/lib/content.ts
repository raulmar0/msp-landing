import type { LucideIcon } from "lucide-react";
import { Cpu, GraduationCap, RefreshCw, ShieldCheck, ShoppingCart, Wrench } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '#services', label: 'Servicios' },
  { href: '#brands', label: 'Marcas' },
  { href: '#clients', label: 'Clientes' },
  { href: '#contact', label: 'Contacto' },
];

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: ShoppingCart,
    title: 'Venta de Productos',
    description: 'Ofrecemos una amplia gama de productos de automatización industrial de alta calidad de marcas líderes.',
  },
  {
    icon: Wrench,
    title: 'Soporte Técnico',
    description: 'Nuestro equipo de expertos proporciona soporte técnico confiable para garantizar que sus operaciones funcionen sin problemas.',
  },
  {
    icon: GraduationCap,
    title: 'Capacitación Profesional',
    description: 'Capacite a su equipo con nuestros programas de formación especializados en tecnologías de automatización industrial.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía de Calidad',
    description: 'Comprometidos a entregar solo lo mejor, garantizamos la calidad y confiabilidad de nuestros productos.',
  },
  {
    icon: Cpu,
    title: 'Proyectos de Automatización',
    description: 'Desde el diseño hasta la implementación, gestionamos proyectos completos de automatización adaptados a sus necesidades.',
  },
  {
    icon: RefreshCw,
    title: 'Reparación y Mantenimiento',
    description: 'Prolongue la vida útil de su equipo con nuestros servicios profesionales de reparación y mantenimiento.',
  },
];
