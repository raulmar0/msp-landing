
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center md:absolute md:right-8">
          <Button asChild className="hidden bg-primary-foreground text-primary hover:bg-primary-foreground/90 md:flex">
            <Link href="#contact">Contáctanos</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-primary-foreground/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2">
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
              <div className="mt-6 flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild className="mt-4">
                  <Link href="#contact">Contáctanos</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
