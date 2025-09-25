import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export default function BrandGrid() {
  const brandLogos = PlaceHolderImages.filter(p => p.id.startsWith('brand-'));

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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {brandLogos.map((brand) => (
            <Card key={brand.id} className="p-4 flex justify-center items-center h-28 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary">
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
          ))}
        </div>
      </div>
    </section>
  );
}
