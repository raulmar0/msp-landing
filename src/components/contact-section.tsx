import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-12 md:py-24">
            <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-4">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Get in Touch
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Have a question or a project in mind? Fill out the form, and our team will get back to you shortly. We're here to help you with your industrial automation challenges.
                    </p>
                </div>
                <Card className="w-full max-w-lg mx-auto">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Contact Us</CardTitle>
                        <CardDescription>Fill in your details below.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
