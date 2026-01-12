export interface BrandCarouselItem {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  imageHint?: string;
}

export const brandCarouselData: BrandCarouselItem[] = [
  {
    id: "marca-1",
    name: "Balluff",
    imageUrl: "/logos-marcas/Balluff_Logo.svg.png",
    description: "Sensores y soluciones industriales Balluff.",
    imageHint: "logo Balluff",
  },
  {
    id: "marca-2",
    name: "Delta Electronics",
    imageUrl: "/logos-marcas/DELTA_Electronics_Logo.png",
    description: "test.",
    imageHint: "logo Delta Electronics",
  },
  {
    id: "marca-3",
    name: "Cormac",
    imageUrl: "/logos-marcas/Logo-Cormac.png",
    description: "Soluciones de automatización Cormac.",
    imageHint: "logo Cormac",
  },
  {
    id: "marca-4",
    name: "SMC",
    imageUrl: "/logos-marcas/Logo-smc.png",
    description: "Neumática y automatización SMC.",
    imageHint: "logo SMC",
  },
  {
    id: "marca-5",
    name: "Phoenix Contact",
    imageUrl: "/logos-marcas/Phoenix_Contact_Logo.svg",
    description: "Tecnología de conexión Phoenix Contact.",
    imageHint: "logo Phoenix Contact",
  },
  {
    id: "marca-6",
    name: "Prevost",
    imageUrl: "/logos-marcas/Prevost-Logo.png",
    description: "Soluciones de aire comprimido Prevost.",
    imageHint: "logo Prevost",
  },
  {
    id: "marca-7",
    name: "Rittal",
    imageUrl: "/logos-marcas/Rittal-Logo_vertical.png",
    description: "Gabinetes y sistemas Rittal.",
    imageHint: "logo Rittal",
  },
  {
    id: "marca-8",
    name: "Marca Ejemplo",
    imageUrl: "/logos-marcas/Balluff_Logo.svg.png",
    description: "Descripción de la marca ejemplo.",
    imageHint: "logo ejemplo",
  },
];
