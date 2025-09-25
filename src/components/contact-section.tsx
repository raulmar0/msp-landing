import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-12 md:py-24">
            <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-4">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Ponte en Contacto
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        ¿Tienes una pregunta o un proyecto en mente? Completa el formulario y nuestro equipo se comunicará contigo en breve. Estamos aquí para ayudarte con tus desafíos de automatización industrial.
                    </p>
                </div>
                <Card className="w-full max-w-lg mx-auto">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Contáctanos</CardTitle>
                        <CardDescription>Completa tus datos a continuación.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
