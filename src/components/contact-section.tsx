import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Ponte en Contacto
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
                        ¿Tienes una pregunta o un proyecto en mente? Estamos aquí para ayudarte con tus desafíos de automatización industrial.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Información de contacto y mapa */}
                    <div className="space-y-8">
                        {/* Información de contacto */}
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1">
                            {/* Teléfonos */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Teléfonos</h3>
                                            <div className="space-y-1 text-muted-foreground">
                                                <p>(81) 1431-2531</p>
                                                <p>(81) 1334-0800</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Correo electrónico */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Correo Electrónico</h3>
                                            <a 
                                                href="mailto:info@mspdelnoreste.com.mx" 
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                info@mspdelnoreste.com.mx
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Dirección */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                                            <p className="text-muted-foreground">
                                                1487 Laurel #505, Bosques Real,<br />
                                                Cd Apodaca, N.L. 66605
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Mapa de Google */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lg mb-4">Ubicación</h3>
                                <div className="relative w-full h-80 overflow-hidden rounded-lg">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4345.719947840351!2d-100.24556048842787!3d25.784212507578992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eca35e54e71f%3A0x4753eccecf403218!2sMSP%20del%20Noreste!5e1!3m2!1ses!2smx!4v1758841002427!5m2!1ses!2smx" 
                                        width="100%" 
                                        height="100%" 
                                        style={{border: 0}} 
                                        allowFullScreen={true} 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Formulario de contacto */}
                    <div>
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
                </div>
            </div>
        </section>
    )
}
