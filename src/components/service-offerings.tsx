import { SERVICES } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceOfferings() {
  return (
    <section id="services" className="w-full bg-card py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Ofrecemos una gama completa de servicios para satisfacer todas sus necesidades de automatización industrial.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-full">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
