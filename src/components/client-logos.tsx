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
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  // Manejo mejorado de eventos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    setIsDragging(false);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchCurrentX = e.touches[0].clientX;
    const touchDiff = Math.abs(touchCurrentX - touchStartX);
    
    // Solo considerar como dragging si hay un movimiento significativo
    if (touchDiff > 10) {
      setIsDragging(true);
    }
  };
  
  const handleTouchEnd = () => {
    // Reanudar después de un timeout más largo si el usuario hizo scroll
    const timeout = isDragging ? 2000 : 1000;
    
    setTimeout(() => {
      setIsHovered(false);
      setIsDragging(false);
    }, timeout);
  };

  // Manejar scroll con rueda del mouse en desktop
  const handleWheel = (e: React.WheelEvent) => {
    if (isHovered) {
      // Permitir scroll horizontal natural
      e.currentTarget.scrollLeft += e.deltaY;
    }
  };

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
          className={`marquee-container relative ${
            isHovered ? 'overflow-x-auto cursor-grab active:cursor-grabbing' : 'overflow-hidden'
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE
            WebkitOverflowScrolling: 'touch', // Smooth scrolling en iOS
          }}
        >
          <div 
            className={`marquee-content flex ${
              isHovered ? 'animate-none' : 'animate-marquee'
            }`}
            style={{
              width: 'max-content',
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
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
        }
        
        /* Ocultar scrollbar en WebKit browsers */
        .marquee-container::-webkit-scrollbar {
          display: none;
        }
        
        .marquee-content {
          width: max-content;
          will-change: transform;
        }
        
        /* Mejorar el comportamiento táctil en mobile */
        @media (max-width: 768px) {
          .marquee-container {
            touch-action: pan-x;
          }
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
