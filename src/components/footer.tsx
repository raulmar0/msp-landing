import Link from "next/link";
import Image from "next/image";
import { Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-primary">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/msp-blanco.png"
                alt="MSP del Noreste Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
                quality={100}
              />
            </div>
            <p className="text-sm text-primary-foreground/80">
              Distribuidores oficiales de las mejores marcas en automatización industrial
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#brands" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Marcas
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <a 
                  href="tel:+528114312531"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  (81) 1431-2531
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <a 
                  href="tel:+528113340800"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  (81) 1334-0800
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <a 
                  href="mailto:info@mspdelnoreste.com.mx"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  info@mspdelnoreste.com.mx
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary-foreground/80 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=1487+Laurel+505,+Bosques+Real,+Cd+Apodaca,+N.L.+66605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <p>1487 Laurel #505, Bosques Real</p>
                  <p>Cd Apodaca, N.L. 66605</p>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-primary-foreground/80">Venta de productos</span>
              </li>
              <li>
                <span className="text-sm text-primary-foreground/80">Soporte técnico</span>
              </li>
              <li>
                <span className="text-sm text-primary-foreground/80">Capacitación</span>
              </li>
              <li>
                <span className="text-sm text-primary-foreground/80">Automatización</span>
              </li>
              <li>
                <span className="text-sm text-primary-foreground/80">Seguridad industrial</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-sm text-primary-foreground/80">
              © 2025 MSP Del Noreste. Todos los derechos reservados.
            </span>
            <span className="text-xs text-primary-foreground/60">
              Sitio web creado por{" "}
              <Link 
                href="https://solvic.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground underline transition-colors"
              >
                solvic.tech
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary-foreground/20">
              <Link 
                href="https://www.linkedin.com/company/msp-del-noreste" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary-foreground/20">
              <Link href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
