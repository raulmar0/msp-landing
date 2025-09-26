import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Award, BookOpen, CheckCircle } from "lucide-react";

// Placeholder base64 optimizado para el equipo
const TEAM_IMAGE_PLACEHOLDER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAMABgDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYI/8QAKBAAAQMCBAQHAAAAAAAAAAAAAQIDAAQFBhEHEiEiE0FRcTFhcnOBkqP/xAAWAQEBAQAAAAAAAAAAAAAAAAAGBwX/xAAkEQABAwIFAwUAAAAAAAAAAAABAAIDBAURBhMhMUEyUWGRsf/aAAwDAQACEQMRAD8Az1hmL12yt7m2uNncpMhLgXnNUNKBGxP8j3HmNhcOp9CZttOYiLq6j5XAdEJ/auvfvqTYsP2G6W9h6qnKgvxkxHbJAD8nVOynXAKU9eo7eVTGg+WFY6tMObGq2TKdCz4JVpKFK6bTmNuKlhKXPJnvqvIU0s8sKPnCp8LyxC06pT9vDm5vYjdTiBb7eWH43xfyR8alPZWIIWj3j5wqfCpxQY6xjrJBfBHIP/K3/9k=";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            ¿Quiénes somos?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Somos proveedores de sistemas y servicios de automatización industrial de tecnología avanzada. 
              Enfocados en encontrar la solución perfecta para nuestros clientes, estamos comprometidos en cubrir 
              las necesidades técnicas y comerciales garantizando la entrega de los mejores resultados.
            </p>
            <p>
              Con 17 años de experiencia en la industria, ofrecemos soluciones en aplicaciones de control 
              y automatización de procesos, manejando tecnologías de visión, RFID, redes industriales, sensorica, 
              ergonomía y seguridad de máquinas.
            </p>
          </div>
        </header>

        {/* Imagen del equipo */}
        <figure className="mb-16">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-muted aspect-video">
              <Image
                src="/equipo.jpg"
                alt="Equipo MSP del Noreste - Especialistas en automatización industrial"
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                priority
                loading="eager"
                quality={85}
                placeholder="blur"
                blurDataURL={TEAM_IMAGE_PLACEHOLDER}
              />
            </div>
          </div>
        </figure>

        {/* Visión, Misión, Valores */}
        <section className="grid gap-8 md:grid-cols-3 mb-16">
          <article>
            <Card className="text-center h-full">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Visión</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Consolidarnos como los proveedores preferenciales de nuestros clientes.
                  </p>
                  <p>
                    Ser reconocidos a nivel nacional como líderes en el mercado de automatización y control 
                    gracias a nuestra experiencia y servicios de calidad.
                  </p>
                </div>
              </CardContent>
            </Card>
          </article>

          <article>
            <Card className="text-center h-full">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Misión</h3>
                <p className="text-muted-foreground">
                  Brindar soluciones integrales de automatización que añaden valor a los procesos industriales 
                  de nuestros clientes, promoviendo la sustentabilidad y cuidado del medio ambiente.
                </p>
              </CardContent>
            </Card>
          </article>

          <article>
            <Card className="text-center h-full">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Nos representan la <strong>Honestidad</strong>, <strong>Compromiso</strong>, <strong>Respeto</strong>, 
                  <strong> Determinación</strong>, <strong>Servicio</strong>, <strong>Responsabilidad</strong>.
                </p>
              </CardContent>
            </Card>
          </article>
        </section>

        {/* Historia y Política de Calidad */}
        <section className="grid gap-8 lg:grid-cols-2">
          <article>
            <Card className="h-full">
              <CardContent className="p-8">
                <header className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-primary">Nuestra Historia</h3>
                </header>
                <p className="text-muted-foreground leading-relaxed">
                  Nace en el año 2008 como comercializadora de productos de automatización en el área metropolitana 
                  de Monterrey. Reconocidos por la alta capacidad de nuestros ingenieros, hemos logrado otorgar 
                  soluciones satisfactorias a clientes en otros estados de la república, además de clientes en 
                  Estados Unidos.
                </p>
              </CardContent>
            </Card>
          </article>

          <article>
            <Card className="h-full">
              <CardContent className="p-8">
                <header className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-primary">Política de Calidad</h3>
                </header>
                <p className="text-muted-foreground leading-relaxed">
                  MSP está comprometido en ofrecer siempre productos y servicios que excederán los requerimientos 
                  y expectativas de nuestros clientes, enfocándonos activamente en mejorar la calidad de nuestro 
                  servicio mediante programas que permitan que nuestro personal otorgue lo mejor a nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </article>
        </section>
      </div>
    </section>
  );
}