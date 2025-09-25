"use client";

import React, { useState } from "react";
import Image from "next/image";

// Logos reales de marcas asociadas
const brandLogos = [
  {
    id: "balluff",
    name: "Balluff",
    imageUrl: "/logos-marcas/Balluff_Logo.svg.png",
    alt: "Balluff - Sensor Technology"
  },
  {
    id: "delta-electronics", 
    name: "Delta Electronics",
    imageUrl: "/logos-marcas/DELTA_Electronics_Logo.png",
    alt: "Delta Electronics - Power Solutions"
  },
  {
    id: "cormac",
    name: "Cormac",
    imageUrl: "/logos-marcas/Logo-Cormac.png", 
    alt: "Cormac - Industrial Solutions"
  },
  {
    id: "smc",
    name: "SMC",
    imageUrl: "/logos-marcas/Logo-smc.png",
    alt: "SMC - Pneumatic Solutions"
  },
  {
    id: "phoenix-contact",
    name: "Phoenix Contact", 
    imageUrl: "/logos-marcas/Phoenix_Contact_Logo.svg",
    alt: "Phoenix Contact - Industrial Automation"
  },
  {
    id: "prevost",
    name: "Prevost",
    imageUrl: "/logos-marcas/Prevost-Logo.png",
    alt: "Prevost - Compressed Air Solutions"
  },
  {
    id: "rittal",
    name: "Rittal",
    imageUrl: "/logos-marcas/Rittal-Logo_vertical.png", 
    alt: "Rittal - IT Infrastructure"
  }
];

export default function BrandGrid() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="brands" className="w-full py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestras Marcas Asociadas
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Nos asociamos con las marcas de tecnología líderes en el mundo para ofrecerle las mejores soluciones.
          </p>
        </div>
        
        {/* Marquesina híbrida con scroll manual */}
        <div 
          className={`marquee-container overflow-hidden relative ${
            isHovered ? 'overflow-x-auto cursor-grab active:cursor-grabbing' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE
          }}
        >
          <div 
            className={`marquee-content flex ${
              isHovered ? 'animate-none' : 'animate-marquee'
            }`}
            style={{
              width: isHovered ? 'max-content' : 'max-content',
            }}
          >
            {/* Triple repetición para scroll manual suave */}
            {Array.from({ length: 3 }, (_, seriesIndex) =>
              brandLogos.map((brand, index) => (
                <div 
                  key={`${brand.id}-${seriesIndex}-${index}`} 
                  className="flex-shrink-0 w-48 h-24 flex justify-center items-center mx-6 select-none"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.imageUrl}
                      alt={brand.alt}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="transition-transform duration-300 hover:scale-110"
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
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
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
