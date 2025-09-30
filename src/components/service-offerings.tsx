import { SERVICES } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceOfferings() {
  return (
    <section id="services" className="w-full bg-card py-12 md:py-24">
      <div className="container">
        <header className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Ofrecemos una gama completa de servicios para satisfacer todas sus necesidades de automatización industrial.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <article key={service.title} className="h-full">
              <Card className="h-full flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="p-0 flex-shrink-0">
                  <figure className="bg-primary/10 p-4 rounded-full">
                    <service.icon className="h-8 w-8 text-primary" />
                  </figure>
                </CardHeader>
                <CardContent className="p-0 mt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
