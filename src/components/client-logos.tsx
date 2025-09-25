"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ClientLogos() {
  const clientLogos = PlaceHolderImages.filter(p => p.id.startsWith('client-'));
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);
  
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
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="flex-shrink-0 flex-grow-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 p-4">
                <div className="relative h-20 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
                  <Image
                    src={logo.imageUrl}
                    alt={logo.description}
                    fill
                    style={{ objectFit: 'contain' }}
                    data-ai-hint={logo.imageHint}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
