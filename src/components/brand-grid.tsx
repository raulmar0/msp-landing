"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export default function BrandGrid() {
  const brandLogos = PlaceHolderImages.filter(p => p.id.startsWith('brand-'));
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3500, stopOnInteraction: false })
  ]);

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
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[...brandLogos, ...brandLogos].map((brand, index) => (
               <div key={`${brand.id}-${index}`} className="flex-shrink-0 flex-grow-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 p-4">
                <Card className="p-4 flex justify-center items-center h-28 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary">
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.imageUrl}
                      alt={brand.description}
                      fill
                      style={{ objectFit: 'contain' }}
                      data-ai-hint={brand.imageHint}
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
