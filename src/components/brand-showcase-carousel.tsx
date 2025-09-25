"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function BrandShowcaseCarousel() {
  const promoImages = PlaceHolderImages.filter(p => p.id.startsWith('promo-'));

  return (
    <section className="w-full pt-4 pb-12 md:pt-8 md:pb-20">
      <div className="container">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {promoImages.map((image) => (
              <CarouselItem key={image.id}>
                <div className="relative h-[300px] md:h-[500px] w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="rounded-xl object-cover"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                     <h1 className="font-headline text-3xl md:text-5xl font-bold text-white shadow-2xl">
                      Excellence in Industrial Automation
                    </h1>
                    <p className="mt-2 max-w-lg text-base md:text-lg text-white/90">
                      Your trusted partner for top-tier automation products and services.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 border-none" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 border-none" />
        </Carousel>
      </div>
    </section>
  );
}
