import type { LucideIcon } from "lucide-react";
import { Cpu, GraduationCap, RefreshCw, ShieldCheck, ShoppingCart, Wrench } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '#services', label: 'Services' },
  { href: '#brands', label: 'Brands' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: ShoppingCart,
    title: 'Product Sales',
    description: 'We offer a wide range of high-quality industrial automation products from leading brands.',
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    description: 'Our expert team provides reliable technical support to ensure your operations run smoothly.',
  },
  {
    icon: GraduationCap,
    title: 'Professional Training',
    description: 'Empower your team with our specialized training programs on industrial automation technologies.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Committed to delivering only the best, we guarantee the quality and reliability of our products.',
  },
  {
    icon: Cpu,
    title: 'Automation Projects',
    description: 'From design to implementation, we manage complete automation projects tailored to your needs.',
  },
  {
    icon: RefreshCw,
    title: 'Repair & Maintenance',
    description: 'Extend the life of your equipment with our professional repair and maintenance services.',
  },
];
