"use client";

import React, { useState } from "react";
import Image from "next/image";

// Logos reales de clientes
const clientLogos = [
  {
    id: "cemex",
    name: "Cemex",
    imageUrl: "/logos-clientes/Cemex.png",
    alt: "Cemex - Construcción y Materiales"
  },
  {
    id: "acuity-brands",
    name: "Acuity Brands", 
    imageUrl: "/logos-clientes/acuitybrands.png",
    alt: "Acuity Brands - Iluminación y Tecnología"
  },
  {
    id: "dall",
    name: "Dall",
    imageUrl: "/logos-clientes/daltile-cuadrado.webp",
    alt: "Dall - Industria Manufacturera"
  },
  {
    id: "gen",
    name: "GEN",
    imageUrl: "/logos-clientes/gen.png",
    alt: "GEN - Tecnología Industrial"
  },
  {
    id: "kellogs",
    name: "Kellogg's",
    imageUrl: "/logos-clientes/kellogs2_.png",
    alt: "Kellogg's - Industria Alimentaria"
  },
  {
    id: "mars",
    name: "Mars",
    imageUrl: "/logos-clientes/mars.png",
    alt: "Mars - Industria Alimentaria"
  },
  {
    id: "metalsa",
    name: "Metalsa",
    imageUrl: "/logos-clientes/metalsa2.png",
    alt: "Metalsa - Industria Automotriz"
  },
  {
    id: "panasonic",
    name: "Panasonic",
    imageUrl: "/logos-clientes/panasonic.png",
    alt: "Panasonic - Tecnología y Electrónicos"
  },
  {
    id: "sigma",
    name: "Sigma",
    imageUrl: "/logos-clientes/sigma.png",
    alt: "Sigma - Industria Alimentaria"
  },
  {
    id: "uanl",
    name: "UANL",
    imageUrl: "/logos-clientes/uanl.png",
    alt: "Universidad Autónoma de Nuevo León"
  },
  {
    id: "cliente-3",
    name: "Cliente Industrial",
    imageUrl: "/logos-clientes/3.png",
    alt: "Cliente Industrial"
  },
  {
    id: "intentonidec",
    name: "Cliente Tecnológico",
    imageUrl: "/logos-clientes/intentonidec2.png",
    alt: "Cliente Tecnológico"
  }
];

export default function ClientLogos() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="clients" className="w-full bg-card py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Con la Confianza de Líderes de la Industria
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Nuestro compromiso con la calidad y el servicio nos ha ganado la confianza de empresas de renombre.
          </p>
        </div>
        
        {/* Marquesina híbrida de clientes */}
        <div 
          className={`marquee-container overflow-hidden relative ${
            (isHovered && !isMobile) || isMobile ? 'overflow-x-auto cursor-grab active:cursor-grabbing' : ''
          }`}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE
          }}
        >
          <div 
            className={`marquee-content flex ${
              ((isHovered && !isMobile) || isMobile) ? 'animate-none' : 'animate-marquee'
            }`}
            style={{
              width: ((isHovered && !isMobile) || isMobile) ? 'max-content' : 'max-content',
            }}
          >
            {/* Repeticiones múltiples para contenido infinito */}
            {Array.from({ length: 5 }, (_, seriesIndex) =>
              clientLogos.map((client, index) => (
                <div 
                  key={`${client.id}-${seriesIndex}-${index}`} 
                  className="flex-shrink-0 w-64 h-36 flex justify-center items-center mx-2 select-none"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={client.imageUrl}
                      alt={client.alt}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="transition-all duration-300 hover:scale-105"
                      draggable={false}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          max-width: 100%;
        }
        
        /* Ocultar scrollbar en WebKit browsers */
        .marquee-container::-webkit-scrollbar {
          display: none;
        }
        
        .marquee-content {
          width: max-content;
          will-change: transform;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 5));
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .animate-none {
          animation: none !important;
        }
        
        /* Transición suave entre estados */
        .marquee-content {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
