
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Store } from "lucide-react";

import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 96; // 6rem = 96px
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Cerrar el menú mobile si está abierto
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-primary transition-all duration-300",
        isScrolled ? "border-b shadow-lg" : ""
      )}
    >
      <div className="container flex h-24 items-center justify-between md:justify-center">
        <Link href="/" className="flex items-center space-x-2 md:absolute md:left-8">
          <Image
            src="/msp-blanco.png"
            alt="MSP del Noreste Logo"
            width={160}
            height={60}
            className="h-14 w-auto"
            priority
            quality={100}
          />
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              onClick={(e) => handleAnchorClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center md:absolute md:right-8">
          <Button asChild className="hidden bg-primary-foreground text-primary hover:bg-primary-foreground/90 md:flex">
            <Link href="#contact" className="flex items-center gap-2" onClick={(e) => handleAnchorClick(e, "#contact")}>
              <Store className="h-4 w-4" />
              Tienda en línea
            </Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-primary-foreground hover:bg-primary-foreground/20 !h-10 !w-10 [&_svg]:!size-10"
              >
                <Menu className="h-10 w-10" />
                <span className="sr-only">Abrir Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className={cn(
                "bg-primary text-primary-foreground",
                "[&>button]:text-primary-foreground [&>button]:hover:bg-primary-foreground/20 [&>button]:!top-8 [&>button]:!right-2 [&>button]:!outline-none [&>button]:!ring-0 [&>button]:focus:!ring-0 [&>button]:focus:!outline-none [&>button]:!border-0 [&>button]:focus-visible:!ring-0 [&>button]:focus-visible:!outline-none [&>button]:!h-10 [&>button]:!w-10 [&>button_svg]:!h-6 [&>button_svg]:!w-6"
              )}
            >
              <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
              <div className="flex items-center justify-between mb-6 pt-4">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/msp-blanco.png"
                    alt="MSP del Noreste Logo"
                    width={160}
                    height={60}
                    className="h-14 w-auto"
                    priority
                    quality={100}
                  />
                </Link>
              </div>
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    onClick={(e) => handleAnchorClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="#contact" className="flex items-center gap-2" onClick={(e) => handleAnchorClick(e, "#contact")}>
                    <Store className="h-4 w-4" />
                    Tienda en línea
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
