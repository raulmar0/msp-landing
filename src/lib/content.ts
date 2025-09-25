import type { LucideIcon } from "lucide-react";
import { 
  GraduationCap, 
  Leaf, 
  Cpu, 
  Package, 
  HardHat, 
  Shield, 
  Wrench, 
  ShoppingCart 
} from "lucide-react";

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
    icon: GraduationCap,
    title: 'Capacitación',
    description: 'Ofrecer cursos y lecciones enfocándonos en la necesidad específica que el cliente requiera.',
  },
  {
    icon: Leaf,
    title: 'Ahorro de Energía',
    description: 'Contamos con personal capacitado para encontrar soluciones que promuevan un consumo más sustentable, reduciendo los consumos de las energías operativas.',
  },
  {
    icon: Cpu,
    title: 'Ingeniería de Automatización',
    description: 'MSP está orientado a apoyar a nuestros clientes mediante tres pilares básicos: especificación, diseño del sistema y soluciones llave en mano.',
  },
  {
    icon: Package,
    title: 'Control de inventarios',
    description: 'Ofrecemos optimización de inventarios para prevenir paros de línea, además de asesoría en la selección del equipo.',
  },
  {
    icon: HardHat,
    title: 'Ergonomía y Manejo de Materiales',
    description: 'Nuestras soluciones buscan el bienestar del operario para aumentar su productividad.',
  },
  {
    icon: Shield,
    title: 'Seguridad de Máquinas',
    description: 'Nuestros equipos buscan la seguridad del operario para reducir el riesgo de accidentes en planta.',
  },
  {
    icon: Wrench,
    title: 'Soporte Técnico',
    description: 'Nuestro equipo de ventas está conformado por ingenieros capacitados, que están disponibles 24/7 para consultas técnicas.',
  },
  {
    icon: ShoppingCart,
    title: 'Venta de Productos',
    description: 'Como distribuidores oficiales, ofrecemos los mejores precios del mercado acompañados de un servicio puntual.',
  },
];
